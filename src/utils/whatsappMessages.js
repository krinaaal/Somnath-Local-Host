/**
 * Professional structured WhatsApp inquiry generators for Somnath Local Host.
 * Generates beautifully formatted, multi-line WhatsApp chat templates
 * with clear sections, emojis, and traveler details instead of simple single-line messages.
 */

const WHATSAPP_PHONE = '916359798896';

/**
 * Returns a structured multi-line WhatsApp inquiry URL for general contact buttons
 * (Sticky Bottom Bar, Mobile Drawer, Conversion CTA).
 *
 * @param {string} language - Current selected language code ('gu', 'hi', 'en', 'mr', etc.)
 * @returns {string} - Full wa.me link with URL-encoded structured message
 */
export function getStructuredGeneralWhatsAppUrl(language = 'gu') {
  let message = '';

  if (language === 'gu') {
    message = [
      '🙏 *હર હર મહાદેવ | જય સોમનાથ!*',
      '',
      'નમસ્તે સોમનાથ લોકલ હોસ્ટ,',
      'હું સોમનાથ અને સૌરાષ્ટ્ર દર્શન યાત્રા પ્લાનિંગ માટે સંપર્ક કરી રહ્યો છું. કૃપા કરીને મને યોગ્ય માર્ગદર્શન અને માહિતી આપશો:',
      '',
      '📋 *યાત્રા માહિતી વિગત:*',
      '• 📍 *દર્શન રૂટ:* સોમનાથ - દ્વારકા - સાસણ ગીર - દીવ',
      '• 🚗 *સુવિધા:* સ્વચ્છ AC કેબ (Innova / Ertiga) & હોટેલ રોકાણ',
      '• ✨ *માર્ગદર્શન:* આરતી દર્શન સમય, VIP દર્શન & લોકલ ગાઈડન્સ',
      '',
      '👤 *યાત્રી નામ:* ',
      '📅 *અંદાજિત તારીખ:* ',
      '👥 *સભ્યોની સંખ્યા:* ',
      '',
      'કૃપા કરીને શ્રેષ્ઠ યાત્રા પ્લાન અને વિગતો શેર કરશો. આભાર!'
    ].join('\n');
  } else if (language === 'hi' || language === 'raj') {
    message = [
      '🙏 *हर हर महादेव | जय सोमनाथ!*',
      '',
      'नमस्ते सोमनाथ लोकल होस्ट,',
      'मैं सोमनाथ एवं सौराष्ट्र दर्शन यात्रा की योजना बना रहा हूँ। कृपया मुझे उचित यात्रा मार्गदर्शन व विवरण प्रदान करें:',
      '',
      '📋 *यात्रा विवरण:*',
      '• 📍 *दर्शन मार्ग:* सोमनाथ - द्वारका - सासन गिर - दीव',
      '• 🚗 *आवश्यक सेवा:* स्वच्छ AC कैब (Innova / Ertiga) व होटल स्टे',
      '• ✨ *मार्गदर्शन:* आरती दर्शन समय, VIP दर्शन व स्थानीय सहायता',
      '',
      '👤 *यात्री का नाम:* ',
      '📅 *यात्रा की तिथि:* ',
      '👥 *यात्रियों की संख्या:* ',
      '',
      'कृपया उपयुक्त यात्रा कार्यक्रम व विवरण साझा करें। धन्यवाद!'
    ].join('\n');
  } else if (language === 'mr') {
    message = [
      '🙏 *हर हर महादेव | जय सोमनाथ!*',
      '',
      'नमस्ते सोमनाथ लोकल होस्ट,',
      'मी सोमनाथ आणि सौराष्ट्र दर्शन यात्रेचे नियोजन करत आहे. कृपया मला योग्य मार्गदर्शन व माहिती द्यावी:',
      '',
      '📋 *यात्रा तपशील:*',
      '• 📍 *दर्शन मार्ग:* सोमनाथ - द्वारका - सासन गिर - दीव',
      '• 🚗 *आवश्यक सेवा:* स्वच्छ AC टॅक्सी (Innova / Ertiga) व हॉटेल स्टे',
      '• ✨ *मार्गदर्शन:* आरती वेळ, VIP दर्शन व स्थानिक मार्गदर्शन',
      '',
      '👤 *प्रवाशाचे नाव:* ',
      '📅 *प्रवासाची तारीख:* ',
      '👥 *प्रवाशांची संख्या:* ',
      '',
      'कृपया योग्य यात्रा नियोजन व माहिती पाठवावी. धन्यवाद!'
    ].join('\n');
  } else {
    // English and all other Indian languages
    message = [
      '🙏 *Har Har Mahadev | Jai Somnath!*',
      '',
      'Hello Somnath Local Host,',
      'I am planning a pilgrimage and travel tour to Saurashtra and would like your local assistance and guidance:',
      '',
      '📋 *Trip Inquiry Details:*',
      '• 📍 *Destinations:* Somnath - Dwarka - Sasan Gir - Diu',
      '• 🚗 *Services Needed:* Clean AC Cab (Innova / Ertiga) & Verified Hotel Stay',
      '• ✨ *Assistance:* Aarti Timings, VIP Darshan & Local Sightseeing',
      '',
      '👤 *Lead Traveler Name:* ',
      '📅 *Estimated Travel Dates:* ',
      '👥 *Number of Travelers:* ',
      '',
      'Kindly share your recommended itinerary and booking details. Thank you!'
    ].join('\n');
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a structured multi-line WhatsApp inquiry URL when form fields are filled.
 *
 * @param {Object} options
 * @param {string} options.fullName
 * @param {string} options.phone
 * @param {string} options.destination
 * @param {string} options.travelGroup
 * @param {string} options.vehiclePref
 * @param {string} options.language
 * @returns {string} - Full wa.me link with URL-encoded structured message
 */
export function getStructuredLeadWhatsAppUrl({
  fullName = '',
  phone = '',
  destination = 'Somnath & Saurashtra Circuit',
  travelGroup = 'Family',
  vehiclePref = 'AC Innova / Ertiga',
  language = 'hi'
}) {
  let message = '';

  if (language === 'gu') {
    message = [
      '🙏 *હર હર મહાદેવ | જય સોમનાથ!*',
      '',
      '*નવી યાત્રા પૂછપરછ (Somnath Local Host)*',
      '━━━━━━━━━━━━━━━━━━━━',
      `👤 *યાત્રી નામ:* ${fullName}`,
      `📞 *મોબાઈલ નંબર:* ${phone}`,
      `📍 *પસંદગીનો રૂટ:* ${destination}`,
      `👥 *યાત્રા ગ્રુપ:* ${travelGroup}`,
      `🚗 *વાહન પસંદગી:* ${vehiclePref}`,
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      'કૃપા કરીને આ રૂટ માટે વિગતવાર યાત્રા પ્લાન અને સહાય શેર કરશો. આભાર!'
    ].join('\n');
  } else if (language === 'hi' || language === 'raj') {
    message = [
      '🙏 *हर हर महादेव | जय सोमनाथ!*',
      '',
      '*नई तीर्थ यात्रा पूछताछ (Somnath Local Host)*',
      '━━━━━━━━━━━━━━━━━━━━',
      `👤 *यात्री का नाम:* ${fullName}`,
      `📞 *मोबाइल नंबर:* ${phone}`,
      `📍 *पसंदीदा मार्ग:* ${destination}`,
      `👥 *यात्रा समूह:* ${travelGroup}`,
      `🚗 *वाहन प्राथमिकता:* ${vehiclePref}`,
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      'कृपया इस यात्रा हेतु संपूर्ण कार्यक्रम व उचित मार्गदर्शन साझा करें। धन्यवाद!'
    ].join('\n');
  } else {
    message = [
      '🙏 *Har Har Mahadev | Jai Somnath!*',
      '',
      '*New Pilgrimage & Tour Inquiry (Somnath Local Host)*',
      '━━━━━━━━━━━━━━━━━━━━',
      `👤 *Traveler Name:* ${fullName}`,
      `📞 *Phone Number:* ${phone}`,
      `📍 *Route / Destination:* ${destination}`,
      `👥 *Travel Group:* ${travelGroup}`,
      `🚗 *Vehicle Preference:* ${vehiclePref}`,
      '━━━━━━━━━━━━━━━━━━━━',
      '',
      'Kindly share the recommended itinerary and local assistance details. Thank you!'
    ].join('\n');
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
