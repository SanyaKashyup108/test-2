import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import NoteList from "../Pages/NoteList";
import { FaNotesMedical } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
const Navbar = () => {
  const { IsOpen, setIsOpen, light, setLight , loading } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!IsOpen);
  };
  const toggleLight = () => {
    setLight(!light);
  };

  return (
    <div>
      <nav className="w-full p-4 text-white bg-gray-800">
        <div className="flex items-center justify-between p-1">
          <div>
            <h2 className="font-serif text-2xl font-bold">NotesApp</h2>
          </div>
          <div className="items-center hidden md:flex">
            <NavLink to="/" className="flex items-center justify-center gap-2 mx-4 text-white hover:text-orange-500">
            <CiHome />  Home
            </NavLink>
            <NavLink
              to="/Notes"
              className="flex items-center justify-center gap-1 mx-4 text-white hover:text-orange-500"
            >
                <FaNotesMedical />
              Notes +
            </NavLink>
            <button className="mx-4 text-white" onClick={toggleLight}>
              {light ? (
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

      <div
        className={`md:hidden bg-black h-screen w-1/2 ${
          IsOpen ? "flex flex-col py-10 items-center" : "hidden"
        }`}
      >
        <NavLink to="/" className="mx-4 mb-2 text-xl font-semibold text-white ">
          Home
        </NavLink>
        <NavLink
          to="/Notes"
          className="mx-4 mb-2 text-xl font-semibold text-white"
        >
          Notes+
        </NavLink>
        {loading ? <p className="mt-4 text-center">Loading notes...</p> : <NoteList />}
      </div>
    </div>
  );
};

export default Navbar;
