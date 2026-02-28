import React from "react";
import FadeIn from "./FadeIn";
import rome from "@/assets/rome.png";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 bg-background relative border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Text Side */}
          <FadeIn className="order-2 lg:order-1 relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-muted"></div>
              <h2 className="text-xs font-mono tracking-widest text-muted uppercase">
                About Us
              </h2>
            </div>

            <h3 className="text-3xl md:text-5xl font-medium text-foreground mb-8 leading-tight font-sans">
              Rome wasn't built in a day. We ship in one.
            </h3>

            <div className="space-y-6 text-lg font-light text-muted leading-relaxed max-w-md">
              <p>
                We're a small but experienced team of developers and editors
                working end-to-end with clients.
              </p>
              <p>
                From initial idea and planning to development, deployment, and
                iteration — we focus on shipping reliable, scalable products.
              </p>
              <p>Reliable. Scalable. Built to move.</p>
            </div>
          </FadeIn>

          {/* Image Side */}
          <FadeIn className="order-1 lg:order-2">
            <div className="aspect-square relative group">
              <div className="w-full h-full bg-card overflow-hidden relative border border-border rounded-sm">
                <img
                  src={rome}
                  alt="Team Code"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Minimal Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border px-6 py-4 shadow-xl">
                <p className="font-mono text-xs text-foreground uppercase tracking-widest">
                  EST. 2025
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
