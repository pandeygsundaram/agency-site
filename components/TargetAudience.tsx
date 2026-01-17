import React, { useEffect, useState } from 'react';
import FadeIn from './FadeIn';
import Cal, { getCalApi } from "@calcom/embed-react";
import { ChevronDown, ChevronUp } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="connect" className="py-32 px-6 md:px-12 bg-[#FAFAFA] border-t border-zinc-100">
      <div className="max-w-7xl mx-auto text-center">
        <FadeIn>
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-6 font-medium">Connect</p>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-black mb-10 tracking-tight">
            JOIN THE <span className="italic font-normal">ROSTER.</span>
          </h2>
          
          <p className="text-xl text-zinc-600 mb-12 font-light max-w-xl mx-auto leading-relaxed">
             We are currently accepting new US-based clients for development and content partnerships.
          </p>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-xs uppercase tracking-[0.25em] hover:bg-zinc-800 transition-all"
          >
            {isOpen ? 'Close Calendar' : 'Schedule Consultation'}
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </FadeIn>

        {/* Collapsible Calendar Area */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'max-h-[800px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'}`}>
            <div className="w-full max-w-4xl mx-auto h-[600px] border border-zinc-200 bg-white">
              <Cal 
                namespace="15min"
                calLink="samosa.wtf/15min"
                style={{width:"100%", height:"100%", overflow:"scroll"}}
                config={{"layout":"month_view"}}
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;