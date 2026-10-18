import React, { useState } from 'react';
import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import RouteAnimation from './components/RouteAnimation';
import DestinationSlider from './components/DestinationSlider';
import ServicesGrid from './components/ServicesGrid';
import PackagesSection from './components/PackagesSection';
import WhyChooseUs from './components/WhyChooseUs';
import InlineLeadForm from './components/InlineLeadForm';
import LeadFormModal from './components/LeadFormModal';
import StickyBottomBar from './components/StickyBottomBar';
import AdminLeadsDrawer from './components/AdminLeadsDrawer';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isAdminLeadsOpen, setIsAdminLeadsOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('Somnath Circuit');

  // Trigger lead modal with destination pre-selected
  const handleOpenLeadModal = (destination = 'Somnath Circuit') => {
    if (typeof destination === 'string') {
      setSelectedDestination(destination);
    }
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenLeadModal={() => handleOpenLeadModal('Somnath Circuit')}
        onOpenAdminLeads={() => setIsAdminLeadsOpen(true)}
      />

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenLeadModal={() => handleOpenLeadModal('Somnath Circuit')}
        onOpenAdminLeads={() => setIsAdminLeadsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full overflow-hidden">
        {/* Mobile-First Cinematic Hero */}
        <Hero
          onOpenLeadModal={() => handleOpenLeadModal('Somnath Circuit')}
          onSelectQuickDestination={(dest) => handleOpenLeadModal(dest)}
        />

        {/* Section: Interactive Route & Vehicle Travel */}
        <section className="py-6 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RouteAnimation
            onSelectDestination={(dest) => handleOpenLeadModal(`Cab to ${dest}`)}
          />
        </section>

        {/* Section: Swipeable Destination Stories (Somnath, Dwarka, Diu, Sasan Gir) */}
        <DestinationSlider
          onSelectDestination={(dest) => handleOpenLeadModal(`${dest} Tour`)}
        />

        {/* Section: Verified Services (Cabs, Hotels, Food, Darshan) */}
        <ServicesGrid
          onBookService={(service) => handleOpenLeadModal(service)}
        />

        {/* Section: Tour Packages & Itineraries */}
        <PackagesSection
          onSelectPackage={(pkg) => handleOpenLeadModal(pkg)}
        />

        {/* Section: Why Choose Us (Authentic Trust Values) */}
        <WhyChooseUs />

        {/* Section: Inline 1-Handed Mobile Lead Capture Form */}
        <InlineLeadForm
          selectedDestination={selectedDestination}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLeadModal={() => handleOpenLeadModal('Somnath Circuit')}
        onOpenAdminLeads={() => setIsAdminLeadsOpen(true)}
      />

      {/* Sticky Bottom Conversion Bar for Mobile (auto hides when modal is open) */}
      <StickyBottomBar
        onOpenLeadModal={() => handleOpenLeadModal('Somnath Circuit')}
        isModalOpen={isLeadModalOpen}
      />

      {/* One-Handed Lead Form Modal */}
      <LeadFormModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialDestination={selectedDestination}
      />

      {/* Admin Leads Database Inspection Drawer */}
      <AdminLeadsDrawer
        isOpen={isAdminLeadsOpen}
        onClose={() => setIsAdminLeadsOpen(false)}
      />
    </div>
  );
}
