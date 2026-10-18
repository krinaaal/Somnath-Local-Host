import React from 'react';
import { PACKAGES } from '../data/travelData';
import { Clock, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function PackagesSection({ onSelectPackage }) {
  return (
    <section id="packages" className="py-8 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recommended Saurashtra Itineraries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Popular Tour Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Fully customizable packages curated with private AC cab, handpicked verified hotels, and local darshan coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl relative ${
                idx === 1
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/60 shadow-amber-500/10 sm:-translate-y-2'
                  : 'bg-slate-900/80 border border-slate-800'
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] tracking-wider uppercase px-3 py-0.5 rounded-full shadow-md">
                  ★ Most Recommended
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-amber-400 font-mono">
                    {pkg.tag}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] bg-slate-950/80 px-2 py-0.5 rounded-md text-slate-300 font-medium">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-950/50 p-2 rounded-lg mb-4 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{pkg.route}</span>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Package Inclusions:
                  </div>
                  {pkg.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] text-slate-400 italic mb-3">
                  Best for: {pkg.idealFor}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPackage && onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all tap-bounce ${
                    idx === 1
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200'
                  }`}
                >
                  <span>Customize This Tour</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
