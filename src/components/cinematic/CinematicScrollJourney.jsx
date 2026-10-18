import React, { useState, useEffect, useRef } from 'react';
import StylizedCar3D from './StylizedCar3D';
import StylizedRickshaw3D from './StylizedRickshaw3D';
import StylizedBus3D from './StylizedBus3D';
import StylizedLion3D from './StylizedLion3D';
import { useLanguage } from '../../context/LanguageContext';
import {
  MapPin,
  Compass,
  Sparkles,
  ChevronRight,
  Sun,
  ShieldCheck,
  Camera,
  Heart,
  Navigation2
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 'somnath',
    stepNumber: '01',
    name: {
      gu: 'શ્રી સોમનાથ મહાદેવ',
      hi: 'श्री सोमनाथ महादेव',
      en: 'Shree Somnath Temple',
      mr: 'श्री सोमनाथ महादेव'
    },
    tagline: {
      gu: 'પ્રથમ જ્યોતિર્લિંગ • અરબ સાગર તટની દિવ્ય સંધ્યા આરતી',
      hi: 'प्रथम ज्योतिर्लिंग • अरब सागर तट की दिव्य संध्या आरती',
      en: 'First Jyotirlinga by the Waves of the Arabian Sea',
      mr: 'प्रथम ज्योतिर्लिंग • अरबी समुद्र किनारी दिव्य महाआरती'
    },
    eyebrow: {
      gu: 'Chapter 01 • પવિત્ર સોમનાથ તીર્થ',
      hi: 'Chapter 01 • पवित्र समुद्र तट',
      en: 'Chapter 01 • Origin Jyotirlinga',
      mr: 'Chapter 01 • पवित्र समुद्र तट'
    },
    distanceLabel: {
      gu: 'યાત્રાનો પ્રારંભ • સોમનાથ દરિયાકાંઠો',
      hi: 'यात्रा का आरंभ • सौराष्ट्र समुद्री तट',
      en: 'Base Station • Arabian Coast',
      mr: 'यात्रेची सुरुवात • सौराष्ट्र किनारा'
    },
    desktopImg: '/images/destinations/somnath-cinematic.webp',
    mobileImg: '/images/destinations/somnath-mobile.webp',
    imgPosition: 'object-[center_35%]',
    imgAlt: 'Majestic Shree Somnath Temple standing beside the waves of Arabian Sea',
    story: {
      gu: 'પ્રથમ જ્યોતિર્લિંગ શ્રી સોમનાથ મહાદેવના ચરણોમાં દર્શનથી યાત્રાનો પાવન પ્રારંભ થાય છે. સંધ્યા આરતી સમયે શંખનાદ, ઝાલર અને સમુદ્રના મોજાંનો ગૂંજતો નાદ અનોખી શાંતિ પ્રદાન કરે છે. સાગર દર્શન પાથવે અને ઐતિહાસિક બાણસ્તંભ અવશ્ય દર્શનીય છે.',
      hi: 'अपनी पावन यात्रा की शुरुआत करें प्रथम ज्योतिर्लिंग श्री सोमनाथ महादेव के पावन दर्शन से। संध्या आरती के समय शंख-घंटियों की दिव्य गूंज और अरब सागर की लहरों का संगम मन को असीम शांति से भर देता है। समुद्र तट के किनारे शांत टहलें और प्राचीन बाण स्तंभ देखें।',
      en: 'Begin your sacred pilgrimage at the first of the 12 Jyotirlingas, Shree Somnath. Feel the uplifting sea breeze during evening Aarti with temple bells echoing over ocean waves.',
      mr: 'बारा ज्योतिर्लिंगांपैकी प्रथम श्री सोमनाथ महादेवांच्या दर्शनाने यात्रेची सुरुवात करा. संध्याकाळची महाआरती आणि समुद्राच्या लाटांचा पवित्र संगम मनाला असीम शांती देतो.'
    },
    highlights: {
      gu: ['સાંજની દિવ્ય મહાઆરતી અને સાગર દર્શન', 'ભવ્ય સાઉન્ડ એન્ડ લાઇટ શો', 'ત્રિવેણી સંગમ પવિત્ર સ્નાન', 'પ્રાચીન અબાધિત જ્યોતિર્મય બાણસ્તંભ'],
      hi: ['शाम की दिव्य संध्या आरती व समुद्र दर्शन', 'भव्य ऐतिहासिक साउंड एंड लाइट शो', 'त्रिवेणी संगम में पवित्र संगम स्नान', 'प्राचीन बाण स्तंभ व समुद्र तट प्रोमेनेड'],
      en: ['Mesmerizing Evening Sea Aarti', 'Heritage Light & Sound Show', 'Holy Triveni Sangam Confluence', 'Ancient Sea-Facing Baan Stambh'],
      mr: ['संध्याकाळची दिव्य महाआरती व समुद्र दर्शन', 'भव्य लाईट अँड साऊंड शो', 'त्रिवेणी संगमावर पवित्र स्नान', 'प्राचीन बाणस्तंभ']
    },
    funFact: {
      gu: 'ભૌગોલિક અજાયબી: સોમનાથના બાણસ્તંભથી દક્ષિણ ધ્રુવ (એન્ટાર્કટિકા) સુધી સીધી રેખામાં કોઈ જમીન આવતી નથી!',
      hi: 'भौगोलिक चमत्कार: सोमनाथ समुद्र तट पर स्थित बाण स्तंभ प्रमाणित करता है कि यहाँ से दक्षिण ध्रुव (अंटार्कटिका) तक सीधी रेखा में कोई ज़मीन नहीं है!',
      en: 'Geographical Marvel: The ancient arrow pillar at Somnath marks an uninterrupted sea line straight to Antarctica without any landmass!',
      mr: 'सोमनाथच्या बाणस्तंभापासून दक्षिण ध्रुवापर्यंत (अंटार्क्टिका) सरळ रेषेत कोणतीही जमीन लागत नाही!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive AC Cab',
    ctaText: { gu: 'સોમનાથ દર્શન પ્લાન કરો', hi: 'Somnath Darshan Plan Karein', en: 'Plan Somnath Darshan', mr: 'सोमनाथ दर्शन प्लान करा' }
  },
  {
    id: 'ban-ganga',
    stepNumber: '02',
    name: {
      gu: 'બાણગંગા અને સમુદ્ર શિવલિંગ',
      hi: 'बाणगंगा व समुद्र शिवलिंग',
      en: 'Ban Ganga & Coastal Shivling',
      mr: 'बाणगंगा व समुद्र शिवलिंग'
    },
    tagline: {
      gu: 'સોમનાથથી ૩ કિ.મી. • સમુદ્રના મોજાં વચ્ચે સ્થાપિત પ્રાચીન શિવલિંગ',
      hi: 'सोमनाथ से 3 km • समुद्र की लहरों में स्थापित प्राचीन शिवलिंग',
      en: '3 km from Somnath • Submerged Natural Sea Shivling',
      mr: 'सोमनाथपासून 3 किमी • समुद्राच्या लाटांमधील प्राचीन शिवलिंग'
    },
    eyebrow: {
      gu: 'Chapter 02 • સમુદ્ર શિવલિંગ',
      hi: 'Chapter 02 • समुद्र तट पर बाणगंगा',
      en: 'Chapter 02 • Coastal Spring & Linga',
      mr: 'Chapter 02 • समुद्र शिवलिंग'
    },
    distanceLabel: {
      gu: 'સોમનાથ મંદિરથી ૩ કિ.મી. દરિયાકાંઠો',
      hi: 'सोमनाथ मंदिर से 3 km समुद्र तट',
      en: '3 km from Somnath Temple Coast',
      mr: 'सोमनाथ मंदिरापासून 3 किमी'
    },
    desktopImg: '/images/destinations/ban-ganga.webp',
    mobileImg: '/images/destinations/ban-ganga-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Ancient Shiva linga resting amidst the blue ocean waves near Somnath',
    story: {
      gu: 'સોમનાથ મંદિરથી માત્ર ૩ કિ.મી. દૂર દરિયાકાંઠે આવેલું છે પવિત્ર બાણગંગા. સમુદ્રની ભરતી અને ઓટ વચ્ચે અરબ સાગરના મોજાં સાક્ષાત શિવલિંગ પર જળાભિષેક કરે છે. અહીં અર્જુને બાણ ચલાવીને મીઠા પાણીની ગંગા પ્રગટ કરી હતી.',
      hi: 'सोमनाथ मंदिर से मात्र 3 किमी दूर समुद्र तट पर स्थित है बाणगंगा। समुद्र की लहरें दिन-रात स्वयं महादेव का अभिषेक करती हैं। यहाँ पर शांत व अद्भुत आध्यात्मिक वातावरण मिलता है।',
      en: 'Just 3 km along the coastline from Somnath Temple, twin Shiva lingas sit right on the tidal rocks where Arabian waves naturally perform continuous Jalabhishek.',
      mr: 'सोमनाथ मंदिरापासून ३ किमी अंतरावर समुद्राच्या लाटांमध्ये असलेले प्राचीन शिवलिंग, जिथे निसर्गतः महादेवांचा अभिषेक होतो.'
    },
    highlights: {
      gu: ['દરિયાના મોજાં વચ્ચે શિવલિંગ દર્શન', 'અર્જુન પ્રગટિત પ્રાચીન મીઠા પાણીનો ઝરો', 'ઓટ (Low Tide) સમયે શાંત ચરણ દર્શન', 'સૂર્યાસ્ત સમયે અદભુત શાંતિ'],
      hi: ['लहरों के बीच शिवलिंग दर्शन', 'प्राचीन मीठे पानी का स्रोत', 'लो टाइड में सुगम दर्शन', 'सूर्यास्त का विहंगम दृश्य'],
      en: ['Ocean Waves Natural Abhishek', 'Sacred Freshwater Spring', 'Easy Access during Low Tide', 'Peaceful Sunset Spot'],
      mr: ['लाटांमधील शिवलिंग दर्शन', 'पवित्र पाण्याचा झरा', 'शांत वातावरण', 'सुंदर सूर्यास्त']
    },
    funFact: {
      gu: 'ખારા સમુદ્રના કિનારે રેતીમાંથી આજે પણ મીઠા જળનો પ્રવાહ વહે છે!',
      hi: 'खारे समुद्र के ठीक किनारे पर आज भी मीठे जल की अविरल धारा बहती है!',
      en: 'Despite being steps away from the salty ocean, fresh sweet drinking water naturally springs from the shore rocks!',
      mr: 'खार्या समुद्राच्या काठावर आजही गोड पाण्याचा नैसर्गिक झरा वाहतो!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive Tourer',
    ctaText: { gu: 'બાણગંગા દર્શન જોડો', hi: 'Ban Ganga Yatra Mein Jodein', en: 'Add Ban Ganga to Plan', mr: 'बाणगंगा यात्रेत जोडा' }
  },
  {
    id: 'gita-mandir',
    stepNumber: '03',
    name: {
      gu: 'ગીતા મંદિર અને ત્રિવેણી સંગમ',
      hi: 'गीता मंदिर व त्रिवेणी संगम',
      en: 'Gita Mandir & Triveni Sangam',
      mr: 'गीता मंदिर व त्रिवेणी संगम'
    },
    tagline: {
      gu: 'સોમનાથથી ૧.૫ કિ.મી. • હિરણ, કપિલા અને સરસ્વતી નદીનો પવિત્ર સંગમ',
      hi: 'सोमनाथ से 1.5 km • हिरण, कपिला व सरस्वती का पावन संगम',
      en: '1.5 km from Somnath • Confluence of 3 Sacred Rivers',
      mr: 'सोमनाथपासून 1.5 किमी • त्रिवेणी संगम व गीता मंदिर'
    },
    eyebrow: {
      gu: 'Chapter 03 • ત્રિવેણી તીર્થ',
      hi: 'Chapter 03 • पावन त्रिवेणी',
      en: 'Chapter 03 • Sacred Confluence',
      mr: 'Chapter 03 • त्रिवेणी तीर्थ'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૧.૫ કિ.મી. ઘાટ',
      hi: 'सोमनाथ से 1.5 km संगम घाट',
      en: '1.5 km from Somnath Ghat',
      mr: 'सोमनाथपासून 1.5 किमी'
    },
    desktopImg: '/images/destinations/triveni-sangam.webp',
    mobileImg: '/images/destinations/triveni-sangam-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Triveni Sangam confluence where three sacred rivers meet the Arabian Sea',
    story: {
      gu: 'હિરણ, કપિલા અને અદ્રશ્ય સરસ્વતી નદીનો અરબ સાગર સાથે પાવન ત્રિવેણી સંગમ થાય છે. સંગમ તટે સંગેમરમરથી કંડારેલું ભવ્ય ગીતા મંદિર આવેલું છે, જેના સ્તંભો પર શ્રીમદ્ ભગવદ્ ગીતાના તમામ ૧૮ અધ્યાયો અને ૭૦૦ શ્લોકો અંકિત છે.',
      hi: 'हिरण, कपिला और सरस्वती नदियों का पावन त्रिवेणी संगम जहाँ समुद्र में नदियाँ समाहित होती हैं। तट पर स्थित भव्य संगमरमर का गीता मंदिर जहाँ सम्पूर्ण 18 अध्याय संगमरमर के खंभों पर नक्काशीदार हैं।',
      en: 'The auspicious Triveni confluence where Hiran, Kapila and mythical Saraswati meet the ocean. The white marble Gita Mandir displays all 700 verses of the Bhagavad Gita.',
      mr: 'हिरण, कपिला आणि सरस्वती नद्यांचा संगम. संगमरवरी गीता मंदिराच्या खांबांवर संपूर्ण १८ अध्यायांचे ७०० श्लोक कोरलेले आहेत.'
    },
    highlights: {
      gu: ['ત્રણ નદીઓનો પવિત્ર સંગમ સ્નાન', '૧૮ અધ્યાય અંકિત સંગેમરમર સ્તંભો', 'શ્રીકૃષ્ણ ચરણ પાદુકા દર્શન', 'પરશુરામ તપોભૂમિ'],
      hi: ['पवित्र त्रिवेणी स्नान', 'गीता के 18 अध्यायों के स्तंभ', 'श्रीकृष्ण चरण पादुका', 'परशुराम मंदिर'],
      en: ['Holy River Confluence Dip', 'Complete Gita Verses Inscriptions', 'Lord Krishna Holy Paduka', 'Parshuram Tapobhumi'],
      mr: ['पवित्र त्रिवेणी स्नान', 'गीतेचे श्लोक कोरलेले खांब', 'श्रीकृष्ण चरण पादुका', 'परशुराम मंदिर']
    },
    funFact: {
      gu: 'અહીં ગીતાજીના શ્લોકોનું પઠન કરવાથી અવાજનો દિવ્ય ગુંજારવ મંદિરના હોલમાં ગુંજે છે!',
      hi: 'यहाँ गीता के श्लोकों का पाठ करने पर मंदिर के विशाल गुंबद में अद्भुत प्रतिध्वनि गूंजती है!',
      en: 'The dome acoustics of Gita Mandir echo chanted Sanskrit shlokas with mesmerizing natural clarity!',
      mr: 'येथे गीता पठण केल्यास घुमटामध्ये दिव्य प्रतिध्वनी उमटतो!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive Tourer',
    ctaText: { gu: 'ત્રિવેણી સંગમ જોડો', hi: 'Triveni Sangam Jodein', en: 'Add Triveni to Plan', mr: 'त्रिवेणी संगम जोडा' }
  },
  {
    id: 'bhalka-tirth',
    stepNumber: '04',
    name: {
      gu: 'ભાલકા તીર્થ',
      hi: 'भालका तीर्थ',
      en: 'Bhalka Tirth',
      mr: 'भालका तीर्थ'
    },
    tagline: {
      gu: 'સોમનાથથી ૪ કિ.મી. • શ્રીકૃષ્ણ નિજધામ ગમન પાવન તીર્થ',
      hi: 'सोमनाथ से 4 km • श्रीकृष्ण परमधाम प्रस्थान पावन तीर्थ',
      en: '4 km from Somnath • Lord Krishna Sacred Departure Shrine',
      mr: 'सोमनाथपासून 4 किमी • श्रीकृष्ण निजधाम तीर्थ'
    },
    eyebrow: {
      gu: 'Chapter 04 • શ્રીકૃષ્ણ નિજધામ',
      hi: 'Chapter 04 • श्रीकृष्ण निजधाम',
      en: 'Chapter 04 • Sacred Peepal Grove',
      mr: 'Chapter 04 • श्रीकृष्ण परमधाम'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૪ કિ.મી. વેરાવળ માર્ગ',
      hi: 'सोमनाथ से 4 km वेरावल मार्ग',
      en: '4 km from Somnath on Veraval Road',
      mr: 'सोमनाथपासून 4 किमी'
    },
    desktopImg: '/images/destinations/bhalka-tirth.webp',
    mobileImg: '/images/destinations/bhalka-tirth-mobile.webp',
    imgPosition: 'object-[center_40%]',
    imgAlt: 'Sacred Peepal tree and divine sleeping idol at Bhalka Tirth',
    story: {
      gu: 'પીપળાના પ્રાચીન વૃક્ષ નીચે વિશ્રામ કરી રહેલા ભગવાન શ્રીકૃષ્ણના ચરણકમળમાં જરા નામના પારધીનું તીર વાગ્યું હતું અને પ્રભુએ આ પવિત્ર ભૂમિ પરથી પૃથ્વી પરની લીલા સંકેલી નિજધામ પ્રસ્થાન કર્યું હતું. અહીં ધ્યાન ધરવાથી મનને અસીમ શાંતિ મળે છે.',
      hi: 'प्राचीन पीपल वृक्ष की छाँव में विश्राम करते समय भगवान श्री कृष्ण के चरणकमल में जरा शिकारी का बाण लगा था और प्रभु ने अपनी पार्थिव लीला पूर्ण कर परमधाम प्रस्थान किया था। अत्यंत शांत व दिव्य स्थान।',
      en: 'The sacred peepal grove where Lord Krishna rested and departed for his heavenly abode. A serene shrine featuring a divine deity of Lord Krishna in repose.',
      mr: 'पिंपळाच्या वृक्षाखाली विश्रांती घेत असताना भगवान श्रीकृष्णांनी आपल्या अवताराची सांगता करून निजधामास प्रस्थान केले.'
    },
    highlights: {
      gu: ['પ્રાચીન પવિત્ર પીપળાનું વૃક્ષ', 'ચતુર્ભુજ વિષ્ણુ મુદ્રામાં મનમોહક મૂર્તિ', 'શાંત આધ્યાત્મિક વાતાવરણ', 'શ્રીકૃષ્ણ લીલા ચિત્રો'],
      hi: ['प्राचीन पवित्र पीपल वृक्ष', 'भगवान कृष्ण की शयन मुद्रा मूर्ति', 'अति शांत ध्यान स्थल', 'श्रीकृष्ण जीवन लीला'],
      en: ['Ancient Sacred Peepal Tree', 'Lord Krishna in Divine Repose', 'Deeply Serene Meditation Aura', 'Sacred Narrative Murals'],
      mr: ['पवित्र पिंपळ वृक्ष', 'मनमोहक श्रीकृष्ण मूर्ती', 'अत्यंत शांत ध्यान केंद्र', 'श्रीकृष्ण लीला']
    },
    funFact: {
      gu: 'ભાલકા તીર્થમાં બિરાજમાન ભગવાન શ્રીકૃષ્ણની મૂર્તિ આખા ભારતમાં એકમાત્ર એવી મૂર્તિ છે જ્યાં પ્રભુ વિશ્રામ મુદ્રામાં દર્શન આપે છે!',
      hi: 'भालका तीर्थ में स्थापित भगवान कृष्ण की प्रतिमा संपूर्ण भारत में अत्यंत दुर्लभ शयन मुद्रा में दर्शन देती है!',
      en: 'Bhalka Tirth is among the rarest shrines in India where Lord Krishna is worshiped in a relaxed resting posture under the Peepal canopy.',
      mr: 'येथील श्रीकृष्णांची विश्रांती मुद्रेतील मूर्ती संपूर्ण भारतात अत्यंत दुर्मीळ आहे!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive Cab',
    ctaText: { gu: 'ભાલકા તીર્થ પ્લાન કરો', hi: 'Bhalka Tirth Plan Karein', en: 'Plan Bhalka Tirth', mr: 'भालका तीर्थ जोडा' }
  },
  {
    id: 'madhavpur',
    stepNumber: '05',
    name: {
      gu: 'માધવપુર ઘેડ',
      hi: 'माधवपुर घेड',
      en: 'Madhavpur Ghed',
      mr: 'माधवपूर घेड'
    },
    tagline: {
      gu: 'સોમનાથથી ૭૫ કિ.મી. • શ્રીકૃષ્ણ-રૂક્ષ્મણી વિવાહ સ્થળ અને રમણીય દરિયાકાંઠો',
      hi: 'सोमनाथ से 75 km • श्रीकृष्ण-रुक्मिणी विवाह स्थल व सुरम्य तट',
      en: '75 km from Somnath • Krishna-Rukmini Wedding Beach Highway',
      mr: 'सोमनाथपासून 75 किमी • श्रीकृष्ण-रुक्मिणी विवाह स्थळ'
    },
    eyebrow: {
      gu: 'Chapter 05 • કોસ્ટલ હાઇવે',
      hi: 'Chapter 05 • सुरम्य तटीय मार्ग',
      en: 'Chapter 05 • Scenic Coastal Highway',
      mr: 'Chapter 05 • कोस्टल हायवे'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૭૫ કિ.મી. દરિયાઈ હાઇવે NH-51',
      hi: 'सोमनाथ से 75 km सुंदर तटीय मार्ग NH-51',
      en: '75 km along Coastal Highway NH-51',
      mr: 'सोमनाथपासून 75 किमी कोस्टल हायवे'
    },
    desktopImg: '/images/destinations/madhavpur.webp',
    mobileImg: '/images/destinations/madhavpur-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Scenic Madhavpur coastal highway lined with coconut trees and golden sands',
    story: {
      gu: 'ગુજરાતનો સૌથી મનોહર દરિયાઈ માર્ગ માધવપુર ઘેડ થઈને પસાર થાય છે. એક તરફ નાળિયેરીના બગીચાઓ અને બીજી તરફ ઘુઘવતો અરબ સાગર! અહીં ભગવાન શ્રીકૃષ્ણ અને માતા રૂક્ષ્મણીજીનો પવિત્ર વિવાહ સંપન્ન થયો હતો.',
      hi: 'गुजरात का सबसे सुरम्य तटीय हाईवे माधवपुर से होकर गुजरता है। एक तरफ नारियल के बाग और दूसरी तरफ अरब सागर का नीला पानी! यहाँ भगवान श्रीकृष्ण और देवी रुक्मिणी का पावन विवाह हुआ था।',
      en: 'One of India’s most scenic coastal drives along NH-51 with coconut palms on one side and turquoise waves on the other, where Krishna and Rukmini wed.',
      mr: 'नारळाच्या बागा आणि अरबी समुद्राचा निळा किनारा असलेला सुंदर रस्ता, जिथे श्रीकृष्ण-रुक्मिणीचा विवाह झाला होता.'
    },
    highlights: {
      gu: ['ઐતિહાસિક માધવરાયજી મંદિર', 'નાળિયેરીથી ઘેરાયેલો ગોલ્ડન બીચ', 'તાજા નાળિયેર પાણી અને સ્થાનિક ફળો', 'કોસ્ટલ ફોટોગ્રાફી પોઇન્ટ'],
      hi: ['प्राचीन माधवराय जी मंदिर', 'नारियल के पेड़ों से घिरा बीच', 'ताजा नारियल पानी व विश्राम', 'अद्भुत कोस्टल ड्राइव'],
      en: ['Ancient Madhavrai Temple', 'Palm-fringed Golden Sands', 'Fresh Coastal Coconut Water', 'Scenic Highway Photography'],
      mr: ['माधवरायजी मंदिर', 'नारळाच्या बागांचा किनारा', 'ताजे नारळ पाणी', 'निसर्गरम्य रस्ता']
    },
    funFact: {
      gu: 'દર વર્ષે રામનવમીથી અહીં પાંચ દિવસનો વિશાળ માધવપુર મેળો ભરાય છે જેમાં પૂર્વોત્તર ભારત સાથે સાંસ્કૃતિક સંગમ થાય છે!',
      hi: 'हर वर्ष यहाँ भव्य माधवपुर मेला लगता है जो गुजरात और पूर्वोत्तर भारत (अरुणाचल प्रदेश) के ऐतिहासिक संबंध का साक्षी है!',
      en: 'The annual Madhavpur Fair celebrates the eternal historic link between Gujarat and Northeast India through the marriage of Rukmini.',
      mr: 'येथे दरवर्षी गुजरात व ईशान्य भारताच्या सांस्कृतिक संगमाचा भव्य मेळा भरतो!'
    },
    vehicle: 'car',
    vehicleLabel: 'Coastal Cruiser Cab',
    ctaText: { gu: 'માધવપુર રૂટ જોડો', hi: 'Madhavpur Route Jodein', en: 'Add Madhavpur to Tour', mr: 'माधवपूर जोडा' }
  },
  {
    id: 'porbandar',
    stepNumber: '06',
    name: {
      gu: 'પોરબંદર (સુદામા મંદિર)',
      hi: 'पोरबंदर (सुदामा मंदिर)',
      en: 'Porbandar (Sudama Mandir)',
      mr: 'पोरबंदर (सुदामा मंदिर)'
    },
    tagline: {
      gu: 'સોમનાથથી ૧૩૦ કિ.મી. • કૃષ્ણ-સુદામા મૈત્રી ધામ અને પૂજ્ય બાપુનું કીર્તિ મંદિર',
      hi: 'सोमनाथ से 130 km • कृष्ण-सुदामा मित्रता धाम व कीर्ति मंदिर',
      en: '130 km from Somnath • Sudama-Krishna Friendship Temple & Kirti Mandir',
      mr: 'सोमनाथपासून 130 किमी • सुदामा मंदिर व कीर्ती मंदिर'
    },
    eyebrow: {
      gu: 'Chapter 06 • સુદામાપુરી',
      hi: 'Chapter 06 • सुदामापुरी',
      en: 'Chapter 06 • Sudamapuri Heritage',
      mr: 'Chapter 06 • सुदामापुरी'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૧૩૦ કિ.મી. હાઇવે',
      hi: 'सोमनाथ से 130 km कोस्टल हाईवे',
      en: '130 km Midpoint to Dwarka',
      mr: 'सोमनाथपासून 130 किमी'
    },
    desktopImg: '/images/destinations/porbandar.webp',
    mobileImg: '/images/destinations/porbandar-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Historic Sudama temple in the port city of Porbandar',
    story: {
      gu: 'દ્વારકા જતા રસ્તામાં આવતું પ્રાચીન સુદામાપુરી એટલે કે પોરબંદર. સમગ્ર વિશ્વમાં ભક્ત સુદામાજીનું આ એકમાત્ર ઐતિહાસિક મંદિર છે. સાથે જ મહાત્મા ગાંધીજીનું જન્મસ્થળ કીર્તિ મંદિર અને રમણીય ચોપાટી બીચ દર્શનીય છે.',
      hi: 'द्वारका जाते समय रास्ते में पड़ता है पावन सुदामापुरी यानी पोरबंदर। विश्व में सुदामा जी का एकमात्र ऐतिहासिक मंदिर यहीं स्थित है। पास ही राष्ट्रपिता महात्मा गांधी का जन्मस्थान कीर्ति मंदिर है।',
      en: 'Located midway between Somnath and Dwarka, ancient Sudamapuri hosts the only temple in the world dedicated to Sudama, alongside Mahatma Gandhi’s birthplace Kirti Mandir.',
      mr: 'द्वारका मार्गावर असलेले पोरबंदर. जगात सुदामाजींचे एकमेव मंदिर येथे आहे, तसेच महात्मा गांधींचे जन्मस्थान कीर्ती मंदिर आहे.'
    },
    highlights: {
      gu: ['વિશ્વમાં એકમાત્ર સુદામા મંદિર', 'મહાત્મા ગાંધીજીનું કીર્તિ મંદિર', 'ચોપાટી બીચ અને પક્ષી દર્શન', 'પૌરાણિક મૈત્રી સ્મારક'],
      hi: ['विश्व का एकमात्र सुदामा मंदिर', 'गांधीजी का जन्मस्थान कीर्ति मंदिर', 'पोरबंदर चौपाटी व समुद्री हवा', 'अमर मित्रता का प्रतीक'],
      en: ['World’s Sole Sudama Temple', 'Mahatma Gandhi Birthplace (Kirti Mandir)', 'Chowpatty Beach Promenade', 'Sacred Friendship Monument'],
      mr: ['एकमेव सुदामा मंदिर', 'गांधीजींचे कीर्ती मंदिर', 'चौपाटी समुद्रकिनारा', 'पवित्र मैत्री स्मारक']
    },
    funFact: {
      gu: 'સુદામા મંદિર પરિસરમાં પરંપરાગત ભુલભુલામણી (ચક્રવ્યૂહ) છે જેમાંથી પસાર થવું શ્રદ્ધાળુઓ માટે વિશેષ અનુભવ છે!',
      hi: 'सुदामा मंदिर में एक पारंपरिक भूलभुलैया चक्रव्यूह बना हुआ है जिसे पार करना श्रद्धालुओं के लिए बड़ा रोचक अनुभव होता है!',
      en: 'The Sudama Temple courtyard features a historic carved labyrinth maze that pilgrims walk through as a symbolic spiritual passage.',
      mr: 'सुदामा मंदिरात एक प्राचीन चक्रव्यूह आहे ज्यातून जाणे भाविकांसाठी आगळा अनुभव ठरतो!'
    },
    vehicle: 'bus',
    vehicleLabel: 'Deluxe Tourist Coach',
    ctaText: { gu: 'પોરબંદર દર્શન જોડો', hi: 'Porbandar Darshan Jodein', en: 'Add Porbandar Stop', mr: 'पोरबंदर जोडा' }
  },
  {
    id: 'dwarka',
    stepNumber: '07',
    name: {
      gu: 'શ્રી દ્વારકાધીશ જગત મંદિર',
      hi: 'श्री द्वारकाधीश जगत मंदिर',
      en: 'Dwarkadhish Jagat Mandir',
      mr: 'श्री द्वारकाधीश मंदिर'
    },
    tagline: {
      gu: 'સોમનાથથી ૨૩૦ કિ.મી. • ચાર ધામ પૈકીનું મોક્ષધામ અને ૫૨ ગજ ધ્વજા',
      hi: 'सोमनाथ से 230 km • चार धाम मोक्षपुरी व 52 गज ध्वजा',
      en: '230 km from Somnath • Sacred Char Dham & 52-Yard Dhwaja',
      mr: 'सोमनाथपासून 230 किमी • चार धामांपैकी पावन मोक्षपुरी'
    },
    eyebrow: {
      gu: 'Chapter 07 • મોક્ષધામ દ્વારકા',
      hi: 'Chapter 07 • पावन मोक्षपुरी',
      en: 'Chapter 07 • Golden Mokshapuri',
      mr: 'Chapter 07 • पावन मोक्षपुरी'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૨૩૦ કિ.મી. કોસ્ટલ હાઇવે',
      hi: 'सोमनाथ से 230 km कोस्टल हाईवे NH-51',
      en: '230 km via Coastal Highway NH-51',
      mr: 'सोमनाथपासून 230 किमी'
    },
    desktopImg: '/images/destinations/dwarka-cinematic.webp',
    mobileImg: '/images/destinations/dwarka-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Historic Dwarkadhish Jagat Mandir spire rising over Gomti river',
    story: {
      gu: 'ભગવાન શ્રીકૃષ્ણની સોનાની રાજધાની દ્વારકા! ૫ માળના ભવ્ય જગત મંદિરના શિખરે ૫૨ ગજની ધ્વજા લહેરાય છે. ગોમતી ઘાટ, સુદામા સેતુ અને સાંજની મહાઆરતી શ્રદ્ધાળુઓને ભાવવિભોર કરી દે છે.',
      hi: 'गुजरात के सबसे खूबसूरत कोस्टल हाईवे से होते हुए पहुंचें भगवान श्री कृष्ण की पावन नगरी द्वारका। 5 मंजिला जगत मंदिर के शिखर पर लहराती 52 गज की ध्वजा के दर्शन करें और गोमती नदी के तट पर शांति महसूस करें।',
      en: 'Arrive at the golden capital of Lord Krishna. Marvel at the 5-story carved sandstone Jagat Mandir with its fluttering 52-yard flag beside holy Gomti river.',
      mr: 'भगवान श्रीकृष्णांची सुवर्णनगरी द्वारका. पाचमजली जगत मंदिराच्या शिखरावर ५२ गजांची ध्वजा फडकत असते. गोमती घाट आणि संध्याकाळची महाआरती मनाला भुरळ घालते.'
    },
    highlights: {
      gu: ['૫૨ ગજ ધ્વજા રોહણ દર્શન', 'ગોમતી ઘાટ પવિત્ર સ્નાન અને સુદામા સેતુ', 'મંગળા અને શયન આરતી દર્શન', 'દ્વારકા સ્થાનિક બજાર'],
      hi: ['52 गज ध्वजा दर्शन', 'गोमती संगम व सुदामा सेतु', 'मंगला व संध्या आरती दर्शन', 'द्वारका प्रसिद्ध पटोला व स्मृति चिन्ह'],
      en: ['52-Yard Sacred Dhwaja Ceremony', 'Gomti Sangam Ghat & Sudama Setu', 'Mangla & Shayan Aarti Darshan', 'Heritage Dwarka Bazaar'],
      mr: ['५२ गज ध्वजा दर्शन', 'गोमती संगम व सुदामा सेतू', 'मंगला आरती दर्शन', 'द्वारका बाजारपेठ']
    },
    funFact: {
      gu: 'પરંપરા: જગત મંદિરની ૫૨ ગજની ધ્વજા દિવસમાં પાંચ વખત વૈદિક વિધિ સાથે બદલવામાં આવે છે!',
      hi: 'परंपरा: द्वारकाधीश मंदिर की 52 गज की विशाल ध्वजा दिन में 5 बार पूरी विधि-विधान से बदली जाती है!',
      en: 'The mammoth 52-yard sacred flag atop Jagat Mandir is ritually changed 5 times each day by dedicated local families.',
      mr: 'जगत मंदिराची ५२ गजांची ध्वजा दिवसातून ५ वेळा विधिवत बदलली जाते!'
    },
    vehicle: 'bus',
    vehicleLabel: 'Deluxe AC Coach',
    ctaText: { gu: 'દ્વારકા યાત્રા પ્લાન કરો', hi: 'Dwarka Yatra Plan Karein', en: 'Plan Dwarka Yatra', mr: 'द्वारका दर्शन प्लान करा' }
  },
  {
    id: 'shivrajpur',
    stepNumber: '08',
    name: {
      gu: 'શિવરાજપુર બ્લુ ફ્લેગ બીચ',
      hi: 'शिवराजपुर ब्लू फ्लैग बीच',
      en: 'Shivrajpur Blue Flag Beach',
      mr: 'शिवराजपूर ब्लू फ्लॅग बीच'
    },
    tagline: {
      gu: 'દ્વારકાથી ૧૨ કિ.મી. • આંતરરાષ્ટ્રીય બ્લુ ફ્લેગ સર્ટિફાઇડ અતિ સ્વચ્છ સમુદ્ર તટ',
      hi: 'द्वारका से 12 km • अंतर्राष्ट्रीय ब्लू फ्लैग प्रमाणित पारदर्शी नीला बीच',
      en: '12 km from Dwarka • International Blue Flag Crystal Water Beach',
      mr: 'द्वारकेपासून 12 किमी • आंतरराष्ट्रीय ब्लू फ्लॅग स्वच्छ किनारा'
    },
    eyebrow: {
      gu: 'Chapter 08 • બ્લુ ફ્લેગ બીચ',
      hi: 'Chapter 08 • अंतर्राष्ट्रीय बीच',
      en: 'Chapter 08 • Blue Flag Beach',
      mr: 'Chapter 08 • ब्लू फ्लॅग बीच'
    },
    distanceLabel: {
      gu: 'દ્વારકા જગત મંદિરથી ૧૨ કિ.મી.',
      hi: 'द्वारका जगत मंदिर से मात्र 12 km',
      en: '12 km North of Dwarka',
      mr: 'द्वारकेपासून 12 किमी'
    },
    desktopImg: '/images/destinations/shivrajpur.webp',
    mobileImg: '/images/destinations/shivrajpur-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Crystal-clear turquoise waters of Shivrajpur Blue Flag Beach near Dwarka',
    story: {
      gu: 'દ્વારકા દર્શન પછી કાચ જેવું ચોખ્ખું પીરોજી પાણી ધરાવતો શિવરાજપુર બીચ પરિવાર માટે શ્રેષ્ઠ છે. સ્વચ્છતા માટે તેને પ્રતિષ્ઠિત આંતરરાષ્ટ્રીય "બ્લુ ફ્લેગ" પ્રમાણપત્ર મળેલું છે. અહીં સૂર્યાસ્તનો નજારો અદભુત હોય છે.',
      hi: 'द्वारका दर्शन के बाद काँच जैसा पारदर्शी नीला पानी और सफेद रेत वाला शिवराजपुर बीच परिवार के लिए सर्वोत्तम है। अंतर्राष्ट्रीय ब्लू फ्लैग प्रमाणित यह बीच पूर्णतः सुरक्षित है।',
      en: 'Just 12 km from Dwarka, Shivrajpur is an internationally certified Blue Flag beach with crystal-clear turquoise waters and pristine white sands.',
      mr: 'द्वारका दर्शनानंतर अत्यंत स्वच्छ पारदर्शक पाणी असलेला शिवराजपूर बीच. आंतरराष्ट्रीय ब्लू फ्लॅग मानांकन मिळालेला हा सुंदर किनारा आहे.'
    },
    highlights: {
      gu: ['કાચ જેવું સ્વચ્છ પીરોજી પાણી', 'પરિવાર માટે ૧૦૦% સુરક્ષિત બીચ', 'સ્કૂબા ડાઇવિંગ અને વોટર સ્પોર્ટ્સ', 'ગોલ્ડન સૂર્યાસ્ત પ્રોમેનેડ'],
      hi: ['क्रिस्टल क्लीयर नीला पानी', 'परिवार हेतु पूर्ण सुरक्षित बीच', 'स्कूबा डाइविंग व बोट राइड्स', 'मनमोहक सूर्यास्त दृश्य'],
      en: ['Crystal Clear Turquoise Ocean', 'Safe Clean Family Shoreline', 'Scuba Diving & Watersports', 'Golden Sunset Walkway'],
      mr: ['पारदर्शक निळे पाणी', 'कुटुंबासाठी सुरक्षित बीच', 'स्कूबा डायव्हिंग', 'सुंदर सूर्यास्त']
    },
    funFact: {
      gu: 'ભારતના મુઠ્ઠીભર બીચ પૈકીનો એક જેને ડેનમાર્ક સ્થિત ફાઉન્ડેશન દ્વારા બ્લુ ફ્લેગ સર્વોચ્ચ દરજ્જો મળ્યો છે!',
      hi: 'भारत के गिने-चुने समुद्र तटों में से एक जिसे पर्यावरण व स्वच्छता हेतु प्रतिष्ठित ब्लू फ्लैग सर्टिफिकेशन मिला है!',
      en: 'One of the few beaches in India awarded the coveted Blue Flag certification by the Foundation for Environmental Education (Denmark).',
      mr: 'भारतातील मोजक्या समुद्रकिनाऱ्यांपैकी एक ज्याला आंतरराष्ट्रीय ब्लू फ्लॅग मानांकन मिळाले आहे!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive Cab',
    ctaText: { gu: 'શિવરાજપુર બીચ જોડો', hi: 'Shivrajpur Beach Jodein', en: 'Add Shivrajpur Beach', mr: 'शिवराजपूर बीच जोडा' }
  },
  {
    id: 'nageshwar',
    stepNumber: '09',
    name: {
      gu: 'શ્રી નાગેશ્વર જ્યોતિર્લિંગ',
      hi: 'श्री नागेश्वर ज्योतिर्लिंग',
      en: 'Nageshwar Jyotirlinga',
      mr: 'श्री नागेश्वर ज्योतिर्लिंग'
    },
    tagline: {
      gu: 'દ્વારકાથી ૧૬ કિ.મી. • ૧૨ જ્યોતિર્લિંગ પૈકીનું દારૂકાવન જ્યોતિર્લિંગ',
      hi: 'द्वारका से 16 km • दारुकावन में स्थित 12 ज्योतिर्लिंगों में से एक',
      en: '16 km from Dwarka • The Mighty Darukavanam Jyotirlinga',
      mr: 'द्वारकेपासून 16 किमी • बारा ज्योतिर्लिंगांपैकी एक'
    },
    eyebrow: {
      gu: 'Chapter 09 • નાગેશ્વર જ્યોતિર્લિંગ',
      hi: 'Chapter 09 • दिव्य ज्योतिर्लिंग',
      en: 'Chapter 09 • Sacred Jyotirlinga',
      mr: 'Chapter 09 • नागेश्वर ज्योतिर्लिंग'
    },
    distanceLabel: {
      gu: 'દ્વારકાથી ૧૬ કિ.મી. બેટ દ્વારકા માર્ગ',
      hi: 'द्वारका से 16 km बेट द्वारका मार्ग',
      en: '16 km from Dwarka en route to Bet Dwarka',
      mr: 'द्वारकेपासून 16 किमी'
    },
    desktopImg: '/images/destinations/nageshwar.webp',
    mobileImg: '/images/destinations/nageshwar-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Gigantic 80-foot meditating Lord Shiva statue at Nageshwar Jyotirlinga',
    story: {
      gu: 'પૌરાણિક દારૂકાવનમાં બિરાજમાન ૧૨ જ્યોતિર્લિંગો પૈકીનું એક દિવ્ય નાગેશ્વર જ્યોતિર્લિંગ! મંદિર પરિસરમાં ભગવાન શિવજીની વિશાળ ૮૦ ફૂટ ઊંચી ધ્યાનાવસ્થા પ્રતિમા દૂરથી જ નજરે પડે છે. અહીં રુદ્રાભિષેક કરવાનો વિશેષ મહિમા છે.',
      hi: 'दारुकावन में स्थित 12 ज्योतिर्लिंगों में से एक पावन नागेश्वर ज्योतिर्लिंग। मंदिर प्रांगण में भगवान शिव की विशाल 80 फीट ऊंची ध्यान मुद्रा में भव्य प्रतिमा स्थापित है। यहाँ रुद्राभिषेक का विशेष महत्व है।',
      en: 'One of the 12 sacred Jyotirlingas, enshrined in the mythical Darukavana forest, framed by a towering 80-foot statue of Lord Shiva sitting in deep meditation.',
      mr: 'दारुकावनातील बारा ज्योतिर्लिंगांपैकी एक श्री नागेश्वर ज्योतिर्लिंग. मंदिरात महादेवांची ८० फूट भव्य ध्यानमुद्रेतील मूर्ती आहे.'
    },
    highlights: {
      gu: ['૧૨ જ્યોતિર્લિંગ પૈકીના એક દિવ્ય દર્શન', 'ભગવાન શિવજીની ૮૦ ફૂટ વિશાળ પ્રતિમા', 'પવિત્ર શિવલિંગ પર જળાભિષેક', 'શાંત ધ્યાન મંડપ'],
      hi: ['12 ज्योतिर्लिंगों में पावन दर्शन', 'भगवान शिव की 80 फीट ध्यान प्रतिमा', 'रुद्राभिषेक व जलाभिषेक', 'शांत ध्यान मंडप'],
      en: ['One of 12 Revered Jyotirlingas', 'Colossal 80-Foot Meditating Shiva', 'Sacred Rudrabhishek Rituals', 'Peaceful Prayer Sanctum'],
      mr: ['बारा ज्योतिर्लिंगांपैकी एक', '८० फूट भव्य शिव मूर्ती', 'रुद्राभिषेक', 'शांत ध्यान मंडप']
    },
    funFact: {
      gu: 'શિવપુરાણ અનુસાર નાગેશ્વર જ્યોતિર્લિંગ પૃથ્વી પરનું પ્રથમ જ્યોતિર્લિંગ માનવામાં આવે છે જેને "નાગેશં દારૂકાવને" કહેવાય છે!',
      hi: 'शिवपुराण के अनुसार नागेश्वर ज्योतिर्लिंग की गणना विशेष है और इसे समस्त विष व नकारात्मक ऊर्जा से रक्षा करने वाला माना गया है!',
      en: 'Ancient scriptures revere Nageshwar as the protector from all worldly poisons and negative forces.',
      mr: 'शिवपुराणात नागेश्वर ज्योतिर्लिंगाचा विशेष महिमा सांगितला आहे!'
    },
    vehicle: 'bus',
    vehicleLabel: 'Deluxe Tourist Coach',
    ctaText: { gu: 'નાગેશ્વર દર્શન જોડો', hi: 'Nageshwar Darshan Jodein', en: 'Add Nageshwar to Plan', mr: 'नागेश्वर दर्शन जोडा' }
  },
  {
    id: 'bet-dwarka',
    stepNumber: '10',
    name: {
      gu: 'બેટ દ્વારકા અને સુદર્શન સેતુ',
      hi: 'बेट द्वारका व सुदर्शन सेतु',
      en: 'Bet Dwarka & Sudarshan Setu',
      mr: 'बेट द्वारका व सुदर्शन सेतू'
    },
    tagline: {
      gu: 'દ્વારકાથી ૩૦ કિ.મી. • ભગવાન દ્વારકાધીશનો નિવાસ મહેલ અને કેબલ બ્રિજ',
      hi: 'द्वारका से 30 km • भगवान श्रीकृष्ण का निवास महल व सुदर्शन सेतु',
      en: '30 km from Dwarka • Lord Krishna Royal Abode & Iconic Cable Bridge',
      mr: 'द्वारकेपासून 30 किमी • श्रीकृष्णांचा निवास महाल व सुदर्शन सेतू'
    },
    eyebrow: {
      gu: 'Chapter 10 • શંખોદ્ધાર બેટ',
      hi: 'Chapter 10 • पावन द्वीप',
      en: 'Chapter 10 • Island Kingdom',
      mr: 'Chapter 10 • पावन बेट'
    },
    distanceLabel: {
      gu: 'દ્વારકાથી ૩૦ કિ.મી. ઓખા પોર્ટ',
      hi: 'द्वारका से 30 km ओखा पोर्ट',
      en: '30 km to Okha Port / Setu',
      mr: 'द्वारकेपासून 30 किमी'
    },
    desktopImg: '/images/destinations/bet-dwarka.webp',
    mobileImg: '/images/destinations/bet-dwarka-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Magnificent Sudarshan Setu cable bridge leading to Bet Dwarka island',
    story: {
      gu: 'ભગવાન શ્રીકૃષ્ણનો અંગત નિવાસ મહેલ જ્યાં સુદામાજી તાંદુલ લઈને પ્રભુને મળવા આવ્યા હતા. હવે ભારતના સૌથી લાંબા ૨.૩ કિ.મી. કેબલ-સ્ટેડ "સુદર્શન સેતુ" પરથી સીધા ગાડી દ્વારા અથવા પરંપરાગત બોટ દ્વારા આ પવિત્ર ટાપુ પર પહોંચી શકાય છે.',
      hi: 'भगवान श्रीकृष्ण का निजी निवास महल जहाँ सुदामा जी चावल की भेंट लेकर मिलने आए थे। अब भारत के सबसे लंबे 2.32 किमी केबल-स्टेड "सुदर्शन सेतु" द्वारा अपनी गाड़ी से सीधे इस पावन द्वीप तक पहुँचा जा सकता है।',
      en: 'The royal residential island where Sudama presented his humble flattened rice to Krishna. Now reachable via India’s longest cable-stayed Sudarshan Setu bridge.',
      mr: 'श्रीकृष्णांचा खाजगी निवास महाल जिथे सुदामाजी भेटायला आले होते. आता भव्य सुदर्शन सेतू पुलावरून थेट गाडीने येथे पोहोचता येते.'
    },
    highlights: {
      gu: ['પ્રાચીન દ્વારકાધીશ નિવાસ મંદિર દર્શન', 'ભારતનો સૌથી લાંબો સુદર્શન સેતુ બ્રિજ', 'શંખ અને સમુદ્રી શેલ માર્કેટ', 'સુદામા ભેટ સ્મૃતિ સ્થાન'],
      hi: ['प्राचीन द्वारकाधीश महल मंदिर', 'भव्य सुदर्शन सेतु केबल ब्रिज', 'शंख व समुद्री उपहार बाजार', 'सुदामा भेंट स्थल'],
      en: ['Ancient Dwarkadhish Palace Shrine', 'Iconic 2.3 km Sudarshan Setu Cable Bridge', 'Sea Shells & Shankh Market', 'Historic Sudama Reunion Spot'],
      mr: ['द्वारकाधीश निवास मंदिर', 'भव्य सुदर्शन सेतू पूल', 'शंख बाजार', 'सुदामा भेट स्थळ']
    },
    funFact: {
      gu: 'સુદર્શન સેતુ ભારતના સૌથી સુંદર પુલો પૈકીનો એક છે, જેના સ્તંભો પર શ્રીમદ્ ભગવદ્ ગીતાના શ્લોકો અને ભગવાન શ્રીકૃષ્ણની કલાકૃતિઓ કંડારવામાં આવી છે!',
      hi: 'सुदर्शन सेतु भारत का सबसे लंबा केबल-स्टेड पुल है, जिसके पिलर्स पर गीता के श्लोक और मोरपंख की कलाकृतियाँ उकेरी गई हैं!',
      en: 'Sudarshan Setu features solar panels generating clean power and pillar railings inscribed with sacred Bhagavad Gita verses.',
      mr: 'सुदर्शन सेतू हा भारतातील सर्वात लांब केबल पूल असून खांबांवर गीतेचे श्लोक कोरलेले आहेत!'
    },
    vehicle: 'car',
    vehicleLabel: 'Executive Tourer',
    ctaText: { gu: 'બેટ દ્વારકા પ્લાન કરો', hi: 'Bet Dwarka Plan Karein', en: 'Plan Bet Dwarka Trip', mr: 'बेट द्वारका जोडा' }
  },
  {
    id: 'diu',
    stepNumber: '11',
    name: {
      gu: 'દીવ ટાપુ અને પોર્ટુગીઝ કિલ્લો',
      hi: 'दीव द्वीप व पुर्तगाली किला',
      en: 'Diu Island & Heritage Fort',
      mr: 'दीव बेट व किल्ला'
    },
    tagline: {
      gu: 'સોમનાથથી ૮૫ કિ.મી. • ૧૬મી સદીનો સાગરી કિલ્લો, નાયડા ગુફા અને નાગોઆ બીચ',
      hi: 'सोमनाथ से 85 km • 16वीं सदी का समुद्री किला, नायडा गुफाएं व नागोआ बीच',
      en: '85 km from Somnath • Portuguese Sea Fortress, Naida Caves & Beaches',
      mr: 'सोमनाथपासून 85 किमी • पोर्तुगीज किल्ला व नायडा गुहा'
    },
    eyebrow: {
      gu: 'Chapter 11 • સાગરી દીવ ટાપુ',
      hi: 'Chapter 11 • शांत समुद्र द्वीप',
      en: 'Chapter 11 • Island Heritage',
      mr: 'Chapter 11 • दीव बेट'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૮૫ કિ.મી. સમુદ્રી માર્ગ',
      hi: 'सोमनाथ से 85 km समुद्री पुल मार्ग',
      en: '85 km from Somnath via Bridge',
      mr: 'सोमनाथपासून 85 किमी'
    },
    desktopImg: '/images/destinations/diu-cinematic.webp',
    mobileImg: '/images/destinations/diu-mobile.webp',
    imgPosition: 'object-center',
    imgAlt: 'Diu coastal fortress stone ramparts and historic striped lighthouse perched above turquoise sea cliffs',
    story: {
      gu: 'સમુદ્ર પર બનેલા પુલને પાર કરીને સુંદર દીવ ટાપુમાં પ્રવેશો. ૧૬મી સદીનો પોર્ટુગીઝ કિલ્લો ત્રણ તરફથી નીલા સાગરથી ઘેરાયેલો છે. કુદરતી નાયડા ગુફાઓમાં સૂર્યકિરણોની રમત અને નાગોઆ બીચ પર પરિવાર સાથે શાંત પળો વિતાવો.',
      hi: 'समुद्र पर बने पुल को पार करके प्रवेश करें खूबसूरत दीव द्वीप में। तीन ओर से नीले सागर से घिरे दीव किले की प्राचीन तोपों पर चलें, धूप-छांव से भरी रहस्यमयी नायडा गुफाओं का दीदार करें, और नागोआ बीच पर सुकून के पल बिताएं।',
      en: 'Cross the sea bridge into serene Diu Island. Explore the 16th-century fortress ramparts overlooking the turquoise ocean, mystical sea-carved Naida Caves, and horseshoe-shaped Nagoa Beach.',
      mr: 'समुद्रावरील पूल ओलांडून सुंदर दीव बेटावर प्रवेश करा. तीनही बाजूंनी समुद्राने वेढलेला पोर्तुगीज किल्ला आणि नायडा गुहा येथे पाहायला मिळतात.'
    },
    highlights: {
      gu: ['૧૬મી સદીનો સાગરી દીવ કિલ્લો અને તોપો', 'પ્રાકૃતિક ચૂનાના પથ્થરની નાયડા ગુફાઓ', 'દીવ લાઇટહાઉસ સનસેટ પોઇન્ટ', 'નાગોઆ બીચ વોટર સ્પોર્ટ્સ'],
      hi: ['16वीं सदी का ऐतिहासिक दीव किला व तोपें', 'नायडा प्राकृतिक चूना-पत्थर गुफाएं', 'दीव लाइटहाउस से सागर का विहंगम दृश्य', 'नागोआ बीच पर वाटर स्पोर्ट्स व विश्राम'],
      en: ['16th-Century Diu Sea Fortress & Cannons', 'Mystical Sunlight-Pierced Naida Caves', 'Iconic Striped Coastal Lighthouse', 'Nagoa Beach Watersports & Relaxation'],
      mr: ['ऐतिहासिक दीव किल्ला व तोफा', 'नायडा नैसर्गिक गुहा', 'दीव दीपगृह', 'नागोआ बीच']
    },
    funFact: {
      gu: 'પ્રાકૃતિક અજાયબી: નાયડા ગુફાઓ સદીઓ પહેલાં કિલ્લાના બાંધકામ માટે પથ્થર કોતરવાથી બની હતી, જ્યાં આજે સૂર્યના કિરણો કુદરતી કેલિડોસ્કોપ રચે છે!',
      hi: 'प्राकृतिक अजूबा: नायडा गुफाएं सदियों पहले किले के निर्माण हेतु पत्थर तराशने से बनी थीं, जहाँ से आज धूप की मनमोहक किरणें छनकर आती हैं।',
      en: 'Naida Caves were formed centuries ago through geological stone-hewing by the Portuguese, resulting in an open-air natural stone labyrinth.',
      mr: 'नायडा गुहा शतकांपूर्वी किल्ल्याच्या बांधकामासाठी दगड कोरल्याने तयार झाल्या होत्या!'
    },
    vehicle: 'rickshaw',
    vehicleLabel: 'Island Auto-Rickshaw',
    ctaText: { gu: 'દીવ પ્રવાસ પ્લાન કરો', hi: 'Diu Trip Plan Karein', en: 'Plan Diu Island Tour', mr: 'दीव सहल जोडा' }
  },
  {
    id: 'gir',
    stepNumber: '12',
    name: {
      gu: 'સાસણ ગીર રાષ્ટ્રીય ઉદ્યાન',
      hi: 'सासन गिर राष्ट्रीय उद्यान',
      en: 'Sasan Gir National Park',
      mr: 'सासन गिर राष्ट्रीय उद्यान'
    },
    tagline: {
      gu: 'સોમનાથથી ૪૫ કિ.મી. • વિશ્વમાં એશિયાટિક સિંહનું એકમાત્ર કુદરતી નિવાસસ્થાન',
      hi: 'सोमनाथ से 45 km • एशियाटिक बब्बर शेर का विश्व में एकमात्र प्राकृतिक वास',
      en: '45 km from Somnath • The Only Home of the Wild Asiatic Lion',
      mr: 'सोमनाथपासून 45 किमी • आशियाई सिंहाचे एकमेव अभयारण्य'
    },
    eyebrow: {
      gu: 'Chapter 12 • ગીર સિંહ કિંગડમ',
      hi: 'Chapter 12 • बब्बर शेर साम्राज्य',
      en: 'Chapter 12 • Wild Asiatic Lion Kingdom',
      mr: 'Chapter 12 • सिंह साम्राज्य'
    },
    distanceLabel: {
      gu: 'સોમનાથથી ૪૫ કિ.મી. સાગના ગાઢ જંગલો',
      hi: 'सोमनाथ से 45 km सागौन के घने जंगल',
      en: '45 km Inland Teak Forest Route',
      mr: 'सोमनाथपासून 45 किमी'
    },
    desktopImg: '/images/destinations/gir-cinematic.webp',
    mobileImg: '/images/destinations/gir-mobile.webp',
    imgPosition: 'object-[center_35%]',
    imgAlt: 'Majestic male Asiatic Lion resting peacefully under the golden morning light of Sasan Gir forest',
    story: {
      gu: 'સોમનાથથી માત્ર ૪૫ કિ.મી. દૂર સાસણ ગીરના જંગલો શરૂ થાય છે. આફ્રિકા સિવાય સમગ્ર વિશ્વમાં એશિયાટિક સિંહ માત્ર અહીં જ જોવા મળે છે! વહેલી સવારે ખુલ્લી 4x4 જિપ્સી સફારીમાં જંગલમાં સિંહના પગલાં શોધવાનો રોમાંચ અદ્વિતીય છે.',
      hi: 'सोमनाथ से केवल 45 किमी की दूरी पर सासन गिर के घने सागौन के जंगल फैले हैं। अफ्रीका के बाहर पूरी दुनिया में एशियाई बब्बर शेर केवल यहाँ पाए जाते हैं। खुली 4x4 जिप्सी में सुबह की सफारी का रोमांच जीवनभर याद रहता है।',
      en: 'Just 45 km inland from Somnath lie the teak deciduous forests of Sasan Gir. This is the sole sanctuary on Earth where wild Asiatic Lions roam freely in nature.',
      mr: 'सोमनाथपासून अवघ्या ४५ किमी अंतरावर सासन गिरचे जंगल आहे. आफ्रिकेबाहेर संपूर्ण जगात आशियाई सिंह फक्त येथेच आढळतात. जिप्सी सफारीचा थरार अविस्मरणीय ठरतो.'
    },
    highlights: {
      gu: ['ખુલ્લી 4x4 જિપ્સી ફોરેસ્ટ સફારી', 'દેવળિયા ઇન્ટરપ્રિટેશન ઝોન', 'ઓથેન્ટિક કાઠિયાવાડી દેશી ભોજન', 'કમલેશ્વર ડેમ મગર અભયારણ્ય'],
      hi: ['खुली 4x4 जिप्सी सफारी', 'देवलिया सफारी पार्क', 'प्रामाणिक काठियावाड़ी देशी भोजन', 'कमलेश्वर डैम मगरमच्छ संरक्षण'],
      en: ['Open-Top 4x4 Gypsy Forest Safari', 'Devalia Nature Safari Interpretation Zone', 'Authentic Kathiyawadi Farm Lunch', 'Kamleshwar Dam Crocodile Reserve'],
      mr: ['खुली ४x४ जिप्सी सफारी', 'देवलिया सफारी पार्क', ' अस्सल काठियावाडी भोजन', 'कमलेश्वर डॅम']
    },
    funFact: {
      gu: 'સિંહ-માનવ સદ્ભાવ: ગીરના જંગલોમાં રહેતા માલધારી સમુદાયના લોકો સદીઓથી જંગલી સિંહો સાથે અતૂટ સદ્ભાવથી રહે છે!',
      hi: 'अनोखा सामंजस्य: गिर के जंगलों में रहने वाले मालधारी आदिवासी सदियों से बिना किसी भय के शेरों के साथ शांतिपूर्वक सह-अस्तित्व में रहते हैं!',
      en: 'Remarkable Coexistence: The indigenous Maldhari pastoral tribes have co-existed harmoniously inside Gir forests with wild lions for generations.',
      mr: 'गिरच्या जंगलात राहणारे मालधारी लोक शतकांपासून सिंहांसोबत गुण्यागोविंदाने राहतात!'
    },
    vehicle: 'car',
    vehicleLabel: 'Open 4x4 Safari Gypsy',
    ctaText: { gu: 'ગીર સફારી પ્લાન કરો', hi: 'Gir Safari Plan Karein', en: 'Plan Gir Safari', mr: 'गिर सफारी जोडा' }
  }
];

export default function CinematicScrollJourney({ onSelectDestination }) {
  const { language } = useLanguage();
  const [activeChapter, setActiveChapter] = useState('somnath');
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const getLoc = (obj, fallback = '') => {
    if (!obj) return fallback;
    if (language === 'gu') return obj.gu || obj.hi || obj.en || fallback;
    if (language === 'en') return obj.en || obj.hi || obj.gu || fallback;
    if (language === 'mr') return obj.mr || obj.hi || obj.en || fallback;
    return obj[language] || obj.hi || obj.en || obj.gu || fallback;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalH = rect.height - window.innerHeight;
      if (totalH > 0) {
        const scrolled = Math.max(0, Math.min(1, -rect.top / totalH));
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id) => {
    const el = document.getElementById(`chapter-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative bg-white py-12 sm:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-extrabold mb-3 shadow-2xs">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>
              {language === 'gu'
                ? 'સૌરાષ્ટ્ર યાત્રા માર્ગ • તબક્કાવાર દર્શન'
                : language === 'en'
                ? 'Saurashtra Pilgrimage Route • Step-by-Step Circuit'
                : language === 'mr'
                ? 'सौराष्ट्र यात्रा मार्ग • टप्प्याटप्प्याने दर्शन'
                : 'सौराष्ट्र यात्रा मार्ग • Cinematic Road Trip'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {language === 'gu'
              ? 'સૌરાષ્ટ્ર દર્શન: સોમનાથથી દ્વારકા, દીવ અને સાસણ ગીર'
              : language === 'en'
              ? 'Saurashtra Yatra: From Somnath to Dwarka, Diu & Sasan Gir'
              : language === 'mr'
              ? 'सौराष्ट्र दर्शन: सोमनाथ ते द्वारका, दीव आणि सासन गिर'
              : 'सौराष्ट्र दर्शन: सोमनाथ से द्वारका और सासन गिर'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed">
            {language === 'gu'
              ? 'સોમનાથથી નજીકના બાણગંગા, ગીતા મંદિર, ભાલકા તીર્થ થઈને માધવપુર, પોરબંદર, દ્વારકા, શિવરાજપુર, નાગેશ્વર, દીવ અને ગીર જંગલ સુધીની ક્રમબદ્ધ યાત્રા'
              : language === 'en'
              ? 'Geographically ordered itinerary from Somnath, Ban Ganga, Gita Mandir, Bhalka Tirth to Madhavpur, Porbandar, Dwarka, Shivrajpur, Nageshwar, Diu and Gir.'
              : language === 'mr'
              ? 'सोमनाथपासून जवळचे बाणगंगा, गीता मंदिर, भालका तीर्थ ते माधवपूर, पोरबंदर, द्वारका, नागेश्वर, दीव आणि सासन गिर'
              : 'सोमनाथ से निकटवर्ती बाणगंगा, गीता मंदिर, भालका तीर्थ होकर माधवपुर, पोरबंदर, द्वारका, नागेश्वर, दीव व गिर जंगल तक की संपूर्ण पवित्र यात्रा'}
          </p>
        </div>

        {/* STICKY MILESTONE PILL NAVIGATION */}
        <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md py-3 -mx-4 px-4 sm:mx-0 sm:px-0 border-y sm:border sm:rounded-2xl border-slate-200/90 shadow-xs mb-10 transition-all">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapter === ch.id;
              const chName = getLoc(ch.name);
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => {
                    setActiveChapter(ch.id);
                    scrollToChapter(ch.id);
                  }}
                  className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all tap-bounce flex items-center justify-center gap-1.5 border cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-950 shadow-sm'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full text-[11px] font-black flex items-center justify-center ${
                      isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className="whitespace-nowrap">{chName}</span>
                </button>
              );
            })}
          </div>

          {/* Miniature Scroll Progress Road Line */}
          <div className="mt-2.5 h-1.5 bg-slate-100 rounded-full overflow-hidden relative mx-1">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>

        {/* CONTINUOUS 12 CHAPTERS IN GEOGRAPHIC ORDER */}
        <div className="space-y-16 sm:space-y-24">
          {CHAPTERS.map((chapter) => {
            const chName = getLoc(chapter.name);
            const chTagline = getLoc(chapter.tagline);
            const chEyebrow = getLoc(chapter.eyebrow);
            const chDistance = getLoc(chapter.distanceLabel);
            const chStory = getLoc(chapter.story);
            const chFunFact = getLoc(chapter.funFact);
            const chCtaText = getLoc(chapter.ctaText);
            const chHighlights = (language === 'gu' ? chapter.highlights.gu : (chapter.highlights[language] || chapter.highlights.en || chapter.highlights.hi)) || [];

            const isGir = chapter.id === 'gir';

            return (
              <article
                key={chapter.id}
                id={`chapter-${chapter.id}`}
                className="scroll-mt-28 rounded-3xl sm:rounded-4xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* 1. PHOTOGRAPHIC DESTINATION SCENE WITH REAL ROAD & VEHICLE */}
                <div className="relative w-full overflow-hidden bg-slate-900">
                  <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
                    <picture>
                      <source media="(max-width: 640px)" srcSet={chapter.mobileImg} />
                      <source media="(min-width: 641px)" srcSet={chapter.desktopImg} />
                      <img
                        src={chapter.desktopImg}
                        alt={chapter.imgAlt}
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="514"
                        className={`w-full h-full object-cover ${chapter.imgPosition || 'object-center'} transform transition-transform duration-700 hover:scale-[1.02]`}
                      />
                    </picture>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Chapter Badge */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border border-white/50">
                        {chEyebrow}
                      </span>
                    </div>

                    {/* Top Right Distance */}
                    <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      <Navigation2 className="w-3.5 h-3.5 text-amber-400 rotate-45" />
                      <span>{chDistance}</span>
                    </div>

                    {/* Destination Title Overlay */}
                    <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 right-4 z-10 pointer-events-none">
                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-md tracking-tight">
                        {chName}
                      </h3>
                      <p className="text-xs sm:text-base font-bold text-amber-200 drop-shadow-sm mt-0.5 max-w-xl">
                        {chTagline}
                      </p>
                    </div>

                    {/* Asphalt Road Overlay Strip */}
                    <div className="absolute bottom-0 inset-x-0 h-14 sm:h-20 bg-gradient-to-b from-slate-800/90 to-slate-900 z-10 flex items-center justify-between px-4 sm:px-12 border-t-2 border-slate-600/60 overflow-hidden">
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-around pointer-events-none opacity-80">
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                        <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-amber-400 rounded-full" />
                      </div>

                      <div className="relative z-20 flex items-center w-full justify-between">
                        <div className="flex items-center gap-3">
                          <div className="transform -translate-y-1 sm:-translate-y-2">
                            {chapter.vehicle === 'bus' ? (
                              <StylizedBus3D className="w-28 sm:w-36 h-14 sm:h-18" moving={true} />
                            ) : chapter.vehicle === 'rickshaw' ? (
                              <StylizedRickshaw3D className="w-22 sm:w-28 h-14 sm:h-18" moving={true} />
                            ) : (
                              <StylizedCar3D className="w-28 sm:w-36 h-14 sm:h-18" moving={true} />
                            )}
                          </div>

                          <div className="hidden xs:block text-left text-white/90">
                            <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider">
                              {language === 'gu' ? 'વાહન:' : language === 'en' ? 'Vehicle:' : 'वाहन:'}
                            </div>
                            <div className="text-xs font-bold truncate max-w-[150px] sm:max-w-none text-slate-100">
                              {chapter.vehicleLabel}
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-white/90 bg-black/40 px-2.5 py-1 rounded-full border border-white/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                            <span>{language === 'gu' ? 'સુવિધાજનક રૂટ' : language === 'en' ? 'Comfort Highway' : 'आरामदायक हाईवे'}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. RICH EDITORIAL NARRATIVE & HIGHLIGHTS */}
                <div className="p-5 sm:p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-slate-900 text-amber-300 font-black text-xs flex items-center justify-center">
                          {chapter.stepNumber}
                        </span>
                        <h4 className="text-lg sm:text-xl font-black text-slate-900">
                          {chName}
                        </h4>
                      </div>

                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        {chStory}
                      </p>

                      <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
                        <span className="text-xl sm:text-2xl flex-shrink-0">💡</span>
                        <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
                          {chFunFact}
                        </p>
                      </div>

                      {/* Sasan Gir Asiatic Lion Showcase */}
                      {isGir && (
                        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50/60 to-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center gap-4">
                          <div className="flex-shrink-0">
                            <StylizedLion3D className="w-36 sm:w-44 h-28 sm:h-36" animated={true} />
                          </div>
                          <div className="text-center sm:text-left">
                            <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider mb-1">
                              {language === 'gu' ? 'ગુજરાતનું ગૌરવ' : language === 'en' ? 'Pride of Gujarat' : 'गुजरात का गौरव'}
                            </span>
                            <h5 className="text-sm sm:text-base font-black text-slate-900">
                              {language === 'gu' ? 'સૌરાષ્ટ્રના જંગલોનો રાજા: એશિયાટિક સિંહ' : language === 'en' ? 'King of Saurashtra: Asiatic Lion' : 'सौराष्ट्र के जंगलों का राजा: एशियाई शेर'}
                            </h5>
                            <p className="text-xs text-slate-600 font-medium mt-1 leading-snug">
                              {language === 'gu'
                                ? 'ગીરમાં ૬૦૦થી વધુ જંગલી સિંહો મુક્તપણે વિચરે છે. તમારા લોકલ હોસ્ટ સરકારી જિપ્સી સફારી પરમિટનું સંપૂર્ણ માર્ગદર્શન આપે છે.'
                                : language === 'en'
                                ? 'Over 600 Asiatic lions roam freely in Gir. Your local host assists with forest safari permit slots and authorized Gypsy guides.'
                                : 'गिर में 600 से अधिक जंगली शेर स्वच्छंद विचरण करते हैं। आपके लोकल होस्ट सरकारी अधिकृत जिप्सी सफारी परमिट का मार्गदर्शन करते हैं।'}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <div className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>
                            {language === 'gu' ? 'મુખ્ય આકર્ષણો અને દર્શન' : language === 'en' ? 'Highlights & Darshan' : 'प्रमुख आकर्षण व दर्शन बिंदु'}
                          </span>
                        </div>

                        <div className="space-y-2">
                          {chHighlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs"
                            >
                              <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-700 font-black text-[11px] flex items-center justify-center flex-shrink-0">
                                ✓
                              </span>
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectDestination && onSelectDestination(chName)}
                            className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all tap-bounce border border-slate-950 cursor-pointer"
                          >
                            <span>{chCtaText}</span>
                            <ChevronRight className="w-4 h-4 text-amber-400" />
                          </button>
                          <p className="text-[11px] text-center text-slate-500 font-semibold mt-1.5">
                            {language === 'gu' ? '⚡ WhatsApp અથવા સીધા ફોન કૉલ દ્વારા માર્ગદર્શન' : language === 'en' ? '⚡ Direct Phone or WhatsApp Tour Assistance' : '⚡ WhatsApp या सीधे फोन कॉल द्वारा तुरंत सहायता'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
