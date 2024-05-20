import MainApp from "./MainApp";
import { Link } from "react-router-dom";

function Home() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div>
      <div className="App">
        {accessToken ? (
          <MainApp />
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default Home;
