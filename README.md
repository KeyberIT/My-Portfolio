# Keyber Mendoza | Software Engineer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)

> Portafolio interactivo diseñado y construido para demostrar capacidad técnica, arquitectura limpia y dominio del stack moderno de JavaScript/TypeScript.

## 🏗️ Technical Architecture & Stack

Este proyecto no es una simple landing page; está diseñado bajo estándares estrictos de ingeniería, priorizando escalabilidad, tipado fuerte y DX (Developer Experience).

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) para Server-Side Rendering (SSR) y optimización de rutas.
- **UI Library:** [React 19](https://react.dev/), aprovechando las últimas capacidades de renderizado concurrente y hooks nativos.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) mediante utilidades inyectadas vía PostCSS, garantizando una carga CSS mínima y un sistema de diseño consistente.
- **Type Safety:** **TypeScript** configurado en modo `strict: true`. No se permiten castings implícitos ni escapes inseguros (`any`).
- **Package Manager:** **Bun** para resoluciones de dependencias ultrarrápidas y ejecución de scripts nativos.

## 📂 Project Structure

El código fuente sigue los principios de **Atomic Design** y separación de responsabilidades:

```text
src/
├── app/                  # Routing de Next.js (App Router) y layouts principales.
├── components/
│   ├── sections/         # Componentes de alto nivel (Hero, About, Featured, Jobs).
│   └── ui/               # Componentes base reutilizables y agnósticos al contexto.
└── lib/                  # Utilidades, configuraciones y helpers tipados.
```

## 🚀 Running Locally

Para levantar este proyecto en tu entorno local, asegúrate de tener [Bun](https://bun.sh/) instalado.

```bash
# 1. Instalar dependencias
bun install

# 2. Iniciar el servidor de desarrollo
bun run dev

# 3. Compilar para producción
bun run build
```

El proyecto estará disponible en `http://localhost:3000`.

## 🧠 Engineering Standards

- **Strict Type Checking:** Todo el estado, las props y los retornos de funciones están rígidamente tipados.
- **Performance First:** Uso de optimización nativa y modularidad para garantizar un LCP (Largest Contentful Paint) óptimo.
- **Semantic HTML & A11y:** Estructura de documentos accesible por defecto.

---
*Diseñado y desarrollado por Keyber Mendoza.*
