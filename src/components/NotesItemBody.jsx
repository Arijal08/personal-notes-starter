import React from "react";

function NotesItemBody({ title, body, createAt }) {
  return (
    <div className="notes-item-body">
      <h3 className="notes-title">{title}</h3>
      <p className="notes-body">{body}</p>
      <span>{createAt}</span>
    </div>
  );
}

export default NotesItemBody;
