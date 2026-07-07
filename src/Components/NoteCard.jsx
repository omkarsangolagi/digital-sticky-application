import React from "react";
import "../Styles/NoteCard.css";

function NoteCard({ note, deleteNote }) {
  return (
    <div className="note-card">

      <h4>{note.category}</h4>

      <h2>{note.title}</h2>

      <p>{note.description}</p>

      <button
        className="delete-btn"
        onClick={() => deleteNote(note.id)}
      >
        🗑 Delete
      </button>

    </div>
  );
}

export default NoteCard;