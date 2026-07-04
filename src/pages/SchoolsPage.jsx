import React from 'react';
import { schools } from '../data/schools';

const typeColors = {
  'Religious Education': { bg: 'rgba(255,127,36,0.1)', border: 'rgba(255,127,36,0.3)', text: 'hsl(var(--saffron))' },
  'Formal School':       { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)', text: '#3b82f6' },
  'Gurukul / Residential': { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)', text: '#10b981' },
};

export default function SchoolsPage() {
  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '5rem 0 4rem', backgroundColor: 'hsl(var(--charcoal))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 30%, hsla(28,90%,18%,0.4) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '0.75rem' }}>
            Education & Knowledge
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'hsl(var(--ivory))', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Schools &<br />
            <span className="text-gradient-gold">Educational Institutions</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            From weekend Pathshalas to a full residential Gurukul — the Panchayat's educational institutions carry the Digambara Jain knowledge tradition forward, generation after generation.
          </p>
        </div>
      </div>

      {/* School cards */}
      <section style={{ padding: '5rem 0 7rem', backgroundColor: '#fff' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {schools.map((school) => {
              const colors = typeColors[school.type] || typeColors['Religious Education'];
              return (
                <div key={school.id} className="heritage-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                  {/* Card top accent */}
                  <div style={{ height: '4px', backgroundColor: colors.text, opacity: 0.7 }} />

                  <div style={{ padding: '2rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.text, backgroundColor: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '4px', padding: '0.2rem 0.55rem' }}>
                        {school.type}
                      </span>
                      <span style={{ fontSize: '0.72rem', color: '#999' }}>Est. {school.established}</span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', color: 'hsl(var(--charcoal))', lineHeight: 1.25 }}>{school.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>{school.nameHindi}</p>

                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#B8860B', fontWeight: 500 }}>
                      "{school.tagline}"
                    </p>

                    <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7, flex: 1 }}>
                      {school.desc}
                    </p>

                    <div style={{ marginTop: '0.5rem' }}>
                      <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B8860B', marginBottom: '0.65rem' }}>
                        Programmes
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {school.programmes.map((p, i) => (
                          <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: colors.text, marginTop: '0.5rem', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.83rem', color: '#444' }}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
                      <span style={{ fontSize: '0.78rem', color: '#666' }}>👥 {school.students}</span>
                      <span style={{ fontSize: '0.78rem', color: '#999', marginLeft: 'auto' }}>{school.admission}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dummy notice */}
          <div style={{ marginTop: '3rem', padding: '1.5rem 2rem', backgroundColor: 'rgba(184,134,11,0.06)', border: '1px solid rgba(184,134,11,0.18)', borderRadius: '8px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: '#B8860B' }}>
              📋 Full school details, admission forms, and contact information will be added shortly. Please contact the Panchayat office directly for current enrolment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
