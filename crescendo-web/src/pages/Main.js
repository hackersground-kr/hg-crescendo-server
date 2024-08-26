import React, { useState, useEffect } from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Toggles() {
  const navigate = useNavigate();

  return (
    <div className="toggle">
      <button id="toDo" onClick={() => navigate("/Main")}>
        <img src={require("../image/ToDoClicked.png")} alt="ToDo" />
      </button>
      <button id="introduce" onClick={() => navigate("/Guide")}>
        <img src={require("../image/introduce.png")} alt="introduce" />
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

function Main() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GET 요청에서 올바른 URL 사용
    axios
      .get("http://20.41.66.225/todos") // 전체 Todo 리스트를 가져오는 경로
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    // POST 요청에서 올바른 URL 사용
    axios
      .post("http://20.41.66.225/todos", { content: newTodo }) // 새로운 Todo를 추가하는 경로
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo(""); // 입력 필드 초기화
        setShowInput(false); // Todo 추가 후 입력 필드를 숨김
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  const deleteTodo = (todoId) => {
    // DELETE 요청에서 올바른 URL 사용
    axios
      .delete(`http://20.41.66.225/todos/${todoId}`) // 특정 Todo를 삭제하는 경로
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
      })
      .catch((error) => console.error("Error deleting todo:", error));
  };

  const toggleTodo = (todoId, checked) => {
    // PATCH 요청에서 올바른 URL 사용
    axios
      .patch(`http://20.41.66.225/todos/${todoId}/check`, { checked: !checked }) // Todo 상태를 업데이트하는 경로
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === todoId ? { ...todo, checked: !checked } : todo
          )
        );
      })
      .catch((error) => console.error("Error updating todo:", error));
  };

  return (
    <div className="container">
      <div className="box"></div>
      <img src={require("../image/var.png")} width="440px" className="var" />

      {/* 검색창 (유지) */}
      <input className="text" placeholder="검색어를 입력하세요" />

      <h4>오늘의 추천 Todo 🔥</h4>
      <img src={require("../image/onedayClass.png")} className="Todo" />

      <h5>My Todo</h5>
      <div className="underline"></div>
      <div className="under">
        {/* 플러스 버튼 클릭 시 입력 필드 표시 */}
        <button className="plus" onClick={() => setShowInput(true)}></button>
      </div>

      {loading && <div>Loading...</div>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleTodo(todo.id, todo.checked)}
            />
            <span className={todo.checked ? "completed" : ""}>
              {todo.content}
            </span>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>

      {/* 입력 필드를 화면 하단에 고정하고 키보드 바로 위에 표시 */}
      {showInput && (
        <div className="input-container fixed-bottom">
          <input
            className="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="새로운 Todo를 입력하세요"
          />
          <button onClick={addTodo} className="add-button">
            추가
          </button>
        </div>
      )}

      <Toggles />
    </div>
  );
}

export default Main;
