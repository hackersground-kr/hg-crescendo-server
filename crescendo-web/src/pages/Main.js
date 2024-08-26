import React from "react";
import "./Main.css";

function Main() {
    return (
      <div className="container">
        <div className="box"></div>
        <img src={require("../image/var.png")} width="440px"/>
        <input className="text"></input>
        <h4>오늘의 추천 Todo 🔥</h4>
        <div className="Todo"></div>
        <h5>My Todo</h5>
        <div className="underline"></div>
        <div className="under">
        <button className="plus">
          <img src={require("../image/button.png")} className="plus"></img>
        </button>
        </div>
      </div>
    );
  }

export default Main;