import React from 'react';
import StylizedCar3D from './cinematic/StylizedCar3D';
import StylizedLion3D from './cinematic/StylizedLion3D';
import { PhoneCall, MessageCircle, Sparkles, RotateCcw, MapPin, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function ConversionSection({ onOpenContact, onExploreAgain }) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl sm:rounded-4xl bg-gradient-to-b from-amber-50/70 via-sky-50/40 to-white border-2 border-amber-200/90 p-6 sm:p-12 text-center relative shadow-sm overflow-hidden">
          {/* Stylized 3D Duo: Travel Car & Asiatic Lion */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="transform -translate-y-1">
              <StylizedCar3D className="w-28 sm:w-36 h-18 sm:h-22" moving={true} />
            </div>
            <div className="hidden xs:block transform -translate-y-1">
              <StylizedLion3D className="w-28 sm:w-32 h-20 sm:h-24" animated={true} />
            </div>
          </div>

          {/* Heading strictly as specified */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>लोकल ट्रेवल बडी आपकी सेवा में तत्पर</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            आपकी सौराष्ट्र यात्रा यहीं से शुरू होती है!
          </h2>

          <p className="mt-3 text-base sm:text-xl font-bold text-slate-700 max-w-xl mx-auto leading-relaxed">
            सोमनाथ, द्वारका, दीव या सासन गिर — अपने लोकल होस्ट के साथ बनाएं आसान व यादगार यात्रा।
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
            सीधे सोमनाथ से समर्पित व्यक्तिगत सहायता। कोई छिपा हुआ चार्ज नहीं, कोई एजेंट कमीशन नहीं — बस परिवार जैसी सच्ची व विनम्र मदद।
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="mt-8 flex flex-col xs:flex-row items-center justify-center gap-3">
            {/* Primary CTA: Contact Us */}
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full xs:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 active:scale-95 transition-all tap-bounce border border-orange-400"
            >
              <span>संपर्क करें (Contact Us)</span>
              <Sparkles className="w-4 h-4 text-amber-200" />
            </button>

            {/* Direct WhatsApp Call */}
            <a
              href="https://wa.me/916359798896?text=Namaskar%20Somnath%20Local%20Host!%20Chalo%20Somnath%20Ghoomne%20Chalein!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto min-h-[50px] px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all tap-bounce border border-emerald-700"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp पर बात करें</span>
            </a>

            {/* Secondary CTA: Explore Again */}
            <button
              type="button"
              onClick={onExploreAgain}
              className="w-full xs:w-auto min-h-[50px] px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-300 text-slate-700 font-black text-sm flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition-all tap-bounce"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>शुरुआत से देखें</span>
            </button>
          </div>

          {/* Quick Direct Hotline Call */}
          <div className="mt-6 pt-4 border-t border-amber-200/70 inline-flex items-center gap-2 text-xs font-bold text-slate-600">
            <PhoneCall className="w-4 h-4 text-orange-500" />
            <span>सीधे फोन पर बात करने के लिए कॉल करें: </span>
            <a href="tel:6359798896" className="font-mono text-slate-900 font-black underline hover:text-orange-600">
              6359798896
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
