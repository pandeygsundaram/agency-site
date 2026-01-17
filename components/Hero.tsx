import React from 'react';
import FadeIn from './FadeIn';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-border">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-border pb-6">
            <FadeIn delay={0.1}>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="font-mono text-xs text-muted uppercase tracking-widest">
                        Available for new projects
                    </p>
                </div>
            </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative">
          <h1 className="text-6xl md:text-9xl font-bold text-foreground mb-8 leading-[0.9] tracking-tighter uppercase">
            We Build<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted">and Ship.</span>
          </h1>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            <FadeIn delay={0.3} className="lg:col-span-2">
                <p className="text-xl md:text-2xl text-muted font-light max-w-2xl leading-relaxed font-sans pl-1">
                    End-to-end development and creative services. <br/>
                    From initial idea to production-ready deployment.
                </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col items-start justify-end">
                <a 
                href="#work"
                className="group flex items-center gap-4 text-foreground hover:text-muted transition-colors"
                >
                    <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-foreground transition-colors">
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest">View Work</span>
                </a>
            </FadeIn>
        </div>

        {/* Hero Image / Visualization */}
        <FadeIn delay={0.5} className="mt-24 relative">
            <div className="relative w-full h-[45vh] overflow-hidden bg-card border-t border-border">
               <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
                alt="City Architecture" 
                className="object-cover w-full h-full opacity-40 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
              {/* Subtle Tech Overlay - Adaptive gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 flex gap-8">
                <div>
                    <span className="block font-mono text-[10px] text-muted uppercase mb-1">Location</span>
                    <span className="block font-sans text-sm text-foreground">Global / Remote</span>
                </div>
                <div>
                    <span className="block font-mono text-[10px] text-muted uppercase mb-1">Focus</span>
                    <span className="block font-sans text-sm text-foreground">Product & Scale</span>
                </div>
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;