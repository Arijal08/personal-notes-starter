import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, body, id, onDelete }) {
  return (
    <div className="notes-item">
      <NotesItemBody title={title} body={body} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
