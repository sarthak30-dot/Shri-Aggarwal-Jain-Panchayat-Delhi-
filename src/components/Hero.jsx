import React from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';
import heroTempleImage from '../assets/hero_lal_mandir_web.jpg';

const Hero = () => {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '90px',
        overflow: 'hidden',
        backgroundColor: 'hsl(var(--charcoal))',
      }}
    >
      {/* Full image — no cropping */}
      <img
        src={heroTempleImage}
        alt="Shri Digambar Jain Lal Mandir, Chandni Chowk"
        className="animate-ken-burns"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          opacity: 0.85,
          position: 'relative',
          zIndex: 1,
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(23,27,33,0.3) 0%, rgba(23,27,33,0.55) 55%, rgba(23,27,33,0.88) 100%)',
          zIndex: 2,
        }}
      />

      {/* Warm radial tint */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, hsla(28,90%,15%,0.35) 0%, transparent 70%)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <HeroCanvas />

      {/* Text content — centered over the image */}
      <div
        style={{
          position: 'absolute',
          top: '90px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'hsl(var(--ivory))',
          pointerEvents: 'none',
        }}
      >
        <div className="container-heritage" style={{ pointerEvents: 'auto' }}>
          <div
            className="animate-fade-in"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.75rem',
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            }}
          >
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: '#FFD27A',
              }}
            >
              ✦ Shri Digambar Jain Panchayat ✦
            </span>
            <span
              style={{
                display: 'block',
                width: '80px',
                height: '1.5px',
                background: 'linear-gradient(to right, transparent, #FFD27A, transparent)',
                opacity: 0.95,
              }}
            />
          </div>

          <h1
            className="animate-fade-in-up"
            style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 6rem)',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
              textShadow: '0 4px 30px rgba(0,0,0,0.75), 0 2px 4px rgba(0,0,0,0.5)',
              color: '#FFF7E6',
            }}
          >
            12 Temples.
            <br />
            <span className="text-gradient-gold" style={{ filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.6))' }}>
              One Sacred Faith.
            </span>
            <br />
            Eternal Heritage.
          </h1>

          <p
            className="animate-fade-in"
            style={{
              maxWidth: '680px',
              margin: '0 auto 2.75rem auto',
              fontSize: 'clamp(1rem, 1.25vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#FBE9C7',
              animationDelay: '300ms',
              textShadow: '0 2px 10px rgba(0,0,0,0.85)',
            }}
          >
            Preserving the spiritual legacy and architectural wonders of Old Delhi since 1656 CE. Guided by the values of Ahimsa and compassion.
          </p>

          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.25rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animationDelay: '600ms',
            }}
          >
            <Link to="/temples" className="btn-saffron">
              Explore Temples
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: '0.5rem', transition: 'transform 0.3s' }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            <Link to="/donate" className="btn-outline">Donate Now</Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(255,255,255,0.55)',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          animationDelay: '1000ms',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span>Scroll to discover</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
