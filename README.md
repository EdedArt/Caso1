# Crust Pizza Co. — Landing Page Visual Clone

Implementación pixel-perfect de alta fidelidad para la landing page de **Crust Pizza Co.** a partir del diseño de referencia en `reference/design.png`.

Desarrollado con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** y optimizaciones completas de accesibilidad (**WCAG 2.2 AA**), SEO y rendimiento.

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ o 20+
- Chrome instalado (para la ejecución de scripts de verificación visual con Puppeteer)

### Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción (comprobación estricta de tipos y Turbopack)
npm run build

# Iniciar servidor de producción
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 📁 Estructura del Proyecto

```text
caso1/
├── reference/
│   └── design.png                  # Imagen de referencia original (768x1344 px)
├── public/
│   └── images/                     # Fotos y assets recortados y optimizados
│       ├── hero-pizza-share.jpg
│       ├── pepperoni-pizza.jpg
│       ├── menu-*.jpg              # Fotos de las 4 tarjetas del menú
│       ├── team-1.jpg, team-2.jpg  # Fotos tipo Polaroid
│       ├── gallery-1..6.jpg        # Mosaico 3x2 "Why Choose Us"
│       ├── storefront.jpg          # Foto exterior al atardecer
│       ├── community-illustration.png
│       └── crust-logo.png          # Sello circular Crust Pizza Co.
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Metadata, fuentes Google (Oswald, Inter), skip link
│   │   ├── page.tsx                # Ensamblado de secciones
│   │   └── globals.css             # Tokens CSS, variables de tema, textura SVG, efectos
│   ├── components/
│   │   ├── layout/                 # Header (sticky con menú móvil) y Footer
│   │   ├── sections/               # Hero, OurMenu, ChicagoStyle, WaysToEnjoy, Franchise
│   │   └── ui/                     # Button, SectionTitle, FeatureIcon, Polaroid, WashiTape, BrandLogo
│   └── data/                       # Datos desacoplados del JSX (menú, nav, galería, features)
├── scripts/
│   ├── visual-diff.ts              # Capturas automáticas en 6 viewports (360, 390, 768, 1024, 1280, 1440)
│   ├── generate_diff_report.py     # Cálculo de similitud, mapa de diferencias, overlay y side-by-side
│   └── measure_details.py          # Script de medición de coordenadas en la referencia
├── reports/
│   ├── DIFF_REPORT.md              # Reporte de métricas visuales y análisis de diferencias
│   ├── comparison-side-by-side.png # Comparación lado a lado (Referencia vs Implementación)
│   ├── overlay-50.png              # Superposición de alineación al 50% de opacidad
│   ├── diff-map.png                # Mapa de calor de discrepancias en carmesí
│   └── desktop-1440.png            # Captura a 1440px desktop
├── DESIGN_SPEC.md                  # Especificación de tokens, medidas, tipografía y decisiones
└── TEXT_FIXES.md                   # Registro exhaustivo de corrección de textos deformados por IA
```

---

## 📊 Verificación Visual y Reportes

Para regenerar las capturas comparativas y el análisis de similitud:

```bash
# 1. Asegúrate de tener el servidor corriendo en http://localhost:3000
npm start

# 2. Capturar todos los viewports (360, 390, 768, 1024, 1280, 1440 px)
npx tsx scripts/visual-diff.ts

# 3. Generar side-by-side, overlay, diff-map y reporte
python scripts/generate_diff_report.py
```

Los artefactos resultantes se almacenan en la carpeta `/reports/`.

---

## 🎨 Design Tokens Principales

- **Naranja Primario (`--color-brand`)**: `#EB7E2A`
- **Negro Carbón (`--color-ink`)**: `#1A1A1A`
- **Fondo Crema (`--color-cream`)**: `#F7F5F0` (con textura SVG sutil)
- **Superficie Blanca (`--color-surface-white`)**: `#FFFFFF`
- **Cinta Washi (`--color-washi-tape`)**: `rgba(235, 228, 210, 0.75)`
- **Tipografía de Títulos**: Google Font `Oswald` (uppercase, bold)
- **Tipografía de Cuerpo**: Google Font `Inter`

---

## ♿ Accesibilidad y Buenas Prácticas (WCAG 2.2 AA)

- Landmark HTML5 semánticos (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Un solo `<h1>` en el Hero y jerarquía consistente `<h2>` / `<h3>`.
- Skip-to-content link para navegación accesible por teclado.
- Áreas táctiles mínimas de $44 \times 44$ px en todos los botones e hipervínculos.
- Atributos `aria-hidden="true"` en elementos puramente decorativos y `alt` descriptivos en imágenes.
- Menú hamburguesa responsive accesible con atributos `aria-expanded` y `aria-label`.
