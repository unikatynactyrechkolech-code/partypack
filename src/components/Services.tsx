'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'fotokoutek',
    title: 'Fotobudka | GIFy',
    subtitle: 'Partysnap',
    description: 'Designová fotobudka s dvěma velkými obrazovkami, neomezeným tiskem a profesionální obsluhou.',
    image: 'https://partypack.cz/wp-content/uploads/2023/07/MiaGebauer-292-uai-720x720.jpg',
    href: '/sluzby/fotokoutek',
    price: 'od 10 000 Kč',
    features: ['Neomezený tisk', '45 rekvizit', 'Online galerie'],
  },
  {
    id: 'hostesky',
    title: 'Hostesky | Modelky',
    subtitle: 'Profesionální tým',
    description: 'Profesionální hostesky, modelky a promotéři na míru vašim požadavkům.',
    image: 'https://partypack.cz/wp-content/uploads/2024/03/IMG_6080-1-scaled-uai-720x720.jpg',
    href: '/sluzby/hostesky',
    price: 'od 270 Kč/hod',
    features: ['Databáze 1000+ osob', 'Dress code na míru', 'Supervize'],
  },
  {
    id: 'ai-fotokoutek',
    title: 'Fotokoutek s AI',
    subtitle: 'Umělá inteligence',
    description: 'Staňte se kýmkoli, kdekoli! Vyfotíme vás a AI vytvoří unikátní snímek s vybraným filtrem.',
    image: 'https://partypack.cz/wp-content/uploads/2024/08/58768807-6935-40bb-bd65-5ecb1af5b9fa.png',
    href: '/sluzby/ai-fotokoutek',
    price: 'od 14 000 Kč',
    features: ['Až 8 AI filtrů', 'Skupiny do 10 osob', 'Vlastní grafika'],
  },
  {
    id: 'partyspin',
    title: '360° Partyspin',
    subtitle: 'Nová vlna zábavy',
    description: 'Kamera vás obtočí ze všech úhlů a vytvoří cool video ideální pro Stories a TikTok.',
    image: 'https://partypack.cz/wp-content/uploads/2024/03/fb6cc581-605d-44d2-99c1-56a5de3fa6a0-uai-1367x1822.jpg',
    href: '/sluzby/partyspin',
    price: 'od 9 900 Kč',
    features: ['4K kvalita', 'Grafika na míru', 'LED stěna'],
  },
  {
    id: 'ai-draw-bot',
    title: 'AI Draw Bot',
    subtitle: 'Robotické rameno',
    description: 'Revoluční bot s umělou inteligencí vytvoří portrét na fotopapír do 40 vteřin!',
    image: 'https://partypack.cz/wp-content/uploads/2025/03/Partypack-19-1-uai-1588x1191.jpg',
    href: '/sluzby/ai-draw-bot',
    price: 'od 19 000 Kč',
    features: ['3 robotická ramena', 'Portrét za 40s', 'Branding na míru'],
  },
  {
    id: 'dalsi',
    title: 'Další služby',
    subtitle: 'Kompletní servis',
    description: 'Foto/video report, výzdoba, DJ, moderátor, scrapbooky a mnoho dalšího.',
    image: 'https://partypack.cz/wp-content/uploads/2025/04/Partypack-27-scaled-uai-720x720.jpg',
    href: '/sluzby/dalsi',
    price: 'individuální',
    features: ['LED stěna', 'Dětské aktivity', 'Módní přehlídky'],
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6"
          >
            Naše služby
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            <span className="text-gray-900">Co dokážeme </span>
            <span className="gradient-text">zajistit?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sestavte si svůj balíček služeb a získejte slevy 10–30%
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="h-full rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-gray-400 mb-1">{service.subtitle}</p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-lg font-semibold gradient-text">
                        {service.price}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-cyan-600 group-hover:gap-2 transition-all">
                        Více info
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
