'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const pricingPlans = [
  {
    id: 'fotokoutek',
    name: 'Fotobudka Partysnap',
    price: '10 000',
    unit: 'Kč',
    description: 'Designová fotobudka s neomezeným tiskem a profesionální obsluhou.',
    features: [
      'Neomezený tisk fotek',
      'Doprava v ceně',
      'Výběr ze 100 pozadí',
      '45 rekvizit',
      'Online galerie po akci',
      'Grafika na míru',
      'Profesionální obsluha',
    ],
    color: 'from-purple-500 to-violet-600',
    popular: false,
  },
  {
    id: 'partyspin',
    name: 'Partyspin 360°',
    price: '9 900',
    unit: 'Kč',
    description: '360° videa ideální pro Reels, Stories a TikTok.',
    features: [
      '4K kvalita videa',
      'Grafika a efekty',
      'AirDrop / Email / QR kód',
      'Kiosek s iPadem',
      'Velký ringlight',
      'Tematické rekvizity',
      'Profesionální obsluha',
    ],
    color: 'from-cyan-500 to-blue-600',
    popular: false,
  },
  {
    id: 'ai-fotokoutek',
    name: 'AI Fotokoutek',
    price: '14 000',
    unit: 'Kč',
    description: 'Staňte se kýmkoli díky umělé inteligenci.',
    features: [
      'Až 8 AI filtrů',
      'Filtry pro skupiny 2-10 osob',
      'Neomezený tisk',
      'Sdílení přes QR kód',
      'Grafika na míru',
      'Online galerie do 24h',
      'Profesionální obsluha',
    ],
    color: 'from-pink-500 to-rose-600',
    popular: true,
  },
  {
    id: 'ai-draw-bot',
    name: 'AI Draw Bot',
    price: '19 000',
    unit: 'Kč',
    description: 'Robotické rameno vytvoří portrét pomocí AI.',
    features: [
      '3 robotická ramena',
      'Portrét za 40 vteřin',
      '2 hodiny provozu',
      '200 brandových papírků',
      'Branding na míru',
      'Profesionální obsluha',
      'Doprava v ceně',
    ],
    color: 'from-green-500 to-emerald-600',
    popular: false,
  },
];

const hosteskyPricing = {
  name: 'Hostesky | Promotéři | Modelky',
  price: '270',
  unit: 'Kč / hod',
  description: 'Profesionální hostesky, modelky a promotéři na míru vašim požadavkům.',
  features: [
    'Databáze 1000+ osob',
    'Dress code na míru',
    'Úprava vlasů a líčení',
    'Supervize na akci',
    'Setkarty ke schválení',
    'Šatnářky a debaras',
  ],
};

const plesPackages = [
  {
    name: 'PLES',
    price: '3 000',
    unit: 'Kč',
    description: 'Ideální pro menší plesy do 500 hostů',
    features: [
      'Hosté platí 60 Kč / foto',
      '10 fotek zdarma pro organizátory',
      'Doprava po ČR',
      'Obsluha 2x',
      'Pozadí z nabídky',
      'Plesové rekvizity',
      'Online galerie po akci',
      'Grafika na míru',
    ],
  },
  {
    name: 'TOP',
    price: 'ZDARMA',
    unit: '',
    description: 'Pro velké plesy nad 500 hostů',
    features: [
      'Hosté platí 60 Kč / foto',
      'Doprava po ČR',
      'Obsluha 2x',
      'Pozadí z nabídky',
      'Plesové rekvizity',
      'Online galerie po akci',
      'Grafika na míru',
    ],
    popular: true,
  },
  {
    name: 'MATURITNÍ',
    price: '2 000',
    unit: 'Kč',
    description: 'Maturanti mají fotky ZDARMA v ∞ množství',
    features: [
      'Maturanti zdarma bez omezení',
      'Ostatní hosté 60 Kč / foto',
      'Doprava po ČR',
      'Obsluha 2x',
      'Pozadí z nabídky',
      'Plesové rekvizity',
      'Online galerie po akci',
      'Grafika na míru',
    ],
  },
];

const faqs = [
  {
    question: 'Jak moc dopředu je nutné si termín rezervovat?',
    answer: 'Doporučujeme rezervovat alespoň 2-4 týdny předem, ideálně i dříve. V sezóně (plesy, Vánoce) je poptávka vyšší, proto rezervujte s předstihem.',
  },
  {
    question: 'Je možná sleva při výběru více aktivit?',
    answer: 'Ano! Při objednání více služeb nabízíme slevy 10-30% v závislosti na velikosti objednávky.',
  },
  {
    question: 'Může akce probíhat ve venkovních prostorách?',
    answer: 'Ano, jsme připraveni na outdoor akce. V případě nepříznivého počasí doporučujeme mít připravenou mokrou variantu nebo stan.',
  },
  {
    question: 'Jsme omezení počtem hostesek, které dokážete zajistit?',
    answer: 'Naše databáze obsahuje přes 1000 ověřených hostesek, promotérů a modelek, takže zvládneme i velké akce.',
  },
];

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-gray-900 font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function CenikPage() {
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
            Ceník
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Kolik to u nás </span>
            <span className="gradient-text">stojí?</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparentní ceny bez skrytých poplatků. Při objednání více služeb získáte slevy 10-30%.
          </p>
        </motion.div>

        {/* Main Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-3xl bg-gray-50 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium">
                    Nejoblíbenější
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                <span className="text-white text-xl font-bold">{plan.name.charAt(0)}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold gradient-text">od {plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/kontakt"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border-2 border-black text-black hover:bg-gray-50'
                }`}
              >
                Nezávazná poptávka
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Hostesky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gray-50 border border-gray-100 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{hosteskyPricing.name}</h3>
              <p className="text-gray-600 mb-4">{hosteskyPricing.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold gradient-text">od {hosteskyPricing.price}</span>
                <span className="text-gray-500 ml-2">{hosteskyPricing.unit}</span>
              </div>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Objednat hostesky
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {hosteskyPricing.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Plesové balíčky */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Plesové & Maturitní balíčky
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Speciální nabídka pro organizátory plesů a maturitních večírků.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {plesPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-3xl bg-gray-50 border ${
                  pkg.popular ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium">
                      Nejlepší hodnota
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold gradient-text">{pkg.price}</span>
                  {pkg.unit && <span className="text-gray-500 ml-2">{pkg.unit}</span>}
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="block w-full py-3 rounded-xl font-semibold text-center border-2 border-black text-black hover:bg-gray-50 transition-all duration-300"
                >
                  Objednat
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text">10</div>
              <p className="text-gray-600 text-sm">Fotobudek</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">1000+</div>
              <p className="text-gray-600 text-sm">Ověřených hostesek</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">3</div>
              <p className="text-gray-600 text-sm">AI Draw Bot</p>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">3</div>
              <p className="text-gray-600 text-sm">360° Spin</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">Nejčastější dotazy</h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <FAQ key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
