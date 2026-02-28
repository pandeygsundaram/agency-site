import React from "react";
import { Star, Rocket, Zap, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Top Trust Badge */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 mb-10">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-green-500 fill-green-500" />
            <span className="text-sm font-semibold text-black dark:text-white">
              Trusted by founders
            </span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Excellent 4.9/5
          </span>
        </div>

        {/* Main Typography Header */}
        <h1 className="text-5xl md:text-7xl lg:text-[84px] font-bold tracking-tight leading-[1.15] text-black dark:text-white mb-8">
          <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-1 md:py-2 rounded-2xl md:rounded-3xl relative -rotate-2 top-2 mr-3 shadow-md">
            We Build
          </span>
          & Ship
          <br className="hidden md:block" />
          Scalable
          {/* Inline Icon Bubble */}
          <span className="inline-flex items-center justify-center bg-gray-100 dark:bg-neutral-900 text-black dark:text-white px-4 py-1 md:py-2 rounded-2xl md:rounded-3xl mx-3 align-middle border border-gray-200 dark:border-neutral-800 shadow-sm">
            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-green-500" />
          </span>
          Software
          <br className="hidden md:block" />
          From Idea To
          <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-1 md:py-2 rounded-2xl md:rounded-3xl relative rotate-2 -top-1 ml-3 shadow-md">
            Scale
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          End-to-end website and app development. From initial concept to
          production-ready deployment for businesses of all sizes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Primary Pill CTA mimicking the reference image */}
          <a
            className="flex items-center p-1.5 bg-black dark:bg-white rounded-full pl-6 hover:scale-105 transition-transform duration-200 shadow-xl"
            href="/#connect"
          >
            <span className="text-white dark:text-black font-semibold text-base mr-4">
              Get in touch
            </span>
            <div className="bg-white dark:bg-black rounded-full p-2.5">
              <Zap className="w-4 h-4 text-black dark:text-white fill-current" />
            </div>
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="flex items-center gap-2 text-black dark:text-white font-semibold hover:opacity-60 transition-opacity"
          >
            View our work <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
