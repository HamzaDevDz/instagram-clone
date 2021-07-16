import React from 'react';
import './App.css';
import {Header} from "./features/header/Header";
import {About} from "./features/about/About";
import {Projects} from "./features/projects/Projects";
import {Contact} from "./features/contact/Contact";
import {NavBar} from "./features/navBar/NavBar";

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
