# AstroGym: Template para Gimnasio

AstroGym es un template para sitios web de gimnasios, desarrollado con Astro y Bun.

## 🚀 Estructura del Proyecto

Dentro de tu proyecto Astro, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── landing/
│   │       └── Components.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `bun install`             | Instala las dependencias                                    |
| `bun run dev`             | Inicia el servidor de desarrollo en `localhost:4321`        |
| `bun run build`           | Construye tu sitio de producción en `./dist/`               |
| `bun run preview`         | Previsualiza tu construcción localmente, antes de desplegar |
| `bun run astro ...`       | Ejecuta comandos de CLI como `astro add`, `astro check`     |
| `bun run astro -- --help` | Obtén ayuda usando la CLI de Astro                          |
