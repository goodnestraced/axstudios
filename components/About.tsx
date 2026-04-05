// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { Users, Code2, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Users, title: 'Comunidad Activa', description: 'Más de 5000+ miembros en Discord colaborando y creciendo juntos.' },
  { icon: Code2, title: 'Código de Calidad', description: 'Estándares modernos, TypeScript, pruebas y buenas prácticas.' },
  { icon: Shield, title: 'Seguridad Primero', description: 'Cumplimos con políticas de Discord y protección de datos.' },
  { icon: Zap, title: 'Innovación Continua', description: 'Tecnologías de vanguardia y soluciones escalables.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre AX STUDIOS</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Somos un equipo de desarrolladores apasionados por la tecnología y las comunidades digitales. 
            Operamos principalmente en Discord, creando herramientas, bots y experiencias interactivas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:border-white/20 transition-all duration-300 group"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-300 group-hover:text-white transition-colors" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}