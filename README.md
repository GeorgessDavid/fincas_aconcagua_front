# Fincas de Aconcagua Front

Frontend institucional de **Fincas de Aconcagua**, un desarrollo residencial de parcelas en Ingeniero Maschwitz, Buenos Aires. La aplicación está construida con Next.js y expone una landing orientada a presentación comercial, captación de consultas y visibilidad SEO.

## Stack

- Next.js 16 + React 19
- TypeScript
- Material UI + Emotion
- Tailwind CSS 4
- Framer Motion
- React Hook Form
- React Toastify

## Funcionalidades

- Landing principal con secciones de hero, concepto, parcelas, beneficios, galería, ubicación y contacto.
- Integración con API externa para:
  - envío de formularios de contacto (`POST /contact`)
  - carga de imágenes de galería (`GET /images?max=...`)
- Configuración SEO centralizada en `src/lib/seo.ts`
- Generación de `sitemap.xml`, `robots.txt` y `manifest.webmanifest`
- Metadatos Open Graph, Twitter Cards e íconos para compartición y PWA básica

## Requisitos

- Node.js 20 o superior
- pnpm, npm, yarn o bun

## Variables de entorno

Crear un archivo `.env` con valores como estos:

```env
NEXT_PUBLIC_API_URL=http://localhost:3002
NEXT_PUBLIC_SITE_URL=https://www.fincasdeaconcagua.com.ar
```

### Variables usadas

- `NEXT_PUBLIC_API_URL`: base URL del backend consumido por contacto e imágenes.
- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio usada para canonical, Open Graph, sitemap y robots.

## Desarrollo local

Instalación de dependencias:

```bash
pnpm install
```

Servidor de desarrollo:

```bash
pnpm dev
```

La aplicación quedará disponible en `http://localhost:3000`.

## Scripts

- `pnpm dev`: inicia el entorno de desarrollo
- `pnpm build`: genera la build de producción
- `pnpm start`: levanta la build generada
- `pnpm lint`: ejecuta ESLint

## Estructura principal

```text
src/
  app/                App Router, metadata, sitemap, robots y manifest
  components/         UI del sitio y secciones de la home
  hooks/              Integraciones cliente con la API
  lib/                SEO y configuración de MUI
  page-contents/      Composición de páginas
public/               Assets e imágenes públicas
```

## SEO y despliegue

- La configuración base del sitio vive en `src/lib/seo.ts`.
- `src/app/sitemap.ts` genera el sitemap principal.
- `src/app/robots.ts` publica las reglas de indexación y la URL del sitemap.
- `src/app/manifest.ts` define el manifiesto web.

Para producción, asegurá que `NEXT_PUBLIC_SITE_URL` apunte al dominio final del sitio y que `NEXT_PUBLIC_API_URL` apunte al backend público.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Ver [LICENSE](./LICENSE).
