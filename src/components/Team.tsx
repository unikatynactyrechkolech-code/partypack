'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram } from 'lucide-react';

const team = [
  {
    name: 'Mia',
    role: 'Zakladatelka & CEO',
    description: 'Příběh PARTYPACK se začal psát v roce 2012, kdy Mia organizovala akce v západočeském kraji. Od roku 2015 vedla společnost Fotodroid a v roce 2021 založila PARTYPACK.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Magdaléna',
    role: 'Marketingová manažerka',
    description: 'Magda si získala Miu především svou pečlivostí a je aktuálně velkým přínosem v Partypacku. Zároveň od Mii chytá její perfekcionismus.',
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
    description: 'Tina je tu pro náš rozsáhlý tým hostesek, promotérů a modelek. K dispozici 24/7 tak, aby celý proces šel hladce.',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-purple-300 text-sm mb-6"
          >
            Náš tým
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Seznamte se s </span>
            <span className="gradient-text">Partypekáči</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tým profesionálů, kteří se postarají o to, aby vaše akce byla perfektní
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-3xl glass card-hover text-center">
                {/* Avatar placeholder */}
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} mb-6 flex items-center justify-center text-3xl font-bold text-white`}>
                  {member.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          Samozřejmě máme ještě mraky pomocníků – technika, elektrikáře, konstruktéra, tiskaře a mnoho dalších! ❤️
        </motion.p>
      </div>
    </section>
  );
}
