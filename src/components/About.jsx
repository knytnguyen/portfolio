import React from 'react'

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
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi, I'm Kaiyo, welcome to my about section!
                    </p>
                </div>
                <div>
                    <p>
                        fasdjkfdasfdjasf
                        fdjask;fjdaskl;fdsajk
                        fasdklfjdks;fjkds;afasdjkl
                        fadsk;lfjdaskl;fjads;
                        fjdaks;fjdas;
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About