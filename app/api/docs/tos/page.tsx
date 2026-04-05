// app/docs/tos/page.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Términos de Servicio - AX STUDIOS (Bots de Discord)',
  description: 'Términos de servicio para el uso de bots de Discord desarrollados por AX STUDIOS. Normas de comunidad, uso de datos y cumplimiento de políticas de Discord.',
}

export default function TosPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
        
        <div className="glass-card p-8 md:p-12 prose prose-invert prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Términos de Servicio</h1>
          <p className="text-gray-400 mb-6">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Aceptación de los términos</h2>
          <p className="text-gray-300 mb-4">
            Al utilizar cualquier bot de Discord desarrollado por AX STUDIOS (en adelante, "el Bot") o acceder a nuestro servidor de Discord, aceptas cumplir con estos Términos de Servicio, la <Link href="/docs/privacy" className="text-blue-400 hover:underline">Política de Privacidad</Link> y las <strong>Políticas de Comunidad de Discord</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso del Bot y del servidor de Discord</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>No debes usar el Bot para enviar spam, mensajes automatizados no autorizados o acosar a otros usuarios.</li>
            <li>No intentes descompilar, hacer ingeniería inversa o extraer el código fuente del Bot.</li>
            <li>Está prohibido explotar vulnerabilidades del Bot o del servidor para obtener ventajas injustas.</li>
            <li>Los comandos que impliquen contenido NSFW, ilegal o violento serán bloqueados y pueden resultar en ban del servidor.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Normas de comunidad en Discord</h2>
          <p className="text-gray-300 mb-2">Todos los miembros del servidor de AX STUDIOS deben cumplir con:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Respeto mutuo: No se tolera el acoso, discriminación, amenazas o lenguaje ofensivo.</li>
            <li>No compartir contenido ilegal, malware o enlaces sospechosos.</li>
            <li>No hacer spam en canales de texto o voz (incluyendo menciones masivas).</li>
            <li>Los moderadores pueden aplicar warns, mutes o expulsiones según su criterio.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datos recopilados por el Bot</h2>
          <p className="text-gray-300 mb-4">
            El Bot puede almacenar ciertos datos para funcionar correctamente, como:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>ID de usuario de Discord</li>
            <li>ID del servidor (guild) donde se usa el Bot</li>
            <li>Registro de comandos ejecutados (para depuración y prevención de abusos)</li>
            <li>Configuraciones personalizadas por servidor (prefijos, roles de moderación, etc.)</li>
          </ul>
          <p className="text-gray-300 mt-2">
            No recopilamos mensajes privados ni contenido sensible fuera de lo necesario. Consulta nuestra <Link href="/docs/privacy" className="text-blue-400 hover:underline">Política de Privacidad</Link> para más detalles.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cumplimiento de políticas de Discord</h2>
          <p className="text-gray-300 mb-4">
            AX STUDIOS se compromete a seguir estrictamente los <strong>Términos de Servicio de Discord</strong> y las <strong>Directrices de la Comunidad de Discord</strong>. Cualquier violación reportada será investigada y, de ser necesario, el Bot será eliminado o el usuario será expulsado.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitación de responsabilidad</h2>
          <p className="text-gray-300 mb-4">
            El Bot se proporciona "tal cual". No garantizamos que esté libre de errores o interrupciones. AX STUDIOS no se hace responsable por daños directos o indirectos derivados del uso del Bot.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cambios en los términos</h2>
          <p className="text-gray-300 mb-4">
            Podemos actualizar estos términos en cualquier momento. Notificaremos los cambios en nuestro servidor de Discord con al menos 7 días de anticipación. El uso continuado del Bot implica la aceptación de los nuevos términos.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contacto</h2>
          <p className="text-gray-300">
            Para preguntas o reportes, abre un ticket en nuestro <a href="https://discord.gg/axstudios" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">servidor de Discord</a> o envía un correo a <strong>legal@axstudios.com</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}