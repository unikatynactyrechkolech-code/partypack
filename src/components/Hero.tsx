'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-20.jpg',
    title: 'PARTYSNAP',
    subtitle: '... alias nejlepší fotokoutek široko daleko, který za vámi dorazí klidně na druhý konec světa!',
    cta: 'Více info',
    href: '/sluzby/fotokoutek',
  },
  {
    id: 2,
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-25.jpg',
    title: 'AKCE BEZ STAROSTÍ',
    subtitle: '... pro vás zajišťujeme již 10 let!',
    cta: 'Naše služby',
    href: '/sluzby',
  },
  {
    id: 3,
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-35.jpg',
    title: 'PARTYPACK',
    subtitle: '... balíček služeb na vaše akce, který promění každý event v nezapomenutelný zážitek.',
    cta: 'Zjistit více',
    href: '/o-nas',
  },
  {
    id: 4,
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-54.jpg',
    title: 'AI FOTOKOUTEK',
    subtitle: '... staňte se kýmkoli, kdekoli díky umělé inteligenci!',
    cta: 'Více info',
    href: '/sluzby/ai-fotokoutek',
  },
  {
    id: 5,
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-77.jpg',
    title: '360° PARTYSPIN',
    subtitle: '... nová vlna zábavy ideální pro Stories a TikTok!',
    cta: 'Zjistit více',
    href: '/sluzby/partyspin',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <span className="gradient-text">{slides[currentSlide].title}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] font-medium">
                  {slides[currentSlide].subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    href={slides[currentSlide].href}
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-gray-900 font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                  >
                    {slides[currentSlide].cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 text-white font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Nezávazná poptávka
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500"
        />
      </div>
    </section>
  );
}
