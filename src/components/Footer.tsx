import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, Send, Flame } from 'lucide-react';
import { useToast } from './Toast';

export default function Footer() {
  const { addToast } = useToast();

  const handleOpenMap = (e: React.MouseEvent) => {
    e.preventDefault();
    addToast("Opening Google Maps directions for Carter Road, Bandra West... 📍", "success");
    setTimeout(() => {
      window.open("https://maps.google.com/?q=Carter+Road+Promenade+Bandra+West+Mumbai", "_blank");
    }, 700);
  };

  const handleStickyOrder = () => {
    addToast("Activating mobile rapid order dispatch...", "fire");
    setTimeout(() => {
      window.open("https://wa.me/919999999999?text=Hi%20Chrunchizz!%20I%20want%20to%20order%20gourmet%20s'mores%20from%20cozy%20mobile%20portal!", "_blank");
    }, 600);
  };

  return (
    <footer className="bg-stone-900 text-stone-100 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      
      {/* Background soft lighting glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 pb-12 border-b border-stone-800">
          
          {/* Logo brand block: spans 4 cols */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-1.5">
              <Flame className="w-5.5 h-5.5 text-amber-500 fill-amber-500" />
              <span className="font-sans font-black tracking-tighter text-2xl text-amber-500">
                CHRUNCHIZZ
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mumbai’s First Gourmet S'mores Café. Redefining campfire nostalgia with 100% vegetarian gelatin-free recipe clouds, hand-torched butane craft, and decadent chocolate chips.
            </p>
            
            {/* Live operational pulsing dot indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-800 border border-stone-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-stone-300">
                Open Until 1:00 AM (Daily)
              </span>
            </div>
          </div>

          {/* Quick links specs: spans 4 cols */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-widest text-amber-400 font-extrabold">
              Main Outlets & Hotlines
            </h4>
            <ul className="space-y-3 font-semibold text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">Bandra Carter Outlets</p>
                  <p className="text-xs text-stone-400 leading-normal font-medium mt-1">Shop 4, Sagar Chhaya building, Opp Carter Road Promenade, Bandra West, Mumbai - 400050</p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="font-mono text-xs">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono">order@chrunchizz.com</span>
              </li>
            </ul>
          </div>

          {/* Embedded Map Block Placeholder: spans 4 cols */}
          <div className="md:col-span-4 space-y-4 bg-stone-800 p-5 rounded-2xl border border-stone-700">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                Radar Carter Road Outlets
              </h4>
            </div>
            
            {/* Visual radar locator drawing container */}
            <div className="h-28 w-full rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.1),transparent)]" />
              <div className="w-16 h-16 rounded-full border border-amber-600/20 flex items-center justify-center animate-pulse" />
              <div className="absolute text-center space-y-1">
                <p className="text-[10px] uppercase font-mono text-stone-500">Carter West coordinates</p>
                <p className="text-xs font-extrabold text-amber-400">19.0655° N, 72.8229° E</p>
              </div>
            </div>

            <button
              onClick={handleOpenMap}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 bg-amber-600 hover:bg-amber-700 text-stone-100 rounded-full text-[10px] font-bold uppercase tracking-widest cursor-pointer transition shadow-sm"
            >
              <Send className="w-3 h-3 text-white" />
              Get Maps Directions
            </button>
          </div>

        </div>

        {/* Small copyrights */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500 text-center">
          <p>© 2026 Chrunchizz Web Experience. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Crafted for Gen-Z Late Night Foodies in Bandra with 🧡
          </p>
        </div>

      </div>

      {/* STICKY BOTTOM MOBILE ACTION BAR (📍 Find Our Café | 🛵 Order Now) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 bg-stone-50/95 backdrop-blur-md border border-stone-200 shadow-xl rounded-full p-2 flex items-center justify-between gap-2 max-w-sm mx-auto">
        <button
          onClick={handleOpenMap}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-700 bg-stone-100 hover:bg-stone-250 cursor-pointer transition"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          Find Café
        </button>
        <button
          onClick={handleStickyOrder}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-amber-600 hover:bg-amber-700 active:scale-95 cursor-pointer transition shadow-sm"
        >
          Order Now
        </button>
      </div>

    </footer>
  );
}
