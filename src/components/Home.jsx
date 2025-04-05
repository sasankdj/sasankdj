import React from 'react';
import { FaWhatsapp, FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import Typer from "./Typer";
import { motion } from 'framer-motion';
import ProfilePic from '../assets/Futuristic Neon Blue And Pink Light Instagram Profile Picture.png';

const Home = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-[rgb(12,29,44)] w-full gap-5 px-5 md:px-20 lg:px-32">

      {/* Left Content */}
      <div className="flex flex-col justify-center gap-5 w-full md:w-1/2">
        <motion.div 
          className="text-white font-bold flex flex-col gap-3 font-sans text-center md:text-left"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          <motion.h3 
            className='text-2xl md:text-3xl lg:text-4xl' 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello, it's me!
          </motion.h3>

          <motion.h1 
            className='text-4xl md:text-5xl lg:text-6xl' 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
          >
            Sasank Kota
          </motion.h1>

          <motion.h3 
            className='text-2xl md:text-3xl lg:text-4xl' 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.7 }}
          >
            And I'm a <span className='inline-block text-2xl md:text-3xl lg:text-4xl text-[rgb(54,188,195)] font-bold'><Typer /></span>
          </motion.h3>

          <motion.p 
            className="text-sm md:text-base lg:text-lg leading-relaxed"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
          >
            I'm a Web developer and Data analyst. <br />
            With extensive experience in building scalable <br /> and efficient web applications, and extracting <br /> insights from data to create dashboards.
          </motion.p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className='text-[rgb(54,188,195)] font-bold flex flex-wrap justify-center md:justify-start gap-3 text-3xl md:text-4xl lg:text-5xl'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a href="https://wa.me/8919636850" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300" />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300" />
          </a>
          <a href="https://instagram.com/sasank_dj" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300" />
          </a>
          <a href="https://github.com/sasankdj" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Right Profile Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          duration: 3,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] object-cover shadow-xl rounded-2xl"

        />
      </motion.div>

    </div>
  );
};

export default Home;
