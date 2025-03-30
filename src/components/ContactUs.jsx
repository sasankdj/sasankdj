import React from 'react';
import Form from "./Form";
import { FaEnvelope, FaPhone } from 'react-icons/fa6';  // Fa6 icons
import { FaFacebookSquare, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';  // Regular Fa icons

const ContactUs = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 py-10">
      {/* Heading */}
      <div className='flex flex-row justify-center text-4xl md:text-6xl font-extrabold mb-6'>
        <h1 className='text-white'>Contact</h1>
        <h1 className='text-[rgb(54,188,195)] ml-2'> Me</h1>
      </div>

      {/* Contact Info + Form */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Section - Contact Info */}
        <div className='flex flex-col gap-6 text-white text-center md:text-left'>
          <h1 className='text-2xl md:text-3xl font-bold'>Get in touch with me</h1>
          <h3 className='text-lg md:text-xl'>Let's work together!</h3>
          <p className="text-sm md:text-base">
            Feel free to reach out if you'd like to connect, collaborate, or have any questions! 
            I'm always open to new opportunities and would love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <FaEnvelope className="text-[rgb(54,188,195)] text-xl" />
              <span className="text-base md:text-lg">Kotasasank123@gmail.com</span>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <FaPhone className="text-[rgb(54,188,195)] text-xl" />
              <span className="text-base md:text-lg">+91 8919636850</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className='flex justify-center md:justify-start gap-4 text-3xl md:text-4xl text-[rgb(54,188,195)] mt-4'>
            <FaWhatsapp className='hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300' />
            <FaFacebookSquare className='hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300' />
            <FaInstagram className='hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300' />
            <FaGithub className='hover:bg-[rgb(54,188,195)] hover:text-black p-2 rounded-full transition duration-300' />
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
