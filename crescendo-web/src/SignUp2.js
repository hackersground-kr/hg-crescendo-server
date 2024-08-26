import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function SignUp2({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
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
        <input
          id="inputPwd"
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <input
          id="inputRePwd"
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인 입력"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </header>
      <div>
        <button id="prevBtn" onClick={() => navigate(-1)} aria-label="Previous" />
        <button
          id="nextBtn"
          onClick={() => navigate("/signup3")}
          aria-label="Next"
        />
        <button id="helpBtn" aria-label="Help" />
      </div>
    </div>
  );
}

export default SignUp2;
