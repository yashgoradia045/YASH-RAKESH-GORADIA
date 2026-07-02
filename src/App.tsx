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
import { MessageCircle } from 'lucide-react';

export default function App() {
  const { addToast } = useToast();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans selection:bg-amber-200">
      
      {/* Dynamic Floating Sticky Header Navbar */}
      <Navbar />

      {/* Hero Section Container */}
      <header className="relative pt-32 pb-24 md:py-44 overflow-hidden bg-stone-950 flex items-center justify-center min-h-[85vh]">
        
        {/* Cinematic Background Video Loop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
          <iframe
            src="https://www.youtube.com/embed/wzmLClHVFwk?autoplay=1&mute=1&playlist=wzmLClHVFwk&loop=1&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] aspect-video object-cover min-w-full min-h-full opacity-90 scale-105"
            allow="autoplay; encrypted-media"
            title="Mumbai's First Gourmet S'mores Background Video"
          />
          {/* Rich Dark Glass Overlay to ensure stunning readability */}
          <div className="absolute inset-0 bg-stone-950/45 backdrop-blur-[1.5px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 17, delay: 0.1 }}
            className="space-y-8 text-center flex flex-col items-center"
          >
            
            {/* Focus tags */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 text-[11px] font-mono font-bold uppercase px-3.5 py-1.5 rounded-full border border-amber-500/30">
                🍢 Mumbai's First & Original
              </span>
              <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold uppercase px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                100% Vegetarian Puffs
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.15] font-semibold flex flex-col items-center select-none">
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
                className="font-serif italic font-normal text-amber-400"
              />
              <SplitText 
                text="Experience." 
                delay={0.4}
                translateY={24}
                stiffness={130}
                damping={14}
              />
            </h1>

            <p className="text-stone-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Crispy. Gooey. Completely Customizable. Step inside Chrunchizz and torch up your dessert game with caramelized vegetarian puffs stacked beside rich Belgian chocolate.
            </p>

            {/* Delivery info & Operational indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-stone-300 pt-1">
              <span className="flex items-center gap-1 bg-stone-900/50 px-3.5 py-2 rounded-md border border-stone-800">
                🚗 Fast Delivery until 1:00 AM
              </span>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 bg-stone-900/50 px-3.5 py-2 rounded-md border border-stone-800">
                📍 Bandra, Carter Road Outlets
              </span>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2 justify-center font-sans text-xs w-full max-w-md">
              <button
                onClick={() => handleScrollToSection('menu')}
                className="flex-1 px-8 py-4 bg-white hover:bg-stone-100 text-stone-950 border border-white rounded-full font-bold uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer duration-350"
              >
                Explore Toasted Menu
              </button>
              <button
                onClick={triggerHeroWhatsApp}
                className="flex-1 px-8 py-4 bg-amber-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-amber-700 shadow-md transition-all flex items-center justify-center gap-2 group border border-amber-500 cursor-pointer duration-350"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform font-bold" />
                Order via WhatsApp
              </button>
            </div>

          </motion.div>

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
