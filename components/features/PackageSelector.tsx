"use client";

import Image from "next/image";
import { DurationSelectorProps } from "../../type/model";

export default function PackageSelector({ packages, selectedPackage, tourId, onPackageChange }: DurationSelectorProps) {
  if (!packages || packages.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold font-serif text-gray-900">Choose Your Journey</h2>
        <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700">
           <i className="pi pi-filter" /> Filter
        </button>
      </div>
      
      <div className="flex flex-col space-y-4">
        {packages.map((pkg) => {
           const isSelected = selectedPackage?.id === pkg.id;
           
           return (
            <button 
              key={pkg.id}
              onClick={() => onPackageChange?.(pkg)}
              className={`relative w-full text-left rounded-xl overflow-hidden transition-all duration-300 group border ${
                isSelected 
                  ? 'bg-white border-blue-600 ring-1 ring-blue-600 shadow-md' 
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
                    <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                        <div className="bg-blue-600 text-white rounded-full p-1 shadow-sm">
                            <i className="pi pi-check text-xs font-bold" />
                        </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
                            {pkg.days} Days
                        </span>
                        {isSelected && <span className="text-blue-600 text-xs font-bold"><i className="pi pi-check-circle"/></span>}
                    </div>
                    
                    <h3 className={`font-bold text-gray-900 leading-tight mb-1 ${isSelected ? 'bg-gradient-to-r from-blue-800 via-blue-600 to-purple-600 bg-clip-text text-transparent' : ''}`}>
                      {pkg.name}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end mt-2">
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase font-medium">Starting From</p>
                        <p className="text-lg font-bold text-gray-900">{pkg.price}<span className="text-xs text-gray-400 font-normal ml-1">*pp</span></p>
                    </div>
                    
                    {isSelected ? (
                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-blue-100">
                            Selected
                        </span>
                    ) : (
                        <span className="text-gray-400 group-hover:text-blue-600 text-xs font-medium border border-gray-200 group-hover:border-blue-200 px-3 py-1.5 rounded-lg transition-colors">
                            View Details
                        </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
