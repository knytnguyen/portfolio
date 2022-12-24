import React from 'react'
import {BsSuitHeartFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-max bg-[#E6CCF5] block absolute text-center p-4'>
        <div className='align-middle py-2'>
            <span className='text-[#16192C]'> Made with <BsSuitHeartFill className='inline' color='red' size={15} />‎  
            in <a href='https://reactjs.org/' target='_blank' rel="noreferrer" className='underline font-extrabold cursor-pointer'>React.js</a>‎  
            and <a href='https://tailwindcss.com/' target='_blank' rel="noreferrer" className='underline font-extrabold cursor-pointer'>Tailwind CSS</a>.
            Deployed via <a href='https://pages.github.com/' target='_blank' rel="noreferrer" className='underline font-extrabold cursor-pointer'>GitHub Pages</a>.
            </span>
        </div>
    </div>
  )
}

export default Footer