import React from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-50 py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-32">
             <div className="max-w-4xl">
                 <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95] mb-12">
                  Kein Pitch.<br/>
                  <span className="text-stone-500">Kein Druck.</span>
                </h2>
                <p className="text-xl md:text-2xl font-light text-stone-400 max-w-xl leading-relaxed">
                    Ein ehrliches Gespräch darüber, ob der AI Cycle für euer Unternehmen Sinn macht.
                </p>
             </div>
             
             <div className="flex flex-col items-start lg:items-end gap-2">
                <span className="text-stone-500 text-sm font-mono uppercase tracking-widest">Start ab</span>
                <span className="text-4xl md:text-5xl font-light tracking-tight">CHF 35’000 <span className="text-lg text-stone-600 font-normal">/ Jahr</span></span>
                <span className="text-stone-600 text-xs mt-1">Limitiert auf 10 Plätze</span>
             </div>
          </div>

          <div className="border-t border-stone-800 pt-16">
            <a 
                href="mailto:contact@ai-cycle.ch" 
                className="group flex items-center justify-between w-full py-8 md:py-12 border-b border-stone-800 hover:border-stone-50 transition-colors"
            >
                <span className="text-3xl md:text-6xl font-light group-hover:pl-4 transition-all duration-500">Erstgespräch anfragen</span>
                <ArrowUpRight className="w-12 h-12 md:w-20 md:h-20 text-stone-500 group-hover:text-stone-50 group-hover:rotate-45 transition-all duration-500" strokeWidth={1} />
            </a>
            <p className="mt-8 text-stone-500 font-mono text-sm">
                Wenn wir nicht die Richtigen sind, sagen wir das offen.
            </p>
          </div>
        </FadeIn>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-end text-stone-600 text-sm font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} AI-Cycle</p>
          <div className="flex gap-8 mt-8 md:mt-0">
            <a href="#" className="hover:text-stone-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};