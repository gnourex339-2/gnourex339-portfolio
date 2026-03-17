import { LangProvider } from './hooks/useLang';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LangProvider>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="noise-overlay" />
        <div className="grid-bg" />
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
