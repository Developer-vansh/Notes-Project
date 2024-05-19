import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* Route to MainApp */}
      </Routes>
    </Router>
  );
}

export default App;
