import React from 'react'
import TypingRoyale from '../assets/TypingRoyale-Image.PNG'
import RogueOrigins from '../assets/RogueOrigins-Image.png'
import BeginningPortfolio from '../assets/Beginning-Portfolio-Site.PNG'
import CodePenProfile from '../assets/CodePen-Profile.PNG'
import FCCProfile from '../assets/FreeCodeCamp-Profile.PNG'

const Portfolio = () => {
  return (
    <div name ='portfolio' className='w-full h-screen text-[#f0f4f8] bg-[#111a29]'>
        <div className='max-w-[1000px] mx-auto p-10 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#f0f4f8] border-[#ff79c6]'>Portfolio</p>
                <p className='py-6'>Check out some of the projects I've done in the past! (Hover/Click on the project image to visit the project)</p>
            </div>
            {/* CONTAINER */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                {/* GRID ITEM 1 */}
                <div style={{backgroundImage: `url(${TypingRoyale})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-[#f0f4f8] tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* GRID ITEM 1 DESCRIPTION */}
                <div className='border-2 border-white rounded-md'>
                    <h3 className='p-4 underline bold text-2xl text-center'>Typing Royale</h3>
                    <p className='p-2 text-center'>Typing Royale is the user-interactive typing game that my friends and I created to place 2nd overall in UCR’s 12-hour, beginner-oriented hackathon out of 500+ participants.</p>
                    <p className='p-2 text-[#ff79c6] text-center'>GDScript • Godot Game Engine</p>
                </div>
                {/* GRID ITEM 2 */}
                <div style={{backgroundImage: `url(${RogueOrigins})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* GRID ITEM 2 DESCRIPTION */}
                <div className='border-2 border-white rounded-md'>
                    <h3 className='p-4 underline bold text-2xl text-center'>Rogue Origins</h3>
                    <p className='p-2 text-center'>Rogue Origins is the text-based RPG my classmates and I created in a group of 4 as part of the final project for the CS 100 (Software Construction) course at UCR. </p>
                    <p className='p-2 text-[#ff79c6] text-center'>C++ • GoogleTest • Git/GitHub • Vim • Valgrind • CMake • PuTTY</p>
                </div>
                {/* GRID ITEM 3 */}
                <div style={{backgroundImage: `url(${BeginningPortfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* GRID ITEM 3 DESCRIPTION */}
                <div className='border-2 border-white rounded-md'>
                    <h3 className='p-4 underline bold text-2xl text-center'>Beginning Personal Portfolio</h3>
                    <p className='p-2 text-center'>This project was my first ever attempt at creating a personal portfolio and start my web development path. I created this website using the skills I had acquired from completing over 300 hours worth of content from freeCodeCamp's Responsive Web Design course.</p>
                    <p className='p-2 text-[#ff79c6] text-center'>HTML • CSS • JavaScript</p>
                </div>

                {/* GRID ITEM 4 */}
                <div style={{backgroundImage: `url(${CodePenProfile})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* HOVER EFFECTS */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* GRID ITEM 3 DESCRIPTION */}
                <div className='border-2 border-white rounded-md'>
                    <h3 className='p-4 underline bold text-2xl text-center'>CodePen Profile</h3>
                    <p className='p-2 text-center'>My Codepen account features some of the many responsive websites that I created to fulfill the requirements for freeCodeCamp’s Responsive Web Design certification.</p>
                    <p className='p-2 text-[#ff79c6] text-center'>HTML • CSS • JavaScript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio