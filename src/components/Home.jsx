import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-5xl py-4 text-[#ccd6f6]'>Hi my name is <span className='text-[#ae83de]'>Kenny</span>,</p>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>an aspiring Software Engineer.</h2>
            <p className='text-2xl text-[#8892b0] py-4 max-w-[700px]'>Welcome to my first ever React project! I hope you enjoy the stay ^_^</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e69fe9] hover:border-[#e8c9e9]'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home