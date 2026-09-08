import React, { useState } from 'react';
import TempleCard from '../components/TempleCard';
import TempleTrailMap from '../components/TempleTrailMap';
import { temples } from '../data/temples';

export default function TemplesPage() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'featured'
    ? temples.filter((t) => t.featured)
    : temples;

  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Page header */}
      <div
        style={{
          padding: '5rem 0 4rem',
          backgroundColor: 'hsl(var(--charcoal))',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 60%, hsla(28,90%,18%,0.4) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '0.75rem' }}>
            Shri Digambar Jain Panchayat
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'hsl(var(--ivory))', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            All 12 Heritage Temples<br />
            <span className="text-gradient-gold">of Old Delhi</span>
          </h1>
          <p style={{ maxWidth: '620px', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Together these temples form a trail through the 370-year-old walled city — no other community left this complete a spatial record of their settlement in Shahjahanabad.
          </p>
        </div>
      </div>

      {/* Trail map */}
      <section style={{ padding: '4rem 0 3.5rem', backgroundColor: '#FAF5EF' }}>
        <div className="container-heritage">
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#d97706', display: 'block', marginBottom: '0.5rem' }}>
            Walk It Yourself
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', color: '#18181b', marginBottom: '0.75rem' }}>
            The Old Delhi Temple Trail
          </h2>
          <p style={{ maxWidth: '640px', fontSize: '0.95rem', color: '#52525b', lineHeight: 1.7, marginBottom: '2rem' }}>
            Nine temples sit close enough within the walled city to visit on foot in a single trip — tap any pin for details. The remaining three carry the same Panchayat further across Delhi.
          </p>
          <TempleTrailMap />
        </div>
      </section>

      {/* Filter bar */}
      <div style={{ backgroundColor: '#FAF5EF', borderBottom: '1px solid rgba(184,134,11,0.12)', padding: '1.25rem 0' }}>
        <div className="container-heritage" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { key: 'all', label: `All Temples (${temples.length})` },
            { key: 'featured', label: 'Featured' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.04em',
                padding: '0.45rem 1.1rem', borderRadius: '4px', cursor: 'pointer',
                border: filter === f.key ? '1px solid hsl(var(--saffron))' : '1px solid rgba(184,134,11,0.25)',
                backgroundColor: filter === f.key ? 'hsl(var(--saffron))' : 'transparent',
                color: filter === f.key ? '#fff' : '#B8860B',
                transition: 'all 0.2s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Temple grid */}
      <section style={{ padding: '4rem 0 7rem' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {filtered.map((t) => (
              <TempleCard key={t.slug} temple={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
