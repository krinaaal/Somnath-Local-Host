import React from 'react';
import { Bed, Car, Compass, Utensils, Check, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'hotel',
    title: 'Hotel & Stay Booking',
    displayTitle: 'होटल व धर्मशाला स्टे',
    subtitle: 'सोमनाथ मंदिर के निकट साफ-सुथरे AC रूम्स',
    icon: Bed,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    iconColor: 'bg-amber-500 text-white',
    image: '/images/services/hotel.webp',
    desc: 'सोमनाथ मंदिर के मुख्य द्वार के निकट आरामदायक व सत्यापित AC होटल्स और पारिवारिक अतिथि गृह। स्वच्छ बिस्तर, 24/7 गर्म पानी और बुजुर्गों के लिए लिफ्ट सुविधा।',
    features: ['मंदिर से चंद कदमों की पैदल दूरी', 'वरिष्ठ नागरिकों हेतु लिफ्ट व ग्राउंड फ्लोर सुविधा', 'सत्यापित स्वच्छता और 24 घंटे गर्म पानी']
  },
  {
    id: 'car',
    title: 'Car Rental & AC Cabs',
    displayTitle: 'कार रेंटल व प्राइवेट AC टैक्सी',
    subtitle: 'Innova, Ertiga, Dzire व Tempo Traveller',
    icon: Car,
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    iconColor: 'bg-sky-500 text-white',
    image: '/images/services/cab.webp',
    desc: 'परिवार के लिए सैनिटाइज्ड प्राइवेट गाड़ियां और सौराष्ट्र के अनुभवी ड्राइवर्स, जो हर तटीय रास्ता, मंदिर का सही समय और साफ भोजन स्थल जानते हैं।',
    features: ['वेरावल / राजकोट / अहमदाबाद से पिक-अप व ड्रॉप', 'पारिवारिक सामान के लिए विशाल बूट स्पेस', 'विनम्र, शालीन व सुरक्षित स्थानीय चालक']
  },
  {
    id: 'sightseeing',
    title: 'Sightseeing & Darshan Guide',
    displayTitle: 'दर्शन व स्थानीय मार्गदर्शन',
    subtitle: 'आरती समय, VIP दर्शन व ऐतिहासिक स्थल',
    icon: Compass,
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    iconColor: 'bg-teal-500 text-white',
    image: '/images/services/darshan.webp',
    desc: 'सोमनाथ संध्या आरती, साउंड एंड लाइट शो, भालका तीर्थ और त्रिवेणी संगम दर्शन में स्थानीय सहायता ताकि लंबी कतारों में आपका समय नष्ट न हो।',
    features: ['आरती समय व VIP दर्शन मार्गदर्शन', 'त्रिवेणी संगम व भालका तीर्थ दर्शन सहायता', 'बुजुर्ग श्रद्धालुओं हेतु व्हीलचेयर समन्वय']
  },
  {
    id: 'food',
    title: 'Desi Kathiyawadi & Satvik Food',
    displayTitle: 'शुद्ध सात्विक व काठियावाड़ी भोजन',
    subtitle: 'गरमा-गरम बाजरे का रोटला व गुजराती थाली',
    icon: Utensils,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'bg-emerald-500 text-white',
    image: '/images/services/food.webp',
    desc: 'गरमा-गरम बाजरे का रोटला, बैंगन का भरता (ओलो), शुद्ध छाछ और 100% शुद्ध शाकाहारी सात्विक भोजन के सर्वश्रेष्ठ स्थानीय पारिवारिक भोजनालय।',
    features: ['100% शुद्ध शाकाहारी व सात्विक भोजन', 'पारंपरिक काठियावाड़ी गांव जैसी पौष्टिक थाली', 'साफ-सुथरे व पारिवारिक भोजनालय']
  }
];

export default function ServicesGrid({ onBookService }) {
  return (
    <section id="services" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-extrabold mb-2 shadow-xs">
            <span>🤝 "बस एक कॉल... बाकी पूरी व्यवस्था हमारी!"</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            आपकी संपूर्ण यात्रा की व्यवस्था
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            होटल, AC कैब, दर्शन मार्गदर्शन और शुद्ध सात्विक भोजन — हम हर व्यवस्था संभालते हैं ताकि आप निश्चिंत होकर महादेव के दर्शन कर सकें।
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
                          alt={serv.displayTitle}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    )}
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border mb-2 ${serv.badgeColor}`}>
                    लोकल होस्ट सत्यापित
                  </span>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    {serv.displayTitle}
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
                  <span>{serv.displayTitle} बुक करें</span>
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
