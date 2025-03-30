import React from "react";
import { motion } from "framer-motion"; // Ensure this is used in the component
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaChartLine, FaRobot } from 'react-icons/fa';

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 /> },
  { name: "CSS", level: 85, icon: <FaCss3 /> },
  { name: "JavaScript", level: 80, icon: <FaJs /> },
  { name: "React.js", level: 75, icon: <FaReact /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 65, icon: <FaDatabase /> },
  { name: "Data Analysis", level: 80, icon: <FaChartLine /> },
  { name: "Machine Learning", level: 60, icon: <FaRobot /> }
];

const SkillBars = () => {
  return (
    <div className="w-3/4 mx-auto mt-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-white shadow-[rgb(54,188,195)] shadow-2xl">Technical Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-2">{skill.icon}</span>
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
            <span className="text-lg font-semibold">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-4 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
