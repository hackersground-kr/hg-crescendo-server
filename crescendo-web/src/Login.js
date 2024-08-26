import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function Header() {
  return (
    <header>
      <div className="line"></div>
      <div id="idBox">
        <h1>
          로그인을 위해
          <br />
          아이디와 비밀번호를
          <br />
          정확하게 입력해주세요!
        </h1>
      </div>

      <input id="inputId" type="text" placeholder="아이디 입력" />
      <br />
      <input id="inputPwd" type="text" placeholder="비밀번호 확인 입력" />
    </header>
  );
}

function Button() {
  const navigate = useNavigate();

  return (
    <div className="btns">
      <input id="prevBtn" type="button" onClick={() => navigate(-1)} />
      <input
        id="login"
        type="button"
        value="로그인"
        onClick={() => navigate("/main")}
      />
      <input id="helpBtn" type="button" />
    </div>
  );
}

function SignUp2() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default SignUp2;
