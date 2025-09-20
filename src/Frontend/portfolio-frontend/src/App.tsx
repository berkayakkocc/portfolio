import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
