import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(UserContext);

  return (
    <div className="p-4 rounded-lg shadow-md max-w-[300px] min-h-[320px] bg-gray-300 ">
      <h3 className="mt-2 mb-3 font-serif text-xl font-bold text-black">{note.title}</h3>
      <p className="text-black">{note.body}</p>
      
      <div className="flex justify-between mt-4">
        <Link
          className="px-4 py-2 text-white transition bg-black rounded-lg hover:bg-gray-800"
        >
          View
        </Link>
        
     
        <button 
          onClick={() => deleteNote && deleteNote(note.id)} 
          className="px-4 py-2 font-semibold text-white transition bg-[#BE5985] rounded-lg hover:bg-blue-800"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
