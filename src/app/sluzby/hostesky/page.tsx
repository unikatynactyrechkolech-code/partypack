'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Check, ArrowRight, UserCheck, Shirt, Eye, Star } from 'lucide-react';

const steps = [
  { number: '1', title: 'Společný start', description: 'Vyzjistíme si informace pro tvorbu kalkulace na míru.' },
  { number: '2', title: 'Předvýběr hostesek', description: 'Zašleme setkarty vybraných hostesek ke schválení.' },
  { number: '3', title: 'Finalizace looku', description: 'Připravíme návrhy dress codu, líčení a účesu.' },
  { number: '4', title: 'A je to!', description: 'V den D zajistíme, aby vše proběhlo k vaší spokojenosti.' },
];

const services = [
  { icon: Users, title: 'Hostesky', description: 'Profesionální hostesky na firemní akce a eventy.' },
  { icon: Star, title: 'Modelky', description: 'Módní přehlídky a fotoshooting.' },
  { icon: UserCheck, title: 'Promotéři', description: 'Promotéři a promotérky na veletrhy a akce.' },
  { icon: Shirt, title: 'Debaras & Šatna', description: 'Šatnářky a obsluha na vaše akce.' },
];

const included = [
  'Databáze 1000+ ověřených osob',
  'Výběr hostesek na míru',
  'Setkarty ke schválení',
  'Dress code na míru',
  'Úprava vlasů a líčení',
  'Supervize na akci',
  'Fundus oblečení k dispozici',
  'Koordinace 24/7',
];

export default function HosteskyPage() {
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
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-6"
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Modelky & Promotéři
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Hostesky </span>
            <span className="gradient-text">na akce</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4">
            Naše hostesky budou nejkrásnější ozdobou na každé vaší akci!
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Velká databáze slečen dokáže pozvednout jakýkoli event. Od firemní konference 
            přes luxusní event až po hostesky či promotéry na veletrhu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl font-bold gradient-text">od 270 Kč/hod</span>
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Jak to u nás funguje?</h2>
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
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Co zajistíme</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-amber-400" />
                Supervize na akci
              </h3>
              <p className="text-gray-600">
                Není problém zajistit po celou dobu naší supervizi, která se stará nejen o pohodlí 
                hostesek, ale především o to, aby bylo vše v pořádku a nemuseli jste mít na akci žádné starosti.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shirt className="w-6 h-6 text-amber-400" />
                Dress code na míru
              </h3>
              <p className="text-gray-600">
                Samozřejmostí je pro nás též zajištění specifického dress codu, úpravy vlasů, 
                líčení holek a dalších požadavků. Máme k dispozici rozsáhlý fundus oblečení.
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
            Objednejte si svou první akci s námi!
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Nechte svou akci zazářit s našimi profesionálními hostesky.
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
