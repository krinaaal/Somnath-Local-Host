import React from 'react';
import { Bed, Car, Compass, Utensils, Check, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'hotel',
    title: 'Hotel & Stay',
    subtitle: 'Walking distance to Somnath Temple',
    icon: Bed,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    iconColor: 'bg-amber-500 text-white',
    image: '/images/services/hotel.webp',
    desc: 'Cozy, vetted AC hotels and family guest houses within easy walking reach of temple gates. Verified for cleanliness, clean linen, hot water, and senior-friendly access.',
    features: ['Walking distance to Somnath temple', 'Senior citizen elevator & ground floor rooms', 'Verified clean hygiene & 24/7 hot water']
  },
  {
    id: 'car',
    title: 'Car Rental & Cabs',
    subtitle: 'Chauffeur-driven AC Innova, Ertiga & Sedans',
    icon: Car,
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    iconColor: 'bg-sky-500 text-white',
    image: '/images/services/cab.webp',
    desc: 'Private, sanitized vehicles with experienced Saurashtra drivers who know every scenic shortcut, temple timing, and clean food stop along the coastal highway.',
    features: ['Pick & drop at Veraval / Rajkot / Ahmedabad', 'Spacious boot space for family luggage', 'Friendly, courteous local drivers']
  },
  {
    id: 'sightseeing',
    title: 'Sightseeing & Darshan',
    subtitle: 'Aarti slots & local heritage spots',
    icon: Compass,
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    iconColor: 'bg-teal-500 text-white',
    image: '/images/services/darshan.webp',
    desc: 'Personalized local assistance to navigate queue slots, shoe stands, Sound & Light show entry, and sacred stops like Bhalka Tirth and Triveni Sangam with ease.',
    features: ['Aarti timing & VIP pass coordination', 'Guided visits to Triveni Sangam & Bhalka Tirth', 'Wheelchair assistance for elderly devotees']
  },
  {
    id: 'food',
    title: 'Desi Gujarati Food',
    subtitle: 'Authentic Kathiyawadi & Satvik Bhojan',
    icon: Utensils,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'bg-emerald-500 text-white',
    image: '/images/services/food.webp',
    desc: 'Savor piping hot Bajra no Rotlo, fresh Ringna no Olo, authentic Gujarati Thali, and pure satvik temple dining recommended directly by local food lovers.',
    features: ['100% Pure vegetarian & satvik dining', 'Traditional Kathiyawadi village-style thali', 'Hygienic family restaurants']
  }
];

export default function ServicesGrid({ onBookService }) {
  return (
    <section id="services" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-extrabold mb-2 shadow-xs">
            <span>🤝 Your Journey, Our Responsibility</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Friendly Travel Assistance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            "बस एक कॉल... बाकी पूरी व्यवस्था हमारी।" We take care of everything so you can focus entirely on your blessings and family vacation.
          </p>
        </div>

        {/* 4 Friendly Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((serv) => {
            const Icon = serv.icon;
            return (
              <div
                key={serv.id}
                className="bg-white border-2 border-slate-200 hover:border-amber-400 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md group hover:-translate-y-1"
              >
                <div>
                  {/* Service Top Icon & Image Thumbnail */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${serv.iconColor} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {serv.image && (
                      <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200">
                        <img
                          src={serv.image}
                          alt={serv.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border mb-2 ${serv.badgeColor}`}>
                    Local Host Certified
                  </span>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    {serv.title}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mb-3">
                    {serv.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {serv.desc}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                    {serv.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tap Button */}
                <button
                  type="button"
                  onClick={() => onBookService && onBookService(serv.title)}
                  className="w-full py-3 px-3 rounded-2xl bg-slate-100 hover:bg-amber-400 text-slate-800 hover:text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all duration-200 tap-bounce"
                >
                  <span>Ask for {serv.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
