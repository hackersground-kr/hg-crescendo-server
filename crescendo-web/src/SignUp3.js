import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp1.css";
import axios from "axios";

function SignUp3({ formData }) {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://sh-crescendo-server.azurewebsites.net/auth/signup", {username:formData.id,password:formData.password});
      if(res){
        navigate("/Main");
      }
    } catch (error) {
      console.error("There was an error during the signup process:", error);
    }
  };

  return (
    <div>
      <header>
        <div className="line"></div>
        <img src={require("./image/check.png")} className="check" alt="check" />
        <div id="inBox">
          <h1>{formData.id}님, 반가워요!</h1>
          <h2>해바라기를 시작해볼까요?</h2>
        </div>
      </header>
      <div>
        <button id="prevBtn" onClick={() => navigate(-1)} aria-label="Previous" />
        <button id="startBtn"
        onClick={handleSubmit}
        aria-label="Start">시작하기</button>
        <button id="helpBtn" aria-label="Help" />
      </div>
    </div>
  );
}

export default SignUp3;
