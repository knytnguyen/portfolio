import React, { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import CurrentResume from '../assets/resume/Resume - Kenny Nguyen.pdf'
import experiences from '../data/experiences';

const Experience = () => {
  // Set initial experience to Company A (index 0)
  const [selectedExperience, setSelectedExperience] = useState(0);
  const detailsRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Initialize animate on scroll animation duration
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  // Calculate maximum height of all descriptions after experience loads
  useEffect(() => {
    if (detailsRef.current) {
      const allHeights = experiences.map((_, index) => {
        setSelectedExperience(index);
        return detailsRef.current.offsetHeight;
      });

      const max = Math.max(...allHeights);
      setMaxHeight(max);
    }
    // After calculating max height, reset to the default experience
    setSelectedExperience(0);
  }, []);

  return (
    <section
      name='experience'
      className="min-h-screen flex items-center justify-center bg-[#0A192F] text-white"
    >
      {/* Set up Fade Up Animation */}
      <div className="max-w-4xl w-full mx-auto px-8 py-16" data-aos="fade-up" data-aos-once="true">
        
        {/* Centered Experience Heading */}
        <div className='flex justify-center w-full pb-8'>
          <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-2'>
            My Experience
          </h3>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Experience Sidebar w/ List of Companies */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <ul className="text-[#8892b0]">
              {experiences.map((exp, index) => (
                <li
                  key={index}
                  className={`cursor-pointer py-2 px-4 border-l-4 ${
                    selectedExperience === index
                      ? 'border-[#61DBFB] text-[#61DBFB]'
                      : 'border-transparent hover:text-[#61DBFB]'
                  }`}
                  onClick={() => setSelectedExperience(index)}
                >
                  {exp.company}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Information (Role at Company, Data, Location, Description) */}
          <div
            ref={detailsRef}
            style={{ minHeight: `${maxHeight}px` }}
            className="md:w-2/3 md:pl-12 transition-all duration-300"
          >
            {/* ROLE AT COMPANY */}
            <h3 className="text-xl font-semibold text-center md:text-left">
              {experiences[selectedExperience].role} @{' '}
              <span className="text-[#61DBFB]">
                {experiences[selectedExperience].company}
              </span>
            </h3>

            {/* DATE AND LOCATION */}
            <p className="text-gray-400 text-sm mt-2 text-center md:text-left">
              {experiences[selectedExperience].date} |{' '}
              {experiences[selectedExperience].location}
            </p>

            {/* DESCRIPTION BULLETED LIST */}
            <ul className="list-disc list-outside mt-4 text-gray-300 text-left pl-5">
              {experiences[selectedExperience].description.map((item, index) => (
                <li key={index} className="mt-2 cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Centered Resume Button w/ Animation */}
        <div className="flex justify-center mt-12">
          <a href={CurrentResume} rel="noreferrer" target="_blank">
            <button className="relative inline-block font-medium group p-3">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-[#61DBFB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#0A192F] border border-[#61DBFB] group-hover:bg-[#61DBFB] group-hover:border-[#0A192F]"></span>
              <span className="relative text-[#61DBFB] group-hover:text-[#0A192F]">View Resume</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;