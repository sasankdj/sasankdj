import React from 'react';

const AboutMe = () => {
  return (
    <div className='bg-[rgb(12,29,44)] text-white min-h-screen flex items-center justify-center px-6 py-12'>
      <div className='max-w-4xl'>
        {/* Heading */}
        <div className='text-center mb-8'>
          <h1 className='text-5xl font-extrabold mb-2'>
            About <span className='text-[rgb(54,188,195)]'>Me</span>
          </h1>
          <h2 className='text-2xl text-gray-300 font-semibold'>
            Full Stack Developer & Data Analyst
          </h2>
        </div>

        {/* Body Text */}
        <div className='text-lg leading-relaxed space-y-6 font-sans text-gray-200'>
          <p>
            Hi, I'm <span className='text-[rgb(54,188,195)] font-bold'>Sasank</span>, a passionate Full-Stack Developer and Data Analyst
            with a strong foundation in web technologies and data-driven
            problem-solving. I specialize in building scalable web applications
            and uncovering insights through data.
          </p>

          <p>
            As a Full-Stack Developer, I work with the <span className='font-semibold text-white'>MERN stack</span> (MongoDB,
            Express.js, React.js, Node.js) to craft dynamic applications like
            an E-commerce platform and a Facial Recognition Attendance System.
            I focus on clean UI/UX, performance, and robust backend architecture.
          </p>

          <p>
            On the data side, I’m proficient with <span className='font-semibold text-white'>Python, SQL, and machine learning</span>.
            Tools like pandas, NumPy, Matplotlib, and Power BI help me analyze
            complex datasets and turn them into actionable insights.
          </p>

          <p>
            I'm always eager to explore new technologies, solve real-world
            problems, and contribute to meaningful projects. Let’s connect and
            collaborate!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
