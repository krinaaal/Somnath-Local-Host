import React from 'react';
import StylizedCar3D from './cinematic/StylizedCar3D';
import StylizedRickshaw3D from './cinematic/StylizedRickshaw3D';
import StylizedBus3D from './cinematic/StylizedBus3D';
import { Sparkles, Compass, ArrowDown, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Hero({ onOpenLeadModal, onScrollToJourney }) {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-b from-sky-50/70 via-white to-amber-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* TEXT CONTENT (Centered, Cheerful, Hindi Audience Welcoming) */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Welcome Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold mb-3 shadow-2xs">
            <span>🙏 Har Har Mahadev!</span>
            <span className="text-amber-500">•</span>
            <span>सौराष्ट्र यात्रा में आपका स्वागत है</span>
          </div>

          {/* Signature Heading tuned for Hindi Audience */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Chalo, Somnath <br className="hidden xs:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600">
              Ghoomne Chalein!
            </span>
          </h1>

          {/* Supporting Text in Natural Hindi-Friendly Tone */}
          <p className="mt-3 text-base sm:text-xl font-bold text-slate-700 leading-snug">
            Somnath, Dwarka, Diu ya Sasan Gir — aapka friendly local travel buddy yahan hai!
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            साफ-सुथरी AC गाड़ियां, मंदिर के पास बढ़िया होटल्स और परिवार के लिए भरोसेमंद लोकल मार्गदर्शन — बिना किसी परेशानी के आनंदमय दर्शन यात्रा।
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col xs:flex-row items-center justify-center gap-3">
            {/* Primary CTA: Plan My Trip */}
            <button
              type="button"
              onClick={onOpenLeadModal}
              className="w-full xs:w-auto min-h-[48px] px-7 py-3 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 active:scale-95 transition-all tap-bounce border border-orange-400"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Yatra Plan Karein</span>
            </button>

            {/* Secondary CTA: Explore Places */}
            <button
              type="button"
              onClick={onScrollToJourney}
              className="w-full xs:w-auto min-h-[48px] px-7 py-3 rounded-2xl bg-white hover:bg-sky-50 border-2 border-sky-300 hover:border-sky-400 text-sky-800 font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all tap-bounce"
            >
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Yatra Route Dekhein</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-5 flex items-center justify-center gap-4 text-xs font-bold text-slate-500 flex-wrap">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              भरोसेमंद लोकल ड्राइवर्स
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
              अपनों जैसी लोकल सेवा
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              Somnath • Dwarka • Diu • Gir
            </span>
          </div>
        </div>

        {/* 2. REALISTIC CINEMATIC SHOWCASE WITH 3D VEHICLE ON COASTAL ROAD */}
        <div className="mt-8 sm:mt-12 relative w-full rounded-3xl sm:rounded-4xl border-2 border-slate-200 bg-white p-2 sm:p-3 shadow-md overflow-hidden">
          {/* Destination Markers */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 bg-slate-50 rounded-2xl border border-slate-200/80 mb-2 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                यात्रा मार्ग:
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-100 border border-orange-300 text-orange-900 text-xs font-extrabold">
                📍 1. Somnath
              </span>
              <span className="text-slate-300">→</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-100 border border-sky-300 text-sky-900 text-xs font-extrabold">
                📍 2. Dwarka
              </span>
              <span className="text-slate-300">→</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-100 border border-teal-300 text-teal-900 text-xs font-extrabold">
                📍 3. Diu Island
              </span>
              <span className="text-slate-300">→</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-extrabold">
                📍 4. Sasan Gir
              </span>
            </div>
            <span className="text-xs font-extrabold text-slate-600 hidden md:block">
              520 km संपूर्ण सौराष्ट्र सर्किट
            </span>
          </div>

          {/* Cinematic Frame: Real Somnath Temple Photo + Overlay Road with 3D Car */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] w-full bg-slate-900">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/destinations/somnath-mobile.webp" />
              <source media="(min-width: 641px)" srcSet="/images/destinations/somnath-cinematic.webp" />
              <img
                src="/images/destinations/somnath-cinematic.webp"
                alt="Realistic Shree Somnath Temple beside the Arabian Sea at sunset"
                className="w-full h-full object-cover object-[center_35%]"
              />
            </picture>

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/10 pointer-events-none" />

            {/* Badge on Photo */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-white/95 text-slate-900 shadow-sm border border-white/50 backdrop-blur-md">
                श्री सोमनाथ प्रथम ज्योतिर्लिंग • अरब सागर तट
              </span>
            </div>

            {/* Realistic Asphalt Road Layer at Base of Photo */}
            <div className="absolute bottom-0 inset-x-0 h-16 sm:h-22 bg-gradient-to-b from-slate-800/95 to-slate-900 z-10 flex items-center justify-between px-4 sm:px-8 border-t-2 border-slate-600/70 overflow-hidden">
              {/* Yellow Dashed Center Line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none opacity-85">
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-amber-400 rounded-full hidden sm:block" />
              </div>

              {/* White Road Edge Lines */}
              <div className="absolute top-1 inset-x-0 h-0.5 bg-white/40" />
              <div className="absolute bottom-1 inset-x-0 h-0.5 bg-white/40" />

              {/* Moving 3D Stylized Vehicles on the Real Road */}
              <div className="relative z-20 flex items-center justify-between w-full">
                {/* 3D Pearl White Car Driving */}
                <div className="flex items-center gap-3">
                  <div className="transform -translate-y-1 sm:-translate-y-2">
                    <StylizedCar3D className="w-28 sm:w-36 h-16 sm:h-20" moving={true} />
                  </div>
                  <div className="hidden xs:block text-left text-white/90">
                    <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider">
                      यात्रा यहीं से शुरू:
                    </div>
                    <div className="text-xs font-bold text-slate-100">
                      आरामदायक AC गाड़ियां और होटल
                    </div>
                  </div>
                </div>

                {/* Supporting 3D Vehicle Cameos */}
                <div className="flex items-center gap-4">
                  <div className="hidden md:block transform -translate-y-1">
                    <StylizedBus3D className="w-28 h-16 opacity-90" moving={true} />
                  </div>
                  <div className="hidden sm:block transform -translate-y-1">
                    <StylizedRickshaw3D className="w-20 h-14 opacity-90" moving={true} />
                  </div>

                  <button
                    type="button"
                    onClick={onScrollToJourney}
                    className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shadow-xs transition-all tap-bounce"
                  >
                    यात्रा देखें ↓
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onScrollToJourney}
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-orange-500 transition-colors tap-bounce"
          >
            <span className="text-xs font-bold">नीचे स्क्रॉल करें: सोमनाथ, द्वारका, दीव और सासन गिर दर्शन</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
