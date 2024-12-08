import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";

function NotesItem({ title, body, createAt, id, onDelete }) {
  return (
    <div className="notes-item">
      <NotesItemBody title={title} body={body} createAt={createAt} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
