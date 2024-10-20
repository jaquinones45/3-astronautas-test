# Planetas - Aplicación Web del Sistema Solar

Este proyecto es una aplicación web que muestra un listado de planetas de nuestro sistema solar y permite ver los detalles de cada uno de ellos. Se pueden añadir o eliminar planetas de favoritos y se usa un sistema de paginación y filtros para mejorar la navegación.

## Descripción

La aplicación muestra una lista de planetas obtenida desde una API pública y permite ver detalles de cada planeta en una vista individual. Los usuarios pueden marcar los planetas como favoritos y esta información se guarda localmente en el navegador.

### Funcionalidades Principales

- **Listado de Planetas**: Muestra los planetas en tarjetas con la opción de ver detalles al hacer clic en ellos.
- **Búsqueda**: Permite filtrar los planetas por nombre a través de un campo de búsqueda.
- **Ordenación**: Permite ordenar los planetas alfabéticamente en orden ascendente o descendente.
- **Paginación**: Muestra los planetas en un listado paginado, con un máximo de 5 planetas por página.
- **Favoritos**: Permite añadir y eliminar planetas de la lista de favoritos. Se almacena de forma local en el navegador usando Zustand.
- **Responsive Design**: La aplicación es totalmente responsiva y se adapta a dispositivos móviles y pantallas de escritorio.

## Tecnologías Utilizadas

- **Next.js** (v14.2.15): Framework para aplicaciones React optimizado para SSR (Server Side Rendering) y SSG (Static Site Generation).
- **React**: Librería de JavaScript para la construcción de interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para crear interfaces de usuario responsivas y estilizadas de manera rápida.
- **Zustand**: Manejo de estado para React, utilizado para gestionar el estado de los planetas favoritos.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **CSS Modules**: Para la gestión de estilos locales a nivel de componente, evitando conflictos de estilos globales.

## Estructura del Proyecto

```plaintext
.
├── components/               # Componentes reutilizables como tarjetas, paginación, barra de búsqueda, etc.
│   ├── layout/               # Componente para el navbar y footer
│   ├── pagination/           # Componente para la paginación
│   ├── planet/               # Componente principales para los planetas
│   ├── search-bar/           # Componente para la barra de búsqueda
│   └── sort-select/          # Componente para el select de ordenación
├── pages/                    # Páginas de Next.js
│   ├── index.tsx             # Página principal que muestra el listado de planetas
│   └── [id].tsx              # Página de detalle de cada planeta
├── public/                   # Carpeta para imágenes estáticas como las de los planetas
│   └── image/                # Imágenes de los planetas
├── hooks/                    # Hooks personalizados como el de gestión de favoritos
├── styles/                   # Archivos CSS para el diseño y estilos
├── types/                    # Tipos de TypeScript para las propiedades de los planetas
└── README.md                 # Este archivo
```

## Url Page

```bash
https://671573b2ee5caa78f49ed0aa--3astronautas-test.netlify.app
```

## Project setup

```bash
$ npm install

$ npm run dev
```

## Run Build

```bash
$ npm run build
```

## Run Lint

```bash
$ npm run lint
```
