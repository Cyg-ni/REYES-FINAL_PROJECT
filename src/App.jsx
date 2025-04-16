import { useState } from 'react';
import './App.css';
import './index.css';  
import React from 'react';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="scroll-smooth">
      <main>
        
        <section id="home">
          <AboutMe />
        </section>
        <section id="news">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
          <Education />
        </section>
      </main>
    </div>
  );
}

export default App;
