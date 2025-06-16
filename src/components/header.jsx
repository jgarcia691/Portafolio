import React from "react";

const Header = ({ onTab, tab }) => (
  <header>
    <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Portafolio</div>
    <nav>
      <a
        onClick={() => onTab("about")}
        style={{ color: tab === "about" ? "#fff" : "#b0b8c1", marginRight: 24, textDecoration: "none", fontWeight: tab === "about" ? 700 : 400, cursor: "pointer" }}
      >
        Sobre Mí
      </a>
      <a
        onClick={() => onTab("contact")}
        style={{ color: tab === "contact" ? "#fff" : "#b0b8c1", textDecoration: "none", fontWeight: tab === "contact" ? 700 : 400, cursor: "pointer" }}
      >
        Contacto
      </a>
    </nav>
  </header>
);

export default Header;