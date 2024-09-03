import React, { useState, useEffect, useCallback } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showNav, setShowNav] = useState(true);
    const [hovering, setHovering] = useState(false);

    const handleClick = () => setNav(!nav);

    const handleScroll = useCallback(() => {
        if (window.scrollY > scrollY) {
            // If user is scrolling down, hide navbar
            setShowNav(false);
        } else {
            // Otherwise, user is scrolling up so show navbar
            setShowNav(true);
        }
        setScrollY(window.scrollY);
    }, [scrollY]);

    const handleMouseMove = useCallback((event) => {
        // If navbar is hidden and mouse hovers over navbar, show navbar
        if (event.clientY <= 100 && !showNav) {
            setHovering(true);
            setShowNav(true);
        }
        // Otherwise, leave navbar hidden
        else if (event.clientY > 100 && hovering) {
            setHovering(false);
            setShowNav(false);
        }
    }, [showNav, hovering]);

    // Initialize animate on scroll animation duration
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    // Detect Mouse Scroll or Movement on Page and Navbar
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleScroll, handleMouseMove]);

    return (
        <div className={`fixed shadow-2xl w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-[#FFFFFF] z-10 transition-opacity duration-300 ${
                showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
        <div>
            <h1 className='font-extrabold text-3xl bg-clip-text pl-4'>
                <a className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-2 cursor-pointer' href='#top'>
                <Link to="home" smooth={true} duration={500}> Kenny T. Nguyen </Link>
                </a>
            </h1>
        </div>

            {/* Top Navbar Menu Options w/ Hover Animations */}
            <ul className="hidden md:flex text-lg p-2">
              <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                  <Link to="home" smooth={true} duration={500}> Home </Link>
              </li>
              <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                  <Link to="about" smooth={true} duration={700}> About </Link>
              </li>
              <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                  <Link to="experience" smooth={true} duration={700}> Experience </Link>
              </li>
              <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                  <Link to="portfolio" smooth={true} duration={700}> Portfolio </Link>
              </li>
              <li className='bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:0%_5px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_5px] transition-all duration-500 p-3'>
                  <Link to="contact" smooth={true} duration={700}> Contact </Link>
              </li>
            </ul>

            {/* HAMBURGER MENU */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MOBILE MENU */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'
                }
            >
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="home" smooth={true} duration={500}> Home </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="about" smooth={true} duration={500}> About </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="experience" smooth={true} duration={500}> Experience </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}> Portfolio </Link>
              </li>
              <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="contact" smooth={true} duration={500}> Contact </Link>
              </li>
            </ul>

            {/* LEFT SIDEBAR SOCIAL ICON OPTIONS */}
            <div className="hidden lg:flex fixed flex-column top-[35%] left-0">
              <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]'>
                      <a className='flex justify-between items-center w-full text-[#f0f4f8]' href='https://github.com/knytnguyen' target='_blank' rel='noreferrer'>
                          GitHub <FaGithub size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                      <a className='flex justify-between items-center w-full text-[#f0f4f8]' href='https://www.linkedin.com/in/kenny-nguyen-cs/' target='_blank' rel='noreferrer'>
                          LinkedIn <FaLinkedin size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#2EC58C]'>
                      <a className='flex justify-between items-center w-full text-[#f0f4f8]' href='mailto: knytnguyen@gmail.com' target='_blank' rel='noreferrer'>
                          Email <HiOutlineMail size={30} />
                      </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gradient-to-r from-[#405de6] via-[#c13584] to-[#e1306c] '>
                      <a className='flex justify-between items-center w-full text-[#f0f4f8]' href='https://www.instagram.com/kenny.nt/' target='_blank' rel='noreferrer'>
                          Instagram <FaInstagram size={30} />
                      </a>
                  </li>
              </ul>
            </div>
        </div>
    );
};

export default Navbar;