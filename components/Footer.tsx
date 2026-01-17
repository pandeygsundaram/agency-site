import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
          <h3 className="text-2xl font-bold tracking-widest text-foreground uppercase flex items-center gap-2">
            <span className="text-muted">&gt;</span>
            Samosa_Digital
            <span className="animate-pulse">_</span>
          </h3>
          
          <div className="flex gap-8">
             <a href="#about" className="text-xs font-mono uppercase text-muted hover:text-foreground transition-colors">[ About ]</a>
             <a href="#work" className="text-xs font-mono uppercase text-muted hover:text-foreground transition-colors">[ Work ]</a>
             <a href="#connect" className="text-xs font-mono uppercase text-muted hover:text-foreground transition-colors">[ Connect ]</a>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4">
              <p className="text-[10px] text-muted font-mono uppercase">
                  System_Build: v2.4.0
              </p>
              <p className="text-[10px] text-muted font-mono uppercase">
                  © {new Date().getFullYear()} Samosa Digital. All rights reserved.
              </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;