import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const professionalSkills = [
  { name: "Teamwork", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Communication", level: 80 },
  { name: "Time Management", level: 75 },
  { name: "Creativity", level: 70 },
];

const ProfessionalSkills = () => {
  return (
    <div className="w-3/4 mx-auto mt-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-white shadow-[rgb(54,188,195)] shadow-2xl">Professional Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {professionalSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-32 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[rgb(54,188,195)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CircularProgressbar
              value={skill.level}
              text={`${skill.level}%`}
              styles={buildStyles({
                textColor: "#FFFFFF",
                pathColor: "#3b82f6", // Blue color for progress
                trailColor: "#2d2d2d", // Dark background for progress trail
                textSize: "14px",
                pathTransitionDuration: 1.5, // Smooth animation
              })}
            />
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkills;
