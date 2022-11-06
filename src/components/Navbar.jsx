import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#37445e] text-gray-100'>
        <div>
            <h1 className='text-2xl text-[#ff79c6] pl-4'>Kenny Nguyen</h1>
        </div>
        {/* MENU */}
        <ul className='hidden md:flex text-lg p-2'>
            <li className='hover:bg-pink-500 rounded-2xl p-3'>
                <Link to="home" smooth={true} duration={500}> Home </Link>
            </li>
            <li className='hover:bg-pink-500 rounded-2xl p-3'>
                <Link to="about" smooth={true} duration={500}> About </Link>
            </li>
            <li className='hover:bg-pink-500 rounded-2xl p-3'>
                <Link to="skills" smooth={true} duration={500}> Skills & Resume </Link>
            </li>
            <li className='hover:bg-pink-500 rounded-2xl p-3'>
                <Link to="portfolio" smooth={true} duration={500}> Portfolio </Link>
            </li>
            <li className='hover:bg-pink-500 rounded-2xl p-3'>
                <Link to="contact" smooth={true} duration={500}> Contact </Link>
            </li>
        </ul>

        {/* HAMBURGER MENU */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#37445e] flex flex-col justify-center items-center'}>
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
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5E81AC]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#B48EAD]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar