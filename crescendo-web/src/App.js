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

const App = () => {
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

  // 현재 경로에 따라 콘텐츠를 표시할지 결정. 빈 배열로 설정하면 모든 경로에서 콘텐츠가 표시되지 않음
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
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />
        <Route path="/login" element={<Login />} />
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
