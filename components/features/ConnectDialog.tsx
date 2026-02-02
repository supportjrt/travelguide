"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSendEmail } from "@/hooks/useSendEmail";
import { useCreateLead, useUpdateLead } from "@/hooks/useLead";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearchParams } from "next/navigation";

interface ConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}

interface Inputs {
  phone: string;
  name: string;
  email: string;
  time: string;
  timezone: string;
}

export default function ConnectDialog({ isOpen, onClose, packageName }: ConnectDialogProps) {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [leadId, setLeadId] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  
  const { mutateAsync: sendLeadData, isPending: isSendingEmail } = useSendEmail();
  const { mutateAsync: createLead, isPending: isCreatingLead } = useCreateLead();
  const { mutateAsync: updateLead, isPending: isUpdatingLead } = useUpdateLead();
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset, trigger } = useForm<Inputs>({
    defaultValues: {
      phone: "",
      name: "",
      email: "",
      time: "Morning",
      timezone: "EST"
    }
  });

  const phoneValue = watch("phone");

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
    if (error) setError("");
  };

  const handleNextStep = async () => {
    const valid = await trigger("phone"); // Trigger validation for phone
    const rawPhone = phoneValue.replace(/\D/g, "");
    
    if (valid && /^\d{10}$/.test(rawPhone)) {
      setError("");
      
      try {
        // Step 1: Create Lead in DB with UTMs
        const result = await createLead({ 
          phone: phoneValue, 
          packageName,
          utm_source: searchParams.get("utm_source") || undefined,
          utm_medium: searchParams.get("utm_medium") || undefined,
          utm_campaign: searchParams.get("utm_campaign") || undefined,
          utm_term: searchParams.get("utm_term") || undefined,
          utm_content: searchParams.get("utm_content") || undefined,
        });
        
        if (result?.id) {
          setLeadId(result.id);
        }

        // Send checking email (optional/legacy behavior)
        await sendLeadData({ phone: phoneValue, email: "", step: '1', packageName });
        
        setStep(2);
      } catch (err) {
        console.error("Failed to process step 1", err);
        // We might want to block progress if DB fails, but for now let's proceed to allow email at least?
        // Or if email fails but DB works? 
        // Let's assume critical failure logs error but attempts to move forward if UI flow permits,
        // though `createLead` failure means we have no ID for step 2.
        // If createLead fails, we won't have an ID.
        setStep(2); 
      }
    } else {
      setError("Please enter a valid 10-digit phone number");
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Step 2: Update Lead in DB if we have an ID
      if (leadId) {
        await updateLead({ 
          id: leadId, 
          name: data.name, 
          email: data.email, 
          time: data.time, 
          timezone: data.timezone 
        });
      }

      // Send detailed email
      await sendLeadData({ ...data, step: '2', packageName });
      
      console.log("Connect requested for:", data);
      setStep(3);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      reset();
      setLeadId(null);
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
                  <h2 className="text-2xl font-bold  text-gray-900 mb-2">Thank you!</h2>
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
                  <h2 className={`text-2xl font-bold  mb-2 ${step === 1 ? 'text-gray-900' : 'text-green-600'}`}>
                    {step === 1 ? "Connect with a Travel Expert" : "Thank you. Please help with couple of more details."}
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    {step === 1 ? "Enter Your Phone Number to Continue" : ""}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                    {/* Step 1: Phone */}
                    <div className={`space-y-4 ${step === 1 ? 'block' : 'hidden'}`}>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                        <div className="flex gap-3">
                          <div className="w-24 px-3 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-medium flex items-center justify-between cursor-pointer">
                            <span>+1</span>
                            <i className="pi pi-chevron-down text-xs" />
                          </div>
                          <input 
                            type="tel" 
                            placeholder="(555) 555-5555" 
                            {...register("phone", { required: true })}
                            onChange={handlePhoneChange}
                            className={`flex-1 px-4 py-3 rounded-xl border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:ring-orange-500'} focus:outline-none focus:ring-2 focus:border-transparent`}
                          />
                        </div>
                      </div>
                      {error && <p className="text-red-500 text-xs pl-1">{error}</p>}
                      
                      <button 
                        type="button"
                        onClick={handleNextStep}
                        disabled={isCreatingLead || isSendingEmail}
                        className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 ${(isCreatingLead || isSendingEmail) ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {(isCreatingLead || isSendingEmail) ? "Connecting..." : "Connect with Expert"}
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
                          <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                            <input 
                              type="text" 
                              placeholder="Your Name*" 
                              {...register("name", { required: true })}
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>

                          <div className="space-y-1">
                             <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                             <input 
                               type="email"
                               placeholder="Your Email*"
                               {...register("email", { required: true })}
                               className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                             />
                          </div>
                          
                          <div className="flex gap-3">
                             <div className="w-1/3 space-y-1">
                                <label className="text-sm font-medium text-gray-700 ml-1">Timezone</label>
                                <select 
                                  {...register("timezone")}
                                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                                >
                                  {["EST", "CST", "MST", "PST", "AKST", "HST"].map(tz => (
                                    <option key={tz} value={tz}>{tz}</option>
                                  ))}
                                </select>
                             </div>
                             <div className="w-2/3 space-y-1">
                                <label className="text-sm font-medium text-gray-700 ml-1">Preferred Time</label>
                                <select 
                                  {...register("time")}
                                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                                >
                                  <option value="Morning">Morning (9 AM - 12 PM)</option>
                                  <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
                                  <option value="Evening">Evening (4 PM - 8 PM)</option>
                                </select>
                             </div>
                          </div>
                          
                            <button 
                              type="submit"
                              disabled={isUpdatingLead || isSendingEmail}
                              className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 ${(isUpdatingLead || isSendingEmail) ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                              {(isUpdatingLead || isSendingEmail) ? "Sending..." : "Request Callback"}
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
              
              <div className="flex justify-center items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <i className="pi pi-google" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-gray-900">4.4/5</p>
                    <p className="text-[10px] text-gray-500 uppercase">Google</p>
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
