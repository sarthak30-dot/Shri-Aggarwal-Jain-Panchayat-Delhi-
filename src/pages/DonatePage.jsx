import React from 'react';

const causes = [
  { icon: '🏛️', title: 'Temple Restoration', desc: 'Fund the preservation of Mughal-era stonework, frescoes, and sculptures in the 14 heritage temples.' },
  { icon: '🐦', title: 'Birds Hospital', desc: 'Support medicines, surgeries, ambulance fuel, and staff at the world\'s only free avian hospital.' },
  { icon: '📚', title: 'Schools & Pathshala', desc: 'Help provide free Jain education to children of the community — scripture, language, and values.' },
  { icon: '🏠', title: 'Dharamshala Upkeep', desc: 'Maintain pilgrim rest houses so that every devotee can travel for darshan without financial worry.' },
];

export default function DonatePage() {
  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '5rem 0 4rem', backgroundColor: 'hsl(var(--charcoal))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 60%, hsla(28,90%,18%,0.5) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '0.75rem' }}>
            Ahimsa in Action
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'hsl(var(--ivory))', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Support Our Mission
          </h1>
          <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            Every donation — big or small — directly funds the preservation of 370 years of heritage and the welfare of thousands of living beings.
          </p>
        </div>
      </div>

      {/* Causes */}
      <section style={{ padding: '5rem 0', backgroundColor: '#FAF5EF' }}>
        <div className="container-heritage">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'hsl(var(--charcoal))' }}>Where Your Donation Goes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {causes.map((c) => (
              <div key={c.title} className="heritage-card" style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ fontSize: '2rem' }}>{c.icon}</div>
                <h3 style={{ fontSize: '1.1rem', color: 'hsl(var(--charcoal))' }}>{c.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation details placeholder */}
      <section style={{ padding: '4rem 0 7rem', backgroundColor: '#fff' }}>
        <div className="container-heritage">
          <div style={{ maxWidth: '540px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ padding: '3rem', backgroundColor: 'rgba(184,134,11,0.05)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
              <div style={{ fontSize: '3rem' }}>🙏</div>
              <h3 style={{ fontSize: '1.4rem', color: 'hsl(var(--charcoal))' }}>Bank & UPI Details Coming Soon</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.65 }}>
                Official bank account and UPI donation details will be added shortly. To make a donation now, please contact the Panchayat office directly.
              </p>
              <div style={{ padding: '1.25rem 1.75rem', backgroundColor: 'hsl(var(--charcoal))', borderRadius: '8px', width: '100%' }}>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', marginBottom: '0.4rem' }}>
                  Contact Panchayat Office
                </p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                  Shri Digambar Jain Panchayat<br />
                  Old Delhi — 110 006
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
