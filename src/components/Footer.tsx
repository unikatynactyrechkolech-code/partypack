'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone, Sparkles, Heart } from 'lucide-react';

const footerLinks = {
  sluzby: [
    { label: 'Fotokoutek', href: '/sluzby/fotokoutek' },
    { label: 'AI Fotokoutek', href: '/sluzby/ai-fotokoutek' },
    { label: 'Hostesky', href: '/sluzby/hostesky' },
    { label: '360° Partyspin', href: '/sluzby/partyspin' },
    { label: 'AI Draw Bot', href: '/sluzby/ai-draw-bot' },
    { label: 'Další služby', href: '/sluzby/dalsi' },
  ],
  info: [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Ceník', href: '/cenik' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0F] pt-20 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://partypack.cz/wp-content/uploads/2022/01/cropped-cropped-logo-znak-png-male.png"
                alt="PARTYPACK"
                width={160}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Balíček služeb na vaše akce – fotokoutek, hostesky, 360° partyspin a další! 
              Milujeme naší práci, proto do toho dáváme srdce a je to znát!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/partypackcz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/partypack_cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Služby</h4>
            <ul className="space-y-3">
              {footerLinks.sluzby.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Informace</h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span>Mandloňová 1175/16, Praha 9 Hrdlořezy</span>
              </li>
              <li>
                <a
                  href="tel:+420720448660"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span>+420 720 448 660</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@partypack.cz"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>info@partypack.cz</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Partypack. Vytvořeno s
              <Heart className="w-4 h-4 text-indigo-400 inline" />
              v Praze.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/vop" className="hover:text-white transition-colors">
                VOP
              </Link>
              <Link href="/gdpr" className="hover:text-white transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
