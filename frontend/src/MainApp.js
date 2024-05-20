import React from "react";
import "./MainApp.css";
import { FaNoteSticky } from "react-icons/fa6";

function MainApp() {
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
      <div class="notes-container">
        <div class="notes-header">
          <h2 class="notes-title">Notes</h2>

          <div class="notes-info-box">
            <div>
              <div class="notes-count">Total Notes: {allNotes.length}</div>
            </div>
            <button
              class="create-note-button"
              onClick={() => {
                window.location.href = "/create-note";
              }}
            >
              Create Note
            </button>
          </div>
        </div>

        <p class="notes-description">Here you can see all your notes.</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {allNotes &&
            allNotes.map((note) => (
              <div key={note.id} class="note-item">
                <FaNoteSticky />
                <div class="note-title">{note.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MainApp;
