import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { temples } from '../data/temples';
import { getTempleHistory } from '../data/templeHistory';
import PhotoGallery from '../components/PhotoGallery';

export default function TempleDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const temple = temples.find((t) => t.slug === slug);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, slug]);

  if (!temple) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <h2 style={{ fontSize: '2rem', color: 'hsl(var(--charcoal))' }}>Temple not found</h2>
        <Link to="/temples" className="btn-saffron" style={{ boxShadow: 'none' }}>Back to all temples</Link>
      </div>
    );
  }

  const history = getTempleHistory(slug);
  const currentIdx = temples.findIndex((t) => t.slug === slug);
  const prevTemple = temples[currentIdx - 1] || null;
  const nextTemple = temples[currentIdx + 1] || null;

  return (
    <div style={{ minHeight: '100vh' }}>

      {/* Hero banner */}
      <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'hsl(var(--charcoal))', maxHeight: '85vh' }}>
        {/* Full-width, uncropped image — height follows the image's own aspect ratio */}
        <img
          src={temple.detailHeroImage || temple.image}
          alt={temple.detailHeroImage ? `${temple.name} — Bhagwaan darshan` : temple.name}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxHeight: '85vh',
            objectFit: 'cover',
            objectPosition: temple.detailHeroPosition || 'center top',
            filter: temple.detailHeroImage ? 'brightness(0.75)' : 'brightness(0.7)',
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

      {/* Historical Chronicle — shown only for temples with manuscript coverage */}
      {history && (
        <div id="history" style={{ backgroundColor: '#FAF5EF', padding: '5rem 0', borderTop: '1px solid rgba(184,134,11,0.15)' }}>
          <div className="container-heritage">

            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--saffron))" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'hsl(var(--charcoal))' }}>
                Historical Chronicle
              </h2>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#9A7B2E', marginBottom: '3rem', fontStyle: 'italic' }}>
              Translated from the Shahjahanabad manuscript — archival records of the historic Jain temples of Old Delhi
            </p>

            {/* Meta-info row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              {history.eraEstablished && (
                <div style={{ background: '#fff', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '8px', padding: '0.9rem 1.25rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.3rem' }}>Era Established</p>
                  <p style={{ fontSize: '0.9rem', color: 'hsl(var(--charcoal))', fontWeight: 600 }}>{history.eraEstablished}</p>
                </div>
              )}
              {history.consecrationDate && (
                <div style={{ background: '#fff', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '8px', padding: '0.9rem 1.25rem' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.3rem' }}>Consecration</p>
                  <p style={{ fontSize: '0.9rem', color: 'hsl(var(--charcoal))', fontWeight: 600 }}>{history.consecrationDate}</p>
                </div>
              )}
              {history.moolnayakDeity && (
                <div style={{ background: '#fff', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '8px', padding: '0.9rem 1.25rem', flex: '1 1 280px' }}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.3rem' }}>Moolnayak Deity</p>
                  <p style={{ fontSize: '0.9rem', color: 'hsl(var(--charcoal))', fontWeight: 600 }}>{history.moolnayakDeity}</p>
                </div>
              )}
            </div>

            {/* Alternate names */}
            {history.alternateNames && history.alternateNames.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.6rem' }}>Also known as</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {history.alternateNames.map((n) => (
                    <span key={n} style={{ fontSize: '0.82rem', color: '#666', background: '#fff', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '20px', padding: '0.25rem 0.75rem' }}>
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Historical Events Timeline */}
            {history.historicalEvents && history.historicalEvents.length > 0 && (
              <div style={{ marginBottom: '3.5rem' }}>
                <h3 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '2rem' }}>
                  Historical Events
                </h3>
                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                  {/* Vertical line */}
                  <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '2px', background: 'linear-gradient(to bottom, hsl(var(--saffron)), rgba(184,134,11,0.1))' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {history.historicalEvents.map((ev, i) => (
                      <div key={i} style={{ position: 'relative' }}>
                        {/* Timeline dot */}
                        <div style={{ position: 'absolute', left: '-2rem', top: '4px', width: '14px', height: '14px', borderRadius: '50%', backgroundColor: i === 0 ? 'hsl(var(--saffron))' : '#fff', border: '2px solid hsl(var(--saffron))', boxSizing: 'border-box' }} />
                        <div style={{ background: '#fff', borderRadius: '8px', padding: '1.25rem 1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid rgba(184,134,11,0.1)' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.6rem' }}>
                            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'hsl(var(--charcoal))', lineHeight: 1.3 }}>{ev.title}</h4>
                            {ev.period && (
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'hsl(var(--saffron))', backgroundColor: 'rgba(255,127,36,0.1)', border: '1px solid rgba(255,127,36,0.25)', borderRadius: '4px', padding: '0.15rem 0.5rem', whiteSpace: 'nowrap' }}>
                                {ev.period}
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.75 }}>{ev.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Architectural Highlights + Unique Features — two-column grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>

              {history.architecturalHighlights && history.architecturalHighlights.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '1.25rem' }}>
                    Architectural Highlights
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {history.architecturalHighlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--saffron))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <p style={{ fontSize: '0.88rem', color: '#444', lineHeight: 1.65 }}>{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {history.uniqueFeatures && history.uniqueFeatures.length > 0 && (
                <div>
                  <h3 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '1.25rem' }}>
                    Unique Features
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {history.uniqueFeatures.map((f, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div style={{ width: '7px', height: '7px', borderRadius: '1px', backgroundColor: 'hsl(var(--saffron))', marginTop: '5px', flexShrink: 0, transform: 'rotate(45deg)' }} />
                        <p style={{ fontSize: '0.88rem', color: '#444', lineHeight: 1.65 }}>{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Prominent Figures */}
            {history.prominentFigures && history.prominentFigures.length > 0 && (
              <div>
                <h3 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.85rem' }}>
                  Prominent Figures
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {history.prominentFigures.map((f) => (
                    <span key={f} style={{ fontSize: '0.82rem', color: 'hsl(var(--charcoal))', background: '#fff', border: '1px solid rgba(184,134,11,0.25)', borderRadius: '4px', padding: '0.3rem 0.85rem', fontWeight: 500 }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

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
