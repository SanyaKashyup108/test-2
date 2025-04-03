import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import NoteItem from "./NoteItems";
import axios from "axios";


const Home = () => {
  const { dark } = useContext(UserContext);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  const { notes, setNotes, setLoading } = useContext(UserContext);
  return (
    <div className={`${dark ? "bg-[#FFEDFA] text-white" : "bg-slate-800 text-white"}`}>
         <section className="flex flex-col items-center justify-center h-[500px]  text-white text-center p-6">
      <div className="max-w-3xl">
        <h1 className="text-7xl text-[#BE5985] font-bold mb-4">Welcome Guys </h1>
        <p className="text-lg mb-6 text-gray-800 opacity-80">
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, repellendus?
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section> 

      <div className="p-4 mx-auto w-full flex justify-center items-center">
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-4 items-center justify-center">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
