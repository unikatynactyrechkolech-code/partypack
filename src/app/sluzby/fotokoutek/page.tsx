'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Camera, Check, ArrowRight, Star, Printer, Users, Image, Palette } from 'lucide-react';

const features = [
  { icon: Printer, title: 'Neomezený tisk', description: 'Tisk fotek po celou dobu akce bez omezení.' },
  { icon: Users, title: 'Profesionální obsluha', description: 'Naše obsluha provede hosty celým procesem.' },
  { icon: Image, title: '100+ pozadí', description: 'Výběr ze speciálních, tištěných i klíčovacích pozadí.' },
  { icon: Palette, title: 'Grafika na míru', description: 'Vlastní grafika, text a branding do každé fotky.' },
];

const included = [
  'Designová fotobudka se dvěma obrazovkami',
  'Profesionální obsluha',
  '45 ks rekvizit',
  'Pozadí z naší nabídky',
  'Neomezený tisk fotek',
  'Online galerie po akci do 48h',
  'Zasílání fotek na email',
  'Doprava v ceně',
];

const extras = [
  { name: 'LED stěna & GIFy', price: '+3 500 Kč', description: 'Perfektní efekt pro fotky a GIFy.' },
  { name: 'Party Touch', price: '+2 000 Kč', description: 'Přidávání nápisů, stickers a efektů na fotky.' },
  { name: 'Velký formát fotek 20×15 cm', price: 'dle domluvy' },
  { name: 'Polep fotobudky do brandu', price: 'dle domluvy' },
  { name: 'Rekvizity na míru', price: 'dle domluvy' },
];

const occasions = [
  { title: 'Svatby', description: 'Speciální pozadí a kniha hostů zdarma!' },
  { title: 'Firemní akce', description: 'Polep fotobudky do brandu, pozadí a dekorace na míru.' },
  { title: 'Plesy & Párty', description: 'Fotokoutek na ples zdarma pro akce nad 500 hostů!' },
  { title: 'Narozeniny', description: 'Památeční kniha s topovým pozadím a grafikou na míru.' },
  { title: 'Dětské akce', description: 'Partysnap je perfektní na rodinné dny a oslavy.' },
  { title: 'Koncerty & Konference', description: 'Neomezený tisk a grafika na míru pro jakoukoli akci.' },
];

export default function FotokoutekPage() {
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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6"
          >
            <Camera className="w-10 h-10 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Partysnap
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Fotokoutek </span>
            <span className="gradient-text">| GIFy</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Okořeňte svou akci nejlepší kombinací zábavy a vzpomínek! Naše designová fotobudka 
            s dvěma velkými obrazovkami zajistí rychlý výběr, zasílání na email a srandu u prohlížení fotek.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl font-bold gradient-text">od 10 000 Kč</span>
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
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
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Příplatky a rozšíření</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {extras.map((extra) => (
              <div key={extra.name} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{extra.name}</h3>
                  <span className="text-purple-600 font-medium">{extra.price}</span>
                </div>
                {extra.description && (
                  <p className="text-gray-600 text-sm">{extra.description}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Occasions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Pro jaké příležitosti</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion, index) => (
              <motion.div
                key={occasion.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-gray-50 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <h3 className="text-lg font-semibold text-gray-900">{occasion.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{occasion.description}</p>
              </motion.div>
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
            Připraveni okořenit vaši akci?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Napište nám a my vám připravíme nezávaznou nabídku na míru vaší akci.
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
