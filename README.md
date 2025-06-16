# Portafolio Web - Jose Garcia

Este es un portafolio web desarrollado con **React** y **Vite**. Aquí podrás encontrar información sobre mis habilidades, experiencia, educación y una galería interactiva de mis proyectos destacados, cada uno con su descripción, tecnologías utilizadas (mostradas como iconos) y enlace a su repositorio en GitHub.

## Características

- Diseño moderno y responsivo.
- Sección de perfil, sobre mí, habilidades, experiencia y educación.
- Sección de proyectos interactiva: al hacer clic en un proyecto se despliega un modal con detalles, tecnologías (iconos) y enlace a GitHub.
- Uso de iconos Devicon para mostrar tecnologías.
- Animaciones al interactuar con los proyectos.



## Requisitos previos

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [npm](https://www.npmjs.com/) 

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/jgarcia691/Portafolio.git
   cd Portafolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Ejecución en desarrollo

```bash
npm run dev
```


Esto abrirá la aplicación en modo desarrollo. Normalmente estará disponible en [http://localhost:5173](http://localhost:5173).



## Estructura del proyecto

- **src/components/**: Componentes principales del portafolio (`Profile`, `About`, `Skills`, `Experience`, `Education`, `SocialLinks`, `Projects`).
- **src/components/Projects.jsx**: Galería de proyectos con modales interactivos.
- **src/App.jsx**: Estructura principal de la aplicación.
- **public/**: Archivos estáticos.
- **index.html**: Incluye el CDN de Devicon para los iconos de tecnologías.

## Tecnologías principales

- React
- Vite
- CSS3
- Devicon (iconos de tecnologías)
