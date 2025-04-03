import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const [light, setLight] = useState(localStorage.getItem("theme") === "light");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Toggle Light/Dark Mode
  const toggleTheme = () => {
    const newTheme = !light;
    setLight(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  };

  // Apply theme to the body
  useEffect(() => {
    document.body.className = light ? "bg-gray-100 text-black" : "bg-gray-900 text-white";
  }, [light]);

  // Load Notes from Local Storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
    setLoading(false);
  }, []);

  // Save Notes to Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (note) => setNotes((prevNotes) => [note, ...prevNotes]);

  // Delete Note
  const deleteNote = (id) => setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));

  const requiredValues = {
    IsOpen,
    setIsOpen,
    light,
    setLight: toggleTheme, // Ensure `setLight` toggles properly
    notes,
    setNotes,
    loading,
    setLoading,
    addNote,
    deleteNote,
    title,
    setTitle,
    body,
    setBody,
  };

  return <UserContext.Provider value={requiredValues}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
