import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#FDFAF2] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d4246a12-448e-4119-b6fa-4382a2c0ffbd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-3'>
                <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-1'>Contact</h3>
                <p className='text-[#16192C] py-4'>For feedback or business inquiries, submit this form here or send me an email at: ‎  
                  <a className='bold underline text-[#E1306C] hover:text-[#2EC58C]' href="mailto: knytnguyen@gmail.com">knytnguyen@gmail.com</a>
                </p>
            </div>
            <input className='p-3 bg-[#FFF5B1] border-2 border-solid border-[#16192C]' type='text' placeholder='Name' name='name' required/>
            <input className='my-4 p-3 bg-[#FFF5B1] border-2 border-solid border-[#16192C]' type='email' placeholder='Email' name='email' required/>
            <textarea className='resize-none p-3 bg-[#FFF5B1] border-2 border-solid border-[#16192C]' name='message' rows='10' placeholder='Input your message here.'></textarea>
            <button className='text-[#16192C] bg-[#A2D6E7] hover:bg-[#E6CCF5] border-2 border-[#121212] px-4 py-3 my-8 mx-auto flex items-center' required>Send Message</button>
        </form>
    </div>
  )
}

export default Contact