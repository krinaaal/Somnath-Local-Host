import React, { useState, useEffect } from 'react';
import { X, User, Phone, CheckCircle2, AlertCircle, MessageCircle, PhoneCall, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function FrontendLeadModal({ isOpen, onClose, initialDestination = 'Somnath' }) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [destination, setDestination] = useState(initialDestination);
  const [travelGroup, setTravelGroup] = useState('Family with Elders / Kids');
  const [vehiclePref, setVehiclePref] = useState('AC Innova / Ertiga');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

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

  // Step 1 validation
  const handleNextStep = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }

    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanedPhone)) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8 or 9).');
      return;
    }

    if (!consent) {
      setErrorMsg('Please tick the consent box to continue.');
      return;
    }

    setStep(2);
  };

  // Step 2 client-side submission (Frontend-only, no database or backend API connection)
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setFullName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-t-3xl sm:rounded-3xl max-h-[92vh] flex flex-col shadow-2xl z-10 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-amber-50/50 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-slate-900">
                Plan With Local Host
              </h3>
              <p className="text-[11px] font-bold text-amber-700">
                Friendly Saurashtra Travel Companion
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center tap-bounce"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {submitted ? (
            /* SUBMITTED CONFIRMATION (Frontend-only UI) */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border-2 border-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                  Enquiry Prepared!
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Har Har Mahadev, <strong className="text-slate-900">{fullName}</strong>! Connect with your local host directly on WhatsApp below to start planning:
                </p>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={`https://wa.me/916359798896?text=${encodeURIComponent(`Namaskar Somnath Local Host! My name is ${fullName} (Ph: ${phone}). I am interested in visiting ${destination} with my ${travelGroup}. Please guide me!`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm tap-bounce"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send to Host on WhatsApp</span>
                </a>

                <a
                  href="tel:6359798896"
                  className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center gap-2 tap-bounce"
                >
                  <PhoneCall className="w-4 h-4 text-orange-500" />
                  <span>Or Call Host Directly: 6359798896</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-500 underline pt-2 block mx-auto font-medium"
                >
                  Back to Journey
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Basic Information */
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="text-xs font-bold text-slate-500">
                Step 1 of 2: Basic Contact Details
              </div>

              {errorMsg && (
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Full Name <span className="text-orange-500">*</span>
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
                    placeholder="e.g. Nilesh Bhatt"
                    className="w-full pl-10 pr-3.5 py-3 rounded-2xl border-2 border-slate-200 focus:border-amber-400 text-slate-800 text-sm font-medium outline-none transition-all"
                  />
                </div>
              </div>

              {/* Indian Mobile Number */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Indian Mobile Number <span className="text-orange-500">*</span>
                </label>
                <div className="relative flex rounded-2xl border-2 border-slate-200 focus-within:border-amber-400 overflow-hidden">
                  <div className="inline-flex items-center gap-1 px-3 bg-slate-50 border-r border-slate-200 text-xs font-black text-slate-700">
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
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="10-digit phone number"
                    className="w-full px-3.5 py-3 text-slate-800 text-sm font-medium outline-none"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Used only to connect via call or WhatsApp. No OTP required.
                </p>
              </div>

              {/* Consent Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-orange-500 rounded border-slate-300 focus:ring-orange-400"
                />
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  I agree to receive a friendly call or WhatsApp message from Somnath Local Host.
                </span>
              </label>

              {/* Continue Button */}
              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm tap-bounce"
              >
                <span>Continue to Trip Preferences</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            /* STEP 2: Optional Trip Preferences */
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Step 2 of 2: Trip Preferences (Optional)</span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-amber-600 hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              </div>

              {/* Destination Pick */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1.5">
                  Which destination are you most excited about?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Somnath', 'Dwarka', 'Diu Island', 'Sasan Gir', 'Complete Circuit'].map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => setDestination(dest)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all text-left ${
                        destination === dest
                          ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      📍 {dest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Traveling With */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Traveling With:
                </label>
                <select
                  value={travelGroup}
                  onChange={(e) => setTravelGroup(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 text-slate-800 text-xs font-bold outline-none focus:border-amber-400"
                >
                  <option value="Family with Elders / Kids">Family with Elders / Kids</option>
                  <option value="Couple Pilgrimage / Holiday">Couple Pilgrimage / Holiday</option>
                  <option value="Group of Friends">Group of Friends</option>
                  <option value="Solo Traveler">Solo Traveler</option>
                </select>
              </div>

              {/* Preferred Vehicle */}
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  Preferred Cab Choice:
                </label>
                <select
                  value={vehiclePref}
                  onChange={(e) => setVehiclePref(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 text-slate-800 text-xs font-bold outline-none focus:border-amber-400"
                >
                  <option value="AC Innova / Ertiga">AC Innova / Ertiga (Best for Families)</option>
                  <option value="AC Sedan (Dzire)">AC Sedan (Comfortable for 2-3)</option>
                  <option value="Tempo Traveller">Tempo Traveller (For Groups 9+)</option>
                  <option value="Need Advice">Not sure, please advise</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full min-h-[48px] py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm tap-bounce"
              >
                <span>Connect With My Local Host</span>
                <Sparkles className="w-4 h-4 text-emerald-200" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
