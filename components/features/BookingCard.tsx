"use client";

interface BookingCardProps {
  price: string;
  duration: string;
  packageName?: string;
  availableDates?: string;
  groupSize?: string;
  onEnquire?: () => void;
}

export default function BookingCard({ 
  price, 
  duration, 
  packageName,
  availableDates = "May, June, July 2026", 
  groupSize = "Max 12 People",
  onEnquire
}: BookingCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <div className="mb-6">
        {packageName && (
          <div className="mb-2">
             <span className="text-sm font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">{packageName}</span>
          </div>
        )}
        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting From</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-4xl font-bold text-orange-600">{price}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 font-medium">{duration}</p>
      </div>
      


      <button 
        onClick={onEnquire}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl mb-3 transition-all shadow-lg shadow-orange-200 transform hover:-translate-y-1"
      >
        Enquire Now
      </button>
    </div>
  );
}
