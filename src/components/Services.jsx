import React, { useEffect } from 'react';
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bg-[rgb(12,29,44)] text-white min-h-screen'>
       <div className='text-center mb-8'>
          <h1 className='text-5xl font-extrabold mb-2'>
            Services<span className='text-[rgb(54,188,195)]'> Provided</span>
          </h1>
        
        </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 gap-10 m-3 text-white'>

        {/* Frontend Card */}
        <div
          data-aos="fade-up"
          className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'
        >
          <FaCode className='text-3xl mx-auto my-2' />
          <h1 className='text-2xl font-bold text-center'>Frontend</h1>
          <p className='m-3 font-semibold text-sm text-gray-300'>
            Crafting visually stunning and highly interactive user interfaces using modern web technologies.
            Expertise in responsive design, component-based architecture, and seamless user experiences.
            <br />🔹 Skills: React.js, Tailwind CSS, HTML, CSS, JavaScript, UI/UX Design
          </p>
          <a
            href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] mx-auto text-center text-black font-bold py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Learn more
          </a>
        </div>

        {/* Backend Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'
        >
          <FaDatabase className='text-3xl mx-auto my-2' />
          <h1 className='text-2xl font-bold text-center'>Backend</h1>
          <p className='m-3 font-semibold text-sm text-gray-300'>
            Building robust, secure, and scalable server-side applications with efficient database management.
            Ensuring smooth API interactions and high-performance web applications.
            <br />🔹 Skills: Node.js, Express.js, MongoDB, SQL, REST API, Authentication
          </p>
          <a
            href="https://www.codecademy.com/learn/learn-back-end-development"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] mx-auto text-center text-black font-bold py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Learn more
          </a>
        </div>

        {/* Data Analysis Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'
        >
          <TbDeviceDesktopAnalytics className='text-3xl mx-auto my-2' />
          <h1 className='text-2xl font-bold text-center'>Data Analysis</h1>
          <p className='m-3 font-semibold text-sm text-gray-300'>
            Transforming raw data into meaningful insights through statistical analysis and visualization.
            Skilled in data preprocessing, exploratory analysis, and trend identification.
            <br />🔹 Skills: Python, Pandas, NumPy, Matplotlib, Power BI, SQL
          </p>
          <a
            href="https://www.coursera.org/specializations/data-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] mx-auto text-center text-black font-bold py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Learn more
          </a>
        </div>

        {/* Dashboards Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'
        >
          <MdOutlineSpaceDashboard className='text-3xl mx-auto my-2' />
          <h1 className='text-2xl font-bold text-center'>Dashboards</h1>
          <p className='m-3 font-semibold text-sm text-gray-300'>
            Designing intuitive and dynamic dashboards for real-time data monitoring and decision-making.
            Enhancing business intelligence through interactive visual analytics.
            <br />🔹 Skills: Power BI, Tableau, D3.js, Dash, Chart.js, React.js
          </p>
          <a
            href="https://www.coursera.org/learn/analytics-tableau"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] mx-auto text-center text-black font-bold py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg'
          >
            Learn more
          </a>
        </div>

      </div>
    </div>
  );
};

export default Services;
