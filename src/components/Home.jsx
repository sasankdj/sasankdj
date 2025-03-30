import React from 'react';
import Background from '../assets/Purple Illustrated Mountain Desktop Wallpaper.png';
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typer from "./Typer";
import { motion } from 'framer-motion';  // Importing motion from Framer Motion
import './Home.css';

const Home = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center bg-cover bg-center w-full gap-5"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Main content container with fade-in animation */}
      <motion.div 
        className="ml-20 text-white font-bold flex flex-col gap-2 font-sans" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <motion.h3 
          className='text-3xl head' 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello its me!
        </motion.h3>

        <motion.h1 
          className='text-5xl' 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          Sasank Kota
        </motion.h1>

        <motion.h3 
          className='text-3xl' 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.7 }}
        >
          And I'm a <span className='inline-block text-3xl text-[rgb(54,188,195)] font-bold'><Typer /></span>
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a Web developer and Data analyst. <br />
          With extensive experience in building scalable <br /> and efficient web applications And getting <br />insights of data, making Dashboards.
        </motion.p>
      </motion.div>

      {/* Social media icons with bounce animation */}
      <motion.div 
        className='ml-20 text-[rgb(54,188,195)] font-bold flex flex-row gap-3 text-4xl icons' 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 1.3 }}
      >
        <FaWhatsapp className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
        <FaFacebookSquare className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
        <FaInstagram className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
        <FaGithub className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
      </motion.div>
    </div>
  );
};

export default Home;
