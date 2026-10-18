import React, { useState } from 'react';
import TravelCar from './characters/TravelCar';
import AutoRickshaw from './characters/AutoRickshaw';
import TouristBus from './characters/TouristBus';
import GirLion from './characters/GirLion';
import {
  SomnathIllustration,
  DwarkaIllustration,
  DiuIllustration,
  OceanWaves,
  SwayingPalmTree,
  CartoonCloud,
  CartoonBird
} from './characters/NatureElements';
import { MapPin, Navigation, Sparkles, HeartHandshake, ChevronRight, Compass } from 'lucide-react';

const CHAPTERS = [
  {
    id: 'somnath',
    stepNumber: '01',
    name: 'Somnath',
    tagline: 'The First Jyotirlinga by the Sea',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    accentColor: 'from-orange-500 to-amber-500',
    bgTint: 'bg-gradient-to-b from-white via-amber-50/30 to-sky-50/20',
    character: 'TravelCar',
    desc: 'Begin your journey where the sacred waves of the Arabian Sea wash the shores of the first Jyotirlinga. Experience the electric energy of the evening Sandhya Aarti, take a quiet walk on the coastal promenade, and seek holy blessings at Triveni Sangam.',
    highlights: ['First Jyotirlinga Darshan', 'Evening Sound & Light Show', 'Triveni Sangam Holy Dip', 'Bhalka Tirth Krishna Shrine'],
    realPhoto: '/images/destinations/somnath.webp',
    funFact: 'Did you know? No land exists between Somnath seashore and Antarctica along a straight longitudinal line!'
  },
  {
    id: 'dwarka',
    stepNumber: '02',
    name: 'Dwarka',
    tagline: 'Lord Krishna’s Golden Coastal Kingdom',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    accentColor: 'from-sky-500 to-blue-600',
    bgTint: 'bg-gradient-to-b from-white via-sky-50/40 to-teal-50/20',
    character: 'TouristBus',
    desc: 'Travel along the scenic Madhavpur coastal highway to the ancient mokshapuri of Dwarka. Marvel at the grand 52-yard flag atop the 5-story Jagat Mandir, cross the sea by boat to Bet Dwarka, and feel the sea breeze at the Blue Flag certified Shivrajpur beach.',
    highlights: ['Dwarkadhish Jagat Mandir', 'Bet Dwarka Sea Boat Ride', 'Nageshwar Jyotirlinga', 'Shivrajpur Beach Sunset'],
    realPhoto: '/images/destinations/dwarka.webp',
    funFact: 'The magnificent 52-yard flag atop Dwarkadhish temple is ceremoniously changed 5 times every single day!'
  },
  {
    id: 'diu',
    stepNumber: '03',
    name: 'Diu Island',
    tagline: 'Portuguese Coastal Fortress & Beaches',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    accentColor: 'from-teal-500 to-emerald-600',
    bgTint: 'bg-gradient-to-b from-white via-teal-50/40 to-emerald-50/20',
    character: 'AutoRickshaw',
    desc: 'Cross over to the tranquil island of Diu where colonial Portuguese history meets sun-kissed beaches. Climb the ancient cannons of Diu Fort, walk through the surreal sea-carved limestone caverns of Naida Caves, and relax under palm trees at horseshoe-shaped Nagoa Beach.',
    highlights: ['16th-century Portuguese Fort', 'Naida Limestone Sea Caves', 'Nagoa Beach Palm Bay', 'Diu Lighthouse & Sunsets'],
    realPhoto: '/images/destinations/diu.webp',
    funFact: 'Naida Caves feature natural sunlight skylights carved centuries ago by the Portuguese when quarrying stone for the fort.'
  },
  {
    id: 'gir',
    stepNumber: '04',
    name: 'Sasan Gir',
    tagline: 'The Sole Haven of the Asiatic Lion',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentColor: 'from-emerald-500 to-green-600',
    bgTint: 'bg-gradient-to-b from-white via-emerald-50/40 to-amber-50/20',
    character: 'GirLion',
    desc: 'Leave the sea behind and enter the golden deciduous teak forests of Gir National Park. Ride in open 4x4 Gypsies through dusty jungle trails with forest trackers to spot the majestic Asiatic Lion in his only natural habitat on Earth.',
    highlights: ['Open 4x4 Gypsy Forest Safari', 'Devalia Safari Park', 'Maldhari Pastoral Culture', 'Authentic Farm-Fresh Dining'],
    realPhoto: '/images/destinations/gir.webp',
    funFact: 'The Asiatic Lion lives only in Gujarat, where local Maldhari communities have harmoniously coexisted with them for centuries!'
  }
];

export default function RoadTripJourney({ onSelectDestination }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="journey" className="py-12 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs sm:text-sm font-extrabold mb-2 shadow-xs">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Interactive Road Trip Storybook</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Follow the Road Through Saurashtra
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            Scroll down to explore all four iconic chapters: from the holy temple waves of Somnath to the lions of Gir.
          </p>
        </div>

        {/* Quick Chapter Selector Pills for Mobile / Desktop Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-10">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                const el = document.getElementById(`chapter-${ch.id}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className={`flex-shrink-0 px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold border transition-all tap-bounce ${
                activeTab === idx
                  ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-sm scale-105'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {ch.stepNumber}. {ch.name}
            </button>
          ))}
        </div>

        {/* CONTINUOUS STORY CHAPTERS */}
        <div className="space-y-16 sm:space-y-24 relative">
          {CHAPTERS.map((chapter, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className={`rounded-3xl border-2 border-slate-200/80 p-5 sm:p-8 shadow-sm transition-all duration-300 ${chapter.bgTint} relative overflow-hidden`}
              >
                {/* Visual Connection Milestone Banner */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-2xl bg-slate-900 text-amber-300 font-black text-sm flex items-center justify-center shadow-xs">
                      {chapter.stepNumber}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {chapter.name}
                      </h3>
                      <p className="text-xs font-bold text-slate-500">
                        {chapter.tagline}
                      </p>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${chapter.badgeColor}`}>
                    Chapter {chapter.stepNumber} of 04
                  </span>
                </div>

                {/* Main Content Layout: Story Illustration on One Side, Narrative & Snapshot on Other */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* Left Column: Playful Illustrated Scene */}
                  <div className={`lg:col-span-6 flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-xs relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Scene Illustration depending on chapter */}
                    {chapter.id === 'somnath' && (
                      <div className="flex flex-col items-center w-full">
                        <div className="flex items-center justify-between w-full mb-2">
                          <SwayingPalmTree className="w-14 h-20" delay="0s" />
                          <SomnathIllustration className="w-40 sm:w-48 h-40 sm:h-48" />
                          <SwayingPalmTree className="w-14 h-20" delay="1s" />
                        </div>
                        {/* Moving Travel Car at Temple Base */}
                        <div className="mt-1 flex items-center justify-center">
                          <TravelCar className="w-24 sm:w-28 h-16 sm:h-18" moving={true} />
                        </div>
                        <div className="w-full mt-3">
                          <OceanWaves className="w-full h-8" />
                        </div>
                      </div>
                    )}

                    {chapter.id === 'dwarka' && (
                      <div className="flex flex-col items-center w-full">
                        <div className="flex items-center justify-center w-full mb-2">
                          <DwarkaIllustration className="w-44 sm:w-52 h-44 sm:h-52" />
                        </div>
                        {/* Tourist Bus Arriving */}
                        <div className="mt-1 flex items-center justify-center">
                          <TouristBus className="w-28 sm:w-32 h-18 sm:h-20" moving={true} />
                        </div>
                        <div className="w-full mt-3">
                          <OceanWaves className="w-full h-8" />
                        </div>
                      </div>
                    )}

                    {chapter.id === 'diu' && (
                      <div className="flex flex-col items-center w-full">
                        <div className="flex items-center justify-center w-full mb-2">
                          <DiuIllustration className="w-44 sm:w-52 h-44 sm:h-52" />
                        </div>
                        {/* Auto-Rickshaw Beach Cruise */}
                        <div className="mt-1 flex items-center justify-center">
                          <AutoRickshaw className="w-24 sm:w-28 h-18 sm:h-20" moving={true} />
                        </div>
                        <div className="w-full mt-3">
                          <OceanWaves className="w-full h-8" />
                        </div>
                      </div>
                    )}

                    {chapter.id === 'gir' && (
                      <div className="flex flex-col items-center w-full">
                        {/* Friendly Gir Lion Mascot */}
                        <div className="relative py-2">
                          <div className="absolute -top-3 -right-2 bg-emerald-100 text-emerald-800 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-emerald-300 animate-pulse">
                            Roaaar! Welcome to Gir! 🐾
                          </div>
                          <GirLion className="w-36 sm:w-44 h-36 sm:h-44" />
                        </div>
                        <p className="text-xs font-bold text-emerald-700 mt-2">
                          Meet the Regal Asiatic Lion of Gujarat
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Narrative, Key Sights & Real Photo Snapshot */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {chapter.desc}
                    </p>

                    {/* Highlights Pills */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                        Key Sights & Experiences:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {chapter.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 p-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs">
                            <span className="text-amber-500">✨</span>
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Realistic Photography Preview Thumbnail */}
                    <div className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-slate-200 shadow-xs">
                      <img
                        src={chapter.realPhoto}
                        alt={chapter.name}
                        className="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                        loading="lazy"
                        decoding="async"
                        width="64"
                        height="64"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                          Real Destination Snapshot
                        </div>
                        <div className="text-xs font-extrabold text-slate-800 truncate">
                          {chapter.name} Coastal Scenery
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 italic line-clamp-1">
                          {chapter.funFact}
                        </div>
                      </div>
                    </div>

                    {/* Tap Action: Contact Local Buddy for this Destination */}
                    <button
                      type="button"
                      onClick={() => onSelectDestination && onSelectDestination(chapter.name)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all tap-bounce"
                    >
                      <span>Ask Buddy About {chapter.name}</span>
                      <ChevronRight className="w-4 h-4 text-amber-400" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
