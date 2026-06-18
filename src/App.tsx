import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import SmoreBuilder from './components/SmoreBuilder';
import SmoreChronology from './components/SmoreChronology';
import WeekendDrop from './components/WeekendDrop';
import MenuSection from './components/MenuSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MoodQuiz from './components/MoodQuiz';
import SplitText from './components/SplitText';
import { useToast } from './components/Toast';
import { Flame, Play, Sparkles, MessageCircle, Info, ShieldCheck } from 'lucide-react';
// @ts-ignore
import heroSmoreImage from './assets/images/regenerated_image_1781756978616.png';

export default function App() {
  const { addToast } = useToast();
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerHeroWhatsApp = () => {
    addToast("Connecting to Chrunchizz Bandra Dispatcher...", "fire");
    setTimeout(() => {
      window.open("https://wa.me/919999999999?text=Hi%20Chrunchizz!%20🍢%20I'd%20love%20to%20order%20some%20toasted%20gourmet%20s'mores%20right%20now!", "_blank");
    }, 600);
  };

  const handlePlayDemo = () => {
    setIsPlayingDemo(true);
    addToast("🔥 Simulating the ultimate caramelized marshmallow stretch...", "fire");
    setTimeout(() => {
      setIsPlayingDemo(false);
    }, 4500);
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans selection:bg-amber-200">
      
      {/* Dynamic Floating Sticky Header Navbar */}
      <Navbar />

      {/* Hero Section Container */}
      <header className="relative pt-24 pb-16 md:py-32 overflow-hidden bg-gradient-to-b from-amber-50/60 to-stone-50">
        
        {/* Soft warmth radial background lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none select-none z-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Texts Content: spans 6 columns with smooth spring transitions mirroring thecookie-co.com */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 17, delay: 0.1 }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              
              {/* Focus tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1 bg-amber-100/90 text-amber-800 text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full border border-amber-200">
                  🍢 Mumbai's First & Original
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold uppercase px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  100% Vegetarian Puffs
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6.5xl text-stone-950 tracking-tight leading-[1.1] font-semibold flex flex-col items-center lg:items-start select-none">
                <SplitText 
                  text="Mumbai’s First" 
                  delay={0.1}
                  translateY={24}
                  stiffness={130}
                  damping={14}
                />
                <SplitText 
                  text="Gourmet S'mores" 
                  delay={0.25}
                  translateY={24}
                  stiffness={130}
                  damping={14}
                  className="font-serif italic font-normal text-amber-800"
                />
                <SplitText 
                  text="Experience." 
                  delay={0.4}
                  translateY={24}
                  stiffness={130}
                  damping={14}
                />
              </h1>

              <p className="text-stone-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Crispy. Gooey. Completely Customizable. Step inside Chrunchizz and torch up your dessert game with caramelized vegetarian puffs stacked beside rich Belgian chocolate.
              </p>

              {/* Delivery info & Operational indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono font-bold text-stone-600 pt-1">
                <span className="flex items-center gap-1">
                  🚗 Fast Delivery until 1:00 AM
                </span>
                <span className="text-stone-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  📍 Bandra, Carter Road Outlets
                </span>
              </div>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start font-sans text-xs">
                <button
                  onClick={() => handleScrollToSection('menu')}
                  className="px-8 py-4 bg-stone-900 border border-stone-800 text-white rounded-full font-bold uppercase tracking-widest hover:bg-stone-800 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer duration-350"
                >
                  Explore Toasted Menu
                </button>
                <button
                  onClick={triggerHeroWhatsApp}
                  className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-amber-700 shadow-md transition-all flex items-center justify-center gap-2 group border border-amber-500 cursor-pointer duration-350"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform font-bold" />
                  Order via WhatsApp
                </button>
              </div>

            </motion.div>

            {/* Right Visual Image Pull Pull Interaction Container: spans 6 columns with smooth spring transitions mirroring thecookie-co.com */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.3 }}
              className="lg:col-span-6 flex justify-center w-full"
            >
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white border border-stone-200/80 p-4 shadow-xl shadow-amber-900/5 overflow-hidden group">
                
                {/* Simulated live video/image pull layout */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-stone-100 flex items-center justify-center">
                  
                  {isPlayingDemo ? (
                    /* Act-drip animated visual state */
                    <div className="absolute inset-0 z-10 bg-stone-950 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                      <div className="absolute top-3 left-3 text-[9px] font-mono text-amber-500 uppercase font-bold bg-amber-950 px-2 py-0.5 rounded">
                        SIMULATOR ACTIVE
                      </div>
                      
                      <div className="space-y-4">
                        {/* Animated cartoon pull stretch logic */}
                        <div className="flex justify-between items-center w-64 mx-auto gap-1">
                          <span className="text-3xl animate-bounce">🍪</span>
                          <div className="flex-1 h-3 bg-amber-100 rounded-full relative overflow-hidden flex items-center justify-center">
                            <div className="absolute h-full w-2/3 bg-amber-500 animate-pulse rounded-full" />
                            <small className="absolute text-[6px] text-amber-900 font-bold tracking-widest uppercase font-mono">GOOEY STRETCH</small>
                          </div>
                          <span className="text-3xl animate-bounce">🍪</span>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-xs font-mono font-bold text-white uppercase tracking-wider">Witnessing the Ultimate 10cm Fluff Pull</p>
                          <p className="text-[10px] text-stone-400">Pure golden-toasted brown crust with melting Swiss cacao</p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {/* High Quality Hero Food Asset Render */}
                  <img
                    src={heroSmoreImage}
                    alt="Artisanal Melted Gourmet S'mores"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient shadow layer */}
                  <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-transparent to-transparent" />

                  {/* Play visual interactive trigger icon overlay */}
                  <button
                    onClick={handlePlayDemo}
                    className="absolute inset-x-0 bottom-6 mx-auto w-48 py-3 bg-white/95 backdrop-blur-xs rounded-full shadow-lg flex items-center justify-center gap-2 hover:bg-amber-100 border border-stone-200 transition-all cursor-pointer group/btn"
                  >
                    <span className="p-1 rounded-full bg-amber-600 text-white animate-pulse">
                      <Play className="w-3 h-3 fill-white" />
                    </span>
                    <span className="text-xs font-bold font-sans text-stone-950 uppercase tracking-wide group-hover/btn:text-amber-900">
                      Simulate Fluff Pull
                    </span>
                  </button>

                  <div className="absolute top-4 left-4 bg-stone-950/80 text-amber-400 font-mono text-[9px] font-bold px-2 py-1 rounded">
                    WARM_TORCH.HEVC
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* Infinite Marquee text ticker - Inspired by thecookie-co.com's signature premium marketing ticker */}
      <div className="bg-amber-800 text-amber-50 uppercase py-3.5 overflow-hidden border-y border-amber-900/40 relative z-20 text-[10px] font-mono tracking-widest font-black">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex space-x-12 shrink-0 pr-12">
            <span>🍢 TOASTED INSANE S'MORE DESIGN SYSTEM</span>
            <span>•</span>
            <span>🔥 FRESH FLAME-TORCHED TO ORDER</span>
            <span>•</span>
            <span>🌱 100% VEGETARIAN GELATIN-FREE PUFFS</span>
            <span>•</span>
            <span>🍫 DECADENT BELGIAN COCOA BLENDS</span>
            <span>•</span>
            <span>🍪 HANDCRAFTED CRISPY GRAHAM COOKIE CRUSTS</span>
            <span>•</span>
          </div>
          <div className="flex space-x-12 shrink-0 pr-12">
            <span>🍢 TOASTED INSANE S'MORE DESIGN SYSTEM</span>
            <span>•</span>
            <span>🔥 FRESH FLAME-TORCHED TO ORDER</span>
            <span>•</span>
            <span>🌱 100% VEGETARIAN GELATIN-FREE PUFFS</span>
            <span>•</span>
            <span>🍫 DECADENT BELGIAN COCOA BLENDS</span>
            <span>•</span>
            <span>🍪 HANDCRAFTED CRISPY GRAHAM COOKIE CRUSTS</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* Menu Showcase filter Section */}
      <MenuSection />

      {/* S'mores Masterpiece Chronology (The Timeline) */}
      <SmoreChronology />

      {/* S\'mores Modular Build Interactive Studio */}
      <SmoreBuilder onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Behind the Torch & "How to Eat a S'more" Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left descriptive text block layout: spans 6 cols */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 60, damping: 14 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-[10px] font-sans font-black tracking-widest text-amber-800 bg-amber-100/75 px-3 py-1 rounded-full uppercase">
                The Cozy Craftsmanship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 tracking-tight leading-tight font-medium">
                Behind the Torch: <br />
                <span className="italic font-normal">Our S'more Chemistry</span>
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                At Chrunchizz, we treat s'mores as high culinary art. We trace the campfire traditions of acoustic beaches, but bring a modern premium flair to the streets of Bandra. 
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Our base cookies are custom-baked to maintain structural crispiness under high humidity, and our gourmet dark Belgian squares melt at the exact moment the marshmallow cloud reaches 135°C under our high-energy butane burners.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-sans font-extrabold text-amber-800 text-2xl">4.8★</h4>
                  <p className="text-[11px] text-stone-500 font-mono tracking-wide mt-1 uppercase font-bold">Google & Zomato rated</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="font-sans font-extrabold text-amber-800 text-2xl">100%</h4>
                  <p className="text-[11px] text-stone-500 font-mono tracking-wide mt-1 uppercase font-bold">Gelatin-Free & Halal</p>
                </div>
              </div>
            </motion.div>

            {/* Right bullet lists interactive panel: spans 6 cols */}
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.15 }}
              className="lg:col-span-6 bg-stone-100 p-6 sm:p-8 rounded-3xl border border-stone-200"
            >
              <h3 className="font-sans font-extrabold text-xl text-stone-950 mb-6">
                How to Properly Eat a Chrunchizz S'more
              </h3>

              {/* 3 Steps interactive block details */}
              <div className="space-y-4">
                
                <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-stone-900 text-amber-400 font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-sans font-extrabold text-stone-900">Embrace the Mess</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        If there isn't gooey warm chocolate or sticky toasted marshmallow fluff on your fingers, you're doing it wrong. Don't fight it, live the experience!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-stone-900 text-amber-400 font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-sans font-extrabold text-stone-900">The 10cm Stretch Pull</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Take a soft, decisive bite and pull the s'more slowly away from you. Take a snapshot of that pristine, golden caramelized elastic marshmallow bridge!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-stone-900 text-amber-400 font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-sans font-extrabold text-stone-900">Repeat & Savour</h4>
                      <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                        Squeeze, bite, and repeat. Oh, and don't worry about cleanups – we provide professional dense wet wipes inside every takeaway box!
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Large Urgency drop box */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeekendDrop />
        </div>
      </section>

      {/* Trust Accordion FAQs & Instagram grid Section */}
      <FAQSection />

      {/* Embedded footer blocks */}
      <Footer />

      {/* Floating launchable Mood Quiz dialog overlay */}
      <MoodQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

    </div>
  );
}
