import React, { useEffect, useContext } from "react";
import { UserContext } from "../components/context/NotesContext";
import NoteItem from "./Note";
import axios from "axios";

const Home = () => {
  const { light, notes, setNotes, setLoading } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [setNotes, setLoading]);

  return (
    <div className={`${light ? "bg-black text-white" : "bg-white text-black"}`}>
      <section
        className={`px-4 py-4 ${
          light ? "bg-[#005C97] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col items-center mx-auto max-w-7xl md:flex-row">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hero Section
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              A hero Section with animation
            </p>
            <div className="flex justify-center mt-6 space-x-4 md:justify-start">
              <button className="px-6 py-3 font-semibold text-blue-600 transition bg-white rounded-lg shadow-lg hover:bg-gray-200">
                Get Started
              </button>
              <button className="px-6 py-3 font-semibold transition border border-white rounded-lg bg-black/50 hover:bg-black/70">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-10 md:mt-0 md:w-1/2">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="AI Illustration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="p-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
