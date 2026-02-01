"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollTop } from 'primereact/scrolltop';
import { Tooltip } from 'primereact/tooltip';
import HeroCarousel from "./HeroCarousel";
// import DealCountdown from "./DealCountdown"; // Removed as per request
import RouteTimeline from "./RouteTimeline";
import ItineraryTabs from "./ItineraryTabs";
// import BookingCard from "./BookingCard"; // Replaced by TourHeader
import ConnectDialog from "./ConnectDialog";
import PackageSelector from "./PackageSelector";
import Partners from "./Partners";
import TourHeader from "./TourHeader";

import { Tour, Package, RouteItem, ItineraryItem } from "@/type/model";

interface TourContentProps {
  tour: Tour;
  initialPackageId?: string;
}

export default function TourContent({ tour, initialPackageId }: TourContentProps) {
  const hasPackages = tour.packages && tour.packages.length > 0;
  
  // Find initial package based on ID or default to first
  const initialPackage = hasPackages 
    ? (initialPackageId ? tour.packages!.find(p => p.id === initialPackageId) || tour.packages![0] : tour.packages![0])
    : null;
  
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(initialPackage);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Derived data
  const currentImages = selectedPackage?.images || [tour.image];
  const currentPrice = selectedPackage ? selectedPackage.price : tour.price;
  const currentDuration = selectedPackage ? selectedPackage.duration : tour.duration;
  const currentItinerary = selectedPackage ? selectedPackage.itinerary : tour.itinerary;
  const currentRoute = selectedPackage ? selectedPackage.route : [];
  const currentHighlights = selectedPackage ? selectedPackage.highlights : [];
  const currentDetailedHighlights = selectedPackage?.detailedHighlights || [];
  const currentAdditionalDelights = selectedPackage?.additionalDelights || [];
  
  const currentSightseeing = selectedPackage?.sightseeing || [];
  const currentAccommodation = selectedPackage?.accommodation || [];
  const currentMeals = selectedPackage?.meals;
  const currentExclusions = selectedPackage?.exclusions || [];
  const currentInstructions = selectedPackage?.instructions || [];

  // ...

                 <ItineraryTabs 
                   key={selectedPackage?.id || "default"} 
                   itinerary={currentItinerary || []}
                   sightseeing={currentSightseeing}
                   accommodation={currentAccommodation}
                   meals={currentMeals}
                   exclusions={currentExclusions}
                   instructions={currentInstructions}
                   highlights={currentDetailedHighlights}
                   additionalDelights={currentAdditionalDelights}
                 />

  // Helper to normalize route data
  const normalizedRoute: RouteItem[] = Array.isArray(currentRoute) 
    ? currentRoute.map(item => 
        typeof item === 'string' ? { city: item, days: 1 } : item
      )
    : [];

  // Derive dynamic location string from route
  const dynamicLocation = normalizedRoute.length > 0 
    ? normalizedRoute.map(r => r.city).join(" • ")
    : tour.location;

  const handleEnquire = () => {
    setIsConnectOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32 lg:pb-16 w-full">
      <ScrollTop />
      <ConnectDialog isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
      
      {/* Hero Carousel */}
      <HeroCarousel 
        key={selectedPackage?.id || "default"} // Force re-render on package change to update images
        images={currentImages} 
        title={tour.title}
        packageName={selectedPackage?.name}
        location={dynamicLocation} 
        rating={tour.rating} 
      />

      {/* Mobile Package Selector - Full Width Carousel */}
      {hasPackages && (
        <div className="lg:hidden mt-8 mb-2 px-4">
           {/* Passing padding-right to the component or handling it in container to ensure end card is visible */}
           <PackageSelector 
             packages={tour.packages!} 
             selectedPackage={selectedPackage} 
             tourId={tour.id}
             onPackageChange={setSelectedPackage}
             layout="horizontal"
             className="!bg-transparent !shadow-none !border-none !p-0"
           />
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-8 py-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column - Sticky Sidebar with Smooth Transition */}
          <div 
            className={`
                lg:sticky lg:top-24 order-2 lg:order-1 transition-all duration-500 ease-in-out overflow-hidden
                ${isSidebarOpen ? 'lg:w-[380px] opacity-100' : 'lg:w-0 opacity-0'}
            `}
          >
             <div className="space-y-8 w-full">
                {/* Package Selector */}
                {hasPackages && (
                    <div className="min-w-[380px] lg:min-w-0 hidden lg:block"> {/* Only show on desktop sidebar */}
                        <PackageSelector 
                          packages={tour.packages!} 
                          selectedPackage={selectedPackage} 
                          tourId={tour.id}
                          onPackageChange={setSelectedPackage}
                        />
                    </div>
                )}
             </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="flex-1 order-1 lg:order-2 space-y-8 min-w-0 relative"> {/* min-w-0 prevents flex child from overflowing */}
            
            {/* Sticky Toggle Button */}
            {!isConnectOpen && (
                <div className="sticky top-28 z-[100] hidden lg:flex justify-end pointer-events-none -mb-12 pr-2">
                    <Tooltip target=".toggle-btn" position="left" />
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="toggle-btn pointer-events-auto bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 transition-all p-2.5 rounded-full shadow-lg border border-gray-100 backdrop-blur-sm transform hover:scale-105"
                        data-pr-tooltip={isSidebarOpen ? "Hide Packages" : "Show Packages"}
                    >
                        <i className={`pi ${isSidebarOpen ? 'pi-angle-double-left' : 'pi-angle-double-right'} text-lg font-bold`} />
                    </button>
                </div>
            )}

            {/* Tour Header */}
            <div className="relative group pt-2"> 
                <TourHeader 
                    title={tour.title}
                    packageName={selectedPackage?.name}
                    duration={currentDuration}
                    price={currentPrice}
                    onEnquire={handleEnquire}
                    isModalOpen={isConnectOpen}
                />
            </div>

            {/* Itinerary Tabs */}
            <section id="full-itinerary" className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
               <div className="flex justify-between items-center mb-6">
                 <h2 className="text-2xl font-bold font-serif flex items-center gap-2">
                    <i className="pi pi-calendar text-orange-600" />
                    Detailed Itinerary
                 </h2>
               </div>
               
               <div className="mb-0 md:mb-8">
                 <ItineraryTabs 
                   key={selectedPackage?.id || "default"} 
                   itinerary={currentItinerary || []}
                   sightseeing={currentSightseeing}
                   accommodation={currentAccommodation}
                   meals={currentMeals}
                   exclusions={currentExclusions}
                   instructions={currentInstructions}
                   highlights={currentDetailedHighlights}
                 />
               </div>
            </section>

             {/* Route Timeline */}
             {normalizedRoute.length > 0 && (
              <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold font-serif mb-4">Destination Routes</h2>
                <RouteTimeline route={normalizedRoute} />
              </section>
            )}

            {/* About */}
            <section className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold font-serif mb-4">About the Experience</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {tour.description}
              </p>
              
              {currentHighlights.length > 0 && (
                 <div className="mb-8">
                   <h3 className="text-xl font-bold text-gray-900 mb-4">Trip Highlights</h3>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                     
                     {[...currentHighlights, "Professional English Speaking Guide", "All Entry Fees Included", "Comfortable AC Coach"].map((highlight, idx) => (
                       <li key={idx} className="flex items-start gap-3">
                         <i className="pi pi-check-circle text-green-500 text-lg mt-0.5" />
                         <span className="text-gray-700 font-medium">{highlight}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                  <div className="text-center p-4 bg-teal-50 hover:bg-teal-600 rounded-xl border border-teal-100 hover:border-teal-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/hotel.png" alt="Hotel" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">4 Star Accomodation</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 hover:bg-orange-600 rounded-xl border border-orange-100 hover:border-orange-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/transport.png" alt="Transport" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Luxury Transport</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 hover:bg-green-600 rounded-xl border border-green-100 hover:border-green-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/veg-food.png" alt="Meals" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Vegetarian Meals Options</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 hover:bg-purple-600 rounded-xl border border-purple-100 hover:border-purple-600 shadow-sm hover:shadow-md transition-all group duration-300">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform overflow-hidden">
                      <Image src="/images/amenities/guide.png" alt="Guide" width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">Professional Tour Guide</p>
                  </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <Partners />

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between gap-4">
          <div>
             <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Starting from</p>
             <p className="text-xl font-bold text-orange-600">{currentPrice}</p>
          </div>
          <button 
            onClick={handleEnquire}
            className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-colors flex-1 max-w-[200px]"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
