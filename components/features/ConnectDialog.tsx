"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectDialog({ isOpen, onClose }: ConnectDialogProps) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("Morning");
  const [timezone, setTimezone] = useState("EST");
  const [error, setError] = useState("");

  const handleNextStep = () => {
    if (/^\d{10}$/.test(phone)) {
      setError("");
      setStep(2);
    } else {
      setError("Please enter a valid 10-digit phone number");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission logic
    console.log("Connect requested for:", { phone, name, time, timezone });
    setStep(3);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setPhone("");
      setName("");
      setTime("Morning");
      setTimezone("EST");
      setError("");
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors z-10"
            >
              <i className="pi pi-times" />
            </button>

            <div className="p-8 pt-10 text-center">
              {step === 3 ? (
                <div className="py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="pi pi-check text-3xl text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-gray-900 mb-2">Thank you!</h2>
                  <p className="text-gray-500 mb-8">Your request is received. An expert will connect with you shortly.</p>
                  <button 
                    onClick={handleClose}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={`text-2xl font-bold font-serif mb-2 ${step === 1 ? 'text-gray-900' : 'text-green-600'}`}>
                    {step === 1 ? "Connect with a Travel Expert" : "Thank you. Please help with couple of more details."}
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    {step === 1 ? "Enter Your Phone Number to Continue" : ""}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Step 1: Phone */}
                    <div className={`space-y-4 ${step === 1 ? 'block' : 'hidden'}`}>
                      <div className="flex gap-3">
                        <div className="w-24 px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium flex items-center justify-between cursor-pointer">
                          <span>+1</span>
                          <i className="pi pi-chevron-down text-xs" />
                        </div>
                        <input 
                          type="tel" 
                          placeholder="Your Phone*" 
                          value={phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setPhone(val);
                            if (error) setError("");
                          }}
                          required={step === 1}
                          className={`flex-1 px-4 py-3 rounded-xl border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                        />
                      </div>
                      {error && <p className="text-red-500 text-xs text-left pl-1">{error}</p>}
                      
                      <button 
                        type="button"
                        onClick={handleNextStep}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                      >
                        Connect with Expert
                      </button>
                    </div>

                    {/* Step 2: Details */}
                    <AnimatePresence>
                      {step === 2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <input 
                            type="text" 
                            placeholder="Your Name*" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={step === 2}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                          <div className="flex gap-3">
                            <select 
                              value={timezone}
                              onChange={(e) => setTimezone(e.target.value)}
                              className="w-1/3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                            >
                              {["EST", "CST", "MST", "PST", "AKST", "HST"].map(tz => (
                                <option key={tz} value={tz}>{tz}</option>
                              ))}
                            </select>
                            <select 
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              className="w-2/3 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                            >
                              <option value="Morning">Morning (9 AM - 12 PM)</option>
                              <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                              <option value="Evening">Evening (4 PM - 8 PM)</option>
                            </select>
                          </div>
                          
                          <button 
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1"
                          >
                            Request Callback
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </>
              )}
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 p-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] bg-gray-200 w-12" />
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Trusted by Travellers</span>
                <div className="h-[1px] bg-gray-200 w-12" />
              </div>
              
              <div className="flex justify-between items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i className="pi pi-tripadvisor" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.5/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Trip Advisor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className="pi pi-google" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.4/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    <i className="pi pi-star-fill text-xs" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.3/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Reviews.io</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
