import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Activities />
      <Education />
      <Contact />
    </main>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {!loaded && <Loader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
