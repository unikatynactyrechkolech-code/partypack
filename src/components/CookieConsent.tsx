'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show cookie banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="hidden md:flex w-12 h-12 rounded-xl bg-indigo-50 items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-indigo-600" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      🍪 Používáme cookies
                    </h3>
                    <button
                      onClick={acceptNecessary}
                      className="md:hidden text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Tento web používá cookies pro zajištění správného fungování, analýzu návštěvnosti 
                    a personalizaci obsahu. Kliknutím na „Přijmout vše" souhlasíte s jejich používáním. 
                    Více informací naleznete v našich{' '}
                    <Link href="/zasady-ochrany-soukromi" className="text-indigo-600 hover:text-indigo-500 underline">
                      zásadách ochrany soukromí
                    </Link>.
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 rounded-full bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-all duration-300"
                    >
                      Přijmout vše
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-all duration-300"
                    >
                      Pouze nezbytné
                    </button>
                  </div>
                </div>

                {/* Close button desktop */}
                <button
                  onClick={acceptNecessary}
                  className="hidden md:flex text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
