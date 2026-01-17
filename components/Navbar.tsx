import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Scroll Logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Theme Logic - Default to Light
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border' 
        : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* Logo - Modern Tech */}
        <div className="z-50">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-foreground rounded-full"></div>
            <span>SAMOSA DIGITAL</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
                <a 
                    key={link.name}
                    href={link.href} 
                    className="font-sans text-sm font-medium text-muted hover:text-foreground transition-colors tracking-wide"
                >
                    {link.name}
                </a>
            ))}
             
             {/* Theme Toggle */}
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted/10 transition-colors text-foreground"
              aria-label="Toggle Theme"
             >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>

             <button 
                data-cal-link="samosa.wtf/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view", "theme": "auto"}'
                className="font-mono text-xs bg-foreground text-background px-5 py-2 hover:opacity-80 transition-all font-medium rounded-sm"
             >
                BOOK A CALL
             </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden z-50 flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-muted transition-colors"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
            className="text-foreground hover:text-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-foreground hover:text-muted transition-colors font-sans tracking-tight"
              >
                {link.name}
              </a>
            ))}
             <button 
              data-cal-link="samosa.wtf/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view", "theme": "auto"}'
              className="mt-8 font-mono text-sm bg-foreground text-background px-8 py-4 font-bold rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK A CALL
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;