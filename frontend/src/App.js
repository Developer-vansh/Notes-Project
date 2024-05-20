import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import CreateNote from "./CreateNote";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* Route to MainApp */}
        <Route path="/create-note" element={<CreateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
