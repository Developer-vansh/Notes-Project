import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateNote.css";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    const note = { title, content };
    try {
      console.log(note);
      await fetch("http://localhost:8002/api/v1/note/addnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }).then((response) => {
        if (response.ok) {
          console.log("Note saved successfully");
          alert("Note saved successfully");
          window.location.href = "/";
        } else {
          console.error("Error saving the note:", response.statusText);
          alert("Error saving the note.");
        }
      });
    } catch (error) {
      console.error("Error saving the note:", error);
      alert("Error saving the note.");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className="create-note-container">
      <h2>Create Note</h2>
      <form className="create-note-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="quill-editor"
            modules={modules}
            formats={formats}
          />
        </div>
        <button type="button" className="save-button" onClick={handleSave}>
          Save Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
