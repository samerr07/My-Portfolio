import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800  text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex items-center justify-center'>
            <form action="https://getform.io/f/lakmdzva" method="POST" className='flex flex-col w-full md:w-1/2'>
                <input type="text" name='name' placeholder='Enter your name...'
                    className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'
                />
                <input type="email" name='email' placeholder='Enter your email...'
                    className='p-2 bg-transparent border-2 my-4 text-white rounded-md focus:outline-none'
                />
                <textarea name="message" rows="10" placeholder='Enter your message...'
                className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'
                ></textarea>
                <button
                className='px-6 py-3 text-white bg-gradient-to-b from-cyan-500 to-blue-500 mx-auto my-8 rounded-md
                flex items-center hover:scale-110 duration-300'
                >Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
