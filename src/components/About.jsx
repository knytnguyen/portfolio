import React from 'react';
import ProfileImage from '../assets/profile-image/About Profile Image.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FAF4E8] text-[#16192C]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom pb-1'>About Me</h3>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-5 p-5'>
                <img src={ProfileImage} alt="profile-pic" className='w-3/4 mx-auto'/>
                <div>
                    <p className='text-center text-1xl pt-7'>
                    Hello there, thanks for visiting my website! My name is Kenny Nguyen and I am currently a third year student majoring in 
                    Computer Science with Business Applications at UCR. My current focus is on back-end development as I love the process of
                    designing and building out robust and scalable features that aim to provide a better and more fulfilling experience for users. 
                    During my free time, I have also enjoyed branching out into web development and experimenting with many different interactive 
                    design features on the front-end. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About