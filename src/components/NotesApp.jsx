import React from "react";
import NoteInput from "./AddNotes";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleAddNote(newNote) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  }

  handleDeleteNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => note.id !== id),
    }));
  }

  handleArchiveNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  handleSearchChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  render() {
    const { notes, searchQuery } = this.state;

    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !note.archived
    );
    const activeNotes = notes.filter(
      (note) =>
        !note.archived &&
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const archivedNotes = notes.filter(
      (note) =>
        note.archived &&
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div className="note-app">
        <header className="note-app__header">
          <h1>Notes App</h1>
        </header>

        <div className="note-app__body">
          <NoteInput onAddNote={this.handleAddNote} />

          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan..."
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>

          <h2>Catatan Aktif</h2>
          <NotesList
            notes={activeNotes}
            onDelete={this.handleDeleteNote}
            onArchived={this.handleArchiveNote}
          />

          <h2>Arsip</h2>
          <NotesList
            notes={archivedNotes}
            onDelete={this.handleDeleteNote}
            onArchived={this.handleArchiveNote}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
