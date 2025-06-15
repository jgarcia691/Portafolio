import React, { useState } from "react";

const projects = [
  {
    title: "Curriculum Web Personal",
    image: "https://placehold.co/300x180?text=Curriculum",
    description: "Pagina Web Personal donde subo mis proyectos y mis habilidades como programador informatico",
    technologies: ["react", "css3", "html5"],
    github: "https://github.com/usuario/curriculum-web"
  },
  {
    title: "AI Transcriptor",
    image: "https://placehold.co/300x180?text=AI+Transcriptor",
    description: "Aplicacion movil que transcribe audio a texto y lo guarda en base de datos no relacional. Dando opcion al usuario en obtener ese texto en formato txt o pdf, o bien obtener un resumen de hecho con inteligencia artificial a traves del LLM llamado Gemini",
    technologies: ["python", "mongodb"],
    github: "https://github.com/usuario/ai-transcriptor"
  },
  {
    title: "Super Mario Bros (JAVA EDITION)",
    image: "https://placehold.co/300x180?text=Mario+Java",
    description: "Evaluación adaptativa que se ajusta al rendimiento del estudiante y proporciona retroalimentación específica.",
    technologies: ["java"],
    github: "https://github.com/usuario/super-mario-java"
  },
  {
    title: "TeamViewer Kotlin",
    image: "https://placehold.co/300x180?text=TeamViewer+Kotlin",
    description: "Plataforma colaborativa que permite a estudiantes y profesores trabajar juntos en proyectos y tareas en tiempo real.",
    technologies: ["kotlin", "android"],
    github: "https://github.com/usuario/teamviewer-kotlin"
  },
  {
    title: "Foodigo MAPA INTERACTIVO",
    image: "https://placehold.co/300x180?text=Foodigo",
    description: "Desarrollo de juegos educativos que sean divertidos y atractivos para estudiantes de todas las edades.",
    technologies: ["react", "NestJS", "mongodb"],
    github: "https://github.com/usuario/foodigo"
  },
  {
    title: "Spotify Clone",
    image: "https://placehold.co/300x180?text=Spotify+Clone",
    description: "Creación de experiencias de realidad virtual inmersiva para aplicaciones educativas, permitiendo a los estudiantes explorar y aprender de una manera nueva.",
    technologies: ["react", "threejs", "nodejs"],
    github: "https://github.com/usuario/spotify-clone"
  }
];

const techIcons = {
  react: <i className="devicon-react-original colored" title="React"></i>,
  css3: <i className="devicon-css3-plain colored" title="CSS3"></i>,
  html5: <i className="devicon-html5-plain colored" title="HTML5"></i>,
  python: <i className="devicon-python-plain colored" title="Python"></i>,
  tensorflow: <i className="devicon-tensorflow-original colored" title="TensorFlow"></i>,
  java: <i className="devicon-java-plain colored" title="Java"></i>,
  swing: <span title="Swing">🎨</span>,
  kotlin: <i className="devicon-kotlin-plain colored" title="Kotlin"></i>,
  android: <i className="devicon-android-plain colored" title="Android"></i>,
  nodejs: <i className="devicon-nodejs-plain colored" title="Node.js"></i>,
  mongodb: <i className="devicon-mongodb-plain colored" title="MongoDB"></i>,
  threejs: <i className="devicon-threejs-original colored" title="Three.js"></i>
};

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section">
      <h3 className="section-title">Trabajos Realizados</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className="project-card"
            onClick={() => setSelected(idx)}
          >
            <img src={project.image} alt={project.title} style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
            <div style={{ fontWeight: 600, color: "#fff" }}>{project.title}</div>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#000a", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
        }} onClick={() => setSelected(null)}>
          <div style={{ background: "#232e3c", borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 400, color: "#fff", position: "relative" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>&times;</button>
            <img src={projects[selected].image} alt={projects[selected].title} style={{ width: "100%", borderRadius: 8, marginBottom: 16 }} />
            <h4 style={{ margin: "12px 0 8px 0" }}>{projects[selected].title}</h4>
            <p style={{ color: "#b0b8c1" }}>{projects[selected].description}</p>
            <div style={{ display: "flex", gap: 12, margin: "12px 0" }}>
              {projects[selected].technologies.map(tech => (
                <span key={tech} style={{ fontSize: 28 }}>{techIcons[tech] || tech}</span>
              ))}
            </div>
            <a href={projects[selected].github} target="_blank" rel="noopener noreferrer" style={{ color: "#4fd1c5", textDecoration: "underline" }}>Ver en GitHub</a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 