'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Příjemné zpestření vašich akcí',
    description: 'Moderní vybavení a služby, které zaručeně potěší vaše hosty.',
  },
  {
    icon: Award,
    title: 'Výhodná cena zajištěním balíčku',
    description: 'Slevy 10-30% při objednání více služeb najednou.',
  },
  {
    icon: Heart,
    title: 'Svatby, firemní akce, plesy, narozky',
    description: 'Děláme vše pro to, aby vaše událost byla nezapomenutelná.',
  },
  {
    icon: Users,
    title: 'Nejkrásnější hostesky široko daleko',
    description: 'Databáze 1000+ ověřených hostesek, promotérů a modelek.',
  },
];

export default function About() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6"
            >
              O nás
            </motion.span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              <span className="text-gray-900">Milujeme </span>
              <span className="gradient-text">naší práci</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              ... proto do toho dáváme srdce a je to znát!
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Na trhu jsme již pěknou řadu let a nyní nás můžete najít jako balíček služeb Partypack. 
              Specializujeme se na jedinečné zážitky, které oživí každý event, konferenci, 
              firemní večírek, narozeniny či svatbu.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              S námi můžete počítat s profesionálním přístupem, moderním vybavením a službami, 
              které zaručeně potěší vaše hosty. Děláme vše pro to, aby vaše událost byla nezapomenutelná!
            </p>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}