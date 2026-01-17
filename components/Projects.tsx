import React from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  link: string;
  category: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "Renard",
      description: "Live web platform",
      link: "https://renard.live",
      category: "Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      name: "VisaEval",
      description: "Immigration evaluation tool",
      link: "https://visaeval.live",
      category: "Tool",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "SpectraQ",
      description: "Organization website",
      link: "https://www.spectraq.org",
      category: "Site",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
    },
    {
      name: "11ven Store",
      description: "Launching Soon",
      link: "https://www.11ven.store",
      category: "E-comm",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "SnapLay",
      description: "Live on Play Store",
      link: "https://play.google.com/store/search?q=snaplay&c=apps",
      category: "App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mocha Mingle",
      description: "Beta release shop",
      link: "https://www.mochamingle.shop",
      category: "Hybrid",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
                <div>
                     <p className="text-muted font-mono text-xs uppercase tracking-widest mb-2">Selected Work</p>
                     <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase">Live Projects</h2>
                </div>
                 <p className="text-muted font-mono text-xs">2023 — Present</p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                {/* Project Card */}
                <div className="relative aspect-[3/2] overflow-hidden mb-6 bg-card border border-border rounded-sm">
                    <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                     <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} className="text-white" />
                     </div>
                </div>
                
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-medium text-foreground group-hover:text-muted transition-colors">{project.name}</h3>
                        <p className="text-muted font-sans text-sm mt-1">{project.description}</p>
                    </div>
                    <span className="text-[10px] font-mono text-muted uppercase border border-border px-2 py-0.5 rounded-full">{project.category}</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-24 border-t border-border pt-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <p className="text-muted font-mono text-xs uppercase tracking-widest">Additional Demos:</p>
                <div className="flex flex-wrap gap-6">
                    <a href="https://www.linkedin.com/posts/gourav-raut_web3-flutter-solidity-activity-7391909657109413889-amOM" className="text-xs text-foreground hover:text-muted font-mono border-b border-border pb-0.5 transition-colors">Web3 Flutter Demo</a>
                    <a href="https://www.linkedin.com/posts/gourav-raut_mochamingle-flutter-mobileapp-activity-7347181931706404864-UP8X" className="text-xs text-foreground hover:text-muted font-mono border-b border-border pb-0.5 transition-colors">Mocha Mingle Demo</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;