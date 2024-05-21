import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import CreateNote from "./CreateNote";
import ViewNote from "./ViewNote";
import UpdateNote from "./UpdateNote";
import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* Route to MainApp */}
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/view-note/:noteId" element={<ViewNote />} />
        <Route path="/update-note/:noteId" element={<UpdateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
