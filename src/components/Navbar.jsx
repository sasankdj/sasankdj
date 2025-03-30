import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className="bg-gray-900 text-white p-4 text-[20px] font-[cursive] fixed" >
        <ul className={`md:flex space-x-6 hidden nav `}>
          <li><a href="#" className="hover:text-gray-400 icon">Sasank Portfolio</a></li>
          <li><a href="#home" className="hover:text-gray-400 ml-[500px]">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar