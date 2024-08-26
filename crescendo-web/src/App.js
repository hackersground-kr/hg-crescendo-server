import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <Router>
      <div className="container">
        <div className="box"></div>
        <img
          src={require("./image/flower.png")}
          className="flower"
          alt="flower"
        />
        <button className="button1" disabled>
          로그인
        </button>
        <Link to="/signup1">
          <button className="button2">회원가입</button>
        </Link>

        <Routes>
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
