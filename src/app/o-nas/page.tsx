'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Linkedin, Instagram, Heart, Sparkles, Award, Target, Users } from 'lucide-react';

const team = [
  {
    name: 'Mia',
    role: 'Zakladatelka & CEO',
    description: 'Příběh PARTYPACK se začal psát již v roce 2012, kdy Mia organizovala akce a eventy v západočeském kraji. Od roku 2015 vedla a vlastnila společnost Fotodroid, která dodávala fotobudky na eventy. Po Covidu se již nechtěla zaměřovat pouze na fotokoutky, ale chtěla nabídnout komplexní balíček služeb. Proto v roce 2021 vznikl PARTYPACK.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Magdaléna',
    role: 'Marketingová manažerka',
    description: 'Magda si získala Miu především svou pečlivostí a je aktuálně velkým přínosem v Partypacku. Zároveň od Mii chytá její perfekcionismus a puntičkářství.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Linda',
    role: 'Provozní manažerka',
    description: 'Linda je nepostradatelnou součástí našeho týmu u příprav, testování a organizování veškerých aktivit na skladu i přímo na akcích.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Tina',
    role: 'Koordinátorka hostesek',
    description: 'Tina je tu pro náš rozsáhlý tým hostesek, promotérů a modelek. K dispozici 24/7 tak, aby celý proces šel hladce a na akcích bylo vše na 110%.',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Milujeme svou práci',
    description: 'Dáváme do toho srdce a je to znát na každé akci.',
  },
  {
    icon: Sparkles,
    title: 'Inovace',
    description: 'Neustále přinášíme novinky jako AI fotokoutek nebo Draw Bot.',
  },
  {
    icon: Award,
    title: 'Kvalita',
    description: 'Profesionální přístup a moderní vybavení na každé akci.',
  },
  {
    icon: Target,
    title: 'Na míru',
    description: 'Každá akce je unikátní, proto vše přizpůsobujeme vašim potřebám.',
  },
];

const timeline = [
  { year: '2012', title: 'Začátky', description: 'Mia začíná organizovat akce a eventy v západočeském kraji.' },
  { year: '2015', title: 'Fotodroid', description: 'Vznik společnosti Fotodroid dodávající fotobudky na eventy.' },
  { year: '2021', title: 'PARTYPACK', description: 'Založení PARTYPACK – komplexního balíčku služeb na akce.' },
  { year: '2023', title: 'AI revoluce', description: 'Spuštění AI fotokoutku s umělou inteligencí.' },
  { year: '2025', title: 'Draw Bot', description: 'Uvedení revolučního AI Draw Bot – robotického ramena.' },
];

export default function ONasPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      {/* Hero section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm mb-6"
          >
            Náš příběh
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Milujeme </span>
            <span className="gradient-text">naší práci</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Na trhu jsme již přes 10 let a specializujeme se na jedinečné zážitky, 
            které oživí každý event, konferenci, firemní večírek, narozeniny či svatbu.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-100 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Naše cesta
          </h2>
          <p className="text-gray-600">Od prvních eventů až po AI technologie</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-400 to-cyan-400 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:ml-0' : 'lg:pl-12 lg:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ${
                  index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                }`} />

                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                  <span className="text-2xl font-bold gradient-text">{item.year}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gray-900">Seznamte se s </span>
            <span className="gradient-text">Partypekáči</span>
          </h2>
          <p className="text-gray-600">Tým profesionálů, kteří se postarají o vaši akci</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white flex-shrink-0`}>
                  {member.name.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  
                  {/* Social links */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-8"
        >
          Samozřejmě máme ještě mraky pomocníků – technika, elektrikáře, konstruktéra, tiskaře a mnoho dalších! ❤️
        </motion.p>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-12 rounded-3xl glass">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Let na trhu' },
              { number: '3750+', label: 'Úspěšných akcí' },
              { number: '702k+', label: 'Úsměvů' },
              { number: '2188+', label: 'Spokojených klientů' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl bg-gray-50 border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Připraveni spolupracovat?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Pojďme společně vytvořit nezapomenutelnou akci pro vás a vaše hosty.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Kontaktujte nás
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
