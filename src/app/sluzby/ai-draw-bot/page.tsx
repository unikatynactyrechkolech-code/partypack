'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PenTool, Check, ArrowRight, Zap, Clock, Palette, Bot } from 'lucide-react';

const steps = [
  { number: '1', title: 'Přivítání', description: 'Naše hosteska vysvětlí celý proces a připraví vás na rychlou fotku.' },
  { number: '2', title: 'Fotka & Přenos', description: 'Během chvilky vám přes tablet uděláme fotku a pošleme jí do robota.' },
  { number: '3', title: 'Kreslení v akci', description: 'Robotické rameno začne pracovat a do 40 vteřin vytvoří portrét.' },
  { number: '4', title: 'Hotovo!', description: 'Váš jedinečný portrét je připraven na kvalitním fotopapíře s brandingem.' },
];

const features = [
  { icon: Bot, title: '3 robotická ramena', description: 'Máme 3 AI Draw Boty pro velké akce.' },
  { icon: Clock, title: 'Portrét za 40s', description: 'Rychlé a přesné vytvoření portrétu.' },
  { icon: Palette, title: 'Branding na míru', description: 'Vlastní design a logo na fotopapír.' },
  { icon: Zap, title: '3x rychlost', description: 'S třemi boty obsloužíme až 3 hosty současně.' },
];

const included = [
  '1x AI Draw Bot',
  '2 hodiny provozu',
  '200 brandových papírků',
  'Design fotopapíru na míru',
  'Profesionální obsluha',
  'Doprava v ceně',
];

const styles = [
  'Klasický portrét',
  'Karikatura',
  'Pirát',
  'A mnoho dalších...',
];

export default function AIDrawBotPage() {
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
            className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6"
          >
            <PenTool className="w-10 h-10 text-white" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-sm mb-6"
          >
            Robotické rameno
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">AI </span>
            <span className="gradient-text">Draw Bot</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4">
            Revoluční bot, který pomocí AI vytváří portréty v reálném čase.
          </p>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Náš AI Draw Bot využívá pokročilou umělou inteligenci a robotické rameno k vytváření 
            skicových portrétů do půl minuty! Stačí se vyfotit a sledovat, jak s precizností umělce 
            přenáší vaše rysy na papír.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-4xl font-bold gradient-text">od 19 000 Kč</span>
            <Link
              href="/kontakt"
              className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:shadow-lg hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="text-4xl font-bold gradient-text">3</div>
            <p className="text-gray-600 text-sm">AI Draw Boty</p>
          </div>
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="text-4xl font-bold gradient-text">40s</div>
            <p className="text-gray-600 text-sm">Čas na portrét</p>
          </div>
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="text-4xl font-bold gradient-text">3x</div>
            <p className="text-gray-600 text-sm">Obsloužení současně</p>
          </div>
          <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center">
            <div className="text-4xl font-bold gradient-text">∞</div>
            <p className="text-gray-600 text-sm">Stylů portrétů</p>
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
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What's included & Styles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Co je v ceně</h2>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Styly portrétů</h2>
            <p className="text-gray-600 mb-6">
              Karikatura, klasický portrét nebo třeba pirát? Vše lze vyzkoušet v rámci jedné akce! 
              Navíc jako bonus zvládneme nakreslit i vašeho čtyřnohého mazlíčka.
            </p>
            <div className="space-y-3">
              {styles.map((style) => (
                <div key={style} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{style}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Ceník</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                2h. provozu | 200 brandových papírků = <span className="text-green-600 font-semibold">19 000 Kč</span>
              </p>
              <p className="text-gray-600">
                Každá další hodina <span className="text-green-600 font-semibold">+ 1 500 Kč</span>
              </p>
              <p className="text-gray-600">
                + 100 brandových papírků <span className="text-green-600 font-semibold">+ 500 Kč</span>
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                V ceně je zahrnuto vše, co bude potřeba pro hladký chod vaší akce. AI Draw bot, 
                2 hodiny provozu, obsluha, doprava a 200 ks papírků s vlastním nápisem/grafikou.
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
            Ohromte své hosty jedinečným AI Draw Botem!
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Objednejte si revoluční novinku na vaši akci, konferenci, večírek či narozeniny.
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
