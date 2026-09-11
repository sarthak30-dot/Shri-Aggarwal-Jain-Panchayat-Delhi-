import React from 'react';
import { Link } from 'react-router-dom';
import { templeHistoryMap } from '../data/templeHistory';

// Map history IDs → display metadata for cards
const HISTORY_CARDS = [
  {
    slug: 'lal-mandir',
    displayName: 'Shri Digambar Jain Lal Mandir Ji',
    tagline: 'Oldest active Jain temple in Delhi — founded in a Mughal army camp, 1656 CE.',
    badge: '1656 CE',
    accent: '#C0392B',
  },
  {
    slug: 'naya-mandir',
    displayName: 'Shri Digambar Jain Naya Mandir Ji',
    tagline: "Delhi's first temple with a formal Shikhara — pietra-dura inlay rivalling the Taj Mahal.",
    badge: '1807 CE',
    accent: '#1A6B3A',
  },
  {
    slug: 'kucha-seth-bada-mandir',
    displayName: 'Shri Digambar Jain Bada Mandir Ji',
    tagline: 'Born from a royal challenge — the treasurer\'s six-year vow, consecrated 1834 CE.',
    badge: '1834 CE',
    accent: '#7B5B2E',
  },
  {
    slug: 'kucha-seth-chhota-mandir',
    displayName: 'Shri Digambar Jain Chhota Mandir Ji',
    tagline: 'Built from a devotee\'s dream — Indraj sold his shop to rescue an idol, 1846 CE.',
    badge: '1846 CE',
    accent: '#2C5F8A',
  },
  {
    slug: 'panchayati-mandir',
    displayName: 'Panchayati Mandir Ji',
    tagline: 'Sanctuary for Multan Partition relics and rare Navgrah Tirthankara planetary altars.',
    badge: 'Shahjahanabad Era',
    accent: '#6B2C8A',
  },
];

const TIMELINE_EVENTS = [
  { year: '1491 CE', label: 'Central idols of Lal Mandir consecrated (VS 1548)' },
  { year: '1656 CE', label: 'Lashkari Mandir founded by soldier Ramchand' },
  { year: '1658 CE', label: "Aurangzeb's drum-miracle — imperial protection granted" },
  { year: '1807 CE', label: 'Naya Mandir erected — Delhi\'s first Shikhara temple' },
  { year: '1828 CE', label: "Ishwari Prasad's vow — Bada Mandir construction begins" },
  { year: '1834 CE', label: 'Bada Mandir consecrated after six years of labour' },
  { year: '1840 CE', label: "Indraj's dream — Chhota Mandir construction begins" },
  { year: '1878 CE', label: 'Lal Mandir grand reconstruction by Lala Parasdas (₹8 lakh)' },
  { year: '1947 CE', label: 'Multan Tirthankara icons evacuated, consecrated in Delhi' },
];

export default function HistoryPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '90px' }}>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, hsl(var(--charcoal)) 0%, #2C1810 100%)', padding: '5rem 0 4rem', borderBottom: '3px solid hsl(var(--saffron))' }}>
        <div className="container-heritage">
          <div style={{ maxWidth: '720px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '1rem' }}>
              Shahjahanabad Archival Record
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'hsl(var(--ivory))', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Historic Jain Temples of Old Delhi
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2rem' }}>
              For over three centuries, the Digambar Jain community of Shahjahanabad built, defended, and sustained
              sanctuaries within the imperial city of the Mughals. These are their stories — translated from the
              archival manuscript of the Shri Digambar Jain Panchayat, Old Delhi.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {[
                { n: '5', label: 'Documented Temples' },
                { n: '370+', label: 'Years of History' },
                { n: '1491 CE', label: 'Earliest Record' },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'hsl(var(--saffron))', lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Temple Chronicle Cards */}
      <div style={{ backgroundColor: '#FAF5EF', padding: '5rem 0' }}>
        <div className="container-heritage">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'hsl(var(--charcoal))', marginBottom: '0.5rem' }}>
            Temple Chronicles
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#888', marginBottom: '3rem' }}>
            Select a temple to read its full archival record with timeline, architectural highlights, and prominent figures.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {HISTORY_CARDS.map((card, i) => {
              const h = templeHistoryMap[card.slug];
              if (!h) return null;
              return (
                <Link
                  key={card.slug}
                  to={`/temples/${card.slug}#history`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="heritage-card"
                    style={{ padding: '2rem 2.25rem', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem 2rem', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = ''; }}
                  >
                    {/* Number */}
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: 'rgba(184,134,11,0.08)', border: '1.5px solid rgba(184,134,11,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#B8860B', fontWeight: 700 }}>{i + 1}</span>
                    </div>

                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--charcoal))' }}>{card.displayName}</h3>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8860B', backgroundColor: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '4px', padding: '0.15rem 0.5rem' }}>
                          {card.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, marginBottom: '0.75rem' }}>{card.tagline}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {h.historicalEvents.slice(0, 3).map((ev) => (
                          <span key={ev.title} style={{ fontSize: '0.72rem', color: '#888', backgroundColor: '#F5F0E8', borderRadius: '3px', padding: '0.15rem 0.5rem' }}>
                            {ev.title.length > 38 ? ev.title.slice(0, 38) + '…' : ev.title}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Condensed Timeline */}
      <div style={{ backgroundColor: 'hsl(var(--charcoal))', padding: '5rem 0' }}>
        <div className="container-heritage">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'hsl(var(--ivory))', marginBottom: '0.5rem' }}>
            Chronological Timeline
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', marginBottom: '3rem' }}>
            Key moments in the Shahjahanabad Jain heritage, 1491–1947
          </p>

          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            <div style={{ position: 'absolute', left: '10px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, hsl(var(--saffron)), rgba(255,127,36,0.1))' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {TIMELINE_EVENTS.map((ev, i) => (
                <div key={i} style={{ position: 'relative', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ position: 'absolute', left: '-2.5rem', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: i === 0 ? 'hsl(var(--saffron))' : 'hsl(var(--charcoal))', border: '2px solid hsl(var(--saffron))' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'hsl(var(--saffron))', whiteSpace: 'nowrap', minWidth: '76px', paddingTop: '2px' }}>{ev.year}</span>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>{ev.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: '#FAF5EF', padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(184,134,11,0.15)' }}>
        <div className="container-heritage">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'hsl(var(--charcoal))', marginBottom: '0.75rem' }}>
            Visit All 12 Temples
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1.75rem' }}>
            Explore the complete directory of temples under the Shri Digambar Jain Panchayat, Old Delhi.
          </p>
          <Link to="/temples" className="btn-saffron" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            Explore All Temples →
          </Link>
        </div>
      </div>

    </div>
  );
}
