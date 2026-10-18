import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle2, Car, Hotel, MessageSquareHeart } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/reviewsData';
import { useLanguage } from '../context/LanguageContext';

export default function CustomerReviews({ onOpenLeadModal }) {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredReviews = CUSTOMER_REVIEWS.filter((review) => {
    if (activeFilter === 'all') return true;
    return review.category === activeFilter;
  });

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-slate-50/60 border-t border-slate-200/60 relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-black tracking-wide uppercase mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>{t('reviewsBadge')}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {t('reviewsTitle')}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {t('reviewsSubtitle')}
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {t('filterAll')}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('cabs')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce ${
                activeFilter === 'cabs'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-orange-300'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>{t('filterCabs')}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('hotels')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce ${
                activeFilter === 'hotels'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-300'
              }`}
            >
              <Hotel className="w-3.5 h-3.5" />
              <span>{t('filterHotels')}</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredReviews.map((review) => {
            const reviewText = review.content[language] || review.content['hi'];
            const isCab = review.category === 'cabs';

            return (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top user meta */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-xl flex-shrink-0">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm leading-tight">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium mt-0.5">
                          <MapPin className="w-3 h-3 text-orange-500 flex-shrink-0" />
                          <span>{review.location}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400 font-semibold flex-shrink-0">
                      {review.date}
                    </span>
                  </div>

                  {/* Stars & Service Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isCab
                          ? 'bg-orange-50 text-orange-800 border border-orange-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {isCab ? <Car className="w-2.5 h-2.5" /> : <Hotel className="w-2.5 h-2.5" />}
                      <span className="truncate max-w-[130px]">{review.service.split('(')[0]}</span>
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-[13px] text-slate-700 font-normal leading-relaxed italic">
                    "{reviewText}"
                  </p>
                </div>

                {/* Bottom Verification Footer */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('verifiedTraveler')}</span>
                  </span>

                  <span className="text-slate-400 font-medium">
                    {review.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-10 sm:mt-12 p-6 rounded-3xl bg-white border border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                {language === 'gu'
                  ? 'તમારા પરિવાર માટે પણ સુરક્ષિત કાર કે હોટેલ બુક કરાવો'
                  : language === 'mr'
                  ? 'आपल्या कुटुंबासाठीही सुरक्षित कार किंवा हॉटेल बुक करा'
                  : language === 'en'
                  ? 'Book safe cab & temple stays for your family too'
                  : 'अपने परिवार के लिए भी सुरक्षित कार या होटल बुक करें'}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {language === 'gu'
                  ? 'કોઈપણ છુપા ચાર્જ વગર સીધા લોકલ કો-ઓર્ડિનેટર સાથે વાત કરો'
                  : language === 'mr'
                  ? 'कोणत्याही छुपे खर्चाशिवाय थेट स्थानिक समन्वयकाशी बोला'
                  : language === 'en'
                  ? 'Direct local coordination with zero hidden costs'
                  : 'बिना किसी छिपे शुल्क के सीधे लोकल को-ऑर्डिनेटर से बात करें'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenLeadModal}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm shadow-xs transition-transform active:scale-95 tap-bounce flex-shrink-0"
          >
            {t('planTrip')}
          </button>
        </div>
      </div>
    </section>
  );
}
