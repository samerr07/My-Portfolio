import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>

          A diligent and persistent Engineering student with 
          problem solving skills and programming knowledge, 
          looking for a growth-oriented and challenging career 
          where I can contribute my softwareknowledge and skills
          to the organization and further enhance my experience
          through continuous learning
        </p>

        <br />
        <p className='text-xl'>
          I did my class 10th and class 12th from UP board. I got 84.9 %
          in class 12th and 90.2 % in class 10th.After that I did B.tech in 
          Mechanical Engineering from JC Bose University of Science 
          & Technology (YMCA).I got 8.28 CGPA in B.tech. After that I joined
          Coding Ninjas Bootcamp where I learned different programming languages
          like Java, HTML, CSS, JavaScript, React, Node.js, MongoDB, etc. And I am also
          certifeied in all technologies of Frontend and Backend development.
          And with the help of these technologies I am able to build a website.
          I am also a good team player and I am able to work in a team and I have created
          different types of projects in Frontend and Backend.
        </p>
        
      </div>
    </div>
  )
}

export default About
