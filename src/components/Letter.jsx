import React from "react";
import "./style.css";
function Letter({ letterCount }) {
  return (
    <div className="box">
      <p>Letter</p>
      <p style={{ color: "black" }}>{letterCount}</p>
    </div>
  );
}

export default Letter;
