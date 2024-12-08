import React from "react";

function NotesItemBody({ title, body }) {
  return (
    <div className="notes-item-body">
      <h3 className="notes-title">{title}</h3>
      <p className="notes-body">{body}</p>
    </div>
  );
}

export default NotesItemBody;
