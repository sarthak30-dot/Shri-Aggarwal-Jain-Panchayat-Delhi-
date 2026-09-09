import React, { useEffect, useRef, useState } from 'react';
import ahimsaLogo from '../assets/ahimsa_logo.svg';
import heroLalMandir from '../assets/hero_lal_mandir_web.jpg';

// Devotional background audio. The recording itself isn't something to
// source or fabricate here — an official temple site should use audio it
// actually holds the rights to, ideally chanted by the community itself.
// Drop the real file at public/audio/namokar-mantra.mp3 and this wires up
// end to end; until then the gate and controls all work, they just have
// nothing to play.
const AUDIO_SRC = '/audio/namokar-mantra.mp3';
const STORAGE_KEY = 'namokarAudioPaused';

export default function NamokarPlayer() {
  const audioRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Block the page behind the gate from scrolling while it's up.
  useEffect(() => {
    document.body.style.overflow = entered ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [entered]);

  const wasPreviouslyPaused = () => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false; // private browsing / storage blocked — default to playing
    }
  };

  // Runs synchronously inside the button's own click handler — a deferred
  // call (even a few ms later via setTimeout) can fall outside what the
  // browser still counts as "the result of a user gesture," and autoplay
  // gets blocked again exactly as before.
  const enter = () => {
    setEntered(true);
    if (!wasPreviouslyPaused()) {
      audioRef.current
        ?.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false)); // no audio file yet, or still declined
    }
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      try { localStorage.setItem(STORAGE_KEY, 'true'); } catch { /* ignore */ }
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          try { localStorage.setItem(STORAGE_KEY, 'false'); } catch { /* ignore */ }
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />

      {!entered && (
        <div className="mandir-gate" role="dialog" aria-modal="true" aria-label="Welcome to Heritage Connect">
          <div className="mandir-gate__bg" style={{ backgroundImage: `url(${heroLalMandir})` }} />
          <div className="mandir-gate__scrim" />
          <div className="mandir-gate__inner">
            <img src={ahimsaLogo} alt="" className="mandir-gate__logo" />
            <span className="mandir-gate__eyebrow">Shri Digambar Jain Panchayat</span>
            <h1 className="mandir-gate__title">Heritage Connect</h1>
            <p className="mandir-gate__line">
              Enter with the Namokar Mantra — the first prayer of every Jain, offered before all else.
            </p>
            <button className="btn-saffron mandir-gate__btn" onClick={enter}>
              Begin Darshan 🙏
            </button>
          </div>
        </div>
      )}

      <div className="mandir-audio-bar" role="group" aria-label="Namokar Mantra playback">
        <button
          className="mandir-audio-bar__btn"
          onClick={toggle}
          aria-label={isPlaying ? 'Pause the Namokar Mantra' : 'Play the Namokar Mantra'}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4.5v15l13-7.5-13-7.5z" />
            </svg>
          )}
        </button>
        <span className="mandir-audio-bar__label">Namokar Mantra</span>
      </div>
    </>
  );
}
