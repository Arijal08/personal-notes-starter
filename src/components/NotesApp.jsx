import React from "react";
import { createRoot } from "react-dom/client";
import NoteList from "./NotesList";
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => {
      return note.id !== id;
    });

    this.setState({ notes });
  }

  render() {
    return (
      <div className="NoteApp">
        <h1>Notes</h1>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}
