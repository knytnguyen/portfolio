import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

import { useTypedSubtext } from './useTypedSubtext'

const subtexts = ['This is the subtext', 'Next subtext']

const Home = () => {
  const subtext = useTypedSubtext(subtexts)
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#2A5470] to-[#4C4177]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-3xl py-2 text-[#88C0D0]'>Hi! My name is</p>
            <h2 className='text-4xl font-bold py-2 sm:text-7xl text-[#f0f4f8]'> Kenny Nguyen,</h2>
            <h2 className='text-4xl py-2 sm:text-7xl font-bold text-[#8892b0] blinking-cursor'>{subtext}</h2>
            <p className='text-2xl text-[#8892b0] py-2 max-w-[700px]'>Welcome to my first ever React project! I hope you enjoy the stay ^_^</p>
            <div>
                <button className='text-[#f0f4f8] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#9285C8] hover:border-[#121212]'>
                    <Link to="about" smooth={true} duration={500}> View Work </Link>
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