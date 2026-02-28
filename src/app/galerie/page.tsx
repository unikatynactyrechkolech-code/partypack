'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const categories = ['Vše', 'Fotokoutek', 'Firemní akce', 'Partyspin', 'Hostesky', 'AI Fotokoutek'];

const galleryItems = [
  { 
    id: 1, 
    title: 'Fotokoutek na akci', 
    category: 'Fotokoutek', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-20.jpg' 
  },
  { 
    id: 2, 
    title: 'Party atmosféra', 
    category: 'Firemní akce', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-25.jpg' 
  },
  { 
    id: 3, 
    title: 'Firemní večírek', 
    category: 'Firemní akce', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-35.jpg' 
  },
  { 
    id: 4, 
    title: 'Zábava s rekvizitami', 
    category: 'Fotokoutek', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-54.jpg' 
  },
  { 
    id: 5, 
    title: 'Partyspin 360°', 
    category: 'Partyspin', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-77.jpg' 
  },
  { 
    id: 6, 
    title: 'Hostesky na akci', 
    category: 'Hostesky', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-80.jpg' 
  },
  { 
    id: 7, 
    title: 'Team building', 
    category: 'Firemní akce', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-77-1.jpg' 
  },
  { 
    id: 8, 
    title: 'Fotokoutek fun', 
    category: 'Fotokoutek', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-84.jpg' 
  },
  { 
    id: 9, 
    title: 'Party vibes', 
    category: 'Firemní akce', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Partypack-9.jpg' 
  },
  { 
    id: 10, 
    title: 'Fotokoutek template', 
    category: 'AI Fotokoutek', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/Template-pro-klienty-fotokoutek-3-1.jpg' 
  },
  { 
    id: 11, 
    title: 'Event fotky', 
    category: 'Fotokoutek', 
    image: 'https://partypack.cz/wp-content/uploads/2026/02/000101_031459.jpg' 
  },
  { 
    id: 12, 
    title: 'Party time', 
    category: 'Partyspin', 
    image: 'https://partypack.cz/wp-content/uploads/2022/01/Partytime.jpg' 
  },
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('Vše');

  const filteredItems = activeCategory === 'Vše' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm mb-6"
          >
            Galerie
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Fotky z </span>
            <span className="gradient-text">našich akcí</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Prohlédněte si ukázky naší práce. Více než 3750 úspěšných akcí za 10 let.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-purple-300 text-xs font-medium mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-sm font-semibold group-hover:text-purple-200 transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Load more / Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            A to je jen zlomek! Máme přes 115 stránek galerií s více než 3750 akcemi.
          </p>
          
          <a
            href="https://www.instagram.com/partypack_cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            Více na Instagramu @partypack_cz
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">3750+</div>
              <p className="text-gray-600 text-sm">Úspěšných akcí</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">702k+</div>
              <p className="text-gray-600 text-sm">Nafocených fotek</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">115+</div>
              <p className="text-gray-600 text-sm">Stránek galerií</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold gradient-text">10+</div>
              <p className="text-gray-600 text-sm">Let zkušeností</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
