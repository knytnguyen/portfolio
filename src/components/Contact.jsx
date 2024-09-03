import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4'>
        {/* GetForm POST Request for Message Submission */}
        <form method='POST' action="https://getform.io/f/d4246a12-448e-4119-b6fa-4382a2c0ffbd" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-3'>
                <h3 className='text-4xl font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom p-1'>Contact</h3>
                <p className='text-white py-4'>For feedback or business inquiries, submit this form here or send me an email at: ‎  
                  <a className='bold underline text-[#61DBFB] hover:text-[#037cb8]' href="mailto: knytnguyen@gmail.com">knytnguyen@gmail.com</a>
                </p>
            </div>
            
            {/* User Input Areas */}
            <input className='p-3 bg-white border-2 border-solid border-[#16192C]' type='text' placeholder='Name' name='name' required/>
            <input className='my-4 p-3 bg-white border-2 border-solid border-[#16192C]' type='email' placeholder='Email' name='email' required/>
            <textarea className='resize-none p-3 bg-white border-2 border-solid border-[#16192C]' name='message' rows='10' placeholder='Input your message here.'></textarea>
            
            {/* Send Message Button */}
            <button className="relative inline-block font-medium group p-3 my-8 mx-auto">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-[#61DBFB] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-[#0A192F] border border-[#61DBFB] group-hover:bg-[#61DBFB] group-hover:border-[#0A192F]"></span>
              <span className="relative text-[#61DBFB] group-hover:text-[#0A192F] flex items-center">
                Send Message
              </span>
            </button>
        </form>
    </div>
  );
};

export default Contact;