import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHRONOLOGY_ACTS } from '../data';
import { useToast } from './Toast';
import { Camera, Eye, Map, Send, ChevronRight } from 'lucide-react';

export default function SmoreChronology() {
  const { addToast } = useToast();
  const [activeAct, setActiveAct] = useState(0);

  const handleActClick = (idx: number) => {
    setActiveAct(idx);
    addToast(`Viewing S'mores Chronology: Act ${idx + 1} - ${CHRONOLOGY_ACTS[idx].title}`, 'info');
  };

  const handleWhatsAppReservation = (actTitle: string) => {
    const text = `Hi Chrunchizz! 🍢 I was exploring the 5 S'mores Chronology on your website, and I am obsessed with "Act ${activeAct + 1}: ${actTitle}".

I want to book an interactive live-torched seating at your Bandra outlet. Please let me know available slots! Thank you.`;
    
    addToast(`Registering booking request for Act ${activeAct + 1}...`, 'success');
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
    }, 700);
  };

  const currentAct = CHRONOLOGY_ACTS[activeAct];

  return (
    <section id="chronology" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest font-sans font-black text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Behind the Torch Storyboard
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-stone-950 tracking-tight font-medium">
            S'mores Masterpiece <span className="italic font-normal">Chronology</span>
          </h2>
          <p className="mt-4 text-stone-700 text-sm leading-relaxed font-sans">
            Witness the meticulous 5-Act journey of crafting Mumbai's premier caramelized campfire s'more, captured precisely through a professional DSLR culinary lens.
          </p>
        </div>

        {/* 5-Step Progress tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CHRONOLOGY_ACTS.map((act, idx) => (
            <button
              key={act.act}
              onClick={() => handleActClick(idx)}
              className={`px-4 py-3 rounded-full font-sans text-[10px] font-semibold uppercase tracking-widest border transition-all flex items-center gap-2 cursor-pointer ${
                activeAct === idx
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-mono ${
                activeAct === idx ? 'bg-amber-800 text-white' : 'bg-stone-100 text-stone-700'
              }`}>
                {act.act}
              </span>
              {act.title}
            </button>
          ))}
        </div>

        {/* Dynamic Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Image & Viewfinder Overlay Container: spans 7 cols */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAct}
                initial={{ opacity: 0, scale: 0.98, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-stone-900 rounded-3xl p-4 flex items-center justify-center overflow-hidden group border border-stone-800 shadow-xl"
              >
                
                {/* Camera Viewfinder Frame overlays */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-2xl flex flex-col justify-between p-4 z-20">
                  
                  {/* Top viewfinder diagnostics */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/70 tracking-widest">
                    <span className="flex items-center gap-1">
                      <Camera className="w-3 h-3 text-red-500 animate-pulse fill-red-500" />
                      REC [SLOMO]
                    </span>
                    <span>FOKUS: {currentAct.cameraSettings.focusPoint}</span>
                    <span>CHRUNCHIZZ_CAM</span>
                  </div>

                  {/* Viewfinder crosshairs */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                    <div className="w-8 h-px bg-white" />
                    <div className="h-8 w-px bg-white" />
                    <div className="absolute w-16 h-16 border border-white rounded-full border-dashed" />
                  </div>

                  {/* Bottom camera diagnostics */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/70 tracking-wider bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded">
                    <span className="text-amber-400">TV: {currentAct.cameraSettings.shutter}</span>
                    <span className="text-emerald-400">AV: {currentAct.cameraSettings.aperture}</span>
                    <span className="text-blue-400">ISO: {currentAct.cameraSettings.iso}</span>
                    <span>EV: +0.3</span>
                  </div>
                </div>

                {/* Background image render */}
                <img
                  src={currentAct.image}
                  alt={currentAct.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Darkness shade gradient cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 z-10" />

                {/* Left corner caption */}
                <div className="absolute bottom-6 left-6 z-20 text-white right-6">
                  <span className="text-[10px] tracking-widest font-mono text-amber-400 uppercase font-bold bg-amber-950/80 px-2 py-1 rounded">
                    ACT {currentAct.act} STORYBOARD
                  </span>
                  <h3 className="mt-2 text-xl font-extrabold tracking-tight font-sans text-white leading-tight">
                    {currentAct.subtitle}
                  </h3>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description & Styling Information: spans 5 cols */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-stone-200 shadow-lg p-6 flex flex-col justify-between"
              >
                
                <div className="space-y-6 font-sans">
                  <div>
                    <span className="text-[9px] font-sans font-black tracking-widest text-amber-800 bg-amber-100/85 rounded-full px-3 py-1 uppercase">
                      CHEF DIRECTIVE
                    </span>
                    <h4 className="mt-4 font-serif font-semibold text-2xl text-stone-950 leading-tight">
                      {currentAct.title}
                    </h4>
                    <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {currentAct.description}
                    </p>
                  </div>

                  {/* Styled food stylist secret box */}
                  <div className="p-4 bg-stone-50 rounded-2xl border-l-[3px] border-amber-600 text-xs leading-relaxed">
                    <p className="font-sans font-black tracking-widest text-amber-800 uppercase flex items-center gap-1.5 mb-1.5 text-[9px]">
                      <Eye className="w-3.5 h-3.5 text-amber-700" />
                      Stylist Secret Blueprint
                    </p>
                    <p className="text-stone-700 font-medium">
                      "{currentAct.stylistSecret}"
                    </p>
                  </div>
                </div>

                {/* Call to Order/Reservation */}
                <div className="pt-6 border-t border-stone-100 mt-6 md:mt-8 font-sans">
                  <button
                    onClick={() => handleWhatsAppReservation(currentAct.title)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full shadow-sm bg-stone-900 hover:bg-stone-800 text-white transition text-[10px] font-bold uppercase tracking-widest cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    Book S'more Experience Outing
                  </button>
                  <div className="text-center mt-3 text-[10px] font-mono text-stone-500">
                    Live torching table seatings available daily daily at Bandra (Carter Road).
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
