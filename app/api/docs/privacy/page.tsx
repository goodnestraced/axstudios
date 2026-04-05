// app/docs/privacy/page.tsx
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Política de Privacidad - AX STUDIOS (Bots de Discord)',
  description: 'Política de privacidad para los bots de Discord de AX STUDIOS. Explicamos qué datos recopilamos, cómo los usamos y tus derechos según GDPR y CCPA.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={18} />
          Volver al inicio
        </Link>
        
        <div className="glass-card p-8 md:p-12 prose prose-invert prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>
          <p className="text-gray-400 mb-6">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información que recopilamos</h2>
          <p className="text-gray-300 mb-2">
            Cuando utilizas nuestros bots de Discord, podemos recopilar los siguientes datos:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Datos de usuario:</strong> ID de Discord, nombre de usuario, avatar (solo para funcionalidad del bot).</li>
            <li><strong>Datos de servidor:</strong> ID del servidor (guild), lista de canales y roles (para configuración de permisos).</li>
            <li><strong>Comandos ejecutados:</strong> Registro temporal de comandos para depuración, prevención de abusos y mejora del bot.</li>
            <li><strong>Configuraciones personalizadas:</strong> Prefijos, roles de moderación, canales de logs, etc.</li>
            <li><strong>Interacciones:</strong> Reacciones, mensajes que mencionen al bot (solo el contenido necesario para responder).</li>
          </ul>
          <p className="text-gray-300 mt-2">
            <strong>No recopilamos mensajes privados (DMs) a menos que el bot sea explícitamente invocado en ellos</strong>, y nunca almacenamos el contenido de conversaciones privadas fuera de lo estrictamente necesario para ejecutar el comando.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso de la información</h2>
          <p className="text-gray-300 mb-4">Los datos recopilados se utilizan para:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Proveer las funcionalidades del bot (moderación, economía, música, etc.).</li>
            <li>Mejorar la seguridad y prevenir abusos (detección de spam, comandos maliciosos).</li>
            <li>Analizar el uso para optimizar el rendimiento y corregir errores.</li>
            <li>Cumplir con solicitudes legales o regulatorias.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Almacenamiento y seguridad</h2>
          <p className="text-gray-300 mb-4">
            Los datos se almacenan en servidores seguros con cifrado en reposo. Los registros de comandos se conservan por un máximo de 90 días, después de los cuales se eliminan automáticamente. Las configuraciones de servidor se mantienen mientras el bot esté presente en el servidor; al expulsar el bot, todos los datos asociados se eliminan en un plazo de 30 días.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Compartición de datos con terceros</h2>
          <p className="text-gray-300 mb-4">
            No vendemos, alquilamos ni compartimos tus datos personales con terceros, excepto en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Cuando sea requerido por ley, orden judicial o proceso legal.</li>
            <li>Para proteger los derechos, propiedad o seguridad de AX STUDIOS y sus usuarios.</li>
            <li>Con tu consentimiento explícito.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            Podemos usar servicios de hosting o análisis (como Vercel o Supabase) que cumplen con GDPR/CCPA. Dichos servicios tienen sus propias políticas de privacidad.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cumplimiento de políticas de Discord</h2>
          <p className="text-gray-300 mb-4">
            Nuestros bots operan dentro de los límites establecidos por los <strong>Términos de Servicio de Discord</strong> y las <strong>Directrices para Desarrollores de Discord</strong>. No accedemos a datos fuera de los permisos otorgados por los usuarios (por ejemplo, no leemos mensajes sin que el bot sea mencionado). Si Discord actualiza sus políticas, adaptaremos nuestros bots en consecuencia.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Tus derechos (GDPR / CCPA)</h2>
          <p className="text-gray-300 mb-2">Si resides en la Unión Europea (GDPR) o California (CCPA), tienes derecho a:</p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Acceder a los datos que tenemos sobre ti.</li>
            <li>Solicitar la corrección de datos incorrectos.</li>
            <li>Solicitar la eliminación de tus datos (sujeto a limitaciones operativas).</li>
            <li>Oponerte al procesamiento de tus datos para fines no esenciales.</li>
          </ul>
          <p className="text-gray-300 mt-2">
            Para ejercer estos derechos, contacta a un administrador en nuestro servidor de Discord o envía un correo a <strong>privacy@axstudios.com</strong>. Responderemos en un plazo máximo de 30 días.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Menores de edad</h2>
          <p className="text-gray-300 mb-4">
            Los bots de Discord no están dirigidos a menores de 13 años. No recopilamos conscientemente datos de menores. Si eres padre/tutor y crees que tu hijo nos ha proporcionado datos, contáctanos para eliminarlos.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cambios a esta política</h2>
          <p className="text-gray-300 mb-4">
            Notificaremos cualquier cambio significativo en nuestro servidor de Discord. La versión actualizada entrará en vigor 7 días después de la notificación. El uso continuado del bot implica la aceptación de los cambios.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contacto</h2>
          <p className="text-gray-300">
            Para preguntas sobre privacidad, abre un ticket en <a href="https://discord.gg/axstudios" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">nuestro Discord</a> o escribe a <strong>privacy@axstudios.com</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}