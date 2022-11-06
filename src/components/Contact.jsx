import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#445288] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d4246a12-448e-4119-b6fa-4382a2c0ffbd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit this form here or feel free to email me at: knytnguyen@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccdf6]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccdf6]' type='email' placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#ccdf6]' name='message' rows='10' placeholder='Input your message here.'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact