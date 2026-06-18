import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS, MENU_ITEMS } from '../data';
import { useToast } from './Toast';
import { X, Sparkles, MessageCircle, RefreshCw, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface MoodQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MoodQuiz({ isOpen, onClose }: MoodQuizProps) {
  const { addToast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [recommendedSmore, setRecommendedSmore] = useState<MenuItem | null>(null);

  const handleChoiceSelect = (value: string) => {
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate Recommendation based on answers
      processQuizAnswers(nextAnswers);
    }
  };

  const processQuizAnswers = (finalAnswers: string[]) => {
    const [sweetTooth, vibe, diet] = finalAnswers;
    let recommendation: MenuItem;

    // Filter match based on criteria
    if (sweetTooth === 'fresh') {
      recommendation = MENU_ITEMS.find(item => item.id === 'berry-torch') || MENU_ITEMS[2];
    } else if (sweetTooth === 'high') {
      recommendation = MENU_ITEMS.find(item => item.id === 'nutella-gold') || MENU_ITEMS[3];
    } else {
      recommendation = MENU_ITEMS.find(item => item.id === 'classic-campfire') || MENU_ITEMS[0];
    }

    setRecommendedSmore(recommendation);
    addToast(`✨ Match found: ${recommendation.title}!`, 'fire');
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendedSmore(null);
  };

  const handleWhatsAppMatchLink = (item: MenuItem) => {
    const text = `Hi Chrunchizz! 🍢 I just took your 3-Question S'mores Mood Quiz on your website and matched with the *${item.title}*!

I'd love to order this match! Roast and torch it fresh for me.
Price: ₹${item.price}
Thank you so much!`;
    
    addToast("Generating your custom quiz-matched order...", "success");
    setTimeout(() => {
      window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, '_blank');
    }, 650);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="relative w-full max-w-lg bg-stone-50 rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-amber-100/60 p-6 border-b border-stone-200/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-amber-700 animate-pulse" />
                <h3 className="font-serif font-semibold text-stone-950 text-lg">
                  S'mores Mood Quiz
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-stone-200/50 text-stone-500 hover:text-stone-950 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Wrapper */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {!recommendedSmore ? (
                  <motion.div
                    key={`quiz-step-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  >
                    {/* Progress bar */}
                    <div className="w-full bg-stone-200 h-1.5 rounded-full mb-6 overflow-hidden">
                      <div
                        className="bg-amber-600 h-full transition-all duration-350"
                        style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      />
                    </div>

                    {/* Question */}
                    <span className="text-[9px] tracking-widest font-sans font-black text-amber-800 bg-amber-100/95 px-2.5 py-1 rounded-full">
                      QUESTION {currentStep + 1} OF {QUIZ_QUESTIONS.length}
                    </span>
                    <h4 className="mt-3 font-serif font-semibold text-xl text-stone-950 tracking-tight leading-snug">
                      {QUIZ_QUESTIONS[currentStep].question}
                    </h4>

                    {/* Choices list */}
                    <div className="mt-6 space-y-3">
                      {QUIZ_QUESTIONS[currentStep].choices.map((choice) => (
                        <motion.button
                          key={choice.text}
                          whileHover={{ scale: 1.015, y: -1 }}
                          whileTap={{ scale: 0.985 }}
                          onClick={() => handleChoiceSelect(choice.value)}
                          className="w-full text-left p-4 rounded-2xl border border-stone-200 bg-white hover:bg-amber-50 hover:border-amber-400 cursor-pointer transition-colors"
                        >
                          <p className="font-semibold text-stone-900 text-sm leading-tight">
                            {choice.text}
                          </p>
                          <p className="text-xs text-stone-600 mt-1 leading-normal">
                            {choice.desc}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  /* Recommendation Result layout */
                  <motion.div
                    key="quiz-result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="text-center py-4 space-y-5"
                  >
                    <div className="inline-flex p-3 bg-amber-100 rounded-full text-amber-700 animate-bounce">
                      <Flame className="w-8 h-8 fill-amber-500" />
                    </div>
                    
                    <div>
                      <span className="text-[10px] font-sans font-black text-amber-800 uppercase tracking-widest">
                        We aligned your sweet aura!
                      </span>
                      <h4 className="font-serif font-semibold text-stone-950 text-2xl mt-1.5">
                        {recommendedSmore.title}
                      </h4>
                    </div>

                    {/* Curated matched image mockup */}
                    <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative">
                      <img
                        src={recommendedSmore.image}
                        alt={recommendedSmore.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-stone-900/80 text-white font-mono text-[9px] font-bold px-2 py-1 rounded">
                        MATCH: 100% ALGN
                      </div>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed max-w-sm mx-auto px-2">
                      "{recommendedSmore.description}"
                    </p>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-2 font-sans">
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-1/3 py-3 border border-stone-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-700 bg-white hover:bg-stone-50 cursor-pointer transition flex items-center justify-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Retake Quiz
                      </button>
                      <button
                        onClick={() => handleWhatsAppMatchLink(recommendedSmore)}
                        className="w-full sm:w-2/3 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-amber-600 hover:bg-amber-700 cursor-pointer transition flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        Order this Match (₹{recommendedSmore.price})
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
