import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Instagram, Sparkles, MessageCircle } from 'lucide-react';
import { useToast } from './Toast';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const { addToast } = useToast();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Are your marshmallows 100% Vegetarian?",
      answer: "Absolutely! Traditional marshmallows contain beef or pork gelatin, but Chrunchizz uses a proprietary seaweed-extracted herbal recipe. We offer 100% vegetarian, gelatin-free cloud puffs so everyone in Mumbai can enjoy the authentic caramelized campfire vibe."
    },
    {
      question: "Do you offer late-night home delivery in Mumbai?",
      answer: "Yes, we do! We trigger cravings active until deep night. We are open and actively delivering warm s'mores and shakes via Zomato, Swiggy, and our direct WhatsApp dispatchers until 1:00 AM daily."
    },
    {
      question: "How do I reheat a S'more if it cools down?",
      answer: "S'mores are best eaten hot, but if you have a delivery delay, simply pop your Chrunchizz s'more onto a piece of parchment paper in an oven/micro for 15-20 seconds at high power. The marshmallow will swell and turn wonderfully gooey again!"
    },
    {
      question: "Do you host interactive tables & sweet-tooth catering events?",
      answer: "Yes! We set up custom live 'torch stations' for birthdays, baby showers, and youth corporate tables across Mumbai. Contact us via our WhatsApp hotline to coordinate live table installations."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
    addToast(openIdx === idx ? "Minimized question detail" : "Revealed answers details", "info");
  };

  const instagramSnaps = [
    { title: "Hot torching session", url: "https://images.unsplash.com/photo-1541014741259-df5290db5785?auto=format&fit=crop&w=500&q=80" },
    { title: "Gooey fluff pull stretch", url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
    { title: "Toasted whipped drinks shake", url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80" },
    { title: "Cracker stacking base", url: "https://images.unsplash.com/photo-1558961303-1d2019a50f4e?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <section id="faqs" className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Leftside accordion layout: spans 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-sans font-black text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
                Eliminating Barriers
              </span>
              <h2 className="mt-4 font-serif text-3xl text-stone-950 tracking-tight font-medium">
                Frequently <span className="italic font-normal">Toasted Questions</span>
              </h2>
              <p className="mt-2 text-stone-600 text-sm font-sans leading-relaxed">
                Everything you need to know about our vegetarian marshy cores, midnight dessert delivery schedules, and Bandra West kitchen policies.
              </p>
            </div>

            {/* Rendered Accordion items */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden transition"
                  >
                    <button
                      onClick={() => handleToggle(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-serif font-semibold text-stone-900 text-sm sm:text-base pr-4 flex items-center gap-2">
                        <HelpCircle className="w-4.5 h-4.5 text-amber-700 flex-shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    
                    {/* Animated height overflow */}
                    <div
                      className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                        isOpen ? 'max-h-56 pb-5 border-t border-stone-100 pt-3' : 'max-h-0'
                      }`}
                    >
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rightside social grid: spans 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-amber-950 text-amber-100 p-6 rounded-3xl border border-stone-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600 rounded-full blur-2xl opacity-20 pointer-events-none" />
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-amber-400" />
                <div>
                  <h3 className="font-serif font-semibold text-white text-lg">Tagged on Instagram</h3>
                  <p className="text-xs text-amber-200">#ChrunchizzMoments</p>
                </div>
              </div>

              {/* 4 elements photogrid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {instagramSnaps.map((snap, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative aspect-square rounded-xl overflow-hidden border border-amber-800 group"
                  >
                    <img
                      src={snap.url}
                      alt={snap.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                        VIEW CLIP
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center bg-amber-900/50 p-3 rounded-xl border border-amber-800">
                <span className="text-[11px] text-amber-200 font-mono">Join our 4,500+ Mumbai dessert fans!</span>
                <span className="text-xs font-bold text-white bg-amber-600 px-3 py-1 rounded-full flex items-center gap-1">
                  @Chrunchizz
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
