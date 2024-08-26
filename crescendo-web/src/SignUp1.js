import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function Header() {
  return (
    <header>
      <div className="line"></div>
      <div id="idBox">
        <h1>
          환영합니다!
          <br />
          당신의 이름을 알려주세요
        </h1>
        <div>로그인시 사용할 아이디에요</div>
        <input id="inputId" type="text" placeholder="아이디 입력" />
      </div>
    </header>
  );
}

function Button() {
  const navigate = useNavigate();

  return (
    <div>
      <input
        id="prevBtn"
        type="button"
        value="⬅️"
        onClick={() => navigate(-1)}
      />
      <input id="nextBtn" type="button" value="➡️" />
      <input id="helpBtn" type="button" value="❓" />
    </div>
  );
}

function SignUp1() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default SignUp1;
