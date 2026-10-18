import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Heart } from 'lucide-react';
import TravelCar from './characters/TravelCar';

export default function Footer({ onOpenLeadModal, onScrollToJourney }) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-24 sm:pb-12 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.webp"
                alt="Somnath Local Host"
                className="w-10 h-10 rounded-full border border-amber-300"
              />
              <div>
                <div className="text-base font-black text-slate-900">Somnath Local Host</div>
                <div className="text-[10px] text-emerald-600 font-extrabold font-mono">Your Friendly Travel Buddy</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Personalized local host for family pilgrimages and road trips across Somnath, Dwarka, Diu and Sasan Gir. Clean AC cabs, verified stays, and caring 24x7 local support.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-700 font-black">
              <span>🙏 Chalo, Somnath Farva Jaiye!</span>
            </div>
          </div>

          {/* Road Trip Chapters */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              The Road Trip Sights
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 Somnath 1st Jyotirlinga & Sea Aarti
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 Dwarka Jagat Mandir & Bet Dwarka
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 Diu Portuguese Fort & Nagoa Beach
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 Sasan Gir Asiatic Lion Jungle Safari
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              Local Assistance
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Cozy Verified Hotel Stays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Private AC Cabs (Innova / Ertiga / Sedans)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  Authentic Kathiyawadi & Satvik Bhojan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  VIP Darshan Slots & Local Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              Contact Your Host
            </h4>
            <div className="flex items-start gap-2 text-xs font-medium">
              <PhoneCall className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <a href="tel:6359798896" className="text-slate-900 hover:text-orange-600 font-mono font-black block text-sm">
                  +91 6359798896
                </a>
                <span className="text-[11px] text-slate-500 font-bold">Available 24x7 on Call & WhatsApp</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs font-medium">
              <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-700 block">Somnath - Veraval Coastal Belt</span>
                <span className="text-slate-500 text-[11px]">Gir Somnath District, Gujarat - 362268</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenLeadModal}
              className="w-full py-2.5 px-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors shadow-2xs tap-bounce"
            >
              Plan My Journey With Host
            </button>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-slate-500">
          <div>
            © {new Date().getFullYear()} Shree Somnath Local Host. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Playful White Theme Travel Journey</span>
            <span>•</span>
            <span className="text-slate-700">Jay Somnath 🙏</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
