'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Check, ArrowRight, Wand2, Users, Printer, QrCode } from 'lucide-react';

const steps = [
  { number: '1', title: 'Výběr filtru', description: 'Host si vybírá z našich AI filtrů svého favorita.' },
  { number: '2', title: 'Generování', description: 'Po chvilce se vygeneruje výsledný snímek pomocí AI.' },
  { number: '3', title: 'Tisk & sdílení', description: 'Neomezený tisk a sdílení přes QR kód do mobilů!' },
  { number: '4', title: 'Online galerie', description: 'Vlastní grafika a online galerie hostů do 24h.' },
];

const features = [
  { icon: Wand2, title: 'Až 8 AI filtrů', description: 'Široká nabídka filtrů pro jednotlivce.' },
  { icon: Users, title: 'Skupiny do 10 osob', description: 'Filtry pro skupinky 2-10 osob bez předem vybrání.' },
  { icon: Printer, title: 'Neomezený tisk', description: 'Tisk fotek po celou dobu akce.' },
  { icon: QrCode, title: 'Sdílení QR kódem', description: 'Okamžité sdílení přímo do mobilů.' },
];

const included = [
  'Designová fotobudka s AI',
  'Až 8 AI filtrů na výběr',
  'Filtry pro skupiny 2-10 osob',
  'Neomezený tisk fotek',
  'Sdílení přes QR kód',
  'Grafika na míru do každé fotky',
  'Online galerie do 24h',
  'Profesionální obsluha',
  'Doprava v ceně',
];

export default function AIFotokoutekPage() {
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
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Umělá inteligence
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">AI </span>
            <span className="gradient-text">Fotokoutek</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4">
            Staňte se kýmkoli, kdekoli a to díky AI!
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Vyfotíme vás a umělá inteligence vytvoří unikátní snímek s vybraným filtrem. 
            Výběr filtrů pro jednotlivce i pro skupinky až 10 osob!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl font-bold gradient-text">od 14 000 Kč</span>
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
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Jak to funguje?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-pink-500 to-transparent" />
                )}
              </motion.div>
            ))}
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
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4">
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
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Co potřebujeme</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prostor</h3>
              <p className="text-gray-600">
                Pro správné fungování AI fotokoutku potřebujeme prostor 2x2m a místo, 
                kde je dobrý signál wifi nebo mobilních dat.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Žádné klíčování!</h3>
              <p className="text-gray-600">
                Díky technologii umělé inteligence je každá z našich fotografií unikát. 
                Zvolte filtr a nechte se překvapit.
              </p>
            </div>
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
            Staňte se kýmkoli díky AI!
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
