"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DealCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to
    // In a real app, this would come from an API or config
    // For now, we'll set it to 5 days from the first visit (stored in localStorage) 
    // or use a fixed date if provided
    
    const calculateTimeLeft = () => {
      // Fixed date for the sale end (e.g., 5 days from now)
      // You can adjust this date to be dynamic or fixed
      const saleEndDate = new Date();
      saleEndDate.setDate(saleEndDate.getDate() + 5); // Default 5 days from now if not stored
      
      let targetDate = localStorage.getItem('saleTargetDate');
      
      if (!targetDate) {
        targetDate = saleEndDate.toISOString();
        localStorage.setItem('saleTargetDate', targetDate);
      }

      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      // If timer ends, reset it for demo purposes or show 0
      // For this demo, let's reset it to 5 days again to keep the UI active
      const newTarget = new Date();
      newTarget.setDate(newTarget.getDate() + 5);
      localStorage.setItem('saleTargetDate', newTarget.toISOString());
      
      return {
        days: 5,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl p-8 relative overflow-hidden shadow-2xl border border-gray-700/50">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16 animate-pulse" />

      <div className="relative z-10 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Up to $300 OFF</h3>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xl text-gray-300">on selected trips</span>
          <motion.span 
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: ["0 0 0px rgba(255, 215, 0, 0)", "0 0 20px rgba(255, 215, 0, 0.3)", "0 0 0px rgba(255, 215, 0, 0)"]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-black text-xs font-bold px-3 py-1.5 rounded uppercase shadow-lg border border-yellow-200/50"
          >
            Happy New Year Sale!
          </motion.span>
        </div>
        
        <p className="text-gray-400 text-sm mb-8 max-w-md">
          Start your year with an adventure! Connect with our destination experts to unlock exclusive New Year savings.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-600/30 transition-all relative overflow-hidden group border border-white/10 mb-8"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Claim Your Discount <i className="pi pi-arrow-right text-sm" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </motion.button>

        <div className="w-full border-t border-gray-700/50 pt-6">
          <p className="text-xs font-medium mb-4 text-gray-400 uppercase tracking-widest">Offer ends in</p>
          <div className="flex gap-4 justify-start">
            <TimeBox value={timeLeft.days} label="DAYS" />
            <span className="text-2xl font-bold mt-2 text-gray-600">:</span>
            <TimeBox value={timeLeft.hours} label="HOURS" />
            <span className="text-2xl font-bold mt-2 text-gray-600">:</span>
            <TimeBox value={timeLeft.minutes} label="MINUTES" />
            <span className="text-2xl font-bold mt-2 text-gray-600">:</span>
            <TimeBox value={timeLeft.seconds} label="SECONDS" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-gray-800 rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-2 shadow-inner border border-gray-700">
        <span className="text-3xl font-mono font-bold text-white">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-[10px] font-bold text-gray-500 tracking-wider">{label}</span>
    </div>
  );
}
