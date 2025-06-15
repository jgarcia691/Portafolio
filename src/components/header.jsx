import React from "react";

const Header = () => (
  <header>
    <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Portafolio</div>
    <nav>
      <a href="#about" style={{ color: "#b0b8c1", marginRight: 24, textDecoration: "none" }}>Sobre Mí</a>
      <a href="#contact" style={{ color: "#b0b8c1", textDecoration: "none" }}>Contacto</a>
    </nav>
  </header>
);

export default Header;