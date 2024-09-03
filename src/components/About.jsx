import React, { useEffect } from 'react';
import ProfileImage from '../assets/profile-image/About-Image.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Initialize animate on scroll animation duration
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-[#D6DEEB] flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-full max-w-[1000px] mx-auto px-5 py-10' data-aos="fade-up" data-aos-once="true">
        {/* About Me Heading */}
        <div className='flex justify-center w-full pb-8'>
          <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-2'>
            About Me
          </h3>
        </div>

        {/* Grid Template 2 Columns for About Me Content */}
        <div className='grid sm:grid-cols-2 gap-10 items-start'>

          {/* Circular Profile Image */}
          <div className='w-[75%] sm:w-[80%] max-w-[300px] mx-auto'>
            <img src={ProfileImage} alt="profile-pic" className='rounded-lg w-full' />
          </div>

          {/* Description and Tech Skills */}
          <div className='w-full text-center sm:text-left'>
            <p className='text-sm sm:text-base leading-relaxed'>
              Hello there, thanks for visiting my website! My name is Kenny, and I have a deep passion for learning about and building new things. As a tech enthusiast, I'm always striving to keep up to date with the latest technologies that are shaping our future.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed">
              From building back-end systems to exploring the capabilities of artificial intelligence, I love working on projects that challenge me to think critically and creatively. I’m particularly interested in learning about the utilization of technology to create smarter and more efficient systems and how machine learning can help facilitate this process.
            </p>
            <p className='mt-4 text-sm sm:text-base leading-relaxed'>
              Here are a few technologies I've worked with:
            </p>
            <ul className='grid grid-cols-2 gap-2 mt-4 text-sm text-[#8892b0]'>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>C++
              </li>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>Python
              </li>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>JavaScript
              </li>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>React
              </li>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>HTML/CSS
              </li>
              <li className='flex items-center cursor-default hover:text-[#61DBFB] hover:-translate-y-1 transition-all duration-300'>
                <span className='text-[#61DBFB] pr-2'>▹</span>Git/GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;