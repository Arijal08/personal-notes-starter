import React from "react";

function DeleteButton({ note, onDelete }) {
  return (
    <div>
      <button
        className="note-item__delete-button"
        onClick={() => onDelete(note.id)}
      >
        Hapus
      </button>
    </div>
  );
}

export default DeleteButton;
