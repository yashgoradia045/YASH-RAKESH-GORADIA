import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useToast } from './Toast';
import { Sparkles, Bell, Clock, Compass } from 'lucide-react';

export default function WeekendDrop() {
  const { addToast } = useToast();
  
  // Create a countdown that cycles towards midnight repeatedly
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 34, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset loops for mock countdown persistence
          return { hours: 4, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    addToast("🔔 You are on the VIP waitlist! We will WhatsApp you 30m prior to Alphonso Drop", "success");
  };

  const formattedHours = timeLeft.hours.toString().padStart(2, '0');
  const formattedMinutes = timeLeft.minutes.toString().padStart(2, '0');
  const formattedSeconds = timeLeft.seconds.toString().padStart(2, '0');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="bg-amber-600 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl shadow-amber-600/10 border border-amber-500"
    >
      
      {/* Absolute decorative gradient glow circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-30 select-none pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl opacity-10 select-none pointer-events-none -ml-16 -mb-16" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left side details: spans 7 cols */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1 bg-amber-700/85 px-3 py-1 rounded-full text-[9px] font-sans font-black tracking-widest text-amber-100 uppercase">
            <Sparkles className="w-3 h-3 animate-pulse" />
            WEEKEND SPECIAL DROP
          </div>
          <h3 className="font-serif font-semibold text-white text-2xl sm:text-3xl tracking-tight leading-snug">
            Alphonso Mango & <span className="italic font-normal">White Chocolate S'more</span>
          </h3>
          <p className="text-amber-50 text-xs sm:text-sm max-w-xl leading-relaxed">
            Freshly pureed Ratnagiri Alphonso mango spread over toasted white-chocolate caramelized fluffy marshmallows, crowned with crumbly graham shavings. Hand-torched specifically for late-night cravings.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-amber-700 text-amber-200 rounded-md">
              🥭 Seasonal Premium Ingredients
            </span>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-1 bg-amber-700 text-amber-200 rounded-md">
              🟢 100% Vegetarian Gelatin-Free
            </span>
          </div>
        </div>

        {/* Right side urgency counters: spans 5 cols */}
        <div className="lg:col-span-5 bg-amber-800 p-6 rounded-2xl border border-amber-700 space-y-6">
          
          {/* Ticking Countdown header */}
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <Clock className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-amber-200 uppercase font-bold">
              COUNTDOWN TO NEXT DROP
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            
            {/* Hours */}
            <div className="bg-amber-900/60 p-3 rounded-lg border border-amber-700">
              <span className="block font-mono text-3xl font-extrabold text-white">{formattedHours}</span>
              <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-amber-200">HOURS</span>
            </div>
            
            {/* Minutes */}
            <div className="bg-amber-900/60 p-3 rounded-lg border border-amber-700">
              <span className="block font-mono text-3xl font-extrabold text-white">{formattedMinutes}</span>
              <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-amber-200">MINUTES</span>
            </div>
            
            {/* Seconds */}
            <div className="bg-amber-900/60 p-3 rounded-lg border border-amber-700">
              <span className="block font-mono text-3xl font-extrabold text-amber-300">{formattedSeconds}</span>
              <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-amber-200">SECONDS</span>
            </div>

          </div>

          {/* Form interaction signup */}
          <form onSubmit={handleJoinWaitlist} className="space-y-3">
            <p className="text-xs text-amber-100 text-center lg:text-left leading-normal">
              Only 75 batches drop on Saturday. Secure VIP early-door WhatsApp notice:
            </p>
            <div className="flex gap-2">
              <input
                required
                type="tel"
                placeholder="Enter WhatsApp Number"
                className="w-full px-4 py-2 text-xs rounded-full bg-amber-950 border border-amber-700 text-white placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-white text-amber-900 font-bold px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest hover:bg-amber-100 cursor-pointer transition whitespace-nowrap gap-1.5"
              >
                <Bell className="w-3.5 h-3.5 text-amber-750" />
                Alert Me
              </motion.button>
            </div>
          </form>

        </div>

      </div>
    </motion.div>
  );
}
