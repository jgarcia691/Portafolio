
import React, { useState, useEffect } from "react";

const techIcons = {
  react: <i className="devicon-react-original colored" title="React"></i>,
  css3: <i className="devicon-css3-plain colored" title="CSS3"></i>,
  html5: <i className="devicon-html5-plain colored" title="HTML5"></i>,
  python: <i className="devicon-python-plain colored" title="Python"></i>,
  kotlin: <i className="devicon-kotlin-plain colored" title="Kotlin"></i>,
  nodejs: <i className="devicon-nodejs-plain colored" title="Node.js"></i>,
  mongodb: <i className="devicon-mongodb-plain colored" title="MongoDB"></i>,
  sqlite: <i className="devicon-sqlite-plain colored" title="SQLite"></i>,
  javascript: <i className="devicon-javascript-plain colored" title="JavaScript"></i>
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]); // skills
  const [projectTech, setProjectTech] = useState([]); // relación muchos a muchos
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("https://backend-portafolio-three.vercel.app/projects").then(res => res.json()),
      fetch("https://backend-portafolio-three.vercel.app/skills").then(res => res.json()),
      fetch("https://backend-portafolio-three.vercel.app/skill_project").then(res => res.json())
    ])
      .then(([projectsData, skillsData, projectTechData]) => {
        setProjects(projectsData.data || []);
        setTechnologies(skillsData.data || []);
        setProjectTech(projectTechData.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Cargando proyectos...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  // Función para obtener las tecnologías de un proyecto
  const getProjectTechnologies = (projectId) => {
    const techIds = projectTech.filter(pt => pt.id_proyecto === projectId).map(pt => pt.id_tecnologia);
    return technologies.filter(tech => tech.id && techIds.includes(tech.id));
  };

  return (
    <section className="section">
      <h3 className="section-title">Trabajos Realizados</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelected(idx)}
          >
            <img src={project.imagen} alt={project.titulo} style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
            <div style={{ fontWeight: 600, color: "#fff" }}>{project.titulo}</div>
          </div>
        ))}
      </div>
      {selected !== null && projects[selected] && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#000a", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
        }} onClick={() => setSelected(null)}>
          <div style={{ background: "#232e3c", borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 400, color: "#fff", position: "relative" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} style={{ position: "absolute", top: 12, right: 12, background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>&times;</button>
            <img src={projects[selected].imagen} alt={projects[selected].titulo} style={{ width: "100%", borderRadius: 8, marginBottom: 16 }} />
            <h4 style={{ margin: "12px 0 8px 0" }}>{projects[selected].titulo}</h4>
            <p style={{ color: "#b0b8c1" }}>{projects[selected].descripcion}</p>
            {/* Tecnologías asociadas */}
            <div style={{ display: "flex", gap: 12, margin: "12px 0" }}>
              {getProjectTechnologies(projects[selected].id).map(tech => (
                <span key={tech.id} style={{ fontSize: 28 }}>{techIcons[tech.nombre.toLowerCase()] || tech.nombre}</span>
              ))}
            </div>
            <a href={projects[selected].url_repositorio} target="_blank" rel="noopener noreferrer" style={{ color: "#4fd1c5", textDecoration: "underline" }}>Ver en GitHub</a>
            {projects[selected].url_demo && (
              <a href={projects[selected].url_demo} target="_blank" rel="noopener noreferrer" style={{ color: "#4fd1c5", textDecoration: "underline", marginLeft: 16 }}>Ver Demo</a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
