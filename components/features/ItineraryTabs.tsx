"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Itinerary from "./Itinerary";
import { ItineraryTabsProps } from "@/type/model";

export default function ItineraryTabs({ itinerary, sightseeing, accommodation, meals, exclusions, highlights, additionalDelights }: ItineraryTabsProps) {
  const [activeTab, setActiveTab] = useState("Highlights");

  const tabs = [
    { id: "Highlights", icon: "pi pi-star" },
    { id: "Itinerary", icon: "pi pi-calendar" },
    { id: "Sightseeing", icon: "pi pi-compass" },
    { id: "Accommodation", icon: "pi pi-home" },
    { id: "Meals", icon: "pi pi-check-circle" },
    { id: "Exclusions", icon: "pi pi-times-circle" },
  ];

  return (
    <div>
      {/* Tabs Header */}
      <div className="sticky top-[85px] z-40 bg-white border-b border-gray-100 mb-6 md:mb-8 pt-4 pb-2 shadow-sm">
        <div className="flex flex-nowrap gap-2 md:gap-3 overflow-x-auto w-full snap-x hide-scrollbar scroll-smooth px-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 flex-shrink-0 snap-start border whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-md transform scale-105"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
              }`}
              title={tab.id}
            >
              {tab.icon && <i className={`${tab.icon} text-lg md:text-base`} />}
              <span className="hidden md:inline">{tab.id}</span>
            </button>
          ))}
        </div>
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
                    <span className="text-gray-700 font-normal leading-relaxed break-words min-w-0 flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : (
              // Fallback to itinerary summary if no highlights provided
              itinerary.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-orange-50 rounded-lg flex flex-col items-center justify-center text-orange-600 shrink-0">
                    <span className="text-xs font-bold uppercase">Day</span>
                    <span className="text-2xl font-bold">{item.day}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <div className="text-sm text-gray-600 mt-1 line-clamp-2 prose prose-sm max-w-none">
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))
            )}

            {additionalDelights && additionalDelights.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-rose-900">
                    <i className="pi pi-heart-fill text-rose-500" />
                    Additional Delights
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {additionalDelights.map((delight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="pi pi-check text-rose-500 mt-1 font-bold shrink-0" />
                        <span className="text-gray-700 leading-relaxed">
                          <ReactMarkdown 
                            components={{
                               p: ({node, ...props}) => <span {...props} />
                            }}
                          >
                            {delight.replace(/<b>/g, "**").replace(/<\/b>/g, "**")}
                          </ReactMarkdown>
                        </span>
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
                    <i className="pi pi-map-marker text-orange-600 text-xl" />
                    <h3 className="text-lg font-bold text-gray-900 tracking-wide uppercase">{country}</h3>
                  </div>
                  
                  {/* Cities Grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full" />
                          <h4 className="font-bold text-gray-800 text-lg">{item.city}</h4>
                        </div>
                        <ul className="space-y-2 pl-4 border-l-2 border-gray-100 ml-1">
                          {item.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                              <span className="text-orange-400 mt-1.5 text-[10px]">●</span>
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
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shrink-0">
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
                        <span className="text-gray-700 font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note */}
                {meals.note && (
                  <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex gap-3 items-start">
                    <i className="pi pi-info-circle text-teal-600 mt-1 shrink-0" />
                    <p className="text-teal-800 text-sm font-normal italic leading-relaxed">
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
                            <span className="text-gray-700 font-normal leading-relaxed">{item.description}</span>
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
