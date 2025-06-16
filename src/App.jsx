import React, { useState } from "react";
import Header from "./components/header";
import Profile from "./components/Profile";
// import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [tab, setTab] = useState("about");

  return (
    <div className="container">
      <Header onTab={setTab} tab={tab} />
      <main>
        {tab === "about" && (
          <>
            <Profile />
            {/* <About /> */}
            <Education />
            <Experience />
            <Skills />
            <SocialLinks />
            <Projects />
          </>
        )}
        {tab === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;