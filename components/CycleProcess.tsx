import React from 'react';
import { FadeIn } from './FadeIn';
import { Phase } from '../types';

const phases: Phase[] = [
  {
    number: "00",
    title: "Weitblick",
    description: "Management-Inspiration, Klarheit, Leitplanken."
  },
  {
    number: "01",
    title: "Fundament",
    description: "Mindset, Angst abbauen, Themenparkplatz."
  },
  {
    number: "02",
    title: "Fokus",
    description: "Deep Dives in die Fachbereiche."
  },
  {
    number: "03",
    title: "Build",
    description: "Use-Cases priorisieren. Umsetzen. In Routinen bringen."
  },
  {
    number: "04",
    title: "Pulse",
    description: "Updates, Champions, Verankerung."
  }
];

export const CycleProcess: React.FC = () => {
  return (
    <section id="cycle" className="py-32 md:py-48 px-6 md:px-12 bg-stone-50">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                <div className="lg:col-span-4">
                    <span className="block text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">Wie wir arbeiten</span>
                    <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-stone-900 mb-6">Der 12-Monats-Cycle</h2>
                </div>
                <div className="lg:col-span-8 lg:pt-8">
                     <p className="text-xl md:text-2xl font-light text-stone-600 max-w-2xl">
                        Ziel: KI wird so normal wie E-Mail – nur mächtiger.
                    </p>
                </div>
            </div>
        </FadeIn>

        <div className="border-t border-stone-200">
            {phases.map((phase, index) => (
              <FadeIn key={phase.number} delay={index * 100}>
                <div className="group border-b border-stone-200 py-12 md:py-16 transition-colors hover:bg-stone-100/50">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                        <div className="md:col-span-2">
                             <span className="font-mono text-sm text-stone-400 group-hover:text-stone-900 transition-colors">Phase {phase.number}</span>
                        </div>
                        <div className="md:col-span-4">
                            <h3 className="text-3xl md:text-4xl font-normal text-stone-900">{phase.title}</h3>
                        </div>
                        <div className="md:col-span-6">
                            <p className="text-stone-600 font-light text-lg md:text-xl max-w-xl">{phase.description}</p>
                        </div>
                    </div>
                </div>
              </FadeIn>
            ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-12 border border-stone-200 p-8 md:p-12 bg-white">
            <div className="md:col-span-5">
                <h3 className="text-2xl font-normal mb-4 text-stone-900">Umsetzung ohne Dauer-Entscheide</h3>
                <div className="w-12 h-[1px] bg-stone-900 my-6"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
                <p className="text-stone-800 font-light leading-relaxed text-lg">
                In vielen KI-Projekten muss jeder Use Case neu genehmigt werden. Im AI Cycle nicht.
                </p>
                <p className="text-stone-600 font-light leading-relaxed text-lg">
                Wir definieren zu Beginn einen klaren Umsetzungsrahmen. Innerhalb dieses Rahmens setzen wir um – ohne jedes Mal neu zu verkaufen. Das spart Zeit und schafft Momentum.
                </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};