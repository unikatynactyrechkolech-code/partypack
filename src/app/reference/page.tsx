'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Building2, Users, Calendar, ArrowRight, Quote } from 'lucide-react';

const clients = [
  'Škoda Auto',
  'T-Mobile',
  'O2',
  'Vodafone',
  'Red Bull',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Coca-Cola',
  'Pepsi',
  'Samsung',
  'Apple',
  'Microsoft',
  'Google',
  'Amazon',
  'Facebook',
  'Instagram',
  'Netflix',
  'Spotify',
  'Adidas',
  'Nike',
  'Puma',
  'L\'Oréal',
  'Nivea',
];

const testimonials = [
  {
    quote: 'Partypack dodal našemu firemnímu večírku úplně nový rozměr. Fotokoutek byl jednoznačně nejnavštěvovanější atrakcí celého večera!',
    author: 'Jana Nováková',
    company: 'Škoda Auto',
    role: 'Event Manager',
  },
  {
    quote: 'Profesionální přístup, spolehlivost a kreativita. Spolupracujeme s Partypack již několik let a vždy dodají nadstandardní kvalitu.',
    author: 'Martin Svoboda',
    company: 'T-Mobile',
    role: 'Marketing Director',
  },
  {
    quote: 'AI Draw Bot byl absolutní hit naší konference. Všichni chtěli svůj portrét a fronty se tvořily celý den!',
    author: 'Petra Králová',
    company: 'Red Bull',
    role: 'Brand Manager',
  },
  {
    quote: 'Hostesky od Partypack jsou vždy profesionální, milé a reprezentativní. Ideální pro naše veletrhy a prezentace.',
    author: 'Tomáš Horák',
    company: 'Mercedes-Benz',
    role: 'Sales Manager',
  },
  {
    quote: '360° Partyspin přitáhl obrovskou pozornost na naší výstavě. Videa se šířila virálně a dosáhla tisíců zhlédnutí.',
    author: 'Lucie Veselá',
    company: 'Samsung',
    role: 'Event Coordinator',
  },
  {
    quote: 'Už jsme vyzkoušeli několik dodavatelů fotokoutků, ale Partypack je jednoznačně nejlepší. Kvalita a servis na prvním místě.',
    author: 'David Černý',
    company: 'Coca-Cola',
    role: 'Marketing Manager',
  },
];

const stats = [
  { number: '2000+', label: 'Spokojených klientů' },
  { number: '500+', label: 'Firemních akcí' },
  { number: '10+', label: 'Let zkušeností' },
  { number: '50+', label: 'Velkých značek' },
];

export default function ReferencePage() {
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
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6"
          >
            <Star className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Naše </span>
            <span className="gradient-text">Reference</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Spolupracujeme s předními značkami a firmami v České republice. 
            Podívejte se, co o nás říkají naši klienti.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">Co o nás říkají</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-gray-50 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-purple-500 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-purple-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Spolupracovali jsme s</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {clients.map((client, index) => (
              <motion.span
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 transition-colors"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Event types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Firemní akce</h3>
            <p className="text-gray-600 text-sm">Vánoční večírky, teambuildingy, konference, product launche</p>
          </div>
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Soukromé oslavy</h3>
            <p className="text-gray-600 text-sm">Svatby, narozeniny, promoce, výročí</p>
          </div>
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Veřejné eventy</h3>
            <p className="text-gray-600 text-sm">Festivaly, veletrhy, výstavy, promo akce</p>
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
            Přidejte se k našim spokojeným klientům!
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Rádi vám připravíme nezapomenutelnou akci na míru.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/sluzby"
              className="px-8 py-4 rounded-full border-2 border-black text-black font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
            >
              Naše služby
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
