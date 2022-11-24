import "./App.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          />
          <Route
            exact
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
           <Route exact path="/home" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;