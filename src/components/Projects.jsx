import React from 'react'
import Crypto from "../assets/portfolio/Crypto.png";
import ECommerce from "../assets/portfolio/ECommerce.png";
import Education from "../assets/portfolio/Education.png";
import Movix from "../assets/portfolio/Movix.png";
import Todo from "../assets/portfolio/Todo.png";
import Tour from "../assets/portfolio/Tour.png";


const Projects = () => {

    const projects = [
        {
          id: 1,
          src: Crypto,
          demo:"https://cryptosam2607.netlify.app/",
          code:"https://github.com/samerr07/CryptoApp.git"
        },
        {
          id: 2,
          src: ECommerce,
          demo:"https://frontend-seven-roan.vercel.app/",
          code:"https://github.com/samerr07/Fullstack-Food-Delivery-App-E-Commerce-MERN.git"
        },
        {
          id: 3,
          src: Education,
          demo:"https://education-app-ui-design.vercel.app/",
          code:"https://github.com/samerr07/Education-App-UI-Design.git"
        },
        {
          id: 4,
          src: Movix,
          demo:"https://movix-app-jet.vercel.app/",
          code:"https://github.com/samerr07/Movix-App.git"
        },
        {
          id: 5,
          src: Todo,
          demo:"https://todo-app-with-authentication.vercel.app/",
          code:"https://github.com/samerr07/Todo-App-with-Authentication.git"
        },
        {
          id: 6,
          src: Tour,
          demo:"https://mern-tour-and-travel1.vercel.app/",
          code:"https://github.com/samerr07/MERN-Tour-and-Travel.git"
        },
      ];
  return (
    <div name="projects" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800  text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    projects.map((e)=>(
                        <div key={e.id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={e.src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>
                                  <a href={e.demo} target='_blank'>Demo</a>
                                </button>
                                <button className='w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200'>
                                  <a href={e.code} target='_blank'>Code</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      
    </div>

    
  )
}

export default Projects
