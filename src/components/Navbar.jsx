import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between px-4 items-center h-20 bg-black w-full text-white fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sameer</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((e) => (
          <li
            className="capitalize px-4 font-medium text-gray-500 cursor-pointer hover:scale-105 duration-200"
            key={e.id}
          >
            <Link to={e.link} smooth duration={500}>
              {e.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col absolute top-0 left-0 w-full h-screen 
                        justify-center items-center bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map((e) => (
            <li
              className="capitalize px-4 py-6 text-4xl text-gray-500 cursor-pointer "
              key={e.id}
            >
              <Link
                to={e.link}
                onClick={() => setNav(!nav)}
                smooth
                duration={500}
              >
                {e.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
