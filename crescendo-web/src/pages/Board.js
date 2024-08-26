import React from "react";
import "./Board.css";
import { useNavigate } from "react-router-dom";

function Toggles() {
  const navigate = useNavigate();

  return (
    <div className="toggle">
      <button id="toDo" onClick={() => navigate("/Main")}>
        <img src={require("../image/ToDo.png")} alt="ToDo" />
      </button>
      <button id="introduce" onClick={() => navigate("/Guide")}>
        <img src={require("../image/introduce.png")} alt="introduce" />
      </button>
      <button id="community" onClick={() => navigate("/Board")}>
        <img src={require("../image/communityClicked.png")} alt="community" />
      </button>
      <button id="counsel" onClick={() => navigate("/Counsel")}>
        <img src={require("../image/counsel.png")} alt="counsel" />
      </button>
    </div>
  );
}

function Board() {
  return (
    <div>
      <div className="box"></div>
      <div className="image-container">
        <img src={require("../image/var.png")} width="440px" alt="var" />
      </div>
      <Toggles />
    </div>
  );
}

export default Board;
