import React from "react";
import "./Counsel.css";
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
        <img src={require("../image/community.png")} alt="community" />
      </button>
      <button id="counsel" onClick={() => navigate("/Counsel")}>
        <img src={require("../image/counselClicked.png")} alt="counsel" />
      </button>
    </div>
  );
}

function Counsel() {
  return (
    <header>
      <div className="box"></div>
      <div id="couple">
        <input id="userBtn" type="button" />
        <input id="counselorBtn" type="button" />
      </div>
      <Toggles />
    </header>
  );
}

export default Counsel;
