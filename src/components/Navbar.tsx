'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Camera, Users, Cpu, RotateCw, PenTool, Gift, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Domů' },
  { href: '/sluzby', label: 'Služby' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
];

const serviceLinks = [
  { href: '/sluzby/fotokoutek', label: 'Fotokoutek', icon: Camera, description: 'Klasická fotobudka s rekvizitami' },
  { href: '/sluzby/ai-fotokoutek', label: 'AI Fotokoutek', icon: Cpu, description: 'Zelené pozadí a AI efekty' },
  { href: '/sluzby/hostesky', label: 'Hostesky', icon: Users, description: 'Profesionální hostesky a promotéři' },
  { href: '/sluzby/partyspin', label: '360° Partyspin', icon: RotateCw, description: 'Rotující video platforma' },
  { href: '/sluzby/ai-draw-bot', label: 'AI Draw Bot', icon: PenTool, description: 'Robotické rameno kreslí portréty' },
  { href: '/sluzby/dalsi-sluzby', label: 'Další služby', icon: Gift, description: 'Kompletní eventový servis' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-[60]">
              <Image
                src="https://partypack.cz/wp-content/uploads/2022/01/cropped-cropped-logo-znak-png-male.png"
                alt="PARTYPACK"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300 group font-medium"
                >
                  <span>{link.label}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"
                  />
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="px-6 py-2.5 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Objednat
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-900 relative z-[60]"
              aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-7 h-7 text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu - WHITE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-white"
          >

            {/* Menu Content */}
            <div className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
              {/* Main Navigation Links */}
              <nav className="flex-1">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ 
                        delay: index * 0.08,
                        duration: 0.4,
                        ease: [0.32, 0.72, 0, 1]
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-4 group"
                      >
                        <span className="text-4xl sm:text-5xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Services Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-10"
                >
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Naše služby</p>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceLinks.map((service, index) => (
                      <motion.div
                        key={service.href}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 hover:bg-gray-100 border border-gray-100 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{service.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-auto pt-6"
              >
                <Link
                  href="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Nezávazná poptávka
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center justify-center gap-6 mt-6 text-gray-400 text-sm">
                  <a href="tel:+420608880719" className="hover:text-gray-900 transition-colors">
                    +420 608 880 719
                  </a>
                  <span>•</span>
                  <a href="mailto:info@partypack.cz" className="hover:text-gray-900 transition-colors">
                    info@partypack.cz
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
