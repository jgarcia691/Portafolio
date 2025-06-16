import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEnviado(true);
    // Aquí podrías agregar lógica para enviar el formulario
  };

  return (
    <section className="section" style={{ maxWidth: 600, margin: "40px auto", textAlign: "center" }}>
      <h2 style={{ color: "#fff", marginBottom: 10, letterSpacing: 2 }}>CONTACTO</h2>
      <p style={{ color: "#b0b8c1", marginBottom: 32 }}>
        Para contactarme solo tienes que ingresar los siguientes datos. Luego de eso me contactare contigo en las siguientes horas.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ textAlign: "left" }}>
          <label style={{ color: "#fff", fontWeight: 500, marginBottom: 6, display: "block" }}>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre y Apellido"
            style={{
              width: "100%",
              background: "#19222c",
              border: "1.5px solid #2c3a4b",
              borderRadius: 8,
              color: "#b0b8c1",
              padding: "10px 12px",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box"
            }}
            required
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <label style={{ color: "#fff", fontWeight: 500, marginBottom: 6, display: "block" }}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Direccion de correo electronico"
            style={{
              width: "100%",
              background: "#19222c",
              border: "1.5px solid #2c3a4b",
              borderRadius: 8,
              color: "#b0b8c1",
              padding: "10px 12px",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box"
            }}
            required
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <label style={{ color: "#fff", fontWeight: 500, marginBottom: 6, display: "block" }}>Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder=""
            rows={5}
            style={{
              width: "100%",
              background: "#19222c",
              border: "1.5px solid #2c3a4b",
              borderRadius: 8,
              color: "#b0b8c1",
              padding: "10px 12px",
              fontSize: 15,
              outline: "none",
              resize: "none",
              boxSizing: "border-box"
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            background: "#e6f1fa",
            color: "#232e3c",
            border: "none",
            borderRadius: 16,
            padding: "8px 32px",
            fontWeight: 600,
            fontSize: 16,
            margin: "0 auto",
            marginTop: 10,
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
        {enviado && <div style={{ color: "#4fd1c5", marginTop: 10 }}>¡Mensaje enviado! Pronto me pondré en contacto contigo.</div>}
      </form>
    </section>
  );
};

export default Contact; 