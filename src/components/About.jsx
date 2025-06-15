import React from "react";

const About = () => (
  <section className="section" id="about">
    <h3 className="section-title">Sobre Mí</h3>
    <p>
      Soy desarrollador web curricular y me apasiona crear experiencias de aprendizaje atractivas y efectivas. 
      Con experiencia en educación y tecnología, me especializo en el diseño y desarrollo de aplicaciones web interactivas que mejoran el aprendizaje de los estudiantes. 
      Mi experiencia abarca el diseño curricular, el desarrollo web y la integración de tecnología educativa.
    </p>
    <div style={{ marginTop: 18 }}>
      <strong>Información Personal</strong>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", marginTop: 8 }}>
        <div>
          <div><strong>EDAD:</strong> 25</div>
          <div><strong>CORREO:</strong> jagarciar.info@gmail.com</div>
        </div>
        <div>
          <div><strong>Dirección:</strong> Urbanización Villa Colombia, Manzana 46 Casa 41</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;