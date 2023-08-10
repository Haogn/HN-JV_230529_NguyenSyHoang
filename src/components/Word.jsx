import React from "react";
import "./style.css";
function Word({ wordCount }) {
  return (
    <div className="box">
      <p>Word</p>
      <p style={{ color: "black" }}>{wordCount}</p>
    </div>
  );
}

export default Word;
