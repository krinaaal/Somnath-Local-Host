import React from 'react';
import { PhoneCall, Mail, MapPin, Database, Heart, Shield } from 'lucide-react';

export default function Footer({ onOpenLeadModal, onOpenAdminLeads }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-24 sm:pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.webp"
                alt="Somnath Local Host"
                className="w-10 h-10 rounded-full border border-amber-500/40"
              />
              <div>
                <div className="text-base font-extrabold text-white">Somnath Local Host</div>
                <div className="text-[10px] text-amber-400 font-mono">Your Journey, Our Responsibility</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your verified local host for Somnath, Dwarka, Diu and Sasan Gir. Dedicated private cabs, walking-distance verified hotels, and 24x7 local on-ground assistance.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <span>🔱 नमः पार्वती पतये, हर हर महादेव !</span>
            </div>
          </div>

          {/* Circuit Destinations */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Circuit Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Somnath Jyotirlinga & Aarti
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Dwarka Jagat Mandir & Bet Dwarka
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Diu Portuguese Fort & Nagoa Beach
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Sasan Gir Asiatic Lion Safari
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Triveni Sangam & Bhalka Tirth
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Host Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Private AC Cabs (Innova / Ertiga / Sedans)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Handpicked Walking-Distance Stays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Pure Kathiyawadi & Satvik Dining
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  VIP Temple Darshan & Aarti Guidance
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenAdminLeads}
                  className="flex items-center gap-1.5 text-amber-400 hover:underline pt-1"
                >
                  <Database className="w-3 h-3" />
                  <span>Leads Database (Admin Inspection)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Direct Contact
            </h4>
            <div className="flex items-start gap-2 text-xs">
              <PhoneCall className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <a href="tel:6359798896" className="text-white hover:text-amber-400 font-mono font-bold block">
                  +91 6359798896
                </a>
                <span className="text-[11px] text-slate-400">Available 24x7 on Call & WhatsApp</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs pt-1">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-300 block">Somnath - Veraval Highway</span>
                <span className="text-slate-500 text-[11px]">Gir Somnath District, Gujarat, India - 362268</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenLeadModal}
              className="mt-2 w-full py-2.5 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs transition-colors tap-bounce"
            >
              Get Free Tour Quote
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Shree Somnath Local Host. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built Mobile-First for Saurashtra Pilgrims & Travelers</span>
            <span>•</span>
            <span className="text-slate-400">Jai Somnath</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
