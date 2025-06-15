import React from "react";
import Header from "./components/header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Profile />
        <About />
        <Education />
        <Experience />
        <Skills />
        <SocialLinks />
        <Projects />
      </main>
    </div>
  );
}

export default App;