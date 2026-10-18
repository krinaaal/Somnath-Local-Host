import React, { useState, useEffect } from 'react';
import { Users, TrendingUp, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Calculates realistic base enquiries based on Indian Standard Time (IST)
 * - Late Night (12 AM - 5 AM): 0 - 6 (low/quiet)
 * - Early Morning (5 AM - 9 AM): 15 - 45 (waking up)
 * - Peak Morning (9 AM - 2 PM): 85 - 148 (high peak planning)
 * - Afternoon (2 PM - 5 PM): 35 - 70 (moderate)
 * - Peak Evening (5 PM - 10 PM): 95 - 150 (evening peak family planning)
 * - Late Evening (10 PM - 12 AM): 12 - 35 (winding down)
 */
function getRealisticISTEnquiryCount() {
  const now = new Date();
  // Convert to Indian Standard Time (UTC+5:30)
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istDate = new Date(utc + 3600000 * 5.5);
  const hour = istDate.getHours();
  const minutes = istDate.getMinutes();

  let min = 15;
  let max = 45;

  if (hour >= 0 && hour < 5) {
    // Deep night
    min = 0;
    max = 6;
  } else if (hour >= 5 && hour < 9) {
    // Early morning
    min = 14;
    max = 48;
  } else if (hour >= 9 && hour < 14) {
    // Peak Morning
    min = 88;
    max = 148;
  } else if (hour >= 14 && hour < 17) {
    // Afternoon
    min = 36;
    max = 72;
  } else if (hour >= 17 && hour < 22) {
    // Peak Evening
    min = 96;
    max = 150;
  } else {
    // Late night
    min = 12;
    max = 34;
  }

  // Deterministic seed with slight random offset based on current minute
  const base = min + Math.floor(((hour * 60 + minutes) % (max - min + 1)));
  return Math.min(150, Math.max(0, base));
}

/**
 * Calculates this week's current confirmed bookings (6 to 30+, climbs dynamically with day of week & festivals)
 */
function getWeeklyBookingsCount() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const dayIndex = day === 0 ? 7 : day; // Monday=1 ... Sunday=7

  // Starts from 6 on Monday morning and builds up toward 28-32 by weekend
  const baseGrowth = 6 + Math.floor((dayIndex - 1) * 3.6);
  // Add date-based small variation
  const dateBonus = (now.getDate() % 4);

  // Festival check: Oct/Nov (Diwali/Navratri), Jan/Feb (Maha Shivratri), July/Aug (Shravan)
  const month = now.getMonth(); // 0-indexed
  const isFestivalMonth = [0, 1, 6, 7, 9, 10].includes(month);
  const festivalBonus = isFestivalMonth ? 3 : 0;

  return Math.min(36, Math.max(6, baseGrowth + dateBonus + festivalBonus));
}

export default function LiveTrustStats({ onOpenLeadModal }) {
  const { t, language } = useLanguage();
  const [activeEnquiries, setActiveEnquiries] = useState(() => getRealisticISTEnquiryCount());
  const [weeklyBookings] = useState(() => getWeeklyBookingsCount());
  const [isPulsing, setIsPulsing] = useState(false);

  // Fluctuate active enquiries gently every 4-7 seconds to simulate real-world visitor interactions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEnquiries((prev) => {
        const base = getRealisticISTEnquiryCount();
        const delta = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, +1, +2
        let nextVal = prev + delta;
        if (Math.abs(nextVal - base) > 15) {
          nextVal = base + (delta > 0 ? 2 : -2);
        }
        return Math.min(150, Math.max(0, nextVal));
      });
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 800);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-200/70 border border-slate-100 ring-1 ring-slate-900/5">
        {/* Top Trust Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-800">
              {t('statsBadgeTrust')}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('heroTrustRating')}</span>
          </div>
        </div>

        {/* 3 Prominent Real-Time Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {/* Card 1: Live Active Enquiries (Fluctuates by time of day, 0 to 150) */}
          <div
            onClick={onOpenLeadModal}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-orange-50/80 via-white to-amber-50/40 border border-orange-200/80 hover:border-orange-400 transition-all cursor-pointer shadow-xs hover:shadow-md tap-bounce"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {t('statsLivePulse')}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span
                className={`text-3xl sm:text-4xl font-black text-slate-900 tracking-tight transition-transform duration-300 ${
                  isPulsing ? 'scale-105 text-orange-600' : ''
                }`}
              >
                {activeEnquiries}
              </span>
              <span className="text-xs font-extrabold text-orange-600">
                {language === 'gu' ? 'યાત્રાળુઓ' : language === 'mr' ? 'भाविक' : language === 'en' ? 'Travelers' : 'श्रद्धालु'}
              </span>
            </div>

            <h4 className="text-xs font-black text-slate-800 mt-1">
              {t('statsLiveEnquiries')}
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
              {t('statsLiveEnquiriesSub')}
            </p>
          </div>

          {/* Card 2: 1000+ Happy Pilgrims */}
          <div
            onClick={onOpenLeadModal}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 border border-emerald-200/80 hover:border-emerald-400 transition-all cursor-pointer shadow-xs hover:shadow-md tap-bounce"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-300">
                ⭐ 4.9 / 5
              </span>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                1,250+
              </span>
            </div>

            <h4 className="text-xs font-black text-slate-800 mt-1">
              {t('statsHappyPilgrims')}
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
              {t('statsHappyPilgrimsSub')}
            </p>
          </div>

          {/* Card 3: This Week's Confirmed Bookings (6 to 30+) */}
          <div
            onClick={onOpenLeadModal}
            className="group relative p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 border border-blue-200/80 hover:border-blue-400 transition-all cursor-pointer shadow-xs hover:shadow-md tap-bounce"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-blue-100 text-blue-900 border border-blue-300">
                {language === 'gu' ? 'આ સપ્તાહ' : language === 'mr' ? 'या आठवड्यात' : language === 'en' ? 'This Week' : 'इस सप्ताह'}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {weeklyBookings}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {language === 'gu' ? 'કન્ફર્મ' : language === 'mr' ? 'निश्चित' : language === 'en' ? 'Confirmed' : 'कन्फर्म'}
              </span>
            </div>

            <h4 className="text-xs font-black text-slate-800 mt-1">
              {t('statsWeeklyBookings')}
            </h4>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
              {t('statsWeeklyBookingsSub')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
