import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import Login from "./Login";
import Main from "./pages/Main";
import Guide from "./pages/Guide";
import Counsel from "./pages/Counsel";
import Board from "./pages/Board";

const App = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

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

  const showContent = ["/"].includes(location.pathname);

  return (
    <>
      {showContent && (
        <div className="container">
          <div className="box"></div>
          <img
            src={require("./image/flower.png")}
            className="flower"
            alt="flower"
          />
          <Link to="/login">
            <button className="button1">로그인</button>
          </Link>

          <Link to="/signup1">
            <button className="button2">회원가입</button>
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/signup1" element={<SignUp1 formData={formData} setFormData={setFormData} />} />
        <Route path="/signup2" element={<SignUp2 formData={formData} setFormData={setFormData} />} />
        <Route path="/signup3" element={<SignUp3 formData={formData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main/>}/>
        <Route path="/Guide" element={<Guide/>}/>
        <Route path="/Counsel" element={<Counsel/>}/>
        <Route path="/Board" element={<Board/>}/>
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
