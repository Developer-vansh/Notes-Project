import React from "react";
import CreateNote from "./CreateNote";

function MainApp() {
  const [showCreateNote, setShowCreateNote] = React.useState(false);

  return (
    <div>
      <h2>Main Application</h2>
      <p>Welcome to the main application. Here you can manage your notes.</p>

      <button onClick={() => setShowCreateNote(true)}>Create Note</button>
      {showCreateNote && <CreateNote />}
    </div>
  );
}

export default MainApp;
