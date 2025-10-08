import React, { useState } from 'react';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;