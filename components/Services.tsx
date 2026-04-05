// components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Bot, Cpu, Globe, ShieldCheck } from 'lucide-react'

const services = [
  { icon: Bot, title: 'Bots para Discord', description: 'Desarrollo de bots personalizados con moderación, economía, música y más.' },
  { icon: Cpu, title: 'Automatización IA', description: 'Soluciones inteligentes con machine learning para comunidades.' },
  { icon: Globe, title: 'Plataformas Web', description: 'Dashboards, landing pages y sistemas integrados con Discord OAuth.' },
  { icon: ShieldCheck, title: 'Seguridad y Cumplimiento', description: 'Auditoría de bots y cumplimiento de términos de Discord.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transformamos ideas en soluciones tecnológicas escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 glass-card p-6 hover:border-white/20 transition-all"
            >
              <service.icon className="w-12 h-12 text-gray-300 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}