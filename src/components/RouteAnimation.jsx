import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

const ROUTE_STOPS = [
  {
    id: 'somnath',
    name: 'Somnath',
    label: '1st Jyotirlinga (Base)',
    distFromStart: '0 km',
    driveTime: 'Start Point',
    highlight: 'Coastal Mandir & Evening Aarti',
    xDesktop: 12,
    yDesktop: 65,
    yMobile: 12
  },
  {
    id: 'gir',
    name: 'Sasan Gir',
    label: 'Asiatic Lion Safari',
    distFromStart: '45 km',
    driveTime: '1.0 hr drive',
    highlight: 'Open Gypsy Jungle Safari',
    xDesktop: 38,
    yDesktop: 35,
    yMobile: 38
  },
  {
    id: 'diu',
    name: 'Diu Island',
    label: 'Portuguese Beach Fort',
    distFromStart: '125 km',
    driveTime: '2.0 hrs drive',
    highlight: 'Nagoa Beach & Naida Caves',
    xDesktop: 65,
    yDesktop: 75,
    yMobile: 65
  },
  {
    id: 'dwarka',
    name: 'Dwarka',
    label: 'Lord Krishna Golden City',
    distFromStart: '340 km',
    driveTime: '4.5 hrs coastal drive',
    highlight: 'Jagat Mandir & Bet Dwarka',
    xDesktop: 90,
    yDesktop: 30,
    yMobile: 90
  }
];

export default function RouteAnimation({ onSelectDestination }) {
  const [activeStop, setActiveStop] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto cycle stops smoothly every 3.5s unless user tapped
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStop((prev) => (prev + 1) % ROUTE_STOPS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = ROUTE_STOPS[activeStop];

  return (
    <div className="w-full bg-slate-900/80 border border-amber-500/20 rounded-2xl p-4 sm:p-6 backdrop-blur-md relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium mb-1">
            <Navigation className="w-3.5 h-3.5" />
            <span>Interactive Saurashtra Circuit</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Animated Vehicle & Coastal Route
          </h3>
          <p className="text-xs text-slate-400">
            Tap any destination marker to inspect distance & plan your cab journey
          </p>
        </div>

        {/* Live Distance Indicator */}
        <div className="flex items-center gap-3 bg-slate-950/70 border border-slate-800 px-3 py-1.5 rounded-xl text-xs">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>{current.driveTime}</span>
          </div>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 font-medium">{current.distFromStart} from Somnath</span>
        </div>
      </div>

      {/* MOBILE VERTICAL ROUTE (Screen < 640px) */}
      <div className="block sm:hidden relative my-3 pl-2 pr-1">
        <div className="relative flex flex-col space-y-4">
          {/* Vertical Connecting Track */}
          <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600 rounded-full opacity-30" />
          
          {/* Active Highlight Track */}
          <div 
            className="absolute left-[19px] top-4 w-1 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full transition-all duration-500 ease-out"
            style={{ height: `${(activeStop / (ROUTE_STOPS.length - 1)) * 80}%` }}
          />

          {/* Stops List */}
          {ROUTE_STOPS.map((stop, index) => {
            const isSelected = activeStop === index;
            return (
              <button
                key={stop.id}
                type="button"
                onClick={() => {
                  setActiveStop(index);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-start text-left w-full p-2.5 rounded-xl transition-all duration-200 tap-bounce ${
                  isSelected
                    ? 'bg-amber-500/15 border border-amber-500/40 shadow-sm'
                    : 'bg-slate-950/40 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Pin / Marker */}
                <div className="relative mr-3 flex-shrink-0 z-10 mt-0.5">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition-transform ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 scale-110 shadow-md ring-4 ring-amber-500/20'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {isSelected ? '🚗' : index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`font-bold text-sm truncate ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                      {stop.name}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono flex-shrink-0">
                      {stop.distFromStart}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium truncate">
                    {stop.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                    {stop.highlight}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* TABLET & DESKTOP HORIZONTAL ROUTE (Screen >= 640px) */}
      <div className="hidden sm:block relative my-6 px-4">
        {/* SVG Route Path with moving cab */}
        <div className="relative h-28 w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Background Highway line */}
            <path
              d="M 50 60 Q 250 15, 380 50 T 650 70 T 950 45"
              fill="none"
              stroke="#334155"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />

            {/* Glowing Active Highway */}
            <path
              d="M 50 60 Q 250 15, 380 50 T 650 70 T 950 45"
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          {/* Interactive Destination Nodes */}
          {ROUTE_STOPS.map((stop, index) => {
            const isSelected = activeStop === index;
            // Coordinates matching the curve
            const positions = [
              { left: '5%', top: '35%' },
              { left: '38%', top: '25%' },
              { left: '65%', top: '45%' },
              { left: '92%', top: '20%' },
            ];
            const pos = positions[index];

            return (
              <div
                key={stop.id}
                style={{ left: pos.left, top: pos.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
                onClick={() => {
                  setActiveStop(index);
                  setIsAutoPlaying(false);
                }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 tap-bounce ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 scale-125 shadow-lg shadow-amber-500/40 ring-4 ring-amber-400/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {isSelected ? '🚗' : <MapPin className="w-5 h-5 text-amber-400" />}
                </div>
                <div className="mt-2 text-center whitespace-nowrap">
                  <div className={`text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-slate-300'}`}>
                    {stop.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {stop.distFromStart}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Stop Detail Bar & Direct CTA */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-950/60 p-3 rounded-xl">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{current.name}: {current.label}</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-1.5 py-0.2 rounded font-normal">
                {current.driveTime}
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              {current.highlight} • Clean AC Chauffeur Cab Available
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectDestination && onSelectDestination(current.name)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-transform active:scale-95"
        >
          <span>Book Cab for {current.name}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
