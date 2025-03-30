import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from './components/Services'
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
// import Form from "./components/Form";
const App = () => {
  return (
    <div className='bg-[rgb(12,29,44)]'>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><AboutMe /></div>
      <div id="services">
        <Services />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
    </div>
  )
}

export default App