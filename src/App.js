import React from "react";
import Projects from "Components/Projects";
import Experience from "Components/Experience";
import About from "Components/About";
import Skills from "Components/Skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
