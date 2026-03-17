import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../hooks/useLang';
import { bio, timeline } from '../data/portfolio';

function useReveal() {
  return useInView({ threshold: 0.15, triggerOnce: true });
}

export default function About() {
  const { lang } = useLang();
  const [ref, inView] = useReveal();

  return (
    <section id="about" ref={ref} style={{
      padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)',
      maxWidth: '1200px', margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <SectionLabel label={lang === 'en' ? '01 — About' : '01 — À propos'} />

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '5rem', marginTop: '3.5rem', alignItems: 'start',
        }}>
          {/* Text */}
          <div>
            <h2 style={{
              fontFamily: 'var(--display)', fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.03em', lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}>
              {lang === 'en'
                ? <>Building at the<br /><span style={{ color: 'var(--accent)' }}>intersection</span><br />of mind & machine.</>
                : <>À l'<span style={{ color: 'var(--accent)' }}>intersection</span><br />de l'esprit<br />et de la machine.</>
              }
            </h2>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.88rem', maxWidth: '420px' }}>
              {lang === 'en'
                ? `I'm a Master 1 student at IDMC — where computer science meets cognitive science. I build compilers, model databases, design interfaces, and study how humans and machines understand language and structure.`
                : `Je suis étudiant en Master 1 à l'IDMC — là où l'informatique rencontre les sciences cognitives. Je construis des compilateurs, modélise des bases de données, conçois des interfaces, et j'étudie comment les humains et les machines comprennent le langage et la structure.`
              }
            </p>

            <div style={{
              marginTop: '2rem',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
            }}>
              {[
                { label: lang === 'en' ? 'School' : 'École', value: 'IDMC' },
                { label: lang === 'en' ? 'Level' : 'Niveau', value: 'Master 1' },
                { label: lang === 'en' ? 'Location' : 'Lieu', value: 'Nancy, FR' },
                { label: lang === 'en' ? 'Focus' : 'Domaine', value: lang === 'en' ? 'Cog. Sci. + CS' : 'Sci. Cog. + Info' },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '14px 16px',
                }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              {lang === 'en' ? 'Timeline' : 'Parcours'}
            </div>
            <div style={{ position: 'relative' }}>
              {/* Line */}
              <div style={{
                position: 'absolute', left: '40px', top: 0, bottom: 0,
                width: '1px', background: 'var(--border)',
              }} />
              <motion.div style={{
                position: 'absolute', left: '40px', top: 0,
                width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)',
                transformOrigin: 'top',
              }}
                animate={inView ? { height: '100%' } : { height: '0%' }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem', position: 'relative' }}
                >
                  <div style={{
                    minWidth: '80px', textAlign: 'right',
                    fontFamily: 'var(--mono)', fontSize: '0.78rem',
                    color: 'var(--accent)', fontWeight: 700,
                  }}>{item.year}</div>
                  {/* Dot */}
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--bg)', border: '2px solid var(--accent)',
                    flexShrink: 0, zIndex: 1,
                    boxShadow: '0 0 8px var(--accent-glow)',
                  }} />
                  <div style={{ fontSize: '0.88rem', color: 'var(--text)' }}>
                    {lang === 'en' ? item.event : item.eventFR}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function SectionLabel({ label }) {
  return (
    <div style={{
      fontFamily: 'var(--mono)', fontSize: '0.72rem',
      color: 'var(--accent)', letterSpacing: '0.2em',
      textTransform: 'uppercase', marginBottom: '0.5rem',
      display: 'flex', alignItems: 'center', gap: '0.75rem',
    }}>
      <span style={{ display: 'block', width: 24, height: 1, background: 'var(--accent)' }} />
      {label}
    </div>
  );
}
