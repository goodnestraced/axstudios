// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Aquí puedes integrar con servicios como Resend, Nodemailer, o guardar en DB
    console.log('Nuevo mensaje de contacto:', { name, email, message })

    // Simular envío exitoso
    return NextResponse.json(
      { success: true, message: 'Mensaje recibido correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}