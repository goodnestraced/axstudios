# AX STUDIOS - Web Oficial

Web corporativa moderna para el equipo de desarrollo AX STUDIOS, enfocada en comunidad digital (Discord), con diseño futurista, animaciones y rutas de documentación.

> [!WARNING]  
> Esta pagina web es abierta a todo uso, haciendo nombre del creador. si se usa sin indicar el creador estas robando un proyecto (Copyright). Este codigo puede ser que se actualice a medida de mis necesidades

---

## 🚀 Tecnologías

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (iconos)
- **Sonner** (toasts)

---

## 📦 Instalación

```git clone 
cd ax-studios
npm install
npm run dev
Abre http://localhost:3000
```

---

## 🎨 Características

- [] Diseño 100% responsive (móvil, tablet, desktop)
- [] Modo oscuro por defecto con gradientes y glassmorphism
- [] Animaciones suaves al hacer scroll y hover
- [] Navbar sticky con efecto blur
- [] Formulario de contacto funcional (API route)
- [] Documentación legal (TOS y Privacy Policy) enfocada en Discord
- [] SEO optimizado (meta tags, Open Graph)
- [] Preparado para deploy en Vercel

---

## 🗂️ Estructura de carpetas

ax-studios/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Endpoint POST para formulario de contacto
│   ├── docs/
│   │   └── [slug]/
│   │       └── page.tsx          # Ruta dinámica para /docs/tos y /docs/privacy
│   ├── favicon.ico
│   ├── globals.css               # Estilos globales y variables Tailwind
│   ├── layout.tsx                # Layout raíz (Navbar, Footer, fuentes)
│   ├── loading.tsx               # Estado de carga global
│   ├── not-found.tsx             # Página 404 personalizada
│   └── page.tsx                  # Página principal (landing)
├── components/
│   ├── About.tsx                 # Sección Sobre el equipo
│   ├── Community.tsx             # Sección Comunidad (Discord)
│   ├── Contact.tsx               # Sección Contacto (formulario)
│   ├── Footer.tsx                # Footer profesional con enlaces
│   ├── Hero.tsx                  # Sección principal (landing)
│   ├── Navbar.tsx                # Barra de navegación sticky con blur
│   ├── Projects.tsx              # Portafolio de proyectos
│   └── Services.tsx              # Servicios ofrecidos
├── public/
│   └── og-image.png              # Imagen para Open Graph (opcional)
├── .gitignore
├── next.config.mjs               # Configuración de Next.js (imágenes, etc.)
├── package.json                  # Dependencias y scripts
├── postcss.config.js             # Configuración de PostCSS (Tailwind)
├── tailwind.config.ts            # Configuración de Tailwind (colores, animaciones)
└── tsconfig.json                 # Configuración de TypeScript

---
## 🔧 Scripts

- npm run dev – entorno de desarrollo
- npm run build – build de producción
- npm start – iniciar en producción
- npm run lint – ejecutar ESLint

---

## 🌐 Despliegue

Recomendado: Vercel
https://vercel.com/button

> [!IMPORTANT]  
> Puedes hacerle Fork al codigo y ajustarlo al hosting que uses no es obligatorio el uso de Vercel

---

## 📄 Licencia

- **MIT**

---