'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'fotokoutek',
    title: 'Fotokoutek',
    subtitle: 'Partysnap',
    description: 'Naše designová fotobudka s dvěmi velkými obrazovkami zajistí rychlý výběr, zasílání na email a srandu u prohlížení nafocených fotek. Na každé akci je přítomná naše obsluha, která se stará o hladký chod focení.',
    href: '/sluzby/fotokoutek',
    price: 'od 10 000 Kč',
    features: [
      'Neomezený tisk fotek',
      '45 ks rekvizit',
      'Speciální pozadí',
      'Profesionální obsluha',
      'Online galerie po akci',
      'Grafika na míru',
      'Polep do brandu klienta',
      'Doprava v ceně',
    ],
    extras: [
      { name: 'LED stěna & GIFy', price: '+3500 Kč' },
      { name: 'Party Touch funkce', price: '+2000 Kč' },
    ],
  },
  {
    id: 'ai-fotokoutek',
    title: 'AI Fotokoutek',
    subtitle: 'Umělá inteligence',
    description: 'Staňte se kýmkoli, kdekoli a to díky AI! Vyfotíme vás a umělá inteligence vytvoří unikátní snímek s vybraným filtrem. Výběr filtrů pro jednotlivce i pro skupinky až 10 osob!',
    href: '/sluzby/ai-fotokoutek',
    price: 'od 14 000 Kč',
    features: [
      'Až 8 AI filtrů na výběr',
      'Skupiny 2-10 osob',
      'Neomezený tisk',
      'Sdílení přes QR kód',
      'Grafika do každé fotky',
      'Filtr na míru',
      'Online galerie do 24h',
      'Prostor pouze 2x2m',
    ],
    extras: [
      { name: 'Filtr na míru', price: 'dle domluvy' },
    ],
  },
  {
    id: 'hostesky',
    title: 'Hostesky',
    subtitle: 'Modelky & Promotéři',
    description: 'Naše hostesky budou nejkrásnější ozdobou na každé vaší akci! Velká databáze slečen dokáže pozvednout jakýkoli event. Od firemní konference přes luxusní event až po veletrh.',
    href: '/sluzby/hostesky',
    price: 'od 270 Kč/hod',
    features: [
      'Databáze 1000+ osob',
      'Hostesky na míru',
      'Modelky na přehlídky',
      'Promotéři a promotérky',
      'Dress code na míru',
      'Úprava vlasů a líčení',
      'Supervize na akci',
      'Debaras a šatnářky',
    ],
    extras: [],
  },
  {
    id: 'partyspin',
    title: '360° Partyspin',
    subtitle: 'Nová vlna zábavy',
    description: 'Stoupnete si na Partyspin a užijete si 360° párty ve formě kamery, která vás několikrát obtočí! Video je ideální pro sdílení na IG Stories, Reels nebo TikTok.',
    href: '/sluzby/partyspin',
    price: 'od 9 900 Kč',
    features: [
      '4K kvalita videa',
      'Kiosek s iPadem',
      'Velký ringlight',
      'Grafika na míru',
      'Tematické rekvizity',
      'AirDrop / Email / QR',
      'LED stěna k dispozici',
      'LED meče',
    ],
    extras: [
      { name: 'LED stěna', price: '+3500 Kč' },
      { name: 'LED meče', price: '+1500 Kč' },
    ],
  },
  {
    id: 'ai-draw-bot',
    title: 'AI Draw Bot',
    subtitle: 'Robotické rameno',
    description: 'Revoluční bot využívá pokročilou umělou inteligenci a robotické rameno k vytváření skicových portrétů do 40 vteřin! Stačí se vyfotit a sledovat, jak robot přenáší vaše rysy na papír.',
    href: '/sluzby/ai-draw-bot',
    price: 'od 19 000 Kč',
    features: [
      '3 robotická ramena',
      'Portrét za 40 vteřin',
      'Kvalitní fotopapír',
      'Branding na papírky',
      '2h provozu v ceně',
      '200 brandových papírků',
      'Karikatura i klasika',
      'Portréty mazlíčků',
    ],
    extras: [
      { name: 'Další hodina', price: '+1500 Kč' },
      { name: '+100 papírků', price: '+500 Kč' },
    ],
  },
  {
    id: 'dalsi',
    title: 'Další služby',
    subtitle: 'Kompletní servis',
    description: 'Sestavte si svůj balíček služeb! Nabízíme foto/video report, výzdobu, DJ, moderátora, scrapbooky, dětské aktivity, módní přehlídky a mnoho dalšího.',
    href: '/sluzby/dalsi',
    price: 'individuální',
    features: [
      'Partyprint GO',
      'Modelky a módní přehlídky',
      'Foto & Video report',
      'Fotostěna a výzdoba',
      'Scrapbooky a knihy hostů',
      'Dětské aktivity',
      'DJ a moderátor',
      'Zapůjčení stanů a techniky',
    ],
    extras: [],
  },
];

export default function SluzbyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Naše služby
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Co dokážeme </span>
            <span className="gradient-text">zajistit?</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sestavte si svůj balíček služeb a získejte slevy 10–30%
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              id={service.id}
              className="scroll-mt-32"
            >
              <div className="p-8 lg:p-12 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
                <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left - Info */}
                  <div>
                    {/* Title */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">{service.subtitle}</p>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-3xl font-bold gradient-text">{service.price}</span>
                    </div>

                    {/* Extras */}
                    {service.extras.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-gray-900 font-semibold mb-3">Příplatky:</h4>
                        <div className="flex flex-wrap gap-3">
                          {service.extras.map((extra) => (
                            <span
                              key={extra.name}
                              className="px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700"
                            >
                              {extra.name}: <span className="text-purple-600">{extra.price}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      Nezávazná poptávka
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right - Features */}
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-6">Co je v ceně:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100"
                        >
                          <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-12 rounded-3xl bg-gray-50 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nevíte si rady?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Napište nám a my vám pomůžeme sestavit perfektní balíček služeb na míru vaší akci.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Kontaktujte nás
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
