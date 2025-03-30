import React, { useEffect } from 'react';
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

const Services = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className='bg-[rgb(12,29,44)] text-white min-h-screen'>
      <h1 className='text-5xl flex justify-center underline pb-10 shadow-[rgb(54,188,195)] shadow-2xl'>
        Services
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 gap-10 flex-wrap justify-between m-3 text-white'>
        
        {/* Frontend Card */}
        <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'>
          <FaCode className='text-2xl font-bold font-serif justify-center m-3'/>
          <h1 className='text-2xl font-bold font-serif justify-center m-3'>Frontend</h1>
          <p className='m-3 font-semibold font-sans'>
            Crafting visually stunning and highly interactive user interfaces using modern web technologies.
            Expertise in responsive design, component-based architecture, and seamless user experiences.
            <br />🔹 Skills: React.js, Tailwind CSS, HTML, CSS, JavaScript, UI/UX Design
          </p>
          <button className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] m-3 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            Learn more
          </button>
        </div>
        
        {/* Backend Card */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'>
          <FaDatabase className='text-2xl font-bold font-serif justify-center m-3'/>
          <h1 className='text-2xl font-bold font-serif justify-center m-3'>Backend</h1>
          <p className='m-3 font-semibold font-sans'>
            Building robust, secure, and scalable server-side applications with efficient database management.
            Ensuring smooth API interactions and high-performance web applications.
            <br />🔹 Skills: Node.js, Express.js, MongoDB, SQL, REST API, Authentication
          </p>
          <button className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] m-3 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            Learn more
          </button>
        </div>
        
        {/* Data Analysis Card */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'>
          <TbDeviceDesktopAnalytics className='text-2xl font-bold font-serif justify-center m-3'/>
          <h1 className='text-2xl font-bold font-serif justify-center m-3'>Data analysis</h1>
          <p className='m-3 font-semibold font-sans'>
            Transforming raw data into meaningful insights through statistical analysis and visualization.
            Skilled in data preprocessing, exploratory analysis, and trend identification.
            <br /> 🔹 Skills: Python, Pandas, NumPy, Matplotlib, Power BI, SQL
          </p>
          <button className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] m-3 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            Learn more
          </button>
        </div>
        
        {/* Dashboards Card */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className='flex flex-col gap-3 border border-[rgb(54,188,195)] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-4'>
          <MdOutlineSpaceDashboard className='text-2xl font-bold font-serif justify-center m-3'/>
          <h1 className='text-2xl font-bold font-serif justify-center m-3'>Dashboards</h1>
          <p className='m-3 font-semibold font-sans'>
            Designing intuitive and dynamic dashboards for real-time data monitoring and decision-making.
            Enhancing business intelligence through interactive visual analytics.
            <br />🔹 Skills: Power BI, Tableau, D3.js, Dash, Chart.js, React.js
          </p>
          <button className='bg-[rgb(54,188,195)] rounded-2xl w-[120px] m-3 text-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg'>
            Learn More
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
