import React from 'react';

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const HandIcon = () => (
  <svg {...iconProps}>
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6.53-3.34l-3.05-4.16a1.8 1.8 0 0 1 .59-2.6c.98-.56 2.24-.3 2.9.65L8 14" />
  </svg>
);

const FeatherIcon = () => (
  <svg {...iconProps}>
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const HeartIcon = () => (
  <svg {...iconProps}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 12 5.5 5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

const SparklesIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M6.34 17.66l2.83-2.83M14.83 9.17l2.83-2.83" />
  </svg>
);

const values = [
  { name: 'Ahimsa', meaning: 'Non-violence', Icon: HandIcon },
  { name: 'Satya', meaning: 'Truthfulness', Icon: FeatherIcon },
  { name: 'Asteya', meaning: 'Non-stealing', Icon: LockIcon },
  { name: 'Aparigraha', meaning: 'Non-attachment', Icon: HeartIcon },
  { name: 'Brahmacharya', meaning: 'Self-restraint', Icon: SparklesIcon },
];

const body = [
  "For nearly four centuries, Shri Digambar Jain Panchayat has been the custodian of Old Delhi's sacred Jain heritage. From the Mughal era onwards, our community has built and protected fourteen temples, dharamshalas, schools and the world-renowned Charitable Birds Hospital — each one a living embodiment of Ahimsa.",
  'Our mission is to preserve this spiritual inheritance for future generations: through restoration, education, service to all living beings, and the quiet daily devotion that has sustained us since 1656 CE.',
];

export default function AboutSection() {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#FAF5EF' }}>
      <div
        className="container-heritage detail-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}
      >
        <div className="animate-fade-in-up">
          <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.75rem' }}>
            About the Panchayat
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', color: 'hsl(var(--charcoal))', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            A Living Legacy of Compassion &amp; Heritage
          </h2>
          {body.map((p, i) => (
            <p key={i} style={{ fontSize: '0.975rem', color: '#555', lineHeight: 1.75, marginBottom: i === body.length - 1 ? 0 : '1rem' }}>
              {p}
            </p>
          ))}
        </div>

        <div className="animate-fade-in" style={{ position: 'relative', aspectRatio: '1 / 1', maxWidth: '380px', margin: '0 auto', width: '100%' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--gold-glow)) 0%, hsl(var(--gold)) 50%, #B8860B 100%)', padding: '4px', boxShadow: '0 20px 45px -15px hsla(43, 90%, 55%, 0.4)' }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'hsl(var(--cream))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: '1.5rem', borderRadius: '50%', border: '1px solid rgba(184,134,11,0.4)' }} />
              <div style={{ position: 'absolute', inset: '3rem', borderRadius: '50%', border: '1px solid rgba(184,134,11,0.3)' }} />
              <div style={{ position: 'absolute', inset: '4.5rem', borderRadius: '50%', border: '1px solid rgba(184,134,11,0.2)' }} />
              <div style={{ textAlign: 'center', padding: '0 2rem' }}>
                <div style={{ fontSize: '3.5rem', color: 'hsl(var(--saffron))', marginBottom: '0.75rem' }}>卐</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'hsl(var(--charcoal))' }}>Jain Cosmology</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#777', marginTop: '0.5rem' }}>
                  Anekantavada · Ahimsa · Aparigraha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-heritage" style={{ marginTop: '4rem' }}>
        <div
          className="heritage-card values-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', padding: '2rem 1.5rem' }}
        >
          {values.map(({ name, meaning, Icon }) => (
            <div key={name} style={{ textAlign: 'center' }}>
              <div style={{ height: '28px', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--saffron))' }}>
                <Icon />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'hsl(var(--charcoal))' }}>{name}</div>
              <div style={{ fontSize: '0.78rem', color: '#777' }}>{meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
