import React from "react";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/jagarciar.18/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: "middle" }} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#fff"/>
        <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM19 6.5C19.2761 6.5 19.5 6.72386 19.5 7C19.5 7.27614 19.2761 7.5 19 7.5C18.7239 7.5 18.5 7.27614 18.5 7C18.5 6.72386 18.7239 6.5 19 6.5Z" fill="#E1306C"/>
        <circle cx="12" cy="12" r="3.2" fill="#E1306C"/>
      </svg>
    )
  },
  {
    name: "Github",
    url: "https://github.com/jgarcia691",
    icon: <i className="devicon-github-original" style={{ fontSize: 22, verticalAlign: "middle" }}></i>
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/jose.garcia.7712826/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: "middle" }} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#fff"/>
        <path d="M15.117 8.667h-1.25c-.196 0-.367.171-.367.367v1.1h1.617c.2 0 .367.167.367.367v1.233a.367.367 0 0 1-.367.367h-1.617v4.033a.367.367 0 0 1-.367.367h-1.233a.367.367 0 0 1-.367-.367v-4.033H9.5a.367.367 0 0 1-.367-.367v-1.233c0-.2.167-.367.367-.367h1.25v-1.1c0-1.012.821-1.833 1.833-1.833h1.25c.2 0 .367.167.367.367v1.233a.367.367 0 0 1-.367.367Z" fill="#1877F3"/>
      </svg>
    )
  }
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
          <span className="social-icon-circle">{social.icon}</span>
          {social.name}
        </a>
      ))}
    </div>
  </section>
);

export default SocialLinks;