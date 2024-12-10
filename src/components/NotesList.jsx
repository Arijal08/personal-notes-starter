import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchived }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            onDelete={onDelete}
            note={note}
            onArchieved={onArchived}
          />
        ))
      ) : (
        <div className="notes-list__empty-message">
          <p>Data Empty</p>
        </div>
      )}
    </div>
  );
}

export default NotesList;
