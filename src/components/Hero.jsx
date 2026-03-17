import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang';
import { bio } from '../data/portfolio';

const TERMINAL_LINES_EN = [
  '$ whoami',
  '> benzerga amine — full-stack / miage',
  '$ ls projects/',
  '> parking-api/  snakerot/  coupedumondetickets/  agoraedate/',
  '$ cat interests.txt',
  '> typescript • python • react • bun • hono',
  '$ _',
];
const TERMINAL_LINES_FR = [
  '$ whoami',
  '> benzerga amine — full-stack / miage',
  '$ ls projets/',
  '> parking-api/  snakerot/  coupedumonde/  agoraedate/',
  '$ cat interets.txt',
  '> typescript • python • react • bun • hono',
  '$ _',
];

function GlitchText({ text }) {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{
        fontFamily: 'var(--display)', fontWeight: 800,
        fontSize: 'clamp(3rem, 8vw, 7rem)',
        letterSpacing: '-0.04em',
        color: 'var(--text)',
        position: 'relative',
        display: 'inline-block',
      }}>
        {text}
        {glitch && (
          <>
            <span style={{
              position: 'absolute', top: 0, left: 0,
              color: 'var(--accent)', clipPath: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)',
              transform: 'translateX(-3px)', mixBlendMode: 'screen',
              pointerEvents: 'none',
            }}>{text}</span>
            <span style={{
              position: 'absolute', top: 0, left: 0,
              color: 'var(--red)', clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)',
              transform: 'translateX(3px)', mixBlendMode: 'screen',
              pointerEvents: 'none',
            }}>{text}</span>
          </>
        )}
      </span>
    </span>
  );
}

function Terminal({ lang }) {
  const lines = lang === 'en' ? TERMINAL_LINES_EN : TERMINAL_LINES_FR;
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    setDisplayed([]);
    setCurrentLine(0);
    setCurrentChar(0);
  }, [lang]);

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    if (currentChar < line.length) {
      const tid = setTimeout(() => setCurrentChar(c => c + 1), 28 + Math.random() * 20);
      return () => clearTimeout(tid);
    } else {
      const tid = setTimeout(() => {
        setDisplayed(d => [...d, line]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 180);
      return () => clearTimeout(tid);
    }
  }, [currentLine, currentChar, lines]);

  const typing = currentLine < lines.length ? lines[currentLine].slice(0, currentChar) : '';

  return (
    <div style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: '8px', overflow: 'hidden',
      fontFamily: 'var(--mono)', fontSize: '0.82rem',
      boxShadow: '0 0 40px rgba(88,229,160,0.05)',
      maxWidth: '440px', width: '100%',
    }}>
      {/* Window bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '10px 14px', background: 'var(--bg3)',
        borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.72rem' }}>~/portfolio</span>
      </div>
      {/* Content */}
      <div style={{ padding: '16px', minHeight: '180px' }}>
        {displayed.map((line, i) => (
          <div key={i} style={{
            color: line.startsWith('$') ? 'var(--accent)' : line.startsWith('>') ? 'var(--text)' : 'var(--text-muted)',
            marginBottom: '2px',
          }}>{line}</div>
        ))}
        {currentLine < lines.length && (
          <div style={{ color: typing.startsWith('$') ? 'var(--accent)' : 'var(--text)' }}>
            {typing}<span style={{ animation: 'blink 1s infinite', borderLeft: '2px solid var(--accent)', marginLeft: '1px' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: 'clamp(6rem, 15vh, 10rem) clamp(1.5rem, 5vw, 4rem) 4rem',
      overflow: 'hidden',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%',
        width: '60vw', height: '60vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(88,229,160,0.06) 0%, transparent 70%)',
        transform: `translateY(${scrollY * 0.15}px)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        width: '100%', maxWidth: '1200px', margin: '0 auto',
      }}>
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '0.78rem',
              color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase',
              display: 'block', marginBottom: '1.5rem',
            }}>
              {lang === 'en' ? '// available for opportunities' : '// disponible pour des opportunités'}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlitchText text="Amine" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 600,
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--text-muted)', marginTop: '0.25rem',
              letterSpacing: '-0.02em',
            }}>
              {lang === 'en' ? lang === 'en' ? bio.title : bio.titleFR : lang === 'en' ? bio.title : bio.titleFRFR}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              color: 'var(--text-muted)', maxWidth: '480px',
              marginTop: '1.5rem', lineHeight: 1.8, fontSize: '0.88rem',
            }}
          >
            {lang === 'en' ? bio.description : bio.descriptionFR}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
          >
            <button
              data-hover
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'var(--accent)', color: '#000',
                border: 'none', borderRadius: '4px',
                padding: '12px 28px', fontFamily: 'var(--mono)',
                fontSize: '0.82rem', fontWeight: 700,
                cursor: 'none', letterSpacing: '0.05em',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px var(--accent-glow)'; }}
              onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = 'none'; }}
            >
              {lang === 'en' ? 'View Projects' : 'Voir les projets'}
            </button>
            <a
              href={`mailto:${bio.email}`}
              data-hover
              style={{
                background: 'none', color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: '4px', padding: '12px 28px',
                fontFamily: 'var(--mono)', fontSize: '0.82rem',
                cursor: 'none', letterSpacing: '0.05em',
                transition: 'border-color 0.2s, background 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--accent-dim)'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'none'; }}
            >
              {lang === 'en' ? 'Contact' : 'Me contacter'}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', alignItems: 'center' }}
          >
            {['IDMC', 'Université de Lorraine', 'Nancy, FR'].map((tag, i) => (
              <span key={i} style={{
                fontSize: '0.72rem', color: 'var(--text-muted)',
                letterSpacing: '0.05em',
              }}>
                {i > 0 && <span style={{ marginRight: '1.5rem', color: 'var(--border-hover)' }}>·</span>}
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Terminal lang={lang} />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}
      >
        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
