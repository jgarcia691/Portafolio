import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-portafolio-three.vercel.app/users/28385691")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos del usuario");
        return res.json();
      })
      .then((data) => {
        console.log('Respuesta del backend:', data); // <-- Agregado para depuración
        // Si el endpoint devuelve un objeto con status/data, tomar data
        if (data && data.data) {
          setUser(data.data);
        } else if (Array.isArray(data)) {
          setUser(data[0]);
        } else {
          setUser(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Cargando...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!user) return null;

  // Calcular edad si hay fecha de nacimiento
  let edad = null;
  if (user.fecha_nacimiento) {
    const nacimiento = new Date(user.fecha_nacimiento);
    const hoy = new Date();
    edad = hoy.getFullYear() - nacimiento.getFullYear();
    const m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
  }

  return (
    <>
      <section className="section" id="about" style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 160 }}>
          <img src={profileImg} alt="Foto de perfil" className="profile-img" style={{ width: 100, height: 100, marginBottom: 12 }} />
          <div style={{ color: "#fff", fontWeight: 500, marginTop: 4 }}>{user.nombre}</div>
          <div style={{ color: "#b0b8c1", fontSize: 15, textAlign: "center" }}>Web Developer<br />{user.pais}</div>
        </div>
        <div>
          <h2 style={{ margin: 0, marginBottom: 10, color: "#fff" }}>Sobre Mi</h2>
          <p style={{ color: "#b0b8c1", margin: 0, maxWidth: 540 }}>
            {user.descripcion || "Sin descripción"}
          </p>
        </div>
      </section>
      <section className="section" style={{ marginTop: 18 }}>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: 18, marginBottom: 10 }}>Informacion Personal</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "flex-start" }}>
          <div style={{ minWidth: 180, color: "#b0b8c1", fontSize: 15 }}>
            <div><strong>Edad:</strong> {edad !== null ? edad : "-"}</div>
            <div style={{ marginTop: 12 }}><strong>Correo:</strong> {user.correo}</div>
          </div>
          <div style={{ minWidth: 320, color: "#b0b8c1", fontSize: 15 }}>
            <div><strong>Direccion:</strong> {user.direccion || "-"}</div>
            <div style={{ marginTop: 12 }}><strong>Telefono:</strong> {user.telefono || "-"}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;