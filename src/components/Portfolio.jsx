import React from 'react';
import data from '../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

const Portfolio = () => {
    const myData = data;
    const [activeSlide, setActiveSlide] = useState(1);

    const prevSliderHandler = (id) => {
        if (id === 1) {
            setActiveSlide(myData.length);
        }
        else if (id > 1) {
            setActiveSlide(activeSlide - 1);
        }
        else {
            setActiveSlide(myData.length - 1)
        }
    };

    const nextSlideHandler = (id) => {
        if (id === myData.length) {
            setActiveSlide(1);
        }
        else if (id < myData.length) {
            setActiveSlide(activeSlide + 1);
        }
        else {
            setActiveSlide(myData.length - 1)
        }
    };

  return (
    <div name ='portfolio' className='w-full h-screen text-[#16192C] bg-[#FAF4E8]'>
        <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
            <div>
                <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-1'>Portfolio</h3>
                <p className='pt-4'>Check out all of the projects I've done in the past!</p>
            </div>
            <div className='m-2'>
                {myData.map((item) => {
                    const { id, image, title, imageDescription, techUsed, linkToProject} = item;
                    return (
                        <div key={id} className={activeSlide === id ? 'flex justify-between items-center' : 'hidden'}>
                            <button className='text-2xl border-2 border-[#16192C] hover:bg-[#E6CCF5] hover:text-[#111a29] p-2' onClick={() => prevSliderHandler(id)}>
                                <FiChevronLeft />
                            </button>
                            <div className='flex flex-col items-center'>
                                <img className='w-1/14 max-h-[350px] my-4 hover:scale-105 transition duration-300 ease-in-out' src={image} alt={title}/>
                                <p className='text-2xl underline'>{title}</p>
                                <p className='text-1xl p-2 text-center'>{imageDescription}</p>
                                <h3 className='text-1xl p-4 pb-6 font-extrabold'>{techUsed}</h3>
                                <a className='border-green' href={linkToProject} rel='noreferrer' target='_blank'>
                                    <button className='text-[#16192C] bg-[#A2D6E7] group border-2 px-6 py-3 my-2 flex justify-center mx-auto border-[#121212] hover:bg-[#E6CCF5]'>View Project</button>
                                </a>
                            </div>
                            <button className='text-2xl border-2 border-[#16192C] hover:bg-[#E6CCF5] hover:text-[#111a29] p-2' onClick={() => nextSlideHandler(id)}>
                                <FiChevronRight />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio