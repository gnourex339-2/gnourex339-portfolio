import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../hooks/useLang';

const navLinks = [
  { id: 'about', en: 'About', fr: 'À propos' },
  { id: 'skills', en: 'Skills', fr: 'Compétences' },
  { id: 'projects', en: 'Projects', fr: 'Projets' },
  { id: 'contact', en: 'Contact', fr: 'Contact' },
];

export default function Navbar() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          height: '64px',
          background: scrolled ? 'rgba(8,10,14,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          data-hover
          style={{
            background: 'none', border: 'none', cursor: 'none',
            fontFamily: 'var(--display)', fontWeight: 800, fontSize: '1.1rem',
            color: 'var(--accent)', letterSpacing: '-0.02em',
          }}
        >
          AM<span style={{ color: 'var(--text)' }}>.</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              data-hover
              style={{
                background: 'none', border: 'none', cursor: 'none',
                color: 'var(--text-muted)', fontSize: '0.78rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'color 0.2s',
                fontFamily: 'var(--mono)',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link[lang]}
            </button>
          ))}

          {/* Lang toggle */}
          <button
            onClick={toggle}
            data-hover
            style={{
              background: 'none', border: '1px solid var(--border)',
              borderRadius: '4px', cursor: 'none',
              color: 'var(--accent)', fontSize: '0.72rem',
              letterSpacing: '0.1em', padding: '4px 10px',
              fontFamily: 'var(--mono)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--accent-dim)'; e.target.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.borderColor = 'var(--border)'; }}
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
