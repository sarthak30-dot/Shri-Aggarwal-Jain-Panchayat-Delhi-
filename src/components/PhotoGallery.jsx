import React, { useState, useEffect, useCallback } from 'react';

export default function PhotoGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '0.6rem',
        }}
      >
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActiveIndex(i)}
            style={{
              padding: 0,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '6px',
              overflow: 'hidden',
              aspectRatio: '1 / 1',
              background: '#eee',
            }}
          >
            <img
              src={src}
              alt={`${title || 'Photo'} ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(10,10,10,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={close}
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', lineHeight: 1 }}
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            style={{ position: 'absolute', left: '1rem', background: 'none', border: 'none', color: '#fff', fontSize: '2.5rem', cursor: 'pointer', padding: '1rem' }}
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            alt={`${title || 'Photo'} ${activeIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '88vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '4px' }}
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: '#fff', fontSize: '2.5rem', cursor: 'pointer', padding: '1rem' }}
          >
            ›
          </button>

          <div style={{ position: 'absolute', bottom: '1.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
