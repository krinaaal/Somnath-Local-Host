import React, { useState, useEffect, useRef } from 'react';
import StylizedCar3D from './StylizedCar3D';
import StylizedRickshaw3D from './StylizedRickshaw3D';
import StylizedBus3D from './StylizedBus3D';
import StylizedLion3D from './StylizedLion3D';
import {
  MapPin,
  Compass,
  Sparkles,
  ChevronRight,
  Sun,
  ShieldCheck,
  Camera,
  Heart,
  Navigation2
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 'somnath',
    stepNumber: '01',
    name: 'Somnath',
    tagline: 'The First Jyotirlinga by the Arabian Sea',
    eyebrow: 'Chapter 01 • The Sacred Seashore',
    badgeClass: 'bg-orange-100 text-orange-900 border-orange-300',
    accentGradient: 'from-orange-500 via-amber-500 to-yellow-500',
    roadType: 'coastal',
    distanceLabel: 'Starting Point • Coast of Saurashtra',
    desktopImg: '/images/destinations/somnath-cinematic.webp',
    mobileImg: '/images/destinations/somnath-mobile.webp',
    imgPosition: 'object-[center_35%]',
    imgAlt: 'Majestic Shree Somnath Temple standing beside the crashing waves of the Arabian Sea at sunset',
    story:
      'Begin your journey where the sacred waves of the Arabian Sea gently wash the golden sandstone foundation of the first Jyotirlinga. Experience the electric energy of the evening Sandhya Aarti as bells echo over the ocean, walk along the breezy coastal promenade, and discover the ancient Arrow Pillar that points uninterrupted across the ocean all the way to Antarctica.',
    highlights: [
      'Evening Sandhya Aarti & Ocean Waves',
      'Historic Light & Sound Temple Show',
      'Triveni Sangam Holy Confluence Dip',
      'Bāna Stambha Ancient Meridian Pillar'
    ],
    funFact:
      'Geographical Marvel: The Bāna Stambha on Somnath seashore confirms an unobstructed sea route to Antarctica with zero landmass in between!',
    vehicle: 'car',
    vehicleLabel: 'Pearl White Tourer Crossover',
    ctaText: 'Plan Somnath Darshan with Local Host'
  },
  {
    id: 'dwarka',
    stepNumber: '02',
    name: 'Dwarka',
    tagline: 'Lord Krishna’s Golden Coastal Kingdom',
    eyebrow: 'Chapter 02 • Coastal Mokshapuri',
    badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
    accentGradient: 'from-sky-500 via-blue-500 to-indigo-600',
    roadType: 'highway',
    distanceLabel: '235 km from Somnath • Scenic Coastal Highway NH-51',
    desktopImg: '/images/destinations/dwarka-cinematic.webp',
    mobileImg: '/images/destinations/dwarka-mobile.webp',
    imgAlt: 'Historic Dwarkadhish Jagat Mandir spire rising over the serene Gomti river and coastal Arabian sea',
    story:
      'Travel north along Gujarat’s breathtaking Madhavpur coastal highway to the ancient pilgrim realm of Dwarka. Gaze up at the magnificent 52-yard flag fluttering atop the 5-story carved limestone Jagat Mandir, cross the sea by traditional ferry to sacred Bet Dwarka, and take a sunset stroll along the pristine, Blue Flag certified Shivrajpur beach.',
    highlights: [
      'Dwarkadhish Jagat Mandir Darshan',
      'Bet Dwarka Island Boat Excursion',
      'Nageshwar Jyotirlinga Shrine',
      'Blue Flag Shivrajpur Beach Sunset'
    ],
    funFact:
      'Sacred Tradition: The massive 52-yard flag atop Dwarkadhish temple is ceremoniously stitched by local devotee families and changed 5 times every day!',
    vehicle: 'bus',
    vehicleLabel: 'Deluxe AC Tourist Mini-Coach',
    ctaText: 'Explore Dwarka with Local Host'
  },
  {
    id: 'diu',
    stepNumber: '03',
    name: 'Diu Island',
    tagline: 'Portuguese Coastal Fortress & Cliffs',
    eyebrow: 'Chapter 03 • Island Solitude',
    badgeClass: 'bg-teal-100 text-teal-900 border-teal-300',
    accentGradient: 'from-teal-500 via-emerald-500 to-cyan-600',
    roadType: 'island',
    distanceLabel: '85 km from Somnath • Seaside Bridge to Island',
    desktopImg: '/images/destinations/diu-cinematic.webp',
    mobileImg: '/images/destinations/diu-mobile.webp',
    imgAlt: 'Diu coastal fortress stone ramparts and historic striped lighthouse perched above turquoise sea cliffs',
    story:
      'Cross the sea bridge into the serene, sun-drenched island of Diu where 16th-century Portuguese maritime history blends effortlessly with coastal breezes. Walk the fortified battlements of Diu Fort surrounded on three sides by ocean waves, step inside the sunlight-dappled labyrinth of Naida limestone caves, and relax beneath Hoka palm trees on golden sandy beaches.',
    highlights: [
      '16th-Century Diu Fort & Cannons',
      'Naida Sea-Carved Limestone Caves',
      'Iconic Diu Lighthouse Ocean View',
      'Horseshoe-Shaped Nagoa Beach'
    ],
    funFact:
      'Architectural Wonder: The Naida Caves feature natural skylights and towering stone tunnels carved during Portuguese quarrying centuries ago.',
    vehicle: 'rickshaw',
    vehicleLabel: 'Classic Island Auto-Rickshaw',
    ctaText: 'Discover Diu with Local Host'
  },
  {
    id: 'gir',
    stepNumber: '04',
    name: 'Sasan Gir',
    tagline: 'The Sole Haven of the Asiatic Lion',
    eyebrow: 'Chapter 04 • The Wild Forest Heartland',
    badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    accentGradient: 'from-emerald-500 via-green-600 to-lime-600',
    roadType: 'forest',
    distanceLabel: '45 km from Somnath • Teak Jungle Trail',
    desktopImg: '/images/destinations/gir-cinematic.webp',
    mobileImg: '/images/destinations/gir-mobile.webp',
    imgPosition: 'object-[center_60%]',
    imgAlt: 'Majestic Asiatic Lion resting naturally in the golden morning light of Sasan Gir deciduous teak forest',
    story:
      'Leave the coastal breeze behind and journey inland into the sun-dappled, golden teak woodlands of Gir National Park. Board an open 4x4 Gypsy in the crisp morning mist as expert Maldhari trackers read fresh pugmarks on dusty forest trails to encounter the majestic Asiatic Lion roaming free in his only natural refuge on planet Earth.',
    highlights: [
      'Open 4x4 Gypsy Forest Safari',
      'Authentic Asiatic Lion Sighting',
      'Devalia Safari Park Walk',
      'Traditional Maldhari Farm Hospitality'
    ],
    funFact:
      'Wildlife Miracle: The Asiatic Lion survives exclusively in Saurashtra, thriving thanks to the peaceful cultural bond with local pastoral Maldhari communities!',
    vehicle: 'lion',
    vehicleLabel: 'Majestic Asiatic Lion in Sasan Gir',
    ctaText: 'Plan Gir Safari with Local Host'
  }
];

export default function CinematicScrollJourney({ onSelectDestination }) {
  const [activeChapter, setActiveChapter] = useState('somnath');
  const [scrollProgress, setScrollProgress] = useState(0);
  const journeySectionRef = useRef(null);

  // Smooth scroll progress tracker for vehicle progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!journeySectionRef.current) return;
      const rect = journeySectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScrolled = -rect.top;
      const progress = Math.min(Math.max(currentScrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine active chapter based on scroll position
      const chapterElements = CHAPTERS.map((ch) => ({
        id: ch.id,
        el: document.getElementById(`chapter-${ch.id}`)
      }));

      for (let i = chapterElements.length - 1; i >= 0; i--) {
        const item = chapterElements[i];
        if (item.el) {
          const itemRect = item.el.getBoundingClientRect();
          if (itemRect.top <= windowHeight * 0.45) {
            setActiveChapter(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (chapterId) => {
    setActiveChapter(chapterId);
    const target = document.getElementById(`chapter-${chapterId}`);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="journey"
      ref={journeySectionRef}
      className="py-12 sm:py-20 bg-white relative text-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold mb-3 shadow-2xs">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Cinematic Saurashtra Road Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            The Real Gujarat Road Trip
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed">
            Scroll down to journey through authentic coastal highways, ancient temple spires, island cliffs, and the teak forests of the Asiatic Lion.
          </p>
        </div>

        {/* STICKY MILESTONE PILL NAVIGATION */}
        <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y sm:border sm:rounded-2xl border-slate-200/90 shadow-xs mb-10 transition-all">
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => scrollToChapter(ch.id)}
                  className={`flex-1 min-w-[130px] sm:min-w-0 px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all tap-bounce flex items-center justify-center gap-1.5 border ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-950 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full text-[11px] font-black flex items-center justify-center ${
                      isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{ch.name}</span>
                </button>
              );
            })}
          </div>

          {/* Miniature Scroll Progress Road Line */}
          <div className="mt-2.5 h-1.5 bg-slate-100 rounded-full overflow-hidden relative mx-1">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>

        {/* CONTINUOUS 4 CHAPTERS */}
        <div className="space-y-16 sm:space-y-28">
          {CHAPTERS.map((chapter, idx) => {
            const isSomnath = chapter.id === 'somnath';
            const isDwarka = chapter.id === 'dwarka';
            const isDiu = chapter.id === 'diu';
            const isGir = chapter.id === 'gir';

            return (
              <article
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className="scroll-mt-28 rounded-3xl sm:rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* 1. PHOTOGRAPHIC DESTINATION SCENE WITH REAL ROAD & 3D STYLIZED VEHICLE */}
                <div className="relative w-full overflow-hidden bg-slate-900">
                  {/* Real Photographic Background with Responsive Picture Tag */}
                  <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
                    <picture>
                      <source media="(max-width: 640px)" srcSet={chapter.mobileImg} />
                      <source media="(min-width: 641px)" srcSet={chapter.desktopImg} />
                      <img
                        src={chapter.desktopImg}
                        alt={chapter.imgAlt}
                        loading="eager"
                        decoding="async"
                        className={`w-full h-full object-cover ${chapter.imgPosition || 'object-center'} transform transition-transform duration-700 hover:scale-[1.02]`}
                      />
                    </picture>

                    {/* Natural Daylight & Contrast Gradient Overlays (Never dark luxury, preserves natural photo) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Chapter Badge */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border border-white/50">
                        {chapter.eyebrow}
                      </span>
                    </div>

                    {/* Top Right Distance / Route Label */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      <Navigation2 className="w-3.5 h-3.5 text-amber-400 rotate-45" />
                      <span>{chapter.distanceLabel}</span>
                    </div>

                    {/* Destination Title Overlay over photo */}
                    <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 right-4 z-10 pointer-events-none">
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight">
                        {chapter.name}
                      </h3>
                      <p className="text-xs sm:text-base font-bold text-amber-200 drop-shadow-sm mt-0.5 max-w-xl">
                        {chapter.tagline}
                      </p>
                    </div>

                    {/* 2. REALISTIC ASPHALT ROAD OVERLAY WITH STYLIZED 3D VEHICLE */}
                    <div className="absolute bottom-0 inset-x-0 h-14 sm:h-20 bg-gradient-to-b from-slate-800/90 to-slate-900 z-10 flex items-center justify-between px-4 sm:px-12 border-t-2 border-slate-600/60 overflow-hidden">
                      {/* Asphalt Road Texture Markings */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none opacity-80">
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full hidden sm:block" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full hidden sm:block" />
                      </div>

                      {/* White Edge Lines */}
                      <div className="absolute top-1 inset-x-0 h-0.5 bg-white/40" />
                      <div className="absolute bottom-1 inset-x-0 h-0.5 bg-white/40" />

                      {/* Chapter-Specific Stylized Vehicle Driving on Real Asphalt */}
                      <div className="relative z-20 flex items-center w-full justify-between">
                        {/* Vehicle on the Road */}
                        <div className="flex items-center gap-3">
                          {isSomnath && (
                            <div className="transform -translate-y-1 sm:-translate-y-2">
                              <StylizedCar3D className="w-28 sm:w-36 h-16 sm:h-20" moving={true} />
                            </div>
                          )}

                          {isDwarka && (
                            <div className="transform -translate-y-1 sm:-translate-y-2">
                              <StylizedBus3D className="w-32 sm:w-44 h-16 sm:h-22" moving={true} />
                            </div>
                          )}

                          {isDiu && (
                            <div className="transform -translate-y-1 sm:-translate-y-2">
                              <StylizedRickshaw3D className="w-24 sm:w-32 h-16 sm:h-20" moving={true} />
                            </div>
                          )}

                          {isGir && (
                            <div className="flex items-center gap-3 transform -translate-y-1 sm:-translate-y-2">
                              <StylizedCar3D className="w-24 sm:w-32 h-14 sm:h-18" moving={true} />
                              <span className="hidden sm:inline-block text-[11px] font-black uppercase text-amber-300 bg-black/50 px-2 py-0.5 rounded-md border border-amber-400/30">
                                Open 4x4 Gypsy
                              </span>
                            </div>
                          )}

                          <div className="hidden xs:block text-left text-white/90">
                            <div className="text-[11px] font-black text-amber-300 uppercase tracking-wider">
                              On The Road:
                            </div>
                            <div className="text-xs font-bold truncate max-w-[150px] sm:max-w-none text-slate-100">
                              {chapter.vehicleLabel}
                            </div>
                          </div>
                        </div>

                        {/* Right indicator label */}
                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-white/90 bg-black/40 px-2.5 py-1 rounded-full border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                            <span>Smooth Highway</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. RICH EDITORIAL NARRATIVE & HIGHLIGHTS */}
                <div className="p-5 sm:p-8 lg:p-10 space-y-6">
                  {/* Grid Layout: Left Story Narrative, Right Interactive Highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Left: Authentic Story Narrative */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-amber-300 font-black text-xs flex items-center justify-center">
                          {chapter.stepNumber}
                        </span>
                        <h4 className="text-lg sm:text-xl font-black text-slate-900">
                          About {chapter.name} Experience
                        </h4>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        {chapter.story}
                      </p>

                      {/* Educational Fun Fact Card */}
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
                        <span className="text-xl sm:text-2xl flex-shrink-0">💡</span>
                        <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
                          {chapter.funFact}
                        </p>
                      </div>

                      {/* Sasan Gir Special: Majestic 3D Asiatic Lion Showcase */}
                      {isGir && (
                        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50/60 to-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center gap-4">
                          <div className="flex-shrink-0">
                            <StylizedLion3D className="w-36 sm:w-44 h-28 sm:h-36" animated={true} />
                          </div>
                          <div className="text-center sm:text-left">
                            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider mb-1">
                              Gujarat’s Pride
                            </span>
                            <h5 className="text-sm sm:text-base font-black text-slate-900">
                              King of the Saurashtra Jungle
                            </h5>
                            <p className="text-xs text-slate-600 font-medium mt-1 leading-snug">
                              Over 600 wild Asiatic Lions roam freely in Gir. Let your local host coordinate licensed jungle gypsy safari permits and experienced forest trackers.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Key Highlights & Host Action Card */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Iconic Sights & Moments</span>
                        </div>

                        <div className="space-y-2">
                          {chapter.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs"
                            >
                              <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 font-black text-[11px] flex items-center justify-center flex-shrink-0">
                                ✓
                              </span>
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Local Host Direct Enquiry CTA (No Pricing or Packages) */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectDestination && onSelectDestination(chapter.name)}
                            className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all tap-bounce border border-slate-950"
                          >
                            <span>{chapter.ctaText}</span>
                            <ChevronRight className="w-4 h-4 text-amber-400" />
                          </button>
                          <p className="text-[11px] text-center text-slate-500 font-semibold mt-1.5">
                            ⚡ Fast response via WhatsApp or Phone Call
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
