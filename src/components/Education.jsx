import React, { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-portafolio-three.vercel.app/education")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener educación");
        return res.json();
      })
      .then((data) => {
        // Si el endpoint devuelve {status, data}, tomar data
        if (data && data.data) {
          setEducation(data.data);
        } else if (Array.isArray(data)) {
          setEducation(data);
        } else {
          setEducation([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Cargando educación...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  // Filtrar solo los que tengan institucion y titulo
  const validEducation = education.filter(
    (item) => item.institucion && item.titulo
  );

  return (
    <section className="section">
      <h3 className="section-title">Aprendizaje</h3>
      <ul>
        {validEducation.length === 0 && <li>No hay registros de educación.</li>}
        {validEducation.map((item) => (
          <li key={item.id}>
            <strong>{item.institucion}</strong>: {item.titulo}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;