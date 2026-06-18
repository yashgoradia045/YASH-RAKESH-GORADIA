import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { BUILDER_STEPS } from '../data';
import { useToast } from './Toast';
import { Flame, ShoppingCart, Sparkles, Check } from 'lucide-react';

interface SmoreBuilderProps {
  onOpenQuiz: () => void;
}

export default function SmoreBuilder({ onOpenQuiz }: SmoreBuilderProps) {
  const { addToast } = useToast();
  
  // States to keep track of selection in each step
  const [selectedBase, setSelectedBase] = useState(BUILDER_STEPS[0].options[0]);
  const [selectedMallow, setSelectedMallow] = useState(BUILDER_STEPS[1].options[0]);
  const [selectedFilling, setSelectedFilling] = useState(BUILDER_STEPS[2].options[0]);

  const baseRate = 149; // standard starting pocket price

  const totalPrice = useMemo(() => {
    return baseRate + selectedBase.priceModifier + selectedMallow.priceModifier + selectedFilling.priceModifier;
  }, [selectedBase, selectedMallow, selectedFilling]);

  const recipeTitle = useMemo(() => {
    const baseWord = selectedBase.id === 'graham' ? 'Graham' : selectedBase.id === 'brownie' ? 'Brownie Fudgify' : 'Choco-Cookie';
    const mallowWord = selectedMallow.id === 'classic-mallow' ? 'Classic' : selectedMallow.id === 'veg-salted' ? 'Salted-Caramel' : 'Berry-Blossom';
    const fillingWord = selectedFilling.id === 'belgian-dark' ? 'Belgian' : selectedFilling.id === 'nutella-heaven' ? 'Nutellated' : selectedFilling.id === 'fresh-strawberries' ? 'Strawberry-Glaze' : 'PB-Crunch';
    return `The ${mallowWord} ${fillingWord} ${baseWord} S'more`;
  }, [selectedBase, selectedMallow, selectedFilling]);

  const handleBaseChange = (option: typeof BUILDER_STEPS[0]['options'][0]) => {
    setSelectedBase(option);
    addToast(`Base updated to: ${option.name} (+₹${option.priceModifier})`, 'success');
  };

  const handleMallowChange = (option: typeof BUILDER_STEPS[1]['options'][0]) => {
    setSelectedMallow(option);
    addToast(`Marshmallow changed: ${option.name} ${option.emoji}`, 'success');
  };

  const handleFillingChange = (option: typeof BUILDER_STEPS[2]['options'][0]) => {
    setSelectedFilling(option);
    addToast(`Added topping filling: ${option.name} 🍮`, 'success');
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi Chrunchizz! 🍢 I just customized my own gourmet s'more on your website!

📜 My Custom Recipe:
- 🔥 Recipe Name: *${recipeTitle}*
- 🍪 Base: ${selectedBase.name} (+₹${selectedBase.priceModifier})
- ☁️ Marshmallow Core: ${selectedMallow.name} (+₹${selectedMallow.priceModifier})
- 🍫 Gourmet Filling: ${selectedFilling.name} (+₹${selectedFilling.priceModifier})

💰 Total Calculated Price: ₹${totalPrice}
🧑🍳 Roast and torch it up for me until gooey!`;

    addToast(`Generating WhatsApp ticket for ${recipeTitle}...🔥`, 'fire');
    setTimeout(() => {
      const url = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }, 1000);
  };

  return (
    <section id="builder" className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-85px" }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest font-sans font-black text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Mumbai's interactive lab
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-stone-950 tracking-tight font-medium">
            Build Your Own <span className="italic font-normal">S'more Masterpiece</span>
          </h2>
          <p className="mt-4 text-stone-700 text-sm leading-relaxed font-sans">
            Stack your signature base, pick a custom-whipped vegetarian organic core, and drizzle premium culinary fillings on top. Watch your creation layer up in real-time, then fire it straight to our flame-burners!
          </p>
        </motion.div>

        {/* 3-Step Selection Grid + Live Visualizer Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selections column: spans 7 cols on large boards */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Base */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">
                  1
                </span>
                <h3 className="font-sans font-bold text-lg text-stone-900">{BUILDER_STEPS[0].title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BUILDER_STEPS[0].options.map((option) => {
                  const isSelected = selectedBase.id === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => handleBaseChange(option)}
                      className={`text-left p-4 rounded-xl border transition-all relative cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/50 border-amber-600 ring-2 ring-amber-600/20'
                          : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 text-amber-600">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                      <span className="text-xl block mb-2">{option.emoji}</span>
                      <p className="font-semibold text-stone-900 text-sm leading-tight">{option.name}</p>
                      <p className="text-stone-600 text-[11px] mt-1 leading-snug">{option.description}</p>
                      <div className="mt-3 text-xs font-bold text-amber-800">
                        {option.priceModifier > 0 ? `+₹${option.priceModifier}` : 'Standard Included'}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Marshmallow */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">
                  2
                </span>
                <h3 className="font-sans font-bold text-lg text-stone-900">{BUILDER_STEPS[1].title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {BUILDER_STEPS[1].options.map((option) => {
                  const isSelected = selectedMallow.id === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => handleMallowChange(option)}
                      className={`text-left p-4 rounded-xl border transition-all relative cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/50 border-amber-600 ring-2 ring-amber-600/20'
                          : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 text-amber-600">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                      <span className="text-xl block mb-2">{option.emoji}</span>
                      <p className="font-semibold text-stone-900 text-sm leading-tight">{option.name}</p>
                      <p className="text-stone-600 text-[11px] mt-1 leading-snug">{option.description}</p>
                      <div className="mt-3 text-xs font-bold text-amber-800">
                        {option.priceModifier > 0 ? `+₹${option.priceModifier}` : 'Standard Included'}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Filling */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold font-mono text-sm shadow-sm">
                  3
                </span>
                <h3 className="font-sans font-bold text-lg text-stone-900">{BUILDER_STEPS[2].title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BUILDER_STEPS[2].options.map((option) => {
                  const isSelected = selectedFilling.id === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => handleFillingChange(option)}
                      className={`text-left p-4 rounded-xl border transition-all relative cursor-pointer ${
                        isSelected
                          ? 'bg-amber-50/50 border-amber-600 ring-2 ring-amber-600/20'
                          : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200'
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2 right-2 text-amber-600">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{option.emoji}</span>
                        <div>
                          <p className="font-semibold text-stone-900 text-sm leading-tight">{option.name}</p>
                          <p className="text-stone-600 text-[11px] mt-0.5 leading-snug">{option.description}</p>
                        </div>
                      </div>
                      <div className="mt-3 text-xs font-bold text-amber-800">
                        {option.priceModifier > 0 ? `+₹${option.priceModifier}` : 'Standard Included'}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* In-context Mood Quiz Callout Box */}
            <div className="bg-amber-50/60 border border-amber-200/80 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <Sparkles className="w-5 h-5 text-amber-700 flex-shrink-0 animate-bounce" />
                <div>
                  <p className="font-sans font-bold text-stone-950 text-sm">Not sure what flavor vibe fits you?</p>
                  <p className="text-xs text-stone-700">Take our 3-Question S'mores Mood Quiz to unlock your ideal menu profile!</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-600 hover:bg-amber-700 text-white cursor-pointer transition shadow-sm"
              >
                Take Quiz
              </motion.button>
            </div>

          </div>

          {/* S'mores Visualizer: spans 5 cols */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-xl flex flex-col items-center">
              
              <div className="w-full flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                <div className="flex items-center gap-1 text-xs text-stone-500 uppercase font-mono tracking-wider font-semibold">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  Live Lab Emulator
                </div>
                <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  🟢 100% Veg Puffs
                </span>
              </div>

              {/* Stack Emulator Stage */}
              <div className="w-full aspect-square bg-stone-50 rounded-2xl border border-stone-100 relative overflow-hidden flex flex-col items-center justify-center p-6 mb-6">
                
                {/* Floating ambient cozy sparkles */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.04),transparent)]" />

                {/* S'mores layers stack visualizer */}
                <div className="w-full max-w-[210px] flex flex-col items-center select-none">
                  
                  {/* COOKIE TOP COVER */}
                  <div className={`w-11/12 h-6 rounded-2xl shadow-md transition-all duration-300 relative z-10 flex items-center justify-center border-b-2 border-stone-300/40 ${
                    selectedBase.id === 'graham' 
                      ? 'bg-amber-200' 
                      : selectedBase.id === 'brownie' 
                        ? 'bg-amber-950' 
                        : 'bg-amber-300'
                  }`}>
                    {selectedBase.id === 'choco-cookie' && (
                      <div className="flex gap-2 text-[6px]">🍪🍪🍪</div>
                    )}
                    {selectedBase.id === 'graham' && (
                      <div className="w-2/3 border-t border-dashed border-amber-600/30 text-[5px] text-amber-800 text-center uppercase tracking-widest font-mono select-none">CHRUNCHIZZ</div>
                    )}
                    {selectedBase.id === 'brownie' && (
                      <div className="text-[5px] text-white/50 tracking-widest uppercase font-mono">FUDGE</div>
                    )}
                  </div>

                  {/* HIGH GOOEY TOPPING / FILLING */}
                  <div className={`w-10/12 h-4 my-1 rounded-xl transition-all duration-300 relative z-20 shadow-sm flex items-center justify-center border ${
                    selectedFilling.id === 'belgian-dark'
                      ? 'bg-stone-900 border-stone-950'
                      : selectedFilling.id === 'nutella-heaven'
                        ? 'bg-amber-900 border-amber-950'
                        : selectedFilling.id === 'fresh-strawberries'
                          ? 'bg-rose-500 border-rose-600'
                          : 'bg-amber-400 border-amber-500'
                  }`}>
                    <small className="text-[7px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-0.5">
                      {selectedFilling.name.split(' ')[0]} Filling
                    </small>
                  </div>

                  {/* THE FLUFFY CARAMELIZED MARSHMALLOW MIDDLE */}
                  <div className={`w-full h-14 rounded-3xl transition-all duration-300 relative z-10 py-1 flex flex-col justify-center items-center shadow-lg border-2 ${
                    selectedMallow.id === 'classic-mallow'
                      ? 'bg-stone-50 border-stone-300'
                      : selectedMallow.id === 'veg-salted'
                        ? 'bg-amber-50 border-amber-400'
                        : 'bg-rose-100 border-rose-300'
                  }`}>
                    
                    {/* Golden toasted edges indicators */}
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.3)_0%,transparent_60%)] animate-pulse" />
                    
                    {/* Simulated Gooey Drip Lines */}
                    <div className={`absolute -bottom-4 right-8 w-4 h-6 rounded-b-full shadow-sm z-30 transition-all ${
                      selectedMallow.id === 'classic-mallow'
                        ? 'bg-stone-100'
                        : selectedMallow.id === 'veg-salted'
                          ? 'bg-amber-50'
                          : 'bg-rose-100'
                    }`} />
                    <div className={`absolute -bottom-3 left-8 w-3 h-4 rounded-b-full shadow-sm z-30 transition-all ${
                      selectedMallow.id === 'classic-mallow'
                        ? 'bg-stone-100'
                        : selectedMallow.id === 'veg-salted'
                          ? 'bg-amber-50'
                          : 'bg-rose-100'
                    }`} />
                    
                    <span className="text-xl relative z-10 animate-bounce">{selectedMallow.emoji}</span>
                    <span className="text-[8px] font-mono font-extrabold uppercase mt-1 tracking-wider text-stone-600 relative z-10">
                      TORCHED MARSHMALLOW
                    </span>
                  </div>

                  {/* BOTTOM COOKIE COVER */}
                  <div className={`w-11/12 h-6 rounded-2xl shadow-md transition-all duration-300 relative z-0 flex items-center justify-center border-t border-stone-300/40 mt-1.5 ${
                    selectedBase.id === 'graham' 
                      ? 'bg-amber-200' 
                      : selectedBase.id === 'brownie' 
                        ? 'bg-amber-950' 
                        : 'bg-amber-300'
                  }`}>
                    {selectedBase.id === 'choco-cookie' && (
                      <div className="flex gap-2 text-[6px]">🍪🍪🍪</div>
                    )}
                    {selectedBase.id === 'graham' && (
                      <div className="w-2/3 border-b border-dashed border-amber-600/30 text-[5px] text-amber-800 text-center uppercase tracking-widest font-mono">CHRUNCHIZZ</div>
                    )}
                    {selectedBase.id === 'brownie' && (
                      <div className="text-[5px] text-white/50 tracking-widest uppercase font-mono">FUDGE</div>
                    )}
                  </div>

                </div>

                {/* Micro active details */}
                <div className="absolute bottom-3 left-3 text-[9px] font-mono text-stone-500">
                  TEMP: ~135°C (Torched)
                </div>
                <div className="absolute bottom-3 right-3 text-[9px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  STABLE STACK
                </div>
              </div>

              {/* Output specifications */}
              <div className="w-full text-center space-y-3 font-sans">
                <span className="text-[10px] uppercase font-sans font-black text-stone-500 tracking-widest">
                  Guaranteed Recipe Ticket
                </span>
                <h4 className="font-serif font-semibold text-stone-950 text-xl leading-snug">
                  {recipeTitle}
                </h4>
                
                {/* Total pricing and ordering summary */}
                <div className="py-4 border-y border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Calculated Price:</span>
                  <span className="text-2xl font-serif font-bold text-amber-800 italic">₹{totalPrice}</span>
                </div>

                <p className="text-[10px] text-stone-500 mt-2 leading-relaxed">
                  Prices inclusive of artisanal whipping, single-batch burner fuel torches, and gourmet wet wipes in your custom box.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppOrder}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full shadow-sm text-xs font-bold uppercase tracking-widest text-white bg-amber-600 hover:bg-amber-700 transition-all cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Order Build via WhatsApp
                </motion.button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
