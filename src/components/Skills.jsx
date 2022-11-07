import React from 'react'

import CPP from '../assets/skills/CPP-Logo.png';
import Python from '../assets/skills/Python-Logo.png';
import JavaScript from '../assets/skills/JavaScript-Logo.png';
import GitHub from '../assets/skills/GitHub-Logo.png';
import ReactLogo from '../assets/skills/React-Logo.png';
import HTML from '../assets/skills/HTML-Logo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#152037] text-[#f0f4f8]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff79c6]'>Skills & Resume</p>
                <p className='py-4'>These are the technologies that I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 pb-10'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CPP} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Python} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>Git/GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactLogo} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="C++ Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML/CSS</p>
                </div>
            </div>
            <a href='../assets/resume/Resume%20-%20Kenny%20Nguyen.pdf' rel='noreferrer' target='_blank'>
                <button className='text-4xl border-2 border-[#f0f4f8] hover:bg-[#ff79c6] hover:text-[#111a29] p-2 flex justify-center mx-auto'>View Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Skills