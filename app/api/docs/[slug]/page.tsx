// app/docs/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface DocPageProps {
  params: {
    slug: string
  }
}

const docsContent = {
  tos: {
    title: 'Términos de Servicio',
    content: `# Términos de Servicio de AX STUDIOS...`, // Contenido completo (ver respuesta anterior)
  },
  privacy: {
    title: 'Política de Privacidad',
    content: `# Política de Privacidad de AX STUDIOS...`, // Contenido completo
  },
}

export async function generateStaticParams() {
  return [
    { slug: 'tos' },
    { slug: 'privacy' },
  ]
}

export default function DocPage({ params }: DocPageProps) {
  const { slug } = params
  const doc = docsContent[slug as keyof typeof docsContent]

  if (!doc) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
        <div className="glass-card p-8 md:p-12 prose prose-invert prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{doc.title}</h1>
          <div className="prose-headings:text-white prose-p:text-gray-300">
            {/* Renderizado del contenido markdown simplificado */}
            {doc.content.split('\n').map((line, idx) => {
              if (line.startsWith('# ')) return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>
              if (line.startsWith('## ')) return <h2 key={idx} className="text-2xl font-semibold mt-6 mb-3">{line.replace('## ', '')}</h2>
              if (line.startsWith('- ')) return <li key={idx} className="ml-4">{line.replace('- ', '')}</li>
              if (line.trim() === '') return <br key={idx} />
              if (!line.startsWith('#')) return <p key={idx} className="mb-4">{line}</p>
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}