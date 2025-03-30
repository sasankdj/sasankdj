import React from 'react';

// Sample data for projects
const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully-functional E-commerce website built using the MERN stack, where users can browse products, add them to the cart, and proceed to checkout.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2MBfhJFFY6fi8_OGM_6TmKY6sbsa2FVNcg&s",
    link: "#", // Link to project details or GitHub
  },
  {
    title: "Facial Recognition Attendance System",
    description:
      "A system that uses facial recognition for marking attendance in a classroom or workplace, ensuring security and accuracy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ldHgHxujILuLhtKU6DfOYugEfxrfUs-zuQ&s",
    link: "#", // Link to project details or GitHub
  },
  {
    title: "Dashboard for Data Analytics",
    description:
      "A dashboard for visualizing and analyzing large datasets, built with React, where users can filter and view important metrics and insights.",
    image: "https://images.ctfassets.net/dfcvkz6j859j/1MEC1Kc2RFOGvh79IM5WIc/970c042015a4cdefcb6637ad2f8eb7e7/SEO-Dashboard-Template-Example.png",
    link: "#", // Link to project details or GitHub
  },
];
// className='bg-[rgb(12,29,44)]'
const Projects = () => {
  return (
    <div className="w-full py-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-lg mt-4">A collection of some of my most recent projects</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" border-2 border-[rgb(54,188,195)] shadow-[rgb(54,188,195)] shadow-2xl rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className=" mt-4">{project.description}</p>
              <a
                href={project.link}
                className="mt-6 inline-block text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg transition-all duration-300"
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
