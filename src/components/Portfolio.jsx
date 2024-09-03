import React, { useEffect } from 'react';
import data from '../data/data'; // Adjust the path as necessary
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  // Initialize animate on scroll animation duration
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-[#0A192F] text-white">
      <div className="container mx-auto px-6" data-aos="fade-up" data-aos-once="true">

        {/* Centered Heading */}
        <div className="flex justify-center items-center">
          <h3 className="text-3xl inline-block font-bold text-center mb-10 bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-2">
            Projects I've Built
          </h3>
        </div>

        {/* Displaying Project Cards: 1 Column Grid on Small Screen and 2 Columns for Medium+ Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;