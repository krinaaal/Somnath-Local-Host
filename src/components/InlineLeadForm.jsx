import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageCircle, PhoneCall, ShieldCheck, User } from 'lucide-react';
import { getStructuredLeadWhatsAppUrl } from '../utils/whatsappMessages';

export default function InlineLeadForm({ selectedDestination = 'Somnath Circuit' }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(selectedDestination);
  const [travelDate, setTravelDate] = useState('This Month');
  const [travelersCount, setTravelersCount] = useState('Family (3-5 members)');
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [leadResult, setLeadResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleaned = phone.replace(/[^0-9]/g, '');
    if (cleaned.length < 10) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: cleaned,
          destination,
          travel_date: travelDate,
          travelers_count: travelersCount,
          cab_type: 'AC Sedan / SUV',
          source: 'homepage_inline_form'
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setLeadResult(data);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Submission failed. Please call 6359798896 directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network connection error. Please call our host directly at 6359798896.');
    }
  };

  return (
    <section id="contact-form" className="py-8 sm:py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Top Glowing Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600" />

          {/* Heading */}
          <div className="text-center max-w-xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Local Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Your Custom Itinerary & Free Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Takes only 20 seconds. Enter your name and mobile number to receive immediate local hotel and cab arrangements.
            </p>
          </div>

          {status === 'success' ? (
            /* SUCCESS FEEDBACK STATE */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Trip Request Confirmed!
                </h3>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Lead Ref: #SLH-{leadResult?.leadId || 'NEW'}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Namaskar <strong>{fullName}</strong>, our Somnath host has saved your inquiry in our database. We are preparing your itinerary now!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <a
                  href={getStructuredLeadWhatsAppUrl({ fullName, phone, destination, travelGroup: `${travelersCount} (Date: ${travelDate})`, vehiclePref: 'AC Innova / Ertiga' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg tap-bounce"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <a
                  href="tel:6359798896"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 tap-bounce"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Direct Call: 6359798896</span>
                </a>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Patel"
                      autoComplete="name"
                      autoCapitalize="words"
                      className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-500 text-base outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Indian Mobile Number (Numeric Keypad) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Indian Mobile Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative flex rounded-xl border border-slate-700 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 bg-slate-950/80 overflow-hidden transition-all">
                    <div className="inline-flex items-center gap-1 px-3 bg-slate-800/80 border-r border-slate-700 text-xs font-bold text-amber-400">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      required
                      value={phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setPhone(val);
                      }}
                      placeholder="10-digit number"
                      className="w-full px-3 py-3 bg-transparent text-white placeholder-slate-500 text-base outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Destination & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Route
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  >
                    <option value="Somnath Darshan Only">Somnath Darshan Only (1-2 Days)</option>
                    <option value="Somnath + Sasan Gir Safari">Somnath + Sasan Gir Safari (3 Days)</option>
                    <option value="Somnath + Diu Island">Somnath + Diu Island (3 Days)</option>
                    <option value="Complete Saurashtra Circuit">Complete Circuit (Somnath • Gir • Diu • Dwarka)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Tentative Travel Date
                  </label>
                  <select
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3 py-3 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  >
                    <option value="This Weekend">This Weekend</option>
                    <option value="Next Week">Next Week</option>
                    <option value="This Month">This Month</option>
                    <option value="Next Month">Next Month</option>
                    <option value="Festival / Holidays">Festival / Holidays</option>
                  </select>
                </div>
              </div>

              {/* Consent and Security Assurance */}
              <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-slate-800 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Instant Persistence:</strong> Your request is saved immediately. No OTP is required at this stage. Our local host contacts you with real-time temple queue guidance and transparent vehicle quotes.
                </span>
              </div>

              {/* Large Thumb-Friendly Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full min-h-[52px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50 transition-all tap-bounce"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Saving Your Itinerary...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit & Receive Free Itinerary</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
