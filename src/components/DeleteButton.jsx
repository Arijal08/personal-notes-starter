import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className="button-delete" onClick={() => onDelete(id)}>
        X
      </button>
    </div>
  );
}
