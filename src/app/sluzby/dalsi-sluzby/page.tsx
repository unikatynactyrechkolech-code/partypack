'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Printer, Users, Camera, Video, PartyPopper, Sparkles, Music, Tent, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Partyprint GO',
    description: 'Zábavná alternativa ke klasickému fotokoutku. Selfie tisk pro libovolnou velikost akce.',
    color: 'from-blue-500 to-cyan-500',
    price: 'od 6 000 Kč',
  },
  {
    icon: Users,
    title: 'Modelky',
    description: 'Reprezentativní modelky pro veletrhy, autosalóny a exkluzivní akce.',
    color: 'from-pink-500 to-rose-500',
    price: 'na poptávku',
  },
  {
    icon: Camera,
    title: 'Eventová fotka',
    description: 'Profesionální fotodokumentace vaší akce. Kvalitní fotky pro vaše vzpomínky.',
    color: 'from-amber-500 to-orange-500',
    price: 'na poptávku',
  },
  {
    icon: Video,
    title: 'Video',
    description: 'Kompletní videodokumentace eventů a akcí včetně postprodukce.',
    color: 'from-red-500 to-rose-500',
    price: 'na poptávku',
  },
  {
    icon: PartyPopper,
    title: 'Výzdoba akcí',
    description: 'Komplexní dekorace pro firemní akce, svatby i soukromé oslavy.',
    color: 'from-purple-500 to-violet-500',
    price: 'na poptávku',
  },
  {
    icon: Sparkles,
    title: 'Scrapbook',
    description: 'Moderní kronika akce. Fotky, vzkazy a vzpomínky v elegantní knize.',
    color: 'from-green-500 to-emerald-500',
    price: 'od 4 000 Kč',
  },
  {
    icon: Users,
    title: 'Dětské aktivity',
    description: 'Malování na obličej, balonková show, klauni a další zábava pro děti.',
    color: 'from-yellow-500 to-amber-500',
    price: 'na poptávku',
  },
  {
    icon: Music,
    title: 'DJ',
    description: 'Profesionální DJ s vlastním vybavením pro vaši akci.',
    color: 'from-indigo-500 to-purple-500',
    price: 'na poptávku',
  },
  {
    icon: Tent,
    title: 'Stany',
    description: 'Pronájem party stanů různých velikostí včetně kompletní instalace.',
    color: 'from-teal-500 to-green-500',
    price: 'na poptávku',
  },
  {
    icon: Users,
    title: 'Taneční vystoupení',
    description: 'Profesionální tanečníci a choreografie pro vaši akci.',
    color: 'from-pink-500 to-purple-500',
    price: 'na poptávku',
  },
];

export default function DalsiSluzbyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Kompletní servis
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Další </span>
            <span className="gradient-text">Služby</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Kromě našich hlavních služeb nabízíme širokou škálu doplňkových aktivit, 
            které pomohou vaší akci být ještě nezapomenutelnou.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-gray-100 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <span className="text-purple-600 font-semibold">{service.price}</span>
            </motion.div>
          ))}
        </div>

        {/* Partyprint GO Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Printer className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Partyprint GO</h2>
              <p className="text-gray-600">Selfie tisk pro vaši akci</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Kompaktní verze našeho fotokoutku, kterou můžete mít kdekoliv. Hosté si jednoduše 
                vyfotí selfie a fotka se automaticky vytiskne s vaším brandingem.
              </p>
              <p className="text-gray-600 mb-4">
                Ideální pro menší akce, konference nebo jako doplněk k hlavnímu fotokoutku.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <span className="text-blue-600 font-semibold">Základní balíček:</span>
                <span className="text-gray-900 ml-2">od 6 000 Kč</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <span className="text-blue-600 font-semibold">Obsahuje:</span>
                <span className="text-gray-600 ml-2">2h provozu, 100 fotoprintů</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scrapbook Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Scrapbook</h2>
              <p className="text-gray-600">Moderní kronika vaší akce</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Vytvořte si jedinečnou památku na vaši akci! Hosté mohou vlepit své fotky 
                do elegantní knihy a doplnit je osobními vzkazy.
              </p>
              <p className="text-gray-600">
                Perfektní pro svatby, narozeniny, firemní akce nebo jakoukoliv oslavu, 
                na kterou chcete vzpomínat.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <span className="text-green-600 font-semibold">Cena:</span>
                <span className="text-gray-900 ml-2">od 4 000 Kč</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <span className="text-green-600 font-semibold">Obsahuje:</span>
                <span className="text-gray-600 ml-2">Kvalitní kniha, samolepky, fixy</span>
              </div>
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
            Potřebujete kombinaci více služeb?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Připravíme vám kompletní balíček na míru. Rádi vám poradíme s výběrem 
            ideální kombinace služeb pro vaši akci.
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
              Zpět na služby
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
