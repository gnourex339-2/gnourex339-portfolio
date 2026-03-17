import { useLang } from '../hooks/useLang';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem clamp(1.5rem, 5vw, 4rem)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--display)', fontWeight: 800, color: 'var(--accent)', fontSize: '1rem' }}>AM.</span>
      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        {lang === 'en'
          ? '© 2025 Amine — Built with React + Vite + Bun'
          : '© 2025 Amine — Construit avec React + Vite + Bun'
        }
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        data-hover
        style={{
          background: 'none', border: '1px solid var(--border)',
          borderRadius: '4px', padding: '6px 14px',
          color: 'var(--text-muted)', fontSize: '0.72rem',
          fontFamily: 'var(--mono)', cursor: 'none',
          letterSpacing: '0.1em', transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)'; }}
        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-muted)'; }}
      >
        ↑ TOP
      </button>
    </footer>
  );
}
