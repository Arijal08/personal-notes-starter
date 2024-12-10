import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      titleCharCount: 0,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({
      title: title,
      titleCharCount: title.length,
    });
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body } = this.state;

    if (title.trim() === "" || body.trim() === "") {
      alert("Judul dan isi catatan tidak boleh kosong!");
      return;
    }

    if (title.length > 50) {
      alert("Judul tidak boleh lebih dari 50 karakter!");
      return;
    }

    const newNote = {
      id: +new Date(),
      title: title.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.props.onAddNote(newNote);

    this.setState({
      title: "",
      body: "",
      titleCharCount: 0,
    });
  }

  render() {
    const { title, body, titleCharCount } = this.state;

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="note-input__title__char-limit">
            {titleCharCount}/50
          </div>
          <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={this.handleTitleChange}
            maxLength={50}
            className="note-input__title"
          />

          <textarea
            placeholder="Tulis catatanmu di sini..."
            value={body}
            onChange={this.handleBodyChange}
            className="note-input__body"
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
