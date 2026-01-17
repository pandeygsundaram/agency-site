import React from 'react';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  const devServices = [
    "Android App Development",
    "iOS App Development",
    "Websites & Web Platforms",
    "Shopify & E-commerce",
    "Backend Systems & APIs",
    "Deployment & Infrastructure",
  ];

  const creativeServices = [
    "Video Editing",
    "Short-form & Long-form Content",
    "Content Strategy"
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-background border-b border-border relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
             <div className="flex items-end justify-between border-b border-border pb-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Capabilities</h2>
             </div>
             <p className="text-muted font-sans text-lg max-w-xl">
                Comprehensive digital solutions driven by modern tech stacks and AI workflows.
             </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Development Column */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-border p-10 h-full hover:border-muted transition-colors rounded-sm shadow-sm">
                <h3 className="text-xl font-mono text-foreground mb-10 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Development
                </h3>
                <ul className="space-y-6">
                {devServices.map((service, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-border pb-4 group/item">
                        <span className="text-muted font-sans text-lg group-hover/item:text-foreground transition-colors">{service}</span>
                    </li>
                ))}
                </ul>
            </div>
          </FadeIn>

          {/* Creative Column */}
          <FadeIn delay={0.2} className="flex flex-col gap-8">
            <div className="bg-card border border-border p-10 flex-grow hover:border-muted transition-colors rounded-sm shadow-sm">
                <h3 className="text-xl font-mono text-foreground mb-10 uppercase tracking-widest flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Creative
                </h3>
                <ul className="space-y-6">
                {creativeServices.map((service, idx) => (
                    <li key={idx} className="flex items-center justify-between border-b border-border pb-4 group/item">
                        <span className="text-muted font-sans text-lg group-hover/item:text-foreground transition-colors">{service}</span>
                    </li>
                ))}
                </ul>
            </div>
            
            <div className="bg-card border border-border p-8 flex items-center gap-6 rounded-sm shadow-sm">
               <div className="font-mono text-xs text-foreground border border-border px-2 py-1 rounded">AI</div>
               <p className="text-sm text-muted font-sans leading-relaxed">
                 We deploy <span className="text-foreground">AI-driven workflows</span> to accelerate delivery without compromising quality.
               </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;