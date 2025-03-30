// import React from 'react'
import Form from "./Form";
import { FaEnvelope, FaFacebookSquare, FaGithub, FaInstagram, FaPhone } from 'react-icons/fa';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
const ContactUs = () => {
  return (
    <div>
        <div className='flex flex-row space-x-2 text-6xl font-extrabold justify-center'>
        <h1 className='text-white font-bold'>Contact</h1>
        <h1 className='text-[rgb(54,188,195)]'> Me</h1>
        </div>
    
    <div className='max-w-6xl mx-auto grid grid-cols-2 m-3 gap-8'>
    <div className='m-2 flex flex-col gap-10 justify-center text-white '>       
        <h1 className='text-3xl font-bold'>Get in touch with me</h1>
        <h3 className='text-xl'>Lets work together!</h3>
        <p className=" text ">
  Feel free to reach out if you'd like to connect, collaborate, or have any questions! 
  I'm always open to new opportunities and would love to hear from you.
</p>
<div className="text-white">
      <div className="flex items-center space-x-3">
        <FaEnvelope className="text-[rgb(54,188,195)] text-xl" />
        <span className="text-lg">Kotasasank123@gmail.com</span>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <FaPhone className="text-[rgb(54,188,195)] text-xl" />
        <span className="text-lg">+91 8919636850</span>
      </div>
    </div>
     <div className='ml-20 text-[rgb(54,188,195)] font-bold flex flex-row gap-3 text-4xl icons'>
      <FaWhatsapp className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
      <FaFacebookSquare className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
      <FaInstagram className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
      <FaGithub className='hover:bg-[rgb(54,188,195)] hover:text-black'/>
      </div>
</div>
<div><Form></Form></div>
    </div>
    </div>
  )
}

export default ContactUs