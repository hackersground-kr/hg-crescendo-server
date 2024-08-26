import React from "react";
import "./Guide.css";
import { useNavigate } from "react-router-dom";

function Toggles() {
  const navigate = useNavigate();

  return (
    <div className="toggle">
      <button id="toDo" onClick={() => navigate("/Main")}>
        <img src={require("../image/ToDo.png")} alt="ToDo" />
      </button>
      <button id="introduce" onClick={() => navigate("/Guide")}>
        <img src={require("../image/introduceClicked.png")} alt="introduce" />
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

function Guide() {
  return (
    <div className="guide-container">
      <div className="box"></div>
      <div className="image-container">
        <img src={require("../image/var.png")} width="440px" alt="var" />
      </div>
      <h1>
        예비 상주님을 위한
        <br />
        사망진단부터 장례까지
      </h1>
      <div>장례 전과 진행 중, 꼭 필요한 정보만을 모았어요.</div>

      <h2>무엇을 해야 하나요?</h2>
      <hr />
      <div className="whatDo">
        <input id="select1" type="button" value="출동 신청" />
        <input id="select2" type="button" value="부고 문자" />
        <input id="select3" type="button" value="장례 신청" />
        <input id="select4" type="button" value="장지 선택" />
        <input id="select5" type="button" value="장례 이후" />
        <input id="select6" type="button" value="도움말" />
      </div>
      <Toggles />
    </div>
  );
}

export default Guide;
