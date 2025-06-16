import React from "react";
import profileImg from "../assets/profile.png";

const Profile = () => (
  <>
    <section className="section" id="about" style={{ display: "flex", alignItems: "center", gap: 32 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 160 }}>
        <img src={profileImg} alt="Foto de perfil" className="profile-img" style={{ width: 100, height: 100, marginBottom: 12 }} />
        <div style={{ color: "#fff", fontWeight: 500, marginTop: 4 }}>Jose Garcia</div>
        <div style={{ color: "#b0b8c1", fontSize: 15, textAlign: "center" }}>Web Developer<br />Venezuela</div>
      </div>
      <div>
        <h2 style={{ margin: 0, marginBottom: 10, color: "#fff" }}>Sobre Mi</h2>
        <p style={{ color: "#b0b8c1", margin: 0, maxWidth: 540 }}>
          Soy desarrollador web curricular y me apasiona crear experiencias de aprendizaje atractivas y efectivas. Con experiencia en educación y tecnología, me especializo en el diseño y desarrollo de aplicaciones web interactivas que mejoran el aprendizaje de los estudiantes. Mi experiencia abarca el diseño curricular, el desarrollo web y la integración de tecnología educativa.
        </p>
      </div>
    </section>
    <section className="section" style={{ marginTop: 18 }}>
      <div style={{ color: "#fff", fontWeight: 600, fontSize: 18, marginBottom: 10 }}>Informacion Personal</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "flex-start" }}>
        <div style={{ minWidth: 180, color: "#b0b8c1", fontSize: 15 }}>
          <div><strong>Edad:</strong> 25</div>
          <div style={{ marginTop: 12 }}><strong>Correo:</strong> jagarciar.info@gmail.com</div>
        </div>
        <div style={{ minWidth: 320, color: "#b0b8c1", fontSize: 15 }}>
          <div><strong>Direccion:</strong> Urbanizacion Villa Colombia, Manzana 46, Casa 41, Guayana, Venezuela</div>
          <div style={{ marginTop: 12 }}><strong>Telefono:</strong> +58 412 988 68 04</div>
        </div>
      </div>
    </section>
  </>
);

export default Profile;