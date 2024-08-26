import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function Header() {
  return (
    <header>
      <div className="line"></div>
      <div id="idBox">
        <h1>
          회원가입을 위해
          <br />
          비밀번호를 작성해주세요
        </h1>
        <div>정확한 확인을 위해 인증도 진행해 주세요</div>
      </div>

      <input id="inputPwd" type="text" placeholder="비밀번호 입력" />
      <br />
      <input id="inputRePwd" type="text" placeholder="비밀번호 확인 입력" />
    </header>
  );
}

function Button() {
  const navigate = useNavigate();

  return (
    <div>
      <input id="prevBtn" type="button" onClick={() => navigate(-1)} />
      <input id="nextBtn" type="button" onClick={() => navigate("/signup3")} />
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
