import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { temples } from '../data/temples';
import PhotoGallery from '../components/PhotoGallery';

export default function TempleDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const temple = temples.find((t) => t.slug === slug);
  const [activeVideo, setActiveVideo] = useState(0);

  if (!temple) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'hsl(var(--charcoal))' }}>Temple not found</h2>
        <Link to="/temples" className="btn-saffron" style={{ boxShadow: 'none' }}>Back to all temples</Link>
      </div>
    );
  }

  const currentIdx = temples.findIndex((t) => t.slug === slug);
  const prevTemple = temples[currentIdx - 1] || null;
  const nextTemple = temples[currentIdx + 1] || null;

  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh' }}>

      {/* Hero banner */}
      <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <img
          src={temple.detailHeroImage || temple.image}
          alt={temple.detailHeroImage ? `${temple.name} — Bhagwaan darshan` : temple.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: temple.detailHeroPosition || 'center center',
            filter: temple.detailHeroImage ? 'brightness(0.65)' : 'brightness(0.55)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(23,27,33,0.9) 0%, rgba(23,27,33,0.1) 55%)' }} />
        <div
          className="container-heritage"
          style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', width: '100%' }}
        >
          <button
            onClick={() => navigate('/temples')}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', marginBottom: '1.25rem', padding: 0 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            All Temples
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', backgroundColor: 'rgba(255,127,36,0.15)', border: '1px solid rgba(255,127,36,0.3)', borderRadius: '4px', padding: '0.2rem 0.6rem' }}>
              Est. {temple.established}
            </span>
            {temple.featured && (
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff', backgroundColor: 'hsl(var(--saffron))', borderRadius: '4px', padding: '0.2rem 0.6rem' }}>
                Featured
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'hsl(var(--ivory))', lineHeight: 1.15, marginBottom: '0.5rem' }}>
            {temple.name}
          </h1>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#FFD27A' }}>"{temple.tagline}"</p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ backgroundColor: '#fff', padding: '5rem 0' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }} className="detail-grid">

            {/* Left: description + video gallery */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: '#B8860B', fontWeight: 500, marginBottom: '1.5rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {temple.location}
              </div>

              <p style={{ fontSize: '1.05rem', color: '#444', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {temple.desc}
              </p>

              {/* Photo Gallery */}
              {temple.images && temple.images.length > 0 && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--saffron))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    <h2 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Photos</h2>
                    <span style={{ fontSize: '0.72rem', color: '#B8860B', backgroundColor: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '4px', padding: '0.15rem 0.5rem' }}>
                      {temple.images.length} photo{temple.images.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <PhotoGallery images={temple.images} title={temple.name} />
                </div>
              )}

              {/* Video Gallery */}
              {temple.videos && temple.videos.length > 0 && (
                <div style={{ marginTop: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--saffron))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                    <h2 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Gallery</h2>
                    <span style={{ fontSize: '0.72rem', color: '#B8860B', backgroundColor: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '4px', padding: '0.15rem 0.5rem' }}>
                      {temple.videos.length} video{temple.videos.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Active video player */}
                  <div
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      backgroundColor: '#000',
                      marginBottom: '1rem',
                      aspectRatio: '16/9',
                    }}
                  >
                    <video
                      key={temple.videos[activeVideo].src}
                      controls
                      preload="metadata"
                      style={{ width: '100%', height: '100%', display: 'block' }}
                    >
                      <source src={temple.videos[activeVideo].src} type="video/mp4" />
                      Your browser does not support video playback.
                    </video>
                  </div>

                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--charcoal))', marginBottom: '1rem' }}>
                    {temple.videos[activeVideo].title}
                  </p>

                  {/* Thumbnail strip (when multiple videos) */}
                  {temple.videos.length > 1 && (
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {temple.videos.map((v, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveVideo(i)}
                          style={{
                            background: 'none',
                            border: `2px solid ${i === activeVideo ? 'hsl(var(--saffron))' : 'rgba(184,134,11,0.2)'}`,
                            borderRadius: '6px',
                            padding: '0.5rem 1rem',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            color: i === activeVideo ? 'hsl(var(--saffron))' : '#777',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            transition: 'all 0.2s',
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          {v.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: highlights sidebar */}
            <div>
              <div
                className="heritage-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <h3 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B' }}>
                  Key Highlights
                </h3>
                {temple.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'hsl(var(--saffron))', marginTop: '0.45rem', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.55 }}>{h}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.75rem 2rem', backgroundColor: 'hsl(var(--charcoal))', borderRadius: '8px' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', marginBottom: '0.6rem' }}>
                  Visit
                </p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                  {temple.location}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.4rem' }}>
                  Old Delhi, Delhi — 110006
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div style={{ backgroundColor: '#FAF5EF', borderTop: '1px solid rgba(184,134,11,0.12)', padding: '2.5rem 0' }}>
        <div className="container-heritage" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          {prevTemple ? (
            <Link to={`/temples/${prevTemple.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>← Previous</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'hsl(var(--charcoal))' }}>{prevTemple.name}</span>
            </Link>
          ) : <div />}
          {nextTemple ? (
            <Link to={`/temples/${nextTemple.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#B8860B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next →</span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'hsl(var(--charcoal))' }}>{nextTemple.name}</span>
            </Link>
          ) : <div />}
        </div>
      </div>

    </div>
  );
}
