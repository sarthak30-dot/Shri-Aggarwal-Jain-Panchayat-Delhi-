import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { temples } from '../data/temples';

// The 9 temples inside/at the edge of Shahjahanabad's walls form a genuine
// walkable trail. The remaining 3 (Raja Bazaar, Sabzi Mandi, Patparganj) are
// real Delhi temples under the same Panchayat but sit kilometres apart in
// different quarters — shown as separate pins, honestly not on the trail line.
const TRAIL_ORDER = [
  'mori-gate-mandir',
  'lal-mandir',
  'kucha-seth-bada-mandir',
  'kucha-seth-chhota-mandir',
  'naya-mandir',
  'panchayati-mandir',
  'meru-jain-mandir',
  'sitaram-bazaar-mandir',
  'delhi-gate-mandir',
];

const byslug = Object.fromEntries(temples.map((t) => [t.slug, t]));
const trailTemples = TRAIL_ORDER.map((slug) => byslug[slug]).filter(Boolean);
const beyondTemples = temples.filter((t) => !TRAIL_ORDER.includes(t.slug));

// Curated short labels for the compact itinerary chips — the full formal
// names ("Shree Agrawal Digambar Jain Panchayati Mandir") don't fit, and a
// regex strip is too fragile across the different naming patterns in use.
const SHORT_NAME = {
  'mori-gate-mandir': 'Mori Gate Mandir',
  'lal-mandir': 'Lal Mandir',
  'kucha-seth-bada-mandir': 'Bada Mandir',
  'kucha-seth-chhota-mandir': 'Chhota Mandir',
  'naya-mandir': 'Naya Mandir',
  'panchayati-mandir': 'Panchayati Mandir',
  'meru-jain-mandir': 'Meru Mandir',
  'sitaram-bazaar-mandir': 'Sitaram Bazaar Mandir',
  'delhi-gate-mandir': 'Delhi Gate Mandir',
  'raja-bazaar-mandir': 'Raja Bazaar Mandir',
  'sabzi-mandi-baraf-khana-mandir': 'Sabzi Mandi Mandir',
  'patparganj-mandir': 'Patparganj Mandir',
};

// ── Distance & walk-time between consecutive trail stops ──
// Straight-line (haversine) distance, then scaled up by LANE_FACTOR: Old
// Delhi's lanes are narrow and winding, not straight lines, so an as-the-
// crow-flies figure understates real walking distance. 1.3x is a standard
// rule-of-thumb correction for dense historic street grids like this one —
// a real GPS-tracked walk would sharpen this, but it's honest as an estimate.
const WALK_SPEED_KMH = 5;   // casual sightseeing pace, not a power-walk
const LANE_FACTOR = 1.3;

function haversineKm(a, b) {
  const R = 6371;
  const dLat = (b.lat - a.lat) * Math.PI / 180;
  const dLng = (b.lng - a.lng) * Math.PI / 180;
  const lat1 = a.lat * Math.PI / 180;
  const lat2 = b.lat * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

const formatDist = (km) => (km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`);
const formatTime = (min) => `${Math.max(1, Math.round(min))} min`;

// One entry per hop between consecutive trail stops.
const legs = trailTemples.slice(1).map((to, i) => {
  const from = trailTemples[i];
  const km = haversineKm(from, to) * LANE_FACTOR;
  const minutes = (km / WALK_SPEED_KMH) * 60;
  return { from, to, km, minutes };
});
const totalKm = legs.reduce((sum, l) => sum + l.km, 0);
const totalMin = legs.reduce((sum, l) => sum + l.minutes, 0);

// The 3 "beyond the walls" temples aren't a walkable sequence — they're
// scattered across Delhi, each its own separate trip. Rather than leave them
// as bare pins with no distance context at all, show a straight-line figure
// from Lal Mandir (the trail's most recognisable anchor, "opposite Red
// Fort") — clearly labelled as as-the-crow-flies, not a driving route.
const anchor = byslug['lal-mandir'];
const beyondDistances = anchor
  ? beyondTemples.map((t) => ({ temple: t, km: haversineKm(anchor, t) }))
  : [];

// Numbered gold pin for trail stops, plain charcoal pin for the "beyond" temples.
const pinIcon = (label, { accent = false } = {}) =>
  L.divIcon({
    className: '',
    html: `
      <div class="trail-pin ${accent ? 'trail-pin--accent' : ''}">
        <span>${label}</span>
      </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28],
  });

export default function TempleTrailMap() {
  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mapRef.current || !mapElRef.current) return;

    const map = L.map(mapElRef.current, {
      scrollWheelZoom: false,
      zoomControl: true,
    });
    mapRef.current = map;

    // Street plan (default) and satellite imagery as swappable base layers —
    // satellite makes it far easier to confirm a pin actually sits on a real
    // rooftop rather than a neighbouring lane. Esri's keyless imagery + a
    // labels overlay so street/place names still read on the photo.
    const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    });
    const satelliteLayer = L.layerGroup([
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics',
        maxZoom: 19,
      }),
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19,
      }),
    ]);
    streetLayer.addTo(map);

    const BasemapToggle = L.Control.extend({
      options: { position: 'topright' },
      onAdd() {
        const el = L.DomUtil.create('div', 'trail-basemap-toggle');
        const makeBtn = (mode, label, active) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = active ? 'trail-basemap-btn active' : 'trail-basemap-btn';
          btn.dataset.mode = mode;
          btn.textContent = label;
          return btn;
        };
        const streetBtn = makeBtn('street', 'Map', true);
        const satelliteBtn = makeBtn('satellite', 'Satellite', false);
        el.appendChild(streetBtn);
        el.appendChild(satelliteBtn);
        L.DomEvent.disableClickPropagation(el);
        [streetBtn, satelliteBtn].forEach((btn) => {
          btn.addEventListener('click', () => {
            if (btn.classList.contains('active')) return;
            [streetBtn, satelliteBtn].forEach((b) => b.classList.toggle('active', b === btn));
            if (btn.dataset.mode === 'satellite') {
              map.removeLayer(streetLayer);
              satelliteLayer.addTo(map);
            } else {
              map.removeLayer(satelliteLayer);
              streetLayer.addTo(map);
            }
          });
        });
        return el;
      },
    });
    new BasemapToggle().addTo(map);

    const bounds = [];
    const popupHtml = (t, nextLeg) => `
      <div class="trail-popup">
        <span class="trail-popup__est">${t.established}</span>
        <h4>${t.name}</h4>
        <p>${t.location}</p>
        ${nextLeg ? `
          <p class="trail-popup__next">
            Next: <strong>${nextLeg.to.name}</strong><br />
            ${formatDist(nextLeg.km)} · ${formatTime(nextLeg.minutes)} walk
          </p>` : ''}
        <button class="trail-popup__link" data-slug="${t.slug}">View Temple →</button>
      </div>`;

    // Walking-trail stops, numbered in visiting order, joined by a dashed line.
    trailTemples.forEach((t, i) => {
      const marker = L.marker([t.lat, t.lng], { icon: pinIcon(i + 1, { accent: true }) })
        .addTo(map)
        .bindPopup(popupHtml(t, legs[i]));
      marker.on('popupopen', (e) => {
        const btn = e.popup.getElement().querySelector('.trail-popup__link');
        if (btn) btn.onclick = () => navigate(`/temples/${t.slug}`);
      });
      bounds.push([t.lat, t.lng]);
    });

    L.polyline(trailTemples.map((t) => [t.lat, t.lng]), {
      color: '#d97706',
      weight: 3,
      opacity: 0.85,
      dashArray: '2 10',
      lineCap: 'round',
    }).addTo(map);

    // Temples beyond the walled city — same trust, not on the walking line.
    beyondTemples.forEach((t) => {
      const marker = L.marker([t.lat, t.lng], { icon: pinIcon('✦') })
        .addTo(map)
        .bindPopup(popupHtml(t, null));
      marker.on('popupopen', (e) => {
        const btn = e.popup.getElement().querySelector('.trail-popup__link');
        if (btn) btn.onclick = () => navigate(`/temples/${t.slug}`);
      });
      bounds.push([t.lat, t.lng]);
    });

    // Leaflet can compute a bogus zoom if fitBounds runs before the container
    // has its final CSS size (a 0×0 box on the first paint frame). Force a
    // resize recalculation first so the fit uses the real, laid-out size.
    // Guarded by the ref check because React 18 StrictMode runs this effect's
    // cleanup once in dev before the "real" mount — without the guard, a
    // rAF callback from the throwaway first mount can fire after that map
    // was already removed and operate on dead Leaflet internals.
    requestAnimationFrame(() => {
      if (mapRef.current !== map) return;
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [36, 36] });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [navigate]);

  return (
    <div className="trail-map-wrap">
      <div ref={mapElRef} className="trail-map" role="img" aria-label="Map of all 12 Panchayat temples — the 9-temple walking trail through Old Delhi, plus 3 temples elsewhere in Delhi. Toggle between map and satellite view in the top-right corner." />

      {/* Itinerary strip — real distance & walk-time for every hop, plus a
          running total. Scrolls horizontally on narrow screens rather than
          wrapping, so the left-to-right route order always stays readable. */}
      <div className="trail-itinerary">
        <div className="trail-itinerary__row">
          {trailTemples.map((t, i) => (
            <React.Fragment key={t.slug}>
              <div className="trail-itinerary__stop">
                <span className="trail-pin trail-pin--accent trail-pin--sm"><span>{i + 1}</span></span>
                <span className="trail-itinerary__name">{SHORT_NAME[t.slug] || t.name}</span>
              </div>
              {legs[i] && (
                <div className="trail-itinerary__leg">
                  <span>{formatDist(legs[i].km)}</span>
                  <span className="trail-itinerary__dot">·</span>
                  <span>{formatTime(legs[i].minutes)}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="trail-itinerary__total">
          Full trail: <strong>{formatDist(totalKm)}</strong> · <strong>{formatTime(totalMin)}</strong> of walking
          <span className="trail-itinerary__caveat"> (estimated from mapped locations, not a GPS-tracked route — excludes time spent inside each temple)</span>
        </p>
      </div>

      {/* The 3 outlying temples aren't a walkable sequence, so they get a
          distance reference rather than a leg — straight-line from Lal
          Mandir, clearly not a driving route. */}
      {beyondDistances.length > 0 && (
        <div className="trail-beyond">
          <span className="trail-beyond__label">Also under this Panchayat, elsewhere in Delhi:</span>
          <ul className="trail-beyond__list">
            {beyondDistances.map(({ temple, km }) => (
              <li key={temple.slug}>
                <span className="trail-pin trail-pin--sm"><span>✦</span></span>
                {SHORT_NAME[temple.slug] || temple.name}
                <span className="trail-beyond__km">{formatDist(km)} from Lal Mandir, as the crow flies</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="trail-legend">
        <span className="trail-legend__item">
          <span className="trail-pin trail-pin--accent trail-pin--sm"><span>1</span></span>
          The walking trail — 9 temples inside the walled city, in visiting order
        </span>
        <span className="trail-legend__item">
          <span className="trail-pin trail-pin--sm"><span>✦</span></span>
          Beyond the walls — 3 more Panchayat temples elsewhere in Delhi
        </span>
      </div>
    </div>
  );
}
