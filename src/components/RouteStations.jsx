import React, { useState } from 'react';
import { MapPin, Sparkles, Clock, Compass, ArrowRight, CheckCircle2, ChevronRight, Navigation } from 'lucide-react';
import { ROUTE_STATIONS } from '../data/routeStationsData';
import { useLanguage } from '../context/LanguageContext';

export default function RouteStations({ onSelectStation }) {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredStations = ROUTE_STATIONS.filter((station) => {
    if (activeFilter === 'all') return true;
    return station.hub === activeFilter;
  });

  const getLocalized = (obj, def = '') => {
    if (!obj) return def;
    if (language === 'gu') return obj.gu || obj.hi || def;
    if (language === 'en') return obj.en || obj.hi || def;
    if (language === 'mr') return obj.mr || obj.hi || def;
    return obj[language] || obj.hi || obj.en || def;
  };

  return (
    <section id="stations" className="py-14 sm:py-20 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-black mb-3 shadow-2xs">
            <Compass className="w-4 h-4 text-orange-500 animate-spin-slow" />
            <span>
              {language === 'gu'
                ? 'પવિત્ર તીર્થ પરિભ્રમણ • રૂટમાં આવતા મુખ્ય સ્થળો'
                : language === 'en'
                ? 'Sacred Circuit • Iconic En-Route Pilgrimage Stations'
                : language === 'mr'
                ? 'पवित्र तीर्थ परिक्रमा • मार्गावरील मुख्य स्थाने'
                : 'पवित्र तीर्थ परिक्रमा • मार्ग में पड़ने वाले प्रमुख स्थल'}
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {language === 'gu'
              ? 'ભાલકા તીર્થ, બેટ દ્વારકા, નાગેશ્વર અને શિવરાજપુર બીચ'
              : language === 'en'
              ? 'Bhalka Tirth, Bet Dwarka, Nageshwar & Shivrajpur'
              : language === 'mr'
              ? 'भालका तीर्थ, बेट द्वारका, नागेश्वर व शिवराजपूर बीच'
              : 'भालका तीर्थ, बेट द्वारका, नागेश्वर व शिवराजपुर बीच'}
          </h2>

          <p className="mt-3 text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {language === 'gu'
              ? 'સોમનાથથી દ્વારકાના આ પવિત્ર માર્ગમાં આવતા બાણગંગા, ગીતા મંદિર, ત્રિવેણી સંગમ અને માધવપુરના દિવ્ય દર્શનનો સંપૂર્ણ રૂટ'
              : language === 'en'
              ? 'Complete itinerary covering Ban Ganga, Gita Mandir, Triveni Sangam, and scenic coastal stops along Saurashtra'
              : language === 'mr'
              ? 'सोमनाथ ते द्वारका मार्गावरील बाणगंगा, गीता मंदिर, त्रिवेणी संगम आणि माधवपूरचे संपूर्ण दर्शन'
              : 'सोमनाथ से द्वारका के इस पावन मार्ग पर पड़ने वाले बाणगंगा, गीता मंदिर, त्रिवेणी संगम और माधवपुर का संपूर्ण दर्शन'}
          </p>

          {/* Region Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {language === 'gu'
                ? 'બધા મુખ્ય સ્થળો (All)'
                : language === 'en'
                ? 'All Stations (All)'
                : language === 'mr'
                ? 'सर्व प्रमुख स्थाने (All)'
                : 'सभी प्रमुख स्थल (All)'}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('somnath')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce cursor-pointer ${
                activeFilter === 'somnath'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-orange-50 text-orange-900 border border-orange-200 hover:bg-orange-100'
              }`}
            >
              {language === 'gu'
                ? '📍 સોમનાથ સર્કિટ (ભાલકા તીર્થ, બાણગંગા, ગીતા મંદિર)'
                : language === 'en'
                ? '📍 Somnath Circuit (Bhalka, Ban Ganga, Gita Mandir)'
                : language === 'mr'
                ? '📍 सोमनाथ सर्किट (भालका, बाणगंगा, गीता मंदिर)'
                : '📍 सोमनाथ सर्किट (भालका, बाणगंगा, गीता मंदिर)'}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('highway')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce cursor-pointer ${
                activeFilter === 'highway'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              {language === 'gu'
                ? '🚗 કોસ્ટલ હાઇવે (માધવપુર ઘેડ, પોરબંદર)'
                : language === 'en'
                ? '🚗 Coastal Highway (Madhavpur, Porbandar)'
                : language === 'mr'
                ? '🚗 कोस्टल हायवे (माधवपूर, पोरबंदर)'
                : '🚗 कोस्टल हाईवे (माधवपुर घेड, पोरबंदर)'}
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('dwarka')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all tap-bounce cursor-pointer ${
                activeFilter === 'dwarka'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-sky-50 text-sky-900 border border-sky-200 hover:bg-sky-100'
              }`}
            >
              {language === 'gu'
                ? '🚩 દ્વારકા સર્કિટ (બેટ દ્વારકા, નાગેશ્વર, શિવરાજપુર)'
                : language === 'en'
                ? '🚩 Dwarka Circuit (Bet Dwarka, Nageshwar, Shivrajpur)'
                : language === 'mr'
                ? '🚩 द्वारका सर्किट (बेट द्वारका, नागेश्वर, शिवराजपूर)'
                : '🚩 द्वारका सर्किट (बेट द्वारका, नागेश्वर, शिवराजपुर)'}
            </button>
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredStations.map((station) => {
            const name = getLocalized(station.name);
            const hubLabel = getLocalized(station.hubLabel);
            const tag = getLocalized(station.tag);
            const desc = getLocalized(station.description);
            const highlights = (language === 'gu' ? station.highlights.gu : (station.highlights[language] || station.highlights.en || station.highlights.hi)) || [];

            return (
              <div
                key={station.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{station.icon}</span>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {hubLabel}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {tag}
                    </span>
                  </div>

                  {/* Station Name */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {name}
                  </h3>

                  {/* Timing & Distance Pill */}
                  <div className="flex flex-wrap items-center gap-2 mt-2 mb-3 text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{station.timing}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-sky-500" />
                      <span>{station.distance}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                    {highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectStation && onSelectStation(name)}
                  className="w-full py-2.5 px-3.5 rounded-2xl bg-slate-50 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 text-slate-800 hover:text-white border border-slate-200 hover:border-orange-500 text-xs font-black flex items-center justify-center gap-1.5 transition-all tap-bounce cursor-pointer"
                >
                  <span>
                    {language === 'gu'
                      ? 'આ સ્થળ યાત્રામાં ઉમેરો'
                      : language === 'en'
                      ? 'Add to My Yatra Plan'
                      : language === 'mr'
                      ? 'हे ठिकाण यात्रेत जोडा'
                      : 'इस स्थल को यात्रा में जोड़ें'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Route Connecting Callout */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-50 via-sky-50 to-orange-50 border border-amber-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                {language === 'gu'
                  ? 'સોમનાથથી દ્વારકા રૂટના તમામ સ્થળો એક જ ગાડીમાં કવર કરો'
                  : language === 'en'
                  ? 'Cover all sacred route stations from Somnath to Dwarka in one trip'
                  : language === 'mr'
                  ? 'सोमनाथ ते द्वारका मार्गावरील सर्व स्थाने एकाच गाडीत करा'
                  : 'सोमनाथ से द्वारका मार्ग के सभी पवित्र स्थल एक ही गाड़ी में कवर करें'}
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                {language === 'gu'
                  ? 'ભાલકા તીર્થ, બાણગંગા, ત્રિવેણી, માધવપુર, સુદામા મંદિર, બેટ દ્વારકા, નાગેશ્વર અને શિવરાજપુર બીચ — સંપૂર્ણ સ્થાનિક માર્ગદર્શન'
                  : language === 'en'
                  ? 'Bhalka Tirth, Ban Ganga, Triveni, Madhavpur, Sudama Temple, Bet Dwarka, Nageshwar & Shivrajpur Beach'
                  : language === 'mr'
                  ? 'भालका तीर्थ, बाणगंगा, त्रिवेणी, माधवपूर, सुदामा मंदिर, बेट द्वारका, नागेश्वर व शिवराजपूर बीच'
                  : 'भालका तीर्थ, बाणगंगा, त्रिवेणी, माधवपुर, सुदामा मंदिर, बेट द्वारका, नागेश्वर व शिवराजपुर बीच — संपूर्ण स्थानीय मार्गदर्शन'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectStation && onSelectStation('Somnath - Dwarka Complete Circuit')}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm shadow-xs transition-transform active:scale-95 tap-bounce flex-shrink-0 cursor-pointer"
          >
            {language === 'gu'
              ? 'સંપૂર્ણ રૂટ પ્લાન કરો'
              : language === 'en'
              ? 'Plan Complete Route'
              : language === 'mr'
              ? 'संपूर्ण रूट प्लान करा'
              : 'संपूर्ण रूट प्लान करें'}
          </button>
        </div>
      </div>
    </section>
  );
}
