import "./App.css";
import Signup from "./components/signup/signup";
import Navbar from "./components/navbar/navbar";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser} />}
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
