import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };



  return (
    <div>
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
        <input
          id="inputId"
          type="text"
          name="id"
          placeholder="아이디 입력"
          value={loginData.id}
          onChange={handleInputChange}
        />
        <br />
        <input
          id="inputPwd"
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={loginData.password}
          onChange={handleInputChange}
        />
      </header>
      <div className="btns">
        <button id="prevBtn" onClick={() => navigate(-1)} aria-label="Previous" />
        <button id="login"  onClick={() => navigate("/Main")}
        aria-label="login">로그인</button>
        <button id="helpBtn" aria-label="Help" />
      </div>
    </div>
  );
}

export default Login;
