import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";

function SignUp1({ formData, setFormData }) {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, id: e.target.value });
  };

  return (
    <div>
      <header>
        <div className="line"></div>
        <div id="idBox">
          <h1>
            환영합니다!
            <br />
            당신의 이름을 알려주세요
          </h1>
          <div>로그인 시 사용할 아이디에요</div>
        </div>
        <input
          id="inputId"
          type="text"
          placeholder="아이디 입력"
          value={formData.id}
          onChange={handleInputChange}
        />
      </header>
      <div>
        <button id="prevBtn" onClick={() => navigate(-1)} aria-label="Previous" />
        <button
          id="nextBtn"
          onClick={() => navigate("/signup2")}
          aria-label="Next"
        />
        <button id="helpBtn" aria-label="Help" />
      </div>
    </div>
  );
}

export default SignUp1;
