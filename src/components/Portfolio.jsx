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
    <div name ='portfolio' className='w-full h-150vh text-[#16192C] bg-[#FAF4E8]'>
        <div className='max-w-[1000px] mx-auto p-10 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#16192C] border-[#E6CCF5]'>Portfolio</p>
                <p className='py-6'>Check out some of the projects I've done in the past!</p>
            </div>
            {/* CONTAINER
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
            </div> */}
            <div className='m-6'>
                {myData.map((item) => {
                    const { id, image, title, imageDescription, techUsed, linkToProject} = item;
                    return (
                        <div key={id} className={activeSlide === id ? 'flex justify-between items-center' : 'hidden'}>
                            <button className='text-4xl border-2 border-[#16192C] hover:bg-[#E6CCF5] hover:text-[#111a29] p-2' onClick={() => prevSliderHandler(id)}>
                                <FiChevronLeft />
                            </button>
                            <div className='flex flex-col items-center'>
                                <img className='max-h-50 w-97 px-5' src={image} alt={title}/>
                                <h2 className='text-3xl font-bold my-4'>{id}</h2>
                                <p className='text-2xl underline'>{title}</p>
                                <p className='text-1xl p-2 text-center'>{imageDescription}</p>
                                <p className='text-1xl p-4 pb-6 text-[#2d414c] font-extrabold'>{techUsed}</p>
                                <a className='border-green' href={linkToProject} rel='noreferrer' target='_blank'>
                                    <button className='text-[#16192C] bg-[#A2D6E7] group border-2 px-6 py-3 my-2 flex justify-center mx-auto border-[#121212] hover:bg-[#E6CCF5]'>View Project</button>
                                </a>
                            </div>
                            <button className='text-4xl border-2 border-[#16192C] hover:bg-[#E6CCF5] hover:text-[#111a29] p-2' onClick={() => nextSlideHandler(id)}>
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