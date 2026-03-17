import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let rafId;
    let target = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };

    const onMove = e => {
      target = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const checkHover = e => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(el?.closest('a, button, [data-hover]') != null);
    };

    const animate = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      setTrail({ x: current.x, y: current.y });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', checkHover);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99999,
        left: pos.x, top: pos.y,
        width: clicking ? 6 : 8, height: clicking ? 6 : 8,
        borderRadius: '50%',
        background: 'var(--accent)',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.1s, height 0.1s',
        mixBlendMode: 'difference',
      }} />
      {/* Ring */}
      <div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99998,
        left: trail.x, top: trail.y,
        width: hovering ? 44 : (clicking ? 20 : 32),
        height: hovering ? 44 : (clicking ? 20 : 32),
        borderRadius: '50%',
        border: `1.5px solid ${hovering ? 'var(--accent)' : 'rgba(88,229,160,0.4)'}`,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s, border-color 0.2s',
      }} />
    </>
  );
}
