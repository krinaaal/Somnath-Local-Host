import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import LiveTrustStats from './components/LiveTrustStats';
import CinematicScrollJourney from './components/cinematic/CinematicScrollJourney';
import ServicesGrid from './components/ServicesGrid';
import CustomerReviews from './components/CustomerReviews';
import ConversionSection from './components/ConversionSection';
import FrontendLeadModal from './components/FrontendLeadModal';
import StickyBottomBar from './components/StickyBottomBar';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';
import WelcomeVoiceToast from './components/WelcomeVoiceToast';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('Somnath');
  const { triggerFirstTimePopupAfterDelay } = useLanguage();

  const handleLoadingFinish = () => {
    setLoading(false);
    // Comfortably open the language prompt after home screen appears (900ms delay)
    triggerFirstTimePopupAfterDelay(900);
  };

  const handleOpenLeadModal = (destination = 'Somnath') => {
    if (typeof destination === 'string') {
      setSelectedDestination(destination);
    }
    setIsLeadModalOpen(true);
  };

  const handleScrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreAgain = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col relative selection:bg-amber-300 selection:text-slate-900">
      {/* Delightful Branded Loading Animation (3.7s duration, then reveals home screen) */}
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}

      {/* Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        onScrollToJourney={handleScrollToJourney}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        onScrollToJourney={handleScrollToJourney}
      />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Signature Hero: "Chalo, Somnath Darshan karne Chalein!" */}
        <Hero
          onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
          onScrollToJourney={handleScrollToJourney}
        />

        {/* 3 Prominent Real-Time Indicators: Live Enquiries (0-150 by IST), 1000+ Happy Pilgrims, Weekly Bookings */}
        <LiveTrustStats
          onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        />

        {/* The Real-World Cinematic Scroll Journey (Somnath, Dwarka, Diu, Sasan Gir) */}
        <CinematicScrollJourney
          onSelectDestination={(dest) => handleOpenLeadModal(dest)}
        />

        {/* Services Section (Hotel & Stay, Car Rental, Sightseeing, Desi Gujarati Food) */}
        <ServicesGrid
          onBookService={(service) => handleOpenLeadModal(service)}
        />

        {/* Customer Reviews for Car Rentals & Hotel Stays */}
        <CustomerReviews
          onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        />

        {/* Minimal Contact-First Conversion Section */}
        <ConversionSection
          onOpenContact={() => handleOpenLeadModal('Somnath')}
          onExploreAgain={handleExploreAgain}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        onScrollToJourney={handleScrollToJourney}
      />

      {/* Sticky Bottom Conversion Bar for Mobile (auto-hides when modal is open) */}
      <StickyBottomBar
        onOpenLeadModal={() => handleOpenLeadModal('Somnath')}
        isModalOpen={isLeadModalOpen}
      />

      {/* Frontend-Only Enquiry Form Modal (No DB, client-side validation only) */}
      <FrontendLeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialDestination={selectedDestination}
      />

      {/* First-Time 10-Language Selector & Manual Switcher Modal */}
      <LanguageModal />

      {/* Loving Female Welcome Voice Audio Toast with Mute/Replay controls */}
      <WelcomeVoiceToast />
    </div>
  );
}
