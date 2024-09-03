import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Home = () => {
  // Initialize animate on scroll animation duration and occurrence
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#0A192F]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/* Introductory Words to Webpage */}
        <p className="text-xl py-1 text-[#D6DEEB]" data-aos="fade-up" data-aos-delay="0">
          Hi! My name is
        </p>

        {/* Extra Bolded Name w/ Color Accent*/}
        <h2 className="text-5xl sm:text-8xl font-extrabold py-3 text-[#EFF1F3]" data-aos="fade-up" data-aos-delay="500">
          Kenny Nguyen,
        </h2>

        {/* Typewriter Animation */}
        <h3 className="text-4xl sm:text-5xl py-3 font-extrabold text-[#D6DEEB]" data-aos="fade-up" data-aos-delay="800">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Welcome to my Portfolio!')
                .pauseFor(3300)
                .changeDeleteSpeed(50)
                .deleteAll()
                .changeDelay(100)
                typewriter.typeString('I hope you enjoy the stay ٩(^‿^)۶')
                .start();
            }}
          />
        </h3>
        
        {/* Gray Subheading Words */}
        <p className="text-xl sm:text-2xl text-[#8892b0] py-4 max-w-[700px]" data-aos="fade-up" data-aos-delay="1200">
          This is my first ever ‎ 
            <span className='text-[#D6DEEB] font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom'>
              React.js and Tailwind CSS
            </span> 
            ‎ project, Check out my work below!
        </p>

        <div className="pt-8" data-aos="fade-up" data-aos-delay="1600">
          {/* Button Animations to Scroll to About Component */}
          <button className="relative inline-block font-medium group p-3">
            <Link to="about" smooth={true} duration={700}>
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-[#61DBFB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#0A192F] border border-[#61DBFB] group-hover:bg-[#61DBFB] group-hover:border-[#0A192F]"></span>
              <span className="relative text-[#61DBFB] group-hover:text-[#0A192F] flex items-center">
                Check out my work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;