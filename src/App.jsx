import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import CategoryFilter from "./Components/CategoryFilter";
import AddNote from "./Components/AddNote";
import NotesList from "./Components/NotesList";
import "./App.css";

function App() {

  // Load notes from Local Storage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Search state
  const [search, setSearch] = useState("");

  // Dark Mode state
  const [darkMode, setDarkMode] = useState(false);

  // Category Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Save notes to Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Search + Category Filter
  const filteredNotes = notes.filter((note) => {

    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      note.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Navbar
        search={search}
        setSearch={setSearch}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <AddNote addNote={addNote} />

      <NotesList
        notes={filteredNotes}
        deleteNote={deleteNote}
      />

    </div>
  );
}

export default App;