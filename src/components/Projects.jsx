import React, { useState } from "react";

const projects = [
  {
    title: "Curriculum Web Personal",
    image: "https://placehold.co/300x180?text=Curriculum",
    description: "Pagina Web Personal donde subo mis proyectos y mis habilidades como programador informatico",
    technologies: ["react", "css3", "html5"],
    github: "https://github.com/jgarcia691/Portafolio"
  },
  {
    title: "AI Transcriptor",
    image: "https://placehold.co/300x180?text=AI+Transcriptor",
    description: "Aplicacion movil que transcribe audio a texto y lo guarda en base de datos no relacional. Dando opcion al usuario en obtener ese texto en formato txt o pdf, o bien obtener un resumen de hecho con inteligencia artificial a traves del LLM llamado Gemini",
    technologies: ["python", "mongodb"],
    github: "https://github.com/jgarcia691/Ai-Transcriptor"
  },
  {
    title: "Plataforma de almacenamiento de Tesis para la UNEG",
    image: "https://placehold.co/300x180?text=Plataforma+de+almacenamiento+de+Tesis",
    description: "Juego de plataformas basado en el exito de Super Mario Bros, con mecanicas de multijugador local para 2 jugadores",
    technologies: ["react", "nodejs", "sqlite"],
    github: "https://github.com/jgarcia691/Server_Tesis"
  },
  {
    title: " TeamViewer Kotlin",
    image: "https://placehold.co/300x180?text=TeamViewer+Kotlin",
    description: "Aplicacion movil que permite la conexion remota entre 2 dispositivos android, permitiendo la transmision de pantalla de un dispositivo a otro",
    technologies: ["kotlin", "android"],
    github: "https://github.com/usuario/teamviewer-kotlin"
  },
  {
    title: "Agente de Reconocimiento para el juego Puzzle 8",
    image: "https://placehold.co/300x180?text=Puzzle+8",
    description: "Aplicacion hecha en python que permite la busqueda de soluciones para el juego Puzzle 8, utilizando el algoritmo A* con busqueda heuristica y busqueda en amplitud para encontrar la solucion mas rapida",
    technologies: ["python"],
    github: "https://github.com/jgarcia691/Puzzle8"
  },
  {
    title: "Batalla Naval",
    image: "https://placehold.co/300x180?text=Batalla+Naval",
    description: "Juego de batalla naval, con una interfaz grafica que permite la seleccion de coordenadas para disparar, y la visualizacion de las barcos y los disparos. Con posibilidad de jugar contra la maquina, contra un amigo o una nueva mecanica de batallas de hasta 4 jugadores",
    technologies: ["react", "nodejs"],
    github: "https://github.com/jgarcia691/Backend_BatallaNaval"
  }
];

const techIcons = {
  react: <i className="devicon-react-original colored" title="React"></i>,
  css3: <i className="devicon-css3-plain colored" title="CSS3"></i>,
  html5: <i className="devicon-html5-plain colored" title="HTML5"></i>,
  python: <i className="devicon-python-plain colored" title="Python"></i>,
  //tensorflow: <i className="devicon-tensorflow-original colored" title="TensorFlow"></i>,
  //java: <i className="devicon-java-plain colored" title="Java"></i>,
  //swing: <span title="Swing">🎨</span>,
  kotlin: <i className="devicon-kotlin-plain colored" title="Kotlin"></i>,
  android: <i className="devicon-android-plain colored" title="Android"></i>,
  nodejs: <i className="devicon-nodejs-plain colored" title="Node.js"></i>,
  mongodb: <i className="devicon-mongodb-plain colored" title="MongoDB"></i>,
  sqlite: <i className="devicon-sqlite-plain colored" title="SQLite"></i>,
  //threejs: <i className="devicon-threejs-original colored" title="Three.js"></i>
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