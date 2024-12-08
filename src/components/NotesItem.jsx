import React from "react";
import NotesItemBody from "./NotesItemBody";

function NotesItem({ title, body }) {
  return (
    <div className="notes-item">
      <NotesItemBody title={title} body={body} />
    </div>
  );
}
