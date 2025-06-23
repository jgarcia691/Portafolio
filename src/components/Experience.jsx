import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-portafolio-three.vercel.app/experience")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener experiencia");
        return res.json();
      })
      .then((data) => {
        // Si el endpoint devuelve {status, data}, tomar data
        if (data && data.data) {
          setExperience(data.data);
        } else if (Array.isArray(data)) {
          setExperience(data);
        } else {
          setExperience([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Cargando experiencia...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  // Filtrar solo los que tengan empresa y cargo
  const validExperience = experience.filter(
    (item) => item.empresa && item.cargo
  );

  return (
    <section className="section">
      <h3 className="section-title">Experiencia Laboral</h3>
      <ul>
        {validExperience.length === 0 && <li>No hay registros de experiencia.</li>}
        {validExperience.map((item) => (
          <li key={item.id}>
            <strong>{item.empresa}</strong> - {item.cargo} ({item.fecha_inicio} - {item.fecha_fin})
            <br />
            <span style={{ color: '#b0b8c1', fontSize: 14 }}>{item.descripcion}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;