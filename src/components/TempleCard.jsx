import React from 'react';
import { useNavigate } from 'react-router-dom';

function TempleCard({ temple }) {
  const navigate = useNavigate();

  return (
    <div
      className="heritage-card"
      onClick={() => navigate(`/temples/${temple.slug}`)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={temple.image}
          alt={temple.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div
          style={{
            position: 'absolute', top: '1rem', right: '1rem',
            backgroundColor: 'hsla(var(--charcoal) / 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#FFD27A',
            padding: '0.3rem 0.7rem',
            borderRadius: '4px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
          }}
        >
          Est. {temple.established}
        </div>
        {temple.featured && (
          <div
            style={{
              position: 'absolute', top: '1rem', left: '1rem',
              backgroundColor: 'hsl(var(--saffron))',
              color: '#fff',
              padding: '0.25rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Featured
          </div>
        )}
        {temple.videos && temple.videos.length > 0 && (
          <div
            style={{
              position: 'absolute', bottom: '1rem', right: '1rem',
              backgroundColor: 'rgba(0,0,0,0.65)',
              backdropFilter: 'blur(4px)',
              color: '#fff',
              padding: '0.25rem 0.55rem',
              borderRadius: '4px',
              fontSize: '0.65rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {temple.videos.length} video{temple.videos.length > 1 ? 's' : ''}
          </div>
        )}
      </div>

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#B8860B', fontWeight: 500 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          {temple.location}
        </div>

        <h3 style={{ fontSize: '1.15rem', color: 'hsl(var(--charcoal))', lineHeight: 1.25 }}>{temple.name}</h3>

        <p style={{ fontSize: '0.82rem', fontStyle: 'italic', color: '#B8860B', fontWeight: 500 }}>
          "{temple.tagline}"
        </p>

        <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.65, flex: 1 }}>
          {temple.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.5rem' }}>
          {temple.highlights.map((h) => (
            <span
              key={h}
              style={{
                fontSize: '0.7rem', fontWeight: 500,
                color: 'hsl(var(--charcoal))',
                backgroundColor: 'rgba(184, 134, 11, 0.08)',
                border: '1px solid rgba(184, 134, 11, 0.2)',
                borderRadius: '3px',
                padding: '0.2rem 0.55rem',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        <span
          style={{
            marginTop: '0.75rem', fontSize: '0.8rem', fontWeight: 600,
            color: 'hsl(var(--saffron))', textTransform: 'uppercase',
            letterSpacing: '0.06em',
            display: 'flex', alignItems: 'center', gap: '0.35rem',
          }}
        >
          View Temple
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default TempleCard;
