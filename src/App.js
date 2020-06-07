import React from "react";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Skills from "./Components/Skills";
import projectsData from "./Data/projectsData";
import experienceData from "./Data/experienceData";
import aboutData from "./Data/aboutData";
import skillsData from "./Data/skillsData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About aboutData={aboutData} />
      <Experience experienceData={experienceData} />
      <Skills skillsData={skillsData} />
      <Projects projectsData={projectsData} />
    </div>
  );
}

export default App;
