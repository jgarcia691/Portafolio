import React from "react";

const socials = [
  { name: "Instagram", url: "https://instagram.com/", icon: "📷" },
  { name: "Github", url: "https://github.com/", icon: "🐱" },
  { name: "Facebook", url: "https://facebook.com/", icon: "📘" }
];

const SocialLinks = () => (
  <section className="section" id="contact">
    <h3 className="section-title">Redes Sociales</h3>
    <div className="social-links">
      {socials.map(social => (
        <a
          className="social-link"
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ fontSize: "1.5rem", marginRight: 6 }}>{social.icon}</span>
          {social.name}
        </a>
      ))}
    </div>
  </section>
);

export default SocialLinks;