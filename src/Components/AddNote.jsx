import React, { useState } from "react";
import "../Styles/AddNote.css";

function AddNote({ addNote }) {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Home");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {

    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      category: category,
      description: description,
      pinned: false
    };

    addNote(newNote);

    setTitle("");
    setCategory("Home");
    setDescription("");
  };

  return (
    <div className="add-note">

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>--select option--</option>
        <option>Home</option>
        <option>Personal</option>
        <option>College</option>
        <option>Work</option>
        <option>Shopping</option>
        <option>Ideas</option>
      </select>

      <textarea
        rows="4"
        placeholder="Write your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit}>
        Save Note
      </button>

    </div>
  );
}

export default AddNote;