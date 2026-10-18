import React, { useRef, useState, useEffect } from 'react';
import { DESTINATIONS } from '../data/travelData';
import { ChevronLeft, ChevronRight, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DestinationSlider({ onSelectDestination }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll to update active pagination dot
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    if (clientWidth > 0) {
      const idx = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveIndex(Math.min(idx, DESTINATIONS.length - 1));
    }
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="destinations" className="py-8 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Saurashtra Circuit Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Curated Destination Stories
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1 max-w-xl">
              Swipe across Somnath, Sasan Gir, Diu & Dwarka. Every destination coordinated with local cab and hotel hosts.
            </p>
          </div>

          {/* Desktop/Tablet Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/90 text-white flex items-center justify-center hover:border-amber-500 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous destination"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(DESTINATIONS.length - 1, activeIndex + 1))}
              disabled={activeIndex === DESTINATIONS.length - 1}
              className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/90 text-white flex items-center justify-center hover:border-amber-500 hover:text-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next destination"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* SWIPEABLE CARD CONTAINER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-1 -mx-4 sm:mx-0 px-4 sm:px-0"
        >
          {DESTINATIONS.map((dest, idx) => (
            <div
              key={dest.id}
              className="flex-shrink-0 w-[84vw] max-w-[340px] sm:w-auto snap-center group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={dest.image}
                  alt={dest.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Distance Badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-1 rounded-full text-[11px] font-medium text-amber-300 flex items-center gap-1.5 shadow-md">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{dest.distance}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-2 py-1 rounded-md text-[10px] font-medium text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span>{dest.duration}</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium truncate drop-shadow">
                    {dest.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {dest.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                    Must Experience:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {dest.tags.slice(0, 4).map((tag, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-1 text-[11px] text-slate-300 truncate">
                        <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary Snippet */}
                <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-200">Host Itinerary: </span>
                  {dest.itineraryHighlight}
                </div>

                {/* Touch CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectDestination && onSelectDestination(dest.name)}
                  className="w-full mt-2 py-3 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 tap-bounce shadow-sm"
                >
                  <span>Plan Trip to {dest.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mt-2">
          {DESTINATIONS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-6 bg-amber-500' : 'w-2 bg-slate-700'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
