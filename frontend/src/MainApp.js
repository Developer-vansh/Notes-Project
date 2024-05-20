import React from "react";
import CreateNote from "./CreateNote";

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
    <div>
      <h2>Main Application</h2>

      <div>
        <h2>Notes</h2>
        <p>Here you can see all your notes.</p>

        {allNotes &&
          allNotes.map((note) => (
            <div key={note.id}>
              <h3>{note.title}</h3>
            </div>
          ))}
      </div>

      <button onClick={() => setShowCreateNote(true)}>Create Note</button>
      {showCreateNote && <CreateNote />}
    </div>
  );
}

export default MainApp;
