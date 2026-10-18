import React, { useState, useEffect } from 'react';
import { X, Phone, User, MapPin, Calendar, Users, Send, CheckCircle2, AlertCircle, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { getStructuredLeadWhatsAppUrl } from '../utils/whatsappMessages';

export default function LeadFormModal({ isOpen, onClose, initialDestination = 'Somnath Circuit' }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState(initialDestination);
  const [travelDate, setTravelDate] = useState('This Month');
  const [travelersCount, setTravelersCount] = useState('2-4 Members');
  const [cabType, setCabType] = useState('Innova Crysta / Ertiga');
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [leadResult, setLeadResult] = useState(null);

  // Sync initial destination when prop changes
  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
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
          phone: cleanedPhone,
          destination,
          travel_date: travelDate,
          travelers_count: travelersCount,
          cab_type: cabType,
          source: 'mobile_modal_v1'
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setLeadResult(data);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit. Please call us at 6359798896 directly.');
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please call our host directly at 6359798896.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFullName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Sheet Container - One-handed mobile design */}
      <div className="relative w-full max-w-lg bg-slate-900 border-t sm:border border-amber-500/30 rounded-t-3xl sm:rounded-2xl max-h-[92vh] flex flex-col shadow-2xl z-10 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Plan My Somnath Journey
              </h3>
              <p className="text-[11px] text-amber-300/80 font-medium">
                Verified Local Host • 0% Advance Required for Quote
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors tap-bounce"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {status === 'success' ? (
            /* SUCCESS STATE */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl font-black text-white">
                  Trip Plan Request Received!
                </h4>
                <p className="text-xs text-amber-400 font-mono mt-1">
                  Reference ID: #SLH-{leadResult?.leadId || 'NEW'}
                </p>
                <p className="text-xs text-slate-300 mt-2 max-w-xs mx-auto leading-relaxed">
                  Har Har Mahadev, <strong className="text-white">{fullName}</strong>! Our Somnath local coordinator will review your itinerary and call you back shortly.
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={getStructuredLeadWhatsAppUrl({ fullName, phone, destination, travelGroup: `${travelersCount} (Date: ${travelDate})`, vehiclePref: cabType })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg tap-bounce"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>

                <a
                  href="tel:6359798896"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 tap-bounce"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Call Hotline: 6359798896</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-slate-200 underline pt-2 block mx-auto"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM STATE */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Input: Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Full Name <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
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
                    className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white placeholder-slate-500 text-base outline-none transition-all"
                  />
                </div>
              </div>

              {/* Input: Indian Mobile Number (1-hand friendly numeric keyboard) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Mobile Number (Calling & WhatsApp) <span className="text-amber-400">*</span>
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
                    placeholder="10-digit mobile number"
                    className="w-full px-3.5 py-3 bg-transparent text-white placeholder-slate-500 text-base outline-none"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Numeric keypad opens automatically. No OTP required at this step.
                </p>
              </div>

              {/* Destination Quick Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Selected Destination / Circuit
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    'Somnath Darshan',
                    'Somnath + Sasan Gir',
                    'Somnath + Diu',
                    'Complete Saurashtra Circuit'
                  ].map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => setDestination(dest)}
                      className={`p-2 rounded-lg text-left text-xs font-medium border transition-all ${
                        destination === dest
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Date & Passengers (Quick Pills) */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    Tentative Travel Date
                  </label>
                  <select
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-2.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs outline-none focus:border-amber-400"
                  >
                    <option value="This Weekend">This Weekend</option>
                    <option value="Next Week">Next Week</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Festival / Diwali / Holi">Festival / Holiday</option>
                    <option value="Dates Flexible">Dates Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                    No. of Travelers
                  </label>
                  <select
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(e.target.value)}
                    className="w-full px-2.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs outline-none focus:border-amber-400"
                  >
                    <option value="1-2 Adults">1-2 Adults (Couple)</option>
                    <option value="3-5 Members">3-5 Members (Family)</option>
                    <option value="6-8 Members">6-8 Members (SUV)</option>
                    <option value="9+ Group">9+ (Tempo Traveller)</option>
                  </select>
                </div>
              </div>

              {/* Clear Consent Text (Strictly per prompt specification) */}
              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/80">
                🔒 <strong>Privacy Assurance:</strong> We respect your time and privacy. Zero spam guarantee. Your details are saved securely and used only by our verified Somnath local host to prepare your customized itinerary and quotes.
              </div>

              {/* Large Accessible Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full min-h-[52px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 disabled:opacity-50 transition-all tap-bounce"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Saving Your Plan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Get Free Custom Itinerary & Pricing</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
