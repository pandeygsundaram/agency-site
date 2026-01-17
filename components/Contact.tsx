import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import { getCalApi } from "@calcom/embed-react";
import { Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view", "theme": "auto"});
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', description: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="connect" className="py-32 px-6 md:px-12 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header Section */}
        <FadeIn className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase">Get in Touch</h2>
            <p className="text-muted font-sans text-lg">
                Ready to build something? Let's discuss your project.
            </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-24">
            
            {/* Left Side - Book a Call */}
            <FadeIn delay={0.1} className="flex-1 w-full max-w-sm h-full">
                <div className="h-full bg-card border border-border p-8 relative rounded-sm group hover:border-muted transition-colors shadow-sm flex flex-col justify-between">
                    <div className="mb-6">
                        <Calendar size={32} className="text-foreground mb-4" />
                        <h3 className="text-xl font-medium text-foreground mb-2">Schedule a Call</h3>
                        <p className="text-sm text-muted font-sans leading-relaxed">
                            Jump on a 15-minute sync to discuss your ideas and scope.
                        </p>
                    </div>
                    <button 
                        data-cal-link="samosa.wtf/15min"
                        data-cal-config='{"layout":"month_view", "theme": "auto"}'
                        className="w-full flex items-center justify-center gap-3 bg-foreground text-background px-6 py-3 text-xs uppercase font-bold hover:opacity-80 transition-colors rounded-sm mt-4"
                    >
                        <span>Select Time</span>
                    </button>
                </div>
            </FadeIn>

            {/* Separator */}
            <FadeIn delay={0.2} className="hidden lg:flex flex-col items-center justify-center self-stretch">
                <div className="w-px h-full bg-border min-h-[300px]"></div>
            </FadeIn>

            {/* Right Side - Form */}
            <FadeIn delay={0.3} className="flex-1 w-full max-w-sm h-full">
                <div className="h-full bg-background p-1 relative flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="group border-b border-border focus-within:border-foreground transition-colors">
                            <label htmlFor="name" className="block text-[10px] font-mono uppercase text-muted mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-transparent py-2 text-foreground focus:outline-none font-sans placeholder-muted/50"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="group border-b border-border focus-within:border-foreground transition-colors">
                            <label htmlFor="email" className="block text-[10px] font-mono uppercase text-muted mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-transparent py-2 text-foreground focus:outline-none font-sans placeholder-muted/50"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="group border-b border-border focus-within:border-foreground transition-colors">
                            <label htmlFor="description" className="block text-[10px] font-mono uppercase text-muted mb-1">Message</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                required
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full bg-transparent py-2 text-foreground focus:outline-none font-sans resize-none placeholder-muted/50"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        
                        <div className="flex justify-end mt-4">
                            <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'success'}
                            className="flex items-center gap-2 text-foreground hover:text-muted transition-colors disabled:opacity-50"
                            >
                                <span className="text-xs font-mono uppercase tracking-widest">
                                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent' : 'Send Message'}
                                </span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;