import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import VideoEditing from './components/VideoEditing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground relative overflow-hidden transition-colors duration-300">
      {/* Background Grid - Very Subtle */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.4] pointer-events-none z-0"></div>
      
      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <VideoEditing /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;