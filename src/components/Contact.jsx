import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../hooks/useLang';
import { bio } from '../data/portfolio';
import { SectionLabel } from './About';

export default function Contact() {
  const { lang } = useLang();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const links = [
    { label: 'Email', value: bio.email, href: `mailto:${bio.email}`, icon: '✉' },
    { label: 'Téléphone', value: bio.phone, href: `tel:${bio.phone}`, icon: '☎' },
    { label: 'GitHub', value: bio.githubHandle, href: bio.github, icon: '⎇' },
    { label: 'Location', value: bio.location, href: '#', icon: '◎' },
  ];

  return (
    <section id="contact" ref={ref} style={{
      padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel label="04 — Contact" />

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '5rem', marginTop: '3rem', alignItems: 'center',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--display)', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.03em', lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}>
                {lang === 'en'
                  ? <><span style={{ color: 'var(--accent)' }}>Let's</span> build<br />something.</>
                  : <><span style={{ color: 'var(--accent)' }}>Construisons</span><br />quelque chose.</>
                }
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.88rem', maxWidth: '360px' }}>
                {lang === 'en'
                  ? `Open to internship opportunities, collaborative projects, and interesting conversations about tech, cybersecurity, or crypto.`
                  : `Disponible pour des stages, projets collaboratifs, ou conversations sur la tech, la cybersécurité ou la crypto.`
                }
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  data-hover
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'var(--bg3)', border: '1px solid var(--border)',
                    borderRadius: '8px', padding: '1rem 1.5rem',
                    cursor: 'none', textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.background = 'var(--accent-dim)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.background = 'var(--bg3)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.1rem', width: '24px', textAlign: 'center' }}>{link.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{link.label}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--accent)' }}>{link.value}</div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.8rem' }}>→</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
