import React from 'react';
import imgBirdsHospital from '../assets/birds_hospital_web.jpg';

const stats = [
  { number: '~16,000', label: 'Birds Treated Every Year' },
  { number: '4.5 Lakh+', label: 'Birds Treated Since 1929' },
  { number: '24 / 7', label: 'Open Every Single Day' },
  { number: '₹ 0', label: 'Cost to Any Bird, Ever' },
];

const services = [
  { icon: '🏥', title: 'Full Avian ICU', desc: 'Dedicated intensive care unit for critically injured birds — raptors, parrots, pigeons, and sparrows treated equally.' },
  { icon: '🚑', title: 'Bird Ambulance', desc: 'A rescue ambulance service responding to calls across Delhi — the only one of its kind in the country.' },
  { icon: '🔬', title: 'Surgery & Diagnostics', desc: 'X-ray, blood work, and surgical procedures performed by trained vets and Jain volunteers around the clock.' },
  { icon: '🌿', title: 'Release Programme', desc: 'Healed birds are rehabilitated and released. The goal is always return to the wild — not permanent captivity.' },
];

export default function BirdsHospitalPage() {
  return (
    <div style={{ paddingTop: '90px', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '5rem 0 4rem', backgroundColor: 'hsl(var(--charcoal))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, hsla(28,90%,20%,0.4) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container-heritage" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'hsl(var(--saffron))', display: 'block', marginBottom: '1rem' }}>
            ✦ Est. 1929 · Chandni Chowk, Old Delhi
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'hsl(var(--ivory))', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Jain Charitable<br />
            <span className="text-gradient-gold">Birds Hospital</span>
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
            The world's oldest and only dedicated avian hospital — built on one principle: <em style={{ color: '#FFD27A' }}>"Live and let live."</em>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ backgroundColor: '#FAF5EF', padding: '3.5rem 0', borderBottom: '1px solid rgba(184,134,11,0.12)' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '1.75rem 1rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 700, color: 'hsl(var(--saffron))', lineHeight: 1, marginBottom: '0.5rem' }}>
                  {s.number}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#777', letterSpacing: '0.02em', lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
        <div className="container-heritage">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="hospital-grid">
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '1rem' }}>
                The Story
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'hsl(var(--charcoal))', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                A house in Kinari Bazaar that became a miracle
              </h2>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                In 1929, members of Delhi's Jain community converted a small house in Kinari Bazaar into a free hospital for birds. The idea was simple and radical: Mahavir's teaching of Ahimsa — non-violence — applied to every living being, not just humans.
              </p>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Nearly a century later, the hospital has treated over <strong>4.5 lakh birds</strong>. It treats pigeons, parrots, hawks, eagles, owls, and sparrows. It has an X-ray machine. It performs surgery. It has an ICU. It runs a rescue ambulance. And it has charged nothing — not once, not ever — in 95 years of operation.
              </p>
              <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.8 }}>
                The hospital is open 24 hours, 365 days a year, run by a combination of qualified veterinarians and Jain volunteers. It is the only institution of its kind in the world.
              </p>
            </div>
            <div style={{ borderRadius: '10px', overflow: 'hidden', height: '400px', boxShadow: '0 20px 60px -15px rgba(0,0,0,0.2)' }}>
              <img src={imgBirdsHospital} alt="Jain Charitable Birds Hospital" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '5rem 0 7rem', backgroundColor: '#FAF5EF' }}>
        <div className="container-heritage">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8860B', display: 'block', marginBottom: '0.6rem' }}>
              What We Do
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', color: 'hsl(var(--charcoal))' }}>Services</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {services.map((s) => (
              <div key={s.title} className="heritage-card" style={{ padding: '2.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ fontSize: '2rem' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.1rem', color: 'hsl(var(--charcoal))' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
