import React, { useState } from "react";
import "./Board.css";
import { useNavigate } from "react-router-dom";

function Toggles() {
  const navigate = useNavigate();

  return (
    <div className="toggle">
      <button id="toDo" onClick={() => navigate("/Main")}>
        <img src={require("../image/ToDo.png")} alt="ToDo" />
      </button>
      <button id="introduce" onClick={() => navigate("/Guide")}>
        <img src={require("../image/introduce.png")} alt="introduce" />
      </button>
      <button id="community" onClick={() => navigate("/Board")}>
        <img src={require("../image/communityClicked.png")} alt="community" />
      </button>
      <button id="counsel" onClick={() => navigate("/Counsel")}>
        <img src={require("../image/counsel.png")} alt="counsel" />
      </button>
    </div>
  );
}

function NewPage({ onPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (title && content) {
      onPost({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Please enter both title and content.");
    }
  };

  return (
    <div className="new-page">
      <h2>새 글을 작성하세요.</h2>
      <div id="newPost">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="content-textarea"
        />
      </div>

      <button onClick={handlePost} className="post-button">
        Post
      </button>
    </div>
  );
}

function Board() {
  const [isWriting, setIsWriting] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleWriteClick = () => {
    setIsWriting((prev) => !prev); // Toggle the isWriting state
  };

  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add the new post to the list
    setIsWriting(false); // Close the NewPage after posting
  };

  return (
    <div>
      <div className="box"></div>
      <div className="image-container">
        <img src={require("../image/var.png")} width="440px" alt="var" />
      </div>
      <div>
        <button id="writeBtn" onClick={handleWriteClick}>
          Write
        </button>
      </div>
      {isWriting && <NewPage onPost={handleNewPost} />}
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <Toggles />
    </div>
  );
}

export default Board;
