import React from 'react';
import { FadeIn } from './FadeIn';

export const Qualification: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-stone-100">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-stone-200 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            {/* Left Column */}
            <div className="p-8 md:p-16 lg:p-20 bg-stone-50/30">
              <h3 className="text-sm font-mono uppercase tracking-widest text-stone-900 mb-12">Match</h3>
              <ul className="space-y-8">
                {[
                  "Ihr seid ein KMU mit Ambition",
                  "Die Geschäftsleitung ist involviert",
                  "Ihr versteht KI als Dauerlauf"
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl font-light text-stone-900 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="p-8 md:p-16 lg:p-20 bg-white opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              <h3 className="text-sm font-mono uppercase tracking-widest text-stone-500 mb-12">No Match</h3>
              <ul className="space-y-8">
                {[
                  "Ihr wollt nur Tools vergleichen",
                  "Ihr sucht einen einmaligen Workshop",
                  "Entscheidungen dauern ewig"
                ].map((item, i) => (
                  <li key={i} className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl font-light text-stone-400 line-through decoration-stone-300 decoration-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};