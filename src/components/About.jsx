import React from 'react';
import ProfileImage from '../assets/profile-image/originalProfileImage.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#FAF4E8] text-[#16192C]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#E6CCF5]'>About Me</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-5 p-5'>
                <img src={ProfileImage} alt="profile-pic" className='w-4/5'/>
                <div>
                    <p className='text-center text-1xl pt-9'>
                    Hello there, thanks for visiting my website! My name is Kenny Nguyen and I am currently a third year student majoring in 
                    Computer Science with Business Applications at the University of California, Riverside. My current focus is on back-end development 
                    as I love the process of designing and building out robust and scalable features that aim to provide a better and more fulfilling 
                    experience for users. As a fervent learner and someone who is always willing and open to learn new things, face different challenges, 
                    and solve problems, back-end development and working with servers, APIs, and databases is something that I love to pursue.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About