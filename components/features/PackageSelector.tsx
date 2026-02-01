"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DurationSelectorProps } from "../../type/model";

export default function PackageSelector({ 
  packages, 
  selectedPackage, 
  tourId, 
  onPackageChange,
  className = "",
  layout = "vertical"
}: DurationSelectorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPackages, setFilteredPackages] = useState(packages);


  // Reset index when packages change or layout changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredPackages, layout]);

  // Filter Logic
  useEffect(() => {
    if (searchQuery.length >= 3) {
      const deepSearch = (obj: any, query: string): boolean => {
        if (!obj) return false;
        
        if (typeof obj === 'string') {
          return obj.toLowerCase().includes(query.toLowerCase());
        }
        
        if (typeof obj === 'number') {
          return obj.toString().includes(query);
        }
        
        if (Array.isArray(obj)) {
          return obj.some(item => deepSearch(item, query));
        }
        
        if (typeof obj === 'object') {
          return Object.values(obj).some(value => deepSearch(value, query));
        }
        
        return false;
      };

      const filtered = packages.filter(pkg => deepSearch(pkg, searchQuery));
      setFilteredPackages(filtered);
    } else {
      setFilteredPackages(packages);
    }
  }, [searchQuery, packages]);

  if (!packages || packages.length === 0) return null;

  const isHorizontal = layout === "horizontal";
  // Use filtered packages for rendering
  const displayPackages = filteredPackages;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayPackages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayPackages.length) % displayPackages.length);
  };

  // Logic to show 2 items at a time
  const getVisiblePackages = () => {
    if (displayPackages.length === 0) return [];
    if (displayPackages.length === 1) return [displayPackages[0]];
    const first = displayPackages[currentIndex];
    // Ensure we modulo to wrap around seamlessly
    const second = displayPackages[(currentIndex + 1) % displayPackages.length];
    return [first, second];
  };

  const visiblePackages = getVisiblePackages();

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold font-serif text-gray-900">Choose Your Journey</h2>
        <button 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="text-orange-600 text-sm font-medium flex items-center gap-2 hover:text-orange-700 transition-colors"
        >
          <i className="pi pi-filter text-orange-600" /> Filter
        </button>
      </div>

      {/* Search Box */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: "auto", opacity: 1, marginBottom: 24 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
            <div className="relative">
              <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search packages (min 3 chars)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all font-medium"
              />
              {searchQuery.length > 0 && searchQuery.length < 3 && (
                 <p className="text-[10px] text-orange-500 mt-1 ml-2 font-medium">Type at least 3 characters</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {isHorizontal ? (
        // Mobile Carousel Layout (2 Items Visible)
        <div className="relative w-full">
          <div className="relative min-h-[300px] overflow-hidden">
            <div className="flex gap-3 h-full"> 
              <AnimatePresence mode="popLayout" initial={false}>
                {visiblePackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    layout
                    initial={{ opacity: 0.5, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }} // Slide out to left
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`relative ${displayPackages.length > 1 ? 'w-[calc(50%-6px)]' : 'w-full'} flex-shrink-0`}
                  >
                     <button 
                      onClick={() => onPackageChange?.(pkg)}
                      className={`relative text-left rounded-xl overflow-hidden transition-all duration-300 group border w-full h-full flex flex-col ${
                        selectedPackage?.id === pkg.id
                          ? 'bg-white border-orange-600 ring-1 ring-orange-600 shadow-md' 
                          : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className="relative w-full h-32 shrink-0 overflow-hidden">
                        <Image 
                          src={pkg.image} 
                          alt={pkg.name} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        {selectedPackage?.id === pkg.id && (
                          <div className="absolute top-2 right-2">
                              <div className="bg-orange-600 text-white rounded-full p-1 shadow-sm">
                                  <i className="pi pi-check text-[10px] font-bold" />
                              </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-grow justify-between p-3">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                              <span className="text-[10px] font-bold tracking-wider text-orange-600 uppercase bg-orange-50 px-2 py-0.5 rounded-full">
                                  {pkg.days} Days
                              </span>
                          </div>
                          <h3 className={`font-bold text-gray-900 leading-tight mb-1 text-sm line-clamp-2 ${selectedPackage?.id === pkg.id ? 'bg-gradient-to-r from-orange-800 via-orange-600 to-red-600 bg-clip-text text-transparent' : ''}`}>
                            {pkg.name}
                          </h3>
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                          <div>
                              <p className="text-[10px] text-gray-500 uppercase font-medium">Starting From</p>
                              <p className="text-lg font-bold text-gray-900 leading-none">{pkg.price}<span className="text-[10px] text-gray-400 font-normal ml-0.5">*pp</span></p>
                          </div>
                          {selectedPackage?.id === pkg.id ? (
                              <span className="bg-orange-50 text-orange-700 text-xs font-bold px-2 py-1.5 rounded text-center border border-orange-100 w-full block">
                                  Selected
                              </span>
                          ) : (
                              <span className="text-gray-400 group-hover:text-orange-600 text-xs font-medium border border-gray-200 group-hover:border-orange-200 px-2 py-1.5 rounded text-center transition-colors w-full block">
                                  Select
                              </span>
                          )}
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Controls */}
          {displayPackages.length > 2 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg border border-gray-100 flex items-center justify-center w-8 h-8"
                aria-label="Previous Package"
              >
                <i className="pi pi-chevron-left text-xs" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg border border-gray-100 flex items-center justify-center w-8 h-8"
                 aria-label="Next Package"
              >
                <i className="pi pi-chevron-right text-xs" />
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-1.5 mt-2">
            {displayPackages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full h-1.5 ${
                  idx === currentIndex ? "w-4 bg-orange-600" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to package ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Vertical List Layout
        <div className="flex flex-col space-y-4">
        {displayPackages.length === 0 ? (
          <p className="text-center text-gray-500 py-8 italic">No packages found matching "{searchQuery}"</p>
        ) : (
          displayPackages.map((pkg) => {
           const isSelected = selectedPackage?.id === pkg.id;
           
           return (
            <button 
              key={pkg.id}
              onClick={() => onPackageChange?.(pkg)}
              className={`relative w-full text-left rounded-xl overflow-hidden transition-all duration-300 group border ${
                isSelected 
                  ? 'bg-white border-orange-600 ring-1 ring-orange-600 shadow-md' 
                  : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="flex p-3 gap-4">
                {/* Image Section */}
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-orange-600/10 flex items-center justify-center">
                        <div className="bg-orange-600 text-white rounded-full p-1 shadow-sm">
                            <i className="pi pi-check text-xs font-bold" />
                        </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold tracking-wider text-orange-600 uppercase bg-orange-50 px-2 py-0.5 rounded-full">
                            {pkg.days} Days
                        </span>
                        {isSelected && <span className="text-orange-600 text-xs font-bold"><i className="pi pi-check-circle"/></span>}
                    </div>
                    
                    <h3 className={`font-bold text-gray-900 leading-tight mb-1 ${isSelected ? 'bg-gradient-to-r from-orange-800 via-orange-600 to-red-600 bg-clip-text text-transparent' : ''}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end mt-2">
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-medium">Starting From</p>
                        <p className="text-lg font-bold text-gray-900">{pkg.price}<span className="text-xs text-gray-400 font-normal ml-1">*pp</span></p>
                    </div>
                    
                    {isSelected ? (
                        <span className="bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-orange-100">
                            Selected
                        </span>
                    ) : (
                        <span className="text-gray-400 group-hover:text-orange-600 text-xs font-medium border border-gray-200 group-hover:border-orange-200 px-3 py-1.5 rounded-lg transition-colors">
                            View Details
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })
        )}
      </div>
      )}
    </div>
  );
}
