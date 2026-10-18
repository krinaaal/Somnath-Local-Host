import React from 'react';
import { Bed, Car, Compass, Utensils, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SERVICES_CONTENT = {
  hotel: {
    icon: Bed,
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    iconColor: 'bg-amber-500 text-white',
    image: '/images/services/hotel-luxury.jpg',
    title: {
      hi: 'होटल व धर्मशाला स्टे',
      gu: 'હોટેલ અને ધર્મશાળા રોકાણ',
      en: 'Handpicked Hotel & Stay',
      mr: 'हॉटेल व धर्मशाळा स्टे'
    },
    subtitle: {
      hi: 'सोमनाथ मंदिर के निकट साफ-सुथरे AC रूम्स',
      gu: 'સોમનાથ મંદિર નજીક સ્વચ્છ AC રૂમ્સ',
      en: 'Walking distance to Somnath temple gate',
      mr: 'सोमनाथ मंदिराजवळ स्वच्छ AC खोल्या'
    },
    desc: {
      hi: 'सोमनाथ मंदिर के मुख्य द्वार के निकट आरामदायक व सत्यापित AC होटल्स और पारिवारिक अतिथि गृह। स्वच्छ बिस्तर, 24/7 गर्म पानी और बुजुर्गों के लिए लिफ्ट सुविधा।',
      gu: 'સોમનાથ મંદિરના મુખ્ય દરવાજા નજીક આરામદાયક અને ચકાસેલ AC હોટેલ્સ. સ્વચ્છ રૂમ, ૨૪ કલાક ગરમ પાણી અને વડીલો માટે લિફ્ટની સગવડ.',
      en: 'Comfortable verified AC rooms and family stays near Somnath temple gate. Spotless hygiene, 24/7 hot water, and senior-friendly elevators.',
      mr: 'सोमनाथ मंदिराच्या मुख्य प्रवेशद्वाराजवळ आरामदायक व स्वच्छ AC हॉटेल्स. २४ तास गरम पाणी आणि वृद्धांसाठी लिफ्ट सुविधा.'
    },
    features: {
      hi: ['मंदिर से चंद कदमों की पैदल दूरी', 'वरिष्ठ नागरिकों हेतु लिफ्ट व ग्राउंड फ्लोर', 'सत्यापित स्वच्छता और 24 घंटे गर्म पानी'],
      gu: ['મંદિરથી થોડા ડગલાંના અંતરે', 'વડીલો માટે લિફ્ટ અને ગ્રાઉન્ડ ફ્લોર', 'ચોખ્ખાઈ અને ૨૪ કલાક ગરમ પાણી'],
      en: ['Walking distance to temple gate', 'Elevator & ground-floor options for seniors', 'Verified cleanliness & 24/7 hot water'],
      mr: ['मंदिरापासून चालण्याच्या अंतरावर', 'ज्येष्ठ नागरिकांसाठी लिफ्ट सुविधा', 'स्वच्छता आणि २४ तास गरम पाणी']
    }
  },
  car: {
    icon: Car,
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
    iconColor: 'bg-sky-500 text-white',
    image: '/images/services/cab-luxury.jpg',
    title: {
      hi: 'कार रेंटल व प्राइवेट AC टैक्सी',
      gu: 'કાર રેન્ટલ અને પ્રાઇવેટ AC કેબ',
      en: 'Car Rental & Private AC Cabs',
      mr: 'कार रेंटल व प्रायव्हेट AC टॅक्सी'
    },
    subtitle: {
      hi: 'Innova, Ertiga, Dzire व Tempo Traveller',
      gu: 'Innova, Ertiga, Dzire અને Tempo Traveller',
      en: 'Innova Crysta, Ertiga, Dzire & Tempo',
      mr: 'Innova, Ertiga, Dzire व ट्रॅव्हलर'
    },
    desc: {
      hi: 'परिवार के लिए सैनिटाइज्ड प्राइवेट गाड़ियां और सौराष्ट्र के अनुभवी ड्राइवर्स, जो हर तटीय रास्ता, मंदिर का सही समय और साफ भोजन स्थल जानते हैं।',
      gu: 'પરિવાર માટે ચોખ્ખી પ્રાઇવેટ ગાડીઓ અને સૌરાષ્ટ્રના અનુભવી ડ્રાઇવર્સ, જે તમામ રસ્તાઓ, મંદિરનો સમય અને સારા જમવાના સ્થળો જાણે છે.',
      en: 'Sanitized private vehicles with vetted local Saurashtra chauffeurs knowing every coastal shortcut and clean vegetarian dining spot.',
      mr: 'कुटुंबासाठी स्वच्छ प्रायव्हेट गाड्या आणि सौराष्ट्रातील अनुभवी ड्रायव्हर्स जे योग्य मार्ग आणि उत्तम जेवणाची ठिकाणे जाणतात.'
    },
    features: {
      hi: ['वेरावल / राजकोट / अहमदाबाद से पिक-अप व ड्रॉप', 'पारिवारिक सामान के लिए विशाल बूट स्पेस', 'विनम्र, शालीन व सुरक्षित स्थानीय चालक'],
      gu: ['વેરાવળ / રાજકોટ / અમદાવાદથી પિક-અપ', 'સામાન માટે વિશાળ બૂટ સ્પેસ', 'વિનમ્ર અને સુરક્ષિત સ્થાનિક ડ્રાઇવર'],
      en: ['Pick & drop from Veraval / Rajkot / Ahmedabad', 'Spacious boot space for family luggage', 'Courteous, safe, non-smoking chauffeurs'],
      mr: ['वेरावळ / राजकोट / अहमदाबाद येथून पिकअप', 'लगेजसाठी पुरेशी जागा', 'नम्र आणि सुरक्षित स्थानिक चालक']
    }
  },
  sightseeing: {
    icon: Compass,
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    iconColor: 'bg-teal-500 text-white',
    image: '/images/services/darshan.webp',
    title: {
      hi: 'दर्शन व स्थानीय मार्गदर्शन',
      gu: 'દર્શન અને લોકલ માર્ગદર્શન',
      en: 'VIP Darshan & Local Guidance',
      mr: 'दर्शन व स्थानिक मार्गदर्शन'
    },
    subtitle: {
      hi: 'आरती समय, VIP दर्शन व ऐतिहासिक स्थल',
      gu: 'આરતી સમય, સરળ દર્શન અને સ્થળ માહિતી',
      en: 'Aarti slots & hassle-free guidance',
      mr: 'आरती वेळ, VIP दर्शन व माहिती'
    },
    desc: {
      hi: 'सोमनाथ संध्या आरती, साउंड एंड लाइट शो, भालका तीर्थ और त्रिवेणी संगम दर्शन में स्थानीय सहायता ताकि लंबी कतारों में आपका समय नष्ट न हो।',
      gu: 'સોમનાથ સાંજની આરતી, સાઉન્ડ એન્ડ લાઇટ શો, ભાલકા તીર્થ અને ત્રિવેણી સંગમ દર્શનમાં લોકલ મદદ જેથી કતારમાં સમય ન બગડે.',
      en: 'Personalized local assistance for Somnath Aarti, evening Light & Sound show, Bhalka Tirth, and Triveni Sangam rituals.',
      mr: 'सोमनाथ आरती, साऊंड आणि लाईट शो, भालका तीर्थ व त्रिवेणी संगम दर्शनासाठी स्थानिक समन्वय.'
    },
    features: {
      hi: ['आरती समय व VIP दर्शन मार्गदर्शन', 'त्रिवेणी संगम व भालका तीर्थ दर्शन सहायता', 'बुजुर्ग श्रद्धालुओं हेतु व्हीलचेयर समन्वय'],
      gu: ['આરતી સમય અને દર્શન ગાઇડન્સ', 'ત્રિવેણી સંગમ અને ભાલકા તીર્થ સહાય', 'વડીલો માટે વ્હીલચેયર વ્યવસ્થા'],
      en: ['Aarti timings & smooth darshan guidance', 'Triveni Sangam & Bhalka Tirth coordination', 'Wheelchair assistance for senior citizens'],
      mr: ['आरती वेळ व दर्शन मार्गदर्शन', 'त्रिवेणी संगम व भालका तीर्थ मदत', 'वृद्धांसाठी व्हीलचेअर व्यवस्था']
    }
  },
  food: {
    icon: Utensils,
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    iconColor: 'bg-emerald-500 text-white',
    image: '/images/services/food.webp',
    title: {
      hi: 'शुद्ध सात्विक व काठियावाड़ी भोजन',
      gu: 'શુદ્ધ સાત્વિક અને કાઠિયાવાડી ભોજન',
      en: 'Desi Kathiyawadi & Satvik Food',
      mr: 'शुद्ध सात्विक व काठियावाडी भोजन'
    },
    subtitle: {
      hi: 'गरमा-गरम बाजरे का रोटला व गुजराती थाली',
      gu: 'ગરમા-ગરમ બાજરાનો રોટલો અને થાળી',
      en: 'Piping hot Rotla & Gujarati Thali',
      mr: 'गरमागरम बाजरीची भाकरी व थाळी'
    },
    desc: {
      hi: 'गरमा-गरम बाजरे का रोटला, बैंगन का भरता (ओलो), शुद्ध छाछ और 100% शुद्ध शाकाहारी सात्विक भोजन के सर्वश्रेष्ठ स्थानीय पारिवारिक भोजनालय।',
      gu: 'ગરમા-ગરમ બાજરાનો રોટલો, રીંગણાનો ઓળો, છાશ અને ૧૦૦% શુદ્ધ શાકાહારી સાત્વિક જમવાની શ્રેષ્ઠ સ્થાનિક હોટેલ્સ.',
      en: 'Piping hot Bajra Rotla, roasted eggplant (Ringna no Olo), fresh buttermilk, and 100% pure vegetarian Satvik dining.',
      mr: 'गरमागरम बाजरीची भाकरी, वांग्याचे भरीत, ताक आणि १००% शुद्ध शाकाहारी सात्विक जेवणाची उत्कृष्ट ठिकाणे.'
    },
    features: {
      hi: ['100% शुद्ध शाकाहारी व सात्विक भोजन', 'पारंपरिक काठियावाड़ी गांव जैसी पौष्टिक थाली', 'साफ-सुथरे व पारिवारिक भोजनालय'],
      gu: ['૧૦૦% શુદ્ધ શાકાહારી અને સાત્વિક', 'પરંપરાગત કાઠિયાવાડી પૌષ્ટિક થાળી', 'સ્વચ્છ અને પારિવારિક રેસ્ટોરન્ટ'],
      en: ['100% pure vegetarian & Satvik cooking', 'Authentic Saurashtrian village flavours', 'Verified clean, hygienic family dining'],
      mr: ['१००% शुद्ध शाकाहारी व सात्विक भोजन', 'पारंपरिक चवदार काठियावाडी थाळी', 'स्वच्छ आणि कौटुंबिक रेस्टॉरंट']
    }
  }
};

export default function ServicesGrid({ onBookService }) {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-extrabold mb-2 shadow-xs">
            <span>
              {language === 'gu'
                ? '🤝 "માત્ર એક કૉલ... બાકીની સંપૂર્ણ વ્યવસ્થા અમારી!"'
                : language === 'mr'
                ? '🤝 "फक्त एक कॉल... बाकी संपूर्ण सोय आमची!"'
                : language === 'en'
                ? '🤝 "Just one call... complete local care is ours!"'
                : '🤝 "बस एक कॉल... बाकी पूरी व्यवस्था हमारी!"'}
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* 4 Friendly Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {Object.entries(SERVICES_CONTENT).map(([id, serv]) => {
            const Icon = serv.icon;
            const title = serv.title[language] || serv.title.hi;
            const subtitle = serv.subtitle[language] || serv.subtitle.hi;
            const desc = serv.desc[language] || serv.desc.hi;
            const features = serv.features[language] || serv.features.hi;

            return (
              <div
                key={id}
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
                          alt={title}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    )}
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border mb-2 ${serv.badgeColor}`}>
                    {language === 'gu' ? 'લોકલ હોસ્ટ ચકાસેલ' : language === 'mr' ? 'स्थानिक पडताळणी' : language === 'en' ? 'Verified Local Host' : 'लोकल होस्ट सत्यापित'}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                    {title}
                  </h3>
                  <div className="text-xs text-slate-500 font-semibold mb-3">
                    {subtitle}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {desc}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                    {features.map((feat, fIdx) => (
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
                  onClick={() => onBookService && onBookService(title)}
                  className="w-full py-3 px-3 rounded-2xl bg-slate-100 hover:bg-amber-400 text-slate-800 hover:text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all duration-200 tap-bounce cursor-pointer"
                >
                  <span>{t('bookServiceBtn')}</span>
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
