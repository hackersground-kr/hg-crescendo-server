import React, { useState, useEffect } from 'react';
import './App.css'; // 별도의 CSS 파일을 사용합니다.
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import login from './login';
import signup from './signup';


const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // 화면 크기를 체크하여 상태를 업데이트하는 함수
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // 초기 체크
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 버튼 클릭 시 호출되는 함수
  const handleClick = () => {
    <Link to='login'></Link>
  };
  const handleClick2 = () => {
    <Link to='signup'></Link>
  };

  if (!isMobile) {
    // 모바일 화면이 아닐 경우 아무것도 렌더링하지 않음
    return null;
  }

  return (
    <div className="container">
      <div className="box"></div>
      <img src={require("./image/flower.png")} className="flower" alt="flower" />
      <button className="button1" onClick={handleClick}>로그인</button>
      <button className="button2" onClick={handleClick2}>회원가입</button>
    </div>
  );
};

export default App;