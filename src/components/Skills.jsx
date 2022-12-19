import React from 'react'

import CPP from '../assets/skills/CPP-Logo.png';
import Python from '../assets/skills/Python-Logo.png';
import JavaScript from '../assets/skills/JavaScript-Logo.png';
import GitHub from '../assets/skills/GitHub-Logo.png';
import ReactLogo from '../assets/skills/React-Logo.png';
import HTML from '../assets/skills/HTML-Logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#FDFAF2] text-[#16192C]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <h3 className='text-4xl font-bold inline border-b-4 border-[#E6CCF5]'>Skills & Resume</h3>
                <p className='py-4'>These are the technologies that I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 pb-10'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={CPP} alt="C++ Icon" className='w-20 mx-auto pt-2'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={Python} alt="Python Icon" className='w-20 mx-auto pt-2'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={JavaScript} alt="JavaScript Icon" className='w-20 mx-auto pt-1'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={GitHub} alt="GitHub Icon" className='w-20 mx-auto pt-2'/>
                    <p className='my-4'>Git/GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={ReactLogo} alt="React Icon" className='w-20 mx-auto pt-2'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#FFF5B1]'>
                    <img src={HTML} alt="HTML Icon" className='w-20 mx-auto pt-3'/>
                    <p className='my-4'>HTML/CSS</p>
                </div>
            </div>
            <a href='../assets/resume/Resume%20-%20Kenny%20Nguyen.pdf' rel='noreferrer' target='_blank'>
                <button className='text-[#16192C] bg-[#A2D6E7] group border-2 px-6 py-3 my-2 flex justify-center mx-auto border-[#121212] hover:bg-[#E6CCF5]'>View Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Skills