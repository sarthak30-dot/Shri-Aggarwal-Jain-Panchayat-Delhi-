import React from 'react';
import { library } from '../data/library';
import PhotoGallery from '../components/PhotoGallery';

export default function LibraryPage() {
  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero banner */}
      <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'hsl(var(--charcoal))', maxHeight: '85vh' }}>
        <img
          src={library.image}
          alt={library.name}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxHeight: '85vh',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'brightness(0.7)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(23,27,33,0.9) 0%, rgba(23,27,33,0.1) 55%)' }} />
        <div
          className="container-heritage"
          style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '0.75rem' }}>
            Knowledge & Archives
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff', backgroundColor: 'rgba(255,127,36,0.25)', border: '1px solid rgba(255,127,36,0.4)', borderRadius: '4px', padding: '0.2rem 0.6rem' }}>
              {library.location}
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'hsl(var(--ivory))', lineHeight: 1.15, marginBottom: '0.5rem' }}>
            {library.name}
          </h1>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#FFD27A' }}>"{library.tagline}"</p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ backgroundColor: '#fff', padding: '5rem 0' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }} className="detail-grid">

            {/* Left: description + gallery */}
            <div>
              <p style={{ fontSize: '0.9rem', color: '#777', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                {library.nameHindi}
              </p>

              <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {library.desc}
              </p>

              {library.images && library.images.length > 0 && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--saffron))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    <h2 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Photos</h2>
                    <span style={{ fontSize: '0.72rem', color: '#B8860B', backgroundColor: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '4px', padding: '0.15rem 0.5rem' }}>
                      {library.images.length} photo{library.images.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <PhotoGallery images={library.images} title={library.name} />
                </div>
              )}
            </div>

            {/* Right: facilities + contact sidebar */}
            <div>
              <div
                className="heritage-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>
                  Facilities
                </h3>
                {library.facilities.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'hsl(var(--saffron))', marginTop: '0.45rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.55 }}>{f}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.75rem 2rem', backgroundColor: 'hsl(var(--charcoal))', borderRadius: '8px' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', marginBottom: '0.6rem' }}>
                  Visit
                </p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                  {library.location}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.4rem' }}>
                  {library.contact}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
