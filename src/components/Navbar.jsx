import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-5 md:px-10 lg:px-20">
        {/* Portfolio Title */}
        <a href="#" className="text-xl md:text-3xl font-bold font-[cursive]">Sasank Portfolio</a>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Navbar Links (Show on Large Screens, Toggle on Mobile) */}
        <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent font-bold font-[cursive] flex flex-col md:flex-row md:space-x-6 text-center md:text-left transition-all duration-300 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <li><a href="#home" className="block py-2 px-4 hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="block py-2 px-4 hover:text-gray-400">About</a></li>
          <li><a href="#services" className="block py-2 px-4 hover:text-gray-400">Services</a></li>
          <li><a href="#skills" className="block py-2 px-4 hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="block py-2 px-4 hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
