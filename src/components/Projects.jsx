import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample data for projects
const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully-functional E-commerce website built using the MERN stack, where users can browse products, add them to the cart, and proceed to checkout.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2MBfhJFFY6fi8_OGM_6TmKY6sbsa2FVNcg&s",
    link: "https://sasankdj.github.io/cloth-store/",
  },
  {
    title: "Facial Recognition Attendance System",
    description:
      "A system that uses facial recognition for marking attendance in a classroom or workplace, ensuring security and accuracy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ldHgHxujILuLhtKU6DfOYugEfxrfUs-zuQ&s",
    link: "https://github.com/sasankdj/Face_recognition_atttendence_system",
  },
  {
    title: "Dashboard for Data Analytics",
    description:
      "A dashboard for visualizing and analyzing large datasets, built with React, where users can filter and view important metrics and insights.",
    image: "https://images.ctfassets.net/dfcvkz6j859j/1MEC1Kc2RFOGvh79IM5WIc/970c042015a4cdefcb6637ad2f8eb7e7/SEO-Dashboard-Template-Example.png",
    link: "https://github.com/sasankdj/To_do_list",
  },
  {
    title: "Book Store App",
    description:
      "A full-stack web application for browsing, adding, and managing books. Built with React for the frontend and Node.js/Express for the backend, featuring a modern UI and seamless user experience.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80",
    link: "https://github.com/sasankdj/Book-store-app",
  },
  {
  title: "Drowsiness Detection System",
  description:
    "A computer vision‑based system that detects driver drowsiness in real time using OpenCV and facial landmark detection. Enhances road safety by alerting users when signs of fatigue are detected.",
  image: "https://www.labellerr.com/blog/content/images/2024/11/driver_drowsiness_detection.webp",
  link: "https://github.com/sasankdj/Drowsiness-Detection-System",
},
{
  title: "Water Quality Prediction",
  description:
    "A machine learning model that predicts water potability using physicochemical parameters. Includes data preprocessing, model training (e.g., logistic regression, decision trees), and visualization of feature importance.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_EhfDXYyS6SYCOQxq0DkgDHWEmVjyUhHdmA&s",
  link: "https://waterqualityprediction-2025.streamlit.app/",
},


];

const Projects = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full py-12 bg-[rgb(12,29,44)] text-white">
      <div className="text-center mb-10">
      <div className='text-center mb-8'>
          <h1 className='text-5xl font-extrabold mb-2'>
            MY <span className='text-[rgb(54,188,195)]'>Projects</span>
          </h1>
        
        </div>
        <p className="text-lg mt-4 text-gray-300">A collection of some of my most recent projects</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="border border-[rgb(54,188,195)] shadow-lg shadow-[rgba(54,188,195,0.5)] rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[rgb(54,188,195)]">{project.title}</h3>
              <p className="mt-4 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[rgb(54,188,195)] hover:bg-[rgb(41,150,165)] text-black font-semibold py-2 px-4 rounded-xl transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
