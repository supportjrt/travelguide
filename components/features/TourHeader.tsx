import React from 'react';

interface TourHeaderProps {
  title: string;
  packageName?: string;
  duration?: string;
  price: string;
  onEnquire: () => void;
  isModalOpen?: boolean;
}

export default function TourHeader({ title, packageName, duration, price, onEnquire, isModalOpen }: TourHeaderProps) {
  return (
    <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100 md:pr-16 w-full max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="space-y-2 flex-1 min-w-0">
          {duration && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold tracking-wide uppercase mb-2 shadow-md">
              <i className="pi pi-clock" />
              {duration}
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-800 via-orange-600 to-red-600 bg-clip-text text-transparent leading-snug tracking-tight drop-shadow-sm break-words whitespace-normal w-full pb-1">
            {packageName || title}
          </h1>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1 shrink-0 w-full md:w-auto justify-end md:justify-start">
           <div className="text-right shrink-0">
              <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-0.5">Pricing Starts At</p>
              <div className="flex items-baseline gap-1 justify-end flex-wrap">
                <span className="text-3xl font-bold text-orange-600 break-words">{price}</span>
                <span className="text-gray-400 text-[10px] font-medium whitespace-nowrap">/ person</span>
              </div>
           </div>
           
           {!isModalOpen && (
             <button 
               onClick={onEnquire}
               className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[100] bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-orange-700 hover:shadow-orange-500/50 transition-all transform hover:scale-110 items-center gap-2 group"
             >
               <span>Enquire Now</span>
               <i className="pi pi-arrow-right group-hover:translate-x-1 transition-transform" />
             </button>
           )}
        </div>
      </div>
    </div>
  );
}
