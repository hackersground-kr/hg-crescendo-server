import React from "react";
import { useNavigate } from "react-router-dom";
//import "./SignUp1.css";

function Header() {
  return (
    <header>
      <div className="line"></div>
      <img src={require("./image/check.png")} className="check" alt="check" />
      <div className="textArea">
        <h1>flower님, 반가워요!</h1>
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
      <input id="startBtn" type="button" onClick={() => navigate("/app")} />
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
