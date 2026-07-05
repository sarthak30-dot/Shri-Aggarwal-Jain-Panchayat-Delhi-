import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TempleCard from '../components/TempleCard';
import { temples } from '../data/temples';
import imgBirdsHospital from '../assets/birds_hospital_web.jpg';

const SectionHeader = ({ eyebrow, title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
    <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.6rem' }}>
      {eyebrow}
    </span>
    <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.6rem)', color: 'hsl(var(--charcoal))', marginBottom: '1rem' }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '0.975rem', color: '#666', lineHeight: 1.65 }}>
        {subtitle}
      </p>
    )}
  </div>
);

const SeeAllLink = ({ to, label }) => (
  <div style={{ textAlign: 'center', marginTop: '3rem' }}>
    <Link
      to={to}
      className="btn-saffron"
      style={{ boxShadow: 'none', padding: '0.7rem 2rem', fontSize: '0.875rem' }}
    >
      {label}
    </Link>
  </div>
);

export default function HomePage() {
  const featuredTemples = temples.filter((t) => t.featured);

  return (
    <>
      <Hero />

      {/* ── About the Panchayat ── */}
      <AboutSection />

      {/* ── Featured Temples Glimpse ── */}
      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container-heritage">
          <SectionHeader
            eyebrow="Sacred Sanctuaries"
            title="12 Heritage Temples of Old Delhi"
            subtitle="A 370-year trail through the walled city — from the Red Fort gates through the merchant lanes, into the courtyards of Dharampura."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredTemples.map((t) => (
              <TempleCard key={t.slug} temple={t} />
            ))}
          </div>
          <SeeAllLink to="/temples" label="Explore All 12 Temples →" />
        </div>
      </section>

      {/* ── Birds Hospital Teaser ── */}
      <section style={{ padding: '6rem 0', backgroundColor: 'hsl(var(--charcoal))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, hsla(28,90%,20%,0.35) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hospital-grid">
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '1rem' }}>
                ✦ Est. 1929 · Chandni Chowk
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'hsl(var(--ivory))', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Jain Charitable<br />
                <span className="text-gradient-gold">Birds Hospital</span>
              </h2>
              <p style={{ fontSize: '0.975rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: '2rem' }}>
                The world's only dedicated avian hospital — open 24 hours, 365 days, treating over 16,000 birds every year. It has an ICU. It sends ambulances. And it charges nothing.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {['~16,000 birds / year', '4.5 Lakh+ since 1929', '₹0 cost'].map((s) => (
                  <span key={s} style={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFD27A', border: '1px solid rgba(255,210,122,0.35)', borderRadius: '4px', padding: '0.35rem 0.8rem' }}>
                    {s}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/birds-hospital" className="btn-saffron" style={{ boxShadow: 'none', display: 'inline-block' }}>
                  Full Story →
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: '8px', overflow: 'hidden', height: '320px' }}>
              <img src={imgBirdsHospital} alt="Jain Charitable Birds Hospital" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Dharamshala & Schools Teaser Row ── */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FAF5EF' }}>
        <div className="container-heritage">
          <SectionHeader
            eyebrow="Community Services"
            title="Beyond the Temples"
            subtitle="The Panchayat runs a network of rest houses, libraries, ashrams, and schools — serving pilgrims and community for over a century."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>

            {/* Dharamshala card */}
            <div className="heritage-card" style={{ padding: '2.5rem 2.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>🏛️</div>
              <h3 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Dharamshalas & Rest Houses</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>
                From a pilgrim's rest house beside Naya Mandir to a Jain Bhavan in Mahaveerji, Rajasthan — the Panchayat ensures every devotee has a home away from home.
              </p>
              <Link to="/dharamshala" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'hsl(var(--saffron))', textDecoration: 'none', letterSpacing: '0.05em', marginTop: 'auto' }}>
                View all rest houses →
              </Link>
            </div>

            {/* Library card */}
            <div className="heritage-card" style={{ padding: '2.5rem 2.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>📜</div>
              <h3 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Sahitya Sadhan Library</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>
                A repository of rare Jain manuscripts, scriptures, and scholarly texts — open to researchers and devotees seeking spiritual study.
              </p>
              <Link to="/library" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'hsl(var(--saffron))', textDecoration: 'none', letterSpacing: '0.05em', marginTop: 'auto' }}>
                Visit the library →
              </Link>
            </div>

            {/* Schools card */}
            <div className="heritage-card" style={{ padding: '2.5rem 2.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>📚</div>
              <h3 style={{ fontSize: '1.3rem', color: 'hsl(var(--charcoal))' }}>Schools & Education</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.65 }}>
                Three institutions — a Pathshala, a formal school, and a traditional Gurukul — carry the Digambara Jain knowledge tradition into the next generation.
              </p>
              <Link to="/schools" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'hsl(var(--saffron))', textDecoration: 'none', letterSpacing: '0.05em', marginTop: 'auto' }}>
                View all schools →
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
