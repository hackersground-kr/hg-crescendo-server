import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

function Toggles() {
  const navigate = useNavigate();

  return (
    <div className="toggle">
      <button id="toDo" onClick={() => navigate("/Main")}>
        <img src={require("../image/ToDoClicked.png")} alt="ToDo" />
      </button>
      <button id="introduce" onClick={() => navigate("/Guide")}>
        <img src={require("../image/introduce.png")} alt="introduce" />
      </button>
      <button id="community" onClick={() => navigate("/Board")}>
        <img src={require("../image/community.png")} alt="community" />
      </button>
      <button id="counsel" onClick={() => navigate("/Counsel")}>
        <img src={require("../image/counsel.png")} alt="counsel" />
      </button>
    </div>
  );
}

function Main() {
  return (
    <div className="container">
      <div className="box"></div>
      <img src={require("../image/var.png")} width="440px" />
      <input className="text"></input>
      <h4>오늘의 추천 Todo 🔥</h4>
      <img src={require("../image/onedayClass.png")} className="Todo"/>
      <h5>My Todo</h5>
      <div className="underline"></div>
      <div className="under">
        <button className="plus"></button>
      </div>
      <Toggles/>
    </div>
  );
}

export default Main;
