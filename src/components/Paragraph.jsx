import React from "react";
import "./style.css";
function Paragraph({ paragraphCount }) {
  return (
    <div className="box">
      <p>Paragraph</p>
      <p style={{ color: "black" }}>{paragraphCount}</p>
    </div>
  );
}

export default Paragraph;
