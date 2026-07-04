import React from 'react';
import { dharamshalaPlaces } from '../data/dharamshala';
import PhotoGallery from '../components/PhotoGallery';

export default function DharamshaalaPage() {
  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '5rem 0 4rem', backgroundColor: 'hsl(var(--charcoal))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%, hsla(28,90%,18%,0.4) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '0.75rem' }}>
            Pilgrim Services
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'hsl(var(--ivory))', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Dharamshalas &<br />
            <span className="text-gradient-gold">Rest Houses</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            From Delhi to Mahaveerji, the Panchayat maintains a network of rest houses, community halls, and spiritual retreats — ensuring every devotee has a home away from home.
          </p>
        </div>
      </div>

      {/* Cards */}
      <section style={{ padding: '5rem 0 7rem', backgroundColor: '#fff' }}>
        <div className="container-heritage">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {dharamshalaPlaces.map((place) => (
              <div
                key={place.id}
                className="heritage-card"
                style={{ padding: '2.5rem 2.75rem', overflow: 'hidden' }}
              >
                {place.image && (
                  <img
                    src={place.image}
                    alt={place.name}
                    style={{ width: 'calc(100% + 5.5rem)', margin: '-2.5rem -2.75rem 2rem', display: 'block', height: '260px', objectFit: 'cover' }}
                  />
                )}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', backgroundColor: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '4px', padding: '0.2rem 0.55rem' }}>
                      {place.location}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', color: 'hsl(var(--charcoal))', marginBottom: '0.25rem', lineHeight: 1.25 }}>
                    {place.name}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: '#777', fontStyle: 'italic', marginBottom: '1rem' }}>
                    {place.nameHindi}
                  </p>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#B8860B', marginBottom: '1.25rem', fontWeight: 500 }}>
                    "{place.tagline}"
                  </p>
                  <p style={{ fontSize: '0.925rem', color: '#444', lineHeight: 1.75, marginBottom: place.images?.length ? '1.5rem' : 0 }}>
                    {place.desc}
                  </p>
                  {place.images && place.images.length > 0 && (
                    <PhotoGallery images={place.images} title={place.name} />
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h4 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.85rem' }}>
                      Facilities
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {place.facilities.map((f, i) => (
                        <div key={i} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                          <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'hsl(var(--saffron))', marginTop: '0.5rem', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.875rem', color: '#444' }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '1.25rem', backgroundColor: 'hsl(var(--charcoal))', borderRadius: '6px' }}>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', marginBottom: '0.4rem' }}>
                      Booking / Contact
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                      {place.contact}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
