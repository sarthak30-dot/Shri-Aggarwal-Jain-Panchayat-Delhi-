import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer
    style={{
      backgroundColor: 'hsl(var(--charcoal))',
      color: 'hsl(var(--ivory))',
      padding: '5rem 0 3rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    }}
  >
    <div className="container-heritage">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div>
          <h4 style={{ fontSize: '1.4rem', color: '#FFD27A', marginBottom: '0.75rem' }}>Heritage Connect Delhi</h4>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.65 }}>
            Preserving heritage, serving life, and acting as custodians of Delhi's Mughal-era Jain sanctuaries since 1656 CE.
          </p>
        </div>

        <div>
          <h5 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFD27A', marginBottom: '1.25rem' }}>
            Explore
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              { label: 'All 12 Temples', to: '/temples' },
              { label: 'Birds Hospital', to: '/birds-hospital' },
              { label: 'Dharamshalas', to: '/dharamshala' },
              { label: 'Schools', to: '/schools' },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFD27A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h5 style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FFD27A', marginBottom: '1.25rem' }}>
            Support
          </h5>
          <Link
            to="/donate"
            className="btn-saffron"
            style={{ display: 'inline-block', boxShadow: 'none', fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
          >
            Donate Now
          </Link>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '2rem',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.45)',
        }}
      >
        <span>&copy; 2026 Shri Digambar Jain Panchayat, Old Delhi. All rights reserved.</span>
        <span style={{ fontSize: '0.85rem', color: '#FFD27A' }}>Jai Jinendra 🙏</span>
      </div>
    </div>
  </footer>
);

export default Footer;
