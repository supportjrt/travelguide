"use client";

import { useState } from "react";
import Itinerary from "./Itinerary";
import { ItineraryTabsProps } from "@/type/model";

export default function ItineraryTabs({ itinerary, sightseeing, accommodation, meals, exclusions, highlights, additionalDelights }: ItineraryTabsProps) {
  const [activeTab, setActiveTab] = useState("Highlights");

  const tabs = [
    { id: "Highlights", icon: null },
    { id: "Itinerary", icon: null },
    { id: "Sightseeing", icon: "pi pi-compass" },
    { id: "Accommodation", icon: "pi pi-home" },
    { id: "Meals", icon: "pi pi-apple" },
    { id: "Exclusions", icon: "pi pi-times-circle" },
  ];

  return (
    <div>
      {/* Tabs Header */}
      <div className="sticky top-[85px] z-40 bg-white flex gap-3 mb-8 border-b border-gray-100 pb-4 overflow-x-auto scrollbar-hide snap-x -mx-6 px-6 md:mx-0 md:px-0 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium text-sm transition-all flex items-center gap-2 whitespace-nowrap flex-shrink-0 snap-start ${
              activeTab === tab.id
                ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab.icon && <i className={tab.icon} />}
            {tab.id}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl">
        {activeTab === "Itinerary" && (
          <div className="space-y-8">
            <Itinerary items={itinerary} />
          </div>
        )}

        {activeTab === "Highlights" && (
          <div className="space-y-8">

            {highlights && highlights.length > 0 ? (
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 border border-gray-50 rounded-lg hover:bg-orange-50/50 transition-colors">
                    <i className="pi pi-star-fill text-orange-500 mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : (
              // Fallback to itinerary summary if no highlights provided
              itinerary.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex flex-col items-center justify-center text-blue-600 shrink-0">
                    <span className="text-xs font-bold uppercase">Day</span>
                    <span className="text-2xl font-bold">{item.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <div 
                      className="text-sm text-gray-600 mt-1 line-clamp-2 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              ))
            )}

            {additionalDelights && additionalDelights.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                  <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-rose-900">
                    <i className="pi pi-heart-fill text-rose-500" />
                    Additional Delights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {additionalDelights.map((delight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="pi pi-check text-rose-500 mt-1 font-bold shrink-0" />
                        <span 
                          className="text-gray-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: delight }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "Sightseeing" && (
          <div className="space-y-8">
            {sightseeing && sightseeing.length > 0 ? (
              // Group items by country
              Object.entries(
                sightseeing.reduce((acc, item) => {
                  const country = item.country || "Other";
                  if (!acc[country]) acc[country] = [];
                  acc[country].push(item);
                  return acc;
                }, {} as Record<string, typeof sightseeing>)
              ).map(([country, items], countryIndex) => (
                <div key={countryIndex} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  {/* Country Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                    <i className="pi pi-map-marker text-blue-600 text-xl" />
                    <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">{country}</h3>
                  </div>
                  
                  {/* Cities Grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <h4 className="font-bold text-gray-800 text-lg">{item.city}</h4>
                        </div>
                        <ul className="space-y-2 pl-4 border-l-2 border-gray-100 ml-1">
                          {item.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                              <span className="text-blue-400 mt-1.5 text-[10px]">●</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p>No sightseeing information available.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "Accommodation" && (
          <div className="space-y-4">
            {accommodation && accommodation.length > 0 ? (
              accommodation.map((item, index) => (
                <div key={index} className="flex gap-4 items-center p-4 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <i className="pi pi-building text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">{item.title}</p>
                    <h4 className="font-bold text-gray-900">{item.hotel}</h4>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p>No accommodation information available.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "Meals" && (
          <div className="space-y-8">
            {meals && meals.inclusions && meals.inclusions.length > 0 ? (
              <div className="space-y-6">
                {/* Inclusions */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <i className="pi pi-check-circle text-green-600" />
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    {meals.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="pi pi-check text-green-500 mt-1 shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note */}
                {meals.note && (
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 items-start">
                    <i className="pi pi-info-circle text-blue-600 mt-1 shrink-0" />
                    <p className="text-blue-800 text-sm font-medium italic leading-relaxed">
                      {meals.note}
                    </p>
                  </div>
                )}

                {/* Driver Tips */}
                {meals.driverTips && (
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex gap-3 items-start">
                    <i className="pi pi-wallet text-orange-600 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-orange-900 font-bold text-sm mb-1">Driver Tips</h4>
                      <p className="text-orange-800 text-sm leading-relaxed">
                        {meals.driverTips}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p>No meals information available.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "Exclusions" && (
          <div className="space-y-6">
             <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                  <i className="pi pi-times-circle text-red-600" />
                  What your tour price does not include:
                </h3>
                {exclusions && exclusions.length > 0 ? (
                   <ul className="space-y-3">
                      {exclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <i className="pi pi-times text-red-500 mt-1 shrink-0" />
                            <span className="text-gray-700 font-medium leading-relaxed">{item.description}</span>
                        </li>
                      ))}
                   </ul>
                ) : (
                   <div className="text-center text-gray-500 py-4">
                     <p>No exclusions listed.</p>
                   </div>
                )}
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
