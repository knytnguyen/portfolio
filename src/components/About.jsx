import React from 'react';
import ProfileImage from '../assets/profile-image/updatedProfileImage.jpg';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#111a29] text-[#f0f4f8]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#9285C8]'>About Me</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                {/* <div style={{ backgroundImage: `url(${ProfileImage})`}}
                className>

                </div> */}
                <img src={ProfileImage} alt="profile-pic" className='w-100 h-100 rounded-full'/>
                <div>
                    <p className='text-center text-1xl'>
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