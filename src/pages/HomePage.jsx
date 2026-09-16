import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TempleCard from '../components/TempleCard';
import { temples } from '../data/temples';

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

    </>
  );
}
