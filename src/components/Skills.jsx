import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-portafolio-three.vercel.app/skills")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener skills");
        return res.json();
      })
      .then((data) => {
        if (data && data.data) {
          setSkills(data.data);
        } else if (Array.isArray(data)) {
          setSkills(data);
        } else {
          setSkills([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Cargando skills...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <section className="section">
      <h3 className="section-title">Lenguajes Dominados</h3>
      <div className="skills-grid">
        {skills.length === 0 && <div>No hay skills registradas.</div>}
        {skills.map((skill) => (
          <div className="skill-badge" key={skill.id}>
            {skill.nombre} <span style={{ color: '#b0b8c1', fontWeight: 400, fontSize: 15 }}>({skill.nivel}%)</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;