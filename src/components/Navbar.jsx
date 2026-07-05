import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ahimsaLogo from '../assets/ahimsa_logo.svg';

const navLinks = [
  { label: 'Home',          to: '/' },
  { label: 'Temples',       to: '/temples' },
  { label: 'Birds Hospital',to: '/birds-hospital' },
  { label: 'Dharamshalas',  to: '/dharamshala' },
  { label: 'Library',       to: '/library' },
  { label: 'Schools',       to: '/schools' },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <header
      className={scrolled ? 'nav-blur' : 'nav-transparent'}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        height: scrolled ? '70px' : '90px',
        display: 'flex',
        alignItems: 'center',
        transition: 'var(--transition-smooth)',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="container-heritage" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={ahimsaLogo}
              alt="Jain Ahimsa Symbol"
              style={{ width: scrolled ? '38px' : '48px', height: scrolled ? '38px' : '48px', transition: 'var(--transition-smooth)' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: scrolled ? '0.95rem' : '1.15rem', fontWeight: 700, color: 'hsl(var(--ivory))', letterSpacing: '0.02em', transition: 'var(--transition-smooth)' }}>
                Heritage Connect
              </span>
              <span style={{ fontSize: scrolled ? '8px' : '10px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#FFD27A', transition: 'var(--transition-smooth)' }}>
                Panchayat • Old Delhi
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive(link.to) ? '#FFD27A' : (scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.95)'),
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD27A'; e.currentTarget.children[0].style.width = '100%'; }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isActive(link.to) ? '#FFD27A' : (scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.95)');
                  e.currentTarget.children[0].style.width = isActive(link.to) ? '100%' : '0';
                }}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute', bottom: 0, left: 0,
                    width: isActive(link.to) ? '100%' : '0',
                    height: '1.5px',
                    background: 'linear-gradient(to right, #FFD27A, hsl(var(--saffron)))',
                    transition: 'var(--transition-fast)',
                  }}
                />
              </Link>
            ))}

            <Link
              to="/donate"
              className="btn-saffron"
              style={{ padding: '0.55rem 1.4rem', fontSize: '0.8rem', boxShadow: 'none', marginLeft: '1rem', textDecoration: 'none' }}
            >
              Donate
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            style={{ display: 'none', background: 'none', border: 'none', color: 'hsl(var(--ivory))', cursor: 'pointer', padding: '0.25rem' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '70px' : '90px', left: 0,
            width: '100%',
            height: `calc(100vh - ${scrolled ? '70px' : '90px'})`,
            backgroundColor: 'hsla(var(--charcoal) / 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            display: 'flex', flexDirection: 'column',
            padding: '2rem 1.5rem', gap: '1.5rem',
            animation: 'slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '1.25rem',
                color: isActive(link.to) ? '#FFD27A' : 'hsl(var(--ivory))',
                textDecoration: 'none', letterSpacing: '0.05em',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="btn-saffron"
            style={{ marginTop: '1rem', textAlign: 'center', padding: '0.8rem', textDecoration: 'none' }}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
