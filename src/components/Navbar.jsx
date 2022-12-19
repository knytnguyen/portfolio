import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#121212] text-[#f0f4f8]'>
        <div>
            <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 pl-4'>
                <a className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-2 cursor-pointer' href='#top'>
                <Link to="home" smooth={true} duration={500}> Kenny T. Nguyen </Link>
                </a>
            </h1>
        </div>
        {/* MENU */}
        <ul className='hidden md:flex text-lg p-2'>
            <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                <Link to="home" smooth={true} duration={500}> Home </Link>
            </li>
            <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                <Link to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                <Link to="skills" smooth={true} duration={500}> Skills & Resume </Link>
            </li>
            <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                <Link to="portfolio" smooth={true} duration={500}> Portfolio </Link>
            </li>
            <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                <Link to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

        {/* HAMBURGER MENU */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}> Skills & Resume </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}> Portfolio </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className='hidden lg:flex fixed flex-column top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/kenny-nguyen-cs/' target='_blank' rel='noreferrer'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/knytnguyen' target='_blank' rel='noreferrer'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5E81AC]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto: knytnguyen@gmail.com' target='_blank' rel='noreferrer'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B48EAD]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='../assets/resume/Resume - Kenny Nguyen.pdf' target='_blank' re='noreferrer'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar