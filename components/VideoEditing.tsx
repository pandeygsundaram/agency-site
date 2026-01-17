import React from 'react';
import FadeIn from './FadeIn';
import { Play } from 'lucide-react';

const VideoEditing: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-background relative border-b border-border overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Image Side */}
            <FadeIn>
                 <a 
                    href="https://deveditz.online"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative aspect-video bg-card border border-border overflow-hidden group cursor-pointer rounded-sm"
                 >
                     <img 
                        src="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop" 
                        alt="Editing Timeline"
                        className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                     />
                     
                     {/* Play Button Overlay */}
                     <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="w-16 h-16 bg-background/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play size={24} className="ml-1 text-white fill-white" />
                        </div>
                     </div>
                 </a>
            </FadeIn>

            {/* Text Side */}
            <FadeIn delay={0.2}>
                <p className="text-muted font-mono text-xs uppercase tracking-widest mb-6">Visual Sequencing</p>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                    Motion &<br/>
                    <span className="text-muted">Visuals.</span>
                </h2>
                <p className="text-lg text-muted font-light leading-relaxed mb-10 font-sans">
                    Dedicated video editing unit. We craft high-retention short-form and cinematic long-form content that tells a story.
                </p>
                <a 
                    href="https://deveditz.online" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground hover:text-muted transition-colors border-b border-foreground pb-1 hover:border-muted"
                >
                    View Video Portfolio
                </a>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default VideoEditing;