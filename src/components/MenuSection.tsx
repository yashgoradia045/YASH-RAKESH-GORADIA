import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { useToast } from './Toast';
import { ShoppingBag, Star, Flame } from 'lucide-react';

type FilterCategory = 'all' | 'classics' | 'signatures' | 'shakes';

export default function MenuSection() {
  const { addToast } = useToast();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories: { label: string; value: FilterCategory }[] = [
    { label: 'All S\'mores & Drinks', value: 'all' },
    { label: 'Cozy Classics', value: 'classics' },
    { label: 'Artisanal Signatures', value: 'signatures' },
    { label: 'Toasted Shakes', value: 'shakes' },
  ];

  const handleFilterClick = (cat: FilterCategory, label: string) => {
    setActiveCategory(cat);
    addToast(`Filtering Menu: Showing ${label}! 🍢`, 'info');
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleWhatsAppOrder = (title: string, price: number) => {
    const text = `Hi Chrunchizz! 🍢 I am browsing your web menu and I want to order your gourmet:

🔥 *${title}*
Price: ₹${price}

Please confirm order status and average delivery time in Bandra! Thank you.`;
    
    addToast(`Added ${title} to your order draft. Opening WhatsApp!`, 'success');
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  };

  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[10px] uppercase tracking-widest font-sans font-black text-amber-800 bg-amber-100/70 px-3 py-1 rounded-full">
            Our Flame-Toasted Menu
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-stone-950 tracking-tight font-medium">
            Indulge in <span className="italic font-normal">Gourmet Meltiness</span>
          </h2>
          <p className="mt-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            Every master specimen is assembled in-house with custom-baked graham recipes, premium imported chocolates, and 100% vegetarian gelatin-free marshmallow clouds toasted dynamically to order.
          </p>
        </motion.div>

        {/* Tabbed category switches */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilterClick(cat.value, cat.label)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all cursor-pointer border ${
                activeCategory === cat.value
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-stone-600 hover:text-stone-900 border-stone-250 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Dynamic menu grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8, shadow: "0 10px 30px -10px rgba(0,0,0,0.08)" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm transition-all group flex flex-col justify-between"
            >
              {/* Product Card Image Banner */}
              <div className="h-56 w-full overflow-hidden relative bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image badges absolute overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  {item.isBestSeller && (
                    <span className="inline-flex items-center gap-1 bg-amber-600 text-white text-[10px] font-bold tracking-wider font-sans uppercase px-2.5 py-1 rounded-full shadow-sm">
                      <Star className="w-3 h-3 fill-amber-300 stroke-amber-300" />
                      Best Seller
                    </span>
                  )}
                  {item.isVeg && (
                    <span className="inline-flex items-center gap-1.5 bg-stone-50/95 backdrop-blur-xs border border-emerald-200 text-stone-900 text-[10px] font-extrabold tracking-wide px-2 py-0.5 rounded shadow-sm">
                      <span className="w-2.5 h-2.5 border border-emerald-700 p-0.5 rounded flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                      </span>
                      100% Veg Puff
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-sans">
                
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif font-semibold text-stone-950 text-lg tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <span className="font-serif font-bold text-amber-800 text-base italic">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Direct Action trigger */}
                <button
                  onClick={() => handleWhatsAppOrder(item.title, item.price)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200 cursor-pointer transition-all duration-200"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
                  Order via WhatsApp
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
