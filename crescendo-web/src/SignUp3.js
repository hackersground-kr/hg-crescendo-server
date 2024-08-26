import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function Header() {
  return (
    <header className="checkSet">
      <div className="line"></div>
      <img src={require("./image/check.png")} className="check" alt="check" />
      <div id="inBox">
        <h1 id="signUp3">flower님, 반가워요!</h1>
        <h2>해바라기를 시작해볼까요?</h2>
      </div>
    </header>
  );
}

function Button() {
  const navigate = useNavigate();

  return (
    <div>
      <input id="prevBtn" type="button" onClick={() => navigate(-1)} />
      <input
        id="startBtn"
        type="button"
        value="시작하기"
        onClick={() => navigate("/")}
      />
      <input id="helpBtn" type="button" />
    </div>
  );
}

function SignUp3() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default SignUp3;
