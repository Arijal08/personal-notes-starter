import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchieveButton from "./ArchieveButton";

function NotesItem({ note, onDelete, onArchieved }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemBody note={note} />
      </div>
      <div>
        <DeleteButton note={note} onDelete={onDelete} />
        <ArchieveButton note={note} onArchieved={onArchieved} />
      </div>
    </div>
  );
}

export default NotesItem;
