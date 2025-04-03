import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";

const Navbar = () => {
  const { IsOpen, setIsOpen, dark, setDark  } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };
  const toggleLight = () => {
    setDark(!dark);
  };

  return (
    <div>
      <nav className="w-full p-7 text-white bg-zinc-800">
        <div className="flex items-center justify-between p-1">
          <div>
            <h2 className="font-serif text-3xl font-bold">Technical</h2>
          </div>
          <div className="items-center hidden md:flex">
            <NavLink to="/" className="flex items-center justify-center gap-2 mx-4 text-white hover:text-gray-500">
            <AiFillHome />  Home
            </NavLink>
            <NavLink
              to="/Notes"
              className="flex items-center justify-center gap-1 mx-4 text-white hover:text-gray-500"
            >
               <FaPlusSquare />
              Notes 
            </NavLink>
            <button className="mx-4 text-white" onClick={toggleLight}>
              {dark ? (
                <IoIosSunny className="mr-2 " size={20} />
              ) : (
                <FaMoon size={20} />
              )}
            </button>
          </div>

          <button
            className="text-2xl text-white md:hidden"
            onClick={toggleMenu}
          >
            {IsOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

   
    </div>
  );
};

export default Navbar;
