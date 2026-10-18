import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer({ onOpenLeadModal, onScrollToJourney }) {
  const { t, language } = useLanguage();

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
                <div className="text-[10px] text-emerald-600 font-extrabold font-mono">{t('tagline')}</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              {t('footerAbout')}
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-700 font-black">
              <span>🙏 Chalo, Somnath Darshan karne Chalein!</span>
            </div>
          </div>

          {/* Road Trip Chapters */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              सौराष्ट्र यात्रा दर्शन
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 श्री सोमनाथ प्रथम ज्योतिर्लिंग व आरती
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 द्वारकाधीश जगत मंदिर व बेट द्वारका
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 दीव पुर्तगाली किला व नागोआ बीच
                </button>
              </li>
              <li>
                <button type="button" onClick={onScrollToJourney} className="hover:text-orange-500 transition-colors text-left">
                  📍 सासन गिर एशियाई बब्बर शेर सफारी
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              लोकल सुविधाएं
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  मंदिर के पास आरामदायक होटल
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  प्राइवेट AC टैक्सी (Innova, Ertiga, Dzire)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  शुद्ध काठियावाड़ी व सात्विक भोजन
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  VIP दर्शन व स्थानीय मार्गदर्शन
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs mb-3">
              लोकल होस्ट संपर्क
            </h4>
            <div className="flex items-start gap-2 text-xs font-medium">
              <PhoneCall className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <a href="tel:6359798896" className="text-slate-900 hover:text-orange-600 font-mono font-black block text-sm">
                  +91 6359798896
                </a>
                <span className="text-[11px] text-slate-500 font-bold">कॉल और WhatsApp पर 24 घंटे उपलब्ध</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs font-medium">
              <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-700 block">सोमनाथ - वेरावल कोस्टल बेल्ट</span>
                <span className="text-slate-500 text-[11px]">गिर सोमनाथ जिला, गुजरात - 362268</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenLeadModal}
              className="w-full py-2.5 px-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs transition-colors shadow-2xs tap-bounce"
            >
              {t('planTrip')}
            </button>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-slate-500">
          <div>
            © {new Date().getFullYear()} Shree Somnath Local Host. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Chalo, Somnath Darshan karne Chalein!</span>
            <span>•</span>
            <span className="text-slate-700">हर हर महादेव 🙏 जय सोमनाथ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
