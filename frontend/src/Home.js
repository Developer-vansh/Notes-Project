import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <header className="App-header">
      <h1>Welcome to iNotes</h1>
      <p>Taking Notes Made Easy</p>
      <Link className="App-link" to="/register">
        Register
      </Link>
      <Link className="App-link" to="/login">
        Login
      </Link>
    </header>
  );
}

export default Home;
