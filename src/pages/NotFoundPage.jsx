import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        padding: '160px 1.5rem 6rem',
      }}
    >
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', color: 'hsl(var(--saffron))', lineHeight: 1 }}>
        404
      </span>
      <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'hsl(var(--charcoal))' }}>
        This page could not be found
      </h1>
      <p style={{ maxWidth: '480px', fontSize: '0.975rem', color: '#666', lineHeight: 1.65 }}>
        The page you're looking for may have been moved or doesn't exist. Let's get you back to safe ground.
      </p>
      <Link to="/" className="btn-saffron" style={{ boxShadow: 'none', marginTop: '0.5rem' }}>
        Back to Home
      </Link>
    </div>
  );
}
