import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const NoteList = () => {
  const { addNote, body, setBody, title, setTitle, dark } =
    useContext(UserContext);
 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addNote) {
      addNote({ id: Date.now(), title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-center ${
        
                dark ? "bg-[#FFEDFA] text-black" : "bg-black text-white"
      }`}
    >
      <div
                  className={`p-6 w-96 rounded-xl shadow-lg ${
          dark ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 
        className="mb-6 text-2xl font-bold text-center">Add Note</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className={`p-3 w-full border rounded-lg ${
              dark ? "bg-blue-200 text-black" : "bg-gray-100 text-black"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Body"
            className={`p-3 w-full border rounded-lg ${
              dark ? "bg-blue-200 text-black" : "bg-gray-100 text-black"
            }`}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full px-4 py-2 text-black transition bg-white rounded-lg hover:bg-gray-400"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteList;
