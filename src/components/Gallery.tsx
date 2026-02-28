'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

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
    category: 'Events',
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
];

export default function Gallery() {
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
            Galerie
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            <span className="text-gray-900">Fotky z </span>
            <span className="gradient-text">akcí</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Prohlédněte si ukázky naší práce
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-purple-400 text-sm font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/partypack_cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span>@partypack_cz</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
