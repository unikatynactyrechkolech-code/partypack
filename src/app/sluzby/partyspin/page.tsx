'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RotateCw, Check, ArrowRight, Smartphone, Lightbulb, Video, Palette } from 'lucide-react';

const features = [
  { icon: Video, title: '4K kvalita', description: 'Ostrá, stabilizovaná videa v nejvyšší kvalitě.' },
  { icon: Smartphone, title: 'Okamžité sdílení', description: 'AirDrop, Email nebo QR kód do mobilu.' },
  { icon: Lightbulb, title: 'Velký ringlight', description: 'Perfektní osvětlení pro skvělé výsledky.' },
  { icon: Palette, title: 'Grafika na míru', description: 'Vlastní text a logo do každého videa.' },
];

const included = [
  '4K kamera iPhone 15 Pro Max',
  'Kiosek s iPadem',
  'Velký ringlight',
  'Grafika na míru',
  'Tematické rekvizity',
  'Bublinkovač v ceně',
  'AirDrop / Email / QR kód',
  'Profesionální obsluha',
  'Doprava v ceně',
];

const extras = [
  { name: 'LED stěna', price: '+3 500 Kč', description: 'Perfektní pozadí pro vaše videa.' },
  { name: 'LED meče', price: '+1 500 Kč', description: 'Speciální efekt pro reels.' },
  { name: 'Polep do brandu', price: 'dle domluvy' },
  { name: 'Pozadí ke spinu', price: 'dle domluvy' },
];

export default function PartyspinPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6"
          >
            <RotateCw className="w-10 h-10 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Nová vlna zábavy
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">360° </span>
            <span className="gradient-text">Partyspin</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4">
            Nová vlna zábavy!
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Stoupnete si na Partyspin a užijete si 360° párty ve formě kamery, která vás 
            několikrát obtočí! Video je ideální pro sdílení na IG Stories, Reels nebo TikTok.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl font-bold gradient-text">od 9 900 Kč</span>
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Jak to funguje?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                1
              </div>
              <p className="text-gray-700">Stoupnete si na Partyspin</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                2
              </div>
              <p className="text-gray-700">Kamera vás několikrát obtočí</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                3
              </div>
              <p className="text-gray-700">Video se dotočí a sestříhá</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                4
              </div>
              <p className="text-gray-700">Pošlete si ho AirDrop / QR / Email</p>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Co je v ceně</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Co umíme navíc</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra) => (
              <div key={extra.name} className="p-6 rounded-2xl bg-white border border-gray-100 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{extra.name}</h3>
                <span className="text-purple-600 font-medium">{extra.price}</span>
                {extra.description && (
                  <p className="text-gray-600 text-sm mt-2">{extra.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-gray-50 border border-gray-100 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Chci si objednat Partyspin!
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Nejvíce spokojených zákazníků si nás objednává na firemní večírky, svatby, narozeniny nebo dětské akce.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sluzby"
              className="px-8 py-4 rounded-full border-2 border-black text-black font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            >
              Další služby
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
