import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sameer-srivastava-7896b8208/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/samerr07",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:anilanita07@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className='hidden lg:flex flex-col top-[35%] fixed'>
      <ul>
        {
          links.map((e)=>(
            <li className={'bg-gray-500 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' +" " + e.style}>
            <a 
              href={e.href}
              download={e.download}
              target='_blank'
              className='text-white flex justify-between w-full items-center'>
                <>
                    {e.child}
                </>
            </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocialLinks
