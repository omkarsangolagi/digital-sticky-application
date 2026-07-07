import React from "react";
import NoteCard from "./NoteCard";
import "../Styles/NotesList.css";

function NotesList({ notes, deleteNote }) {
  return (
    <div className="notes-container">

      {notes.length === 0 ? (
        <h2>No Notes Available</h2>
      ) : (
        notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            deleteNote={deleteNote}
          />
        ))
      )}

    </div>
  );
}

export default NotesList;