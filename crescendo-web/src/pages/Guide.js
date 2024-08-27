import React from "react";
import "./Guide.css";
import { useNavigate } from "react-router-dom";

// 토글 버튼을 렌더링하는 컴포넌트
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

// 가이드를 렌더링하는 컴포넌트
function Guide() {
  return (
    <div className="container">
      <div className="box"></div>
      <img src={require("../image/var.png")} width="440px" className="var" />
      <h4>
        예비 상주님을 위한 <br />
        사망진단부터 장례까지
      </h4>
      <p>장례 전과 진행 중, 꼭 필요한 정보만을 모았어요.</p>
      <h6>무엇을 해야 하나요?</h6>

      {/* HStack 안에 버튼으로 이미지들을 감쌈 */}
      <div className="HStack" align="center" justify="center">
        <img src={require("../image/1.png")} />
        <img src={require("../image/2.png")} />
        <img src={require("../image/3.png")} />
      </div>

      <div className="HStack" align="center" justify="center">
        <img src={require("../image/4.png")} />
        <img src={require("../image/5.png")} />
        <img src={require("../image/6.png")} />
      </div>

      <Toggles />
    </div>
  );
}

export default Guide;
