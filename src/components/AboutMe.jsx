import React from 'react'
import Image from '../assets/Futuristic Neon Blue And Pink Light Instagram Profile Picture.png';

const AboutMe = () => {
  return (
    <div className='bg-[rgb(12,29,44)] text-white flex flex-row items-center justify-evenly'>
      <div >
        <img src={Image} alt="" srcset="" className='w-[100cm]'/>
      </div>
       <div className='flex flex-col gap-5'>
        <div className='text-5xl flex flex-row font-extrabold gap-2'>
        <h1 >About </h1>
        <h1 className='text-[rgb(54,188,195)]'> Me</h1>
        </div>
        <h2 className='text-3xl'>Full Stack Developer & Data analyst</h2>
        <p className='mr-2 text-1xl font-sans'>Hi, I'm Sasank, a passionate Full-Stack Developer and Data Analyst with a strong foundation in web technologies and data-driven problem-solving.<br/> I specialize in developing scalable web applications and leveraging data to extract meaningful insights.

As a Full-Stack Developer, I have hands-on experience with the MERN stack (MongoDB, Express.js, React.js, Node.js), building dynamic applications like an E-commerce website and a Facial Recognition Attendance System. I enjoy crafting efficient, user-friendly solutions while ensuring robust backend functionality.

<br />On the Data Analytics side, my expertise includes Python, SQL, machine learning, and data visualization. I have worked with pandas, NumPy, Matplotlib, and Power BI to analyze datasets and generate actionable insights. 

I am always eager to explore new technologies, solve complex problems, and contribute to impactful projects. Let’s connect and collaborate!</p>
    </div>
    </div>
  )
}

export default AboutMe