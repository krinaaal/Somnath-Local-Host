import React from 'react';
import { ShieldCheck, UserCheck, Clock, BadgePercent, Heart, Award } from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Trusted Local Support',
    subtitle: 'From Booking to Departure',
    desc: 'We are born and raised in Somnath. Our team is physically present on-ground to welcome you at Veraval station or hotel lobby.'
  },
  {
    icon: UserCheck,
    title: 'Personal Trip Coordinator',
    subtitle: 'Always Just One Call Away',
    desc: 'No automated chatbots or outsourced call centers. You get a dedicated Saurashtra coordinator who knows real-time temple queue status.'
  },
  {
    icon: Clock,
    title: '24x7 On-Trip Assistance',
    subtitle: 'Emergency & Late Night Support',
    desc: 'Whether your train arrives at 4 AM or you need medical/puja assistance, our local team is available around the clock.'
  },
  {
    icon: BadgePercent,
    title: 'Best Price & No Hidden Costs',
    subtitle: 'Direct Local Fleet & Hotel Rates',
    desc: 'Clear upfront pricing with toll, parking, driver allowances included. Absolutely 0 hidden surprises during your vacation.'
  },
  {
    icon: Heart,
    title: 'Family-First Service',
    subtitle: 'Safe for Elderly & Children',
    desc: 'Specialized arrangements for senior citizens including ground floor rooms, wheelchair assistance, and satvik diet catering.'
  },
  {
    icon: Award,
    title: 'Authentic Saurashtrian Hospitality',
    subtitle: '“Come as a Guest, Leave as Our Family”',
    desc: 'We treat every pilgrim and traveler with the traditional Gujarat warmth of “Atithi Devo Bhava”.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-8 sm:py-16 bg-slate-950/80 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-2">
            <span>The Somnath Local Host Promise</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Pilgrims & Travelers Trust Us
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            We take care of everything, so you can focus completely on your blessings and cherish lifelong memories.
          </p>
        </div>

        {/* 6 Core Trust Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {reason.title}
                  </h3>
                  <div className="text-xs text-amber-300/80 font-medium mb-1.5">
                    {reason.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
