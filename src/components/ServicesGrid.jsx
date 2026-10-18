import React from 'react';
import { SERVICES } from '../data/travelData';
import { Car, Hotel, Utensils, Compass, Check, ArrowRight, PhoneCall } from 'lucide-react';

const ICON_MAP = {
  Car,
  Hotel,
  Utensils,
  Compass
};

export default function ServicesGrid({ onBookService }) {
  return (
    <section id="services" className="py-8 sm:py-16 bg-slate-950/60 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-2">
            <span>Verified Local Travel Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            We Take Care of Everything
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            "बस एक कॉल... बाकी पूरी व्यवस्था हमारी।" Focus entirely on your blessings while our on-ground team manages your logistics.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((serv) => {
            const Icon = ICON_MAP[serv.icon] || Car;
            return (
              <div
                key={serv.id}
                className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-lg group hover:-translate-y-1"
              >
                <div>
                  {/* Service Header with Icon & Thumbnail */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    {serv.image && (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-800">
                        <img
                          src={serv.image}
                          alt={serv.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {serv.title}
                  </h3>
                  <div className="text-xs text-amber-300/80 font-medium mb-3">
                    {serv.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {serv.desc}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2 mb-4 pt-3 border-t border-slate-800/80">
                    {serv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Tap Action */}
                <button
                  type="button"
                  onClick={() => onBookService && onBookService(serv.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-amber-500 border border-slate-700 hover:border-amber-400 text-slate-200 hover:text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 tap-bounce"
                >
                  <span>Book {serv.title.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Help Banner */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-amber-600/20 via-amber-500/15 to-transparent border border-amber-500/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
              🕉️
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Need customized arrangements or train pickup at Veraval?
              </h4>
              <p className="text-xs text-slate-300">
                Call our local coordinator directly at <strong className="text-amber-400 font-mono">6359798896</strong>. No middlemen, zero commission markup.
              </p>
            </div>
          </div>

          <a
            href="tel:6359798896"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call 6359798896</span>
          </a>
        </div>
      </div>
    </section>
  );
}
