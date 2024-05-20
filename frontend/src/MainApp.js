import React from "react";
import CreateNote from "./CreateNote";
import "./MainApp.css";

function MainApp() {
  const [showCreateNote, setShowCreateNote] = React.useState(false);

  const [allNotes, setAllNotes] = React.useState([]);

  const getNotes = async () => {
    const response = await fetch(
      "http://localhost:8002/api/v1/note/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    const data = await response.json();
    setAllNotes(data);
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="main-app">
      <h2>Main Application</h2>

      <div class="notes-container">
        <h2 class="notes-title">Notes</h2>
        <p class="notes-description">Here you can see all your notes.</p>

        {allNotes &&
          allNotes.map((note) => (
            <div key={note.id} class="note-item">
              <h3 class="note-title">{note.title}</h3>
            </div>
          ))}
      </div>

      <button onClick={() => setShowCreateNote(true)}>Create Note</button>
      {showCreateNote && <CreateNote />}
    </div>
  );
}

export default MainApp;
