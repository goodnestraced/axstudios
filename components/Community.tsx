// components/Community.tsx
'use client'

import { motion } from 'framer-motion'
import { DiscIcon, Users, MessageCircle, Trophy } from 'lucide-react'

export default function Community() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Comunidad</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Únete a miles de desarrolladores y entusiastas en nuestro servidor de Discord.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Users, value: '+5,000', label: 'Miembros Activos' },
            { icon: MessageCircle, value: '+50k', label: 'Mensajes/mes' },
            { icon: Trophy, value: '24/7', label: 'Soporte Técnico' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-[#5865F2]" />
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <a
            href="https://discord.gg/axstudios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            <DiscIcon size={24} />
            Unirse a Discord Server
          </a>
          <p className="text-gray-400 text-sm mt-4">
            +100 developers conectados · Eventos semanales · Código abierto
          </p>
        </motion.div>
      </div>
    </section>
  )
}