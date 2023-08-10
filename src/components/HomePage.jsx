import React, { useState } from "react";
import "./style.css";
import Word from "./Word";
import Letter from "./Letter";
import Paragraph from "./Paragraph";
import Textarea from "./Textarea";

function HomePage() {
  const [newText, setNewText] = useState("");

  // letterCount
  const letterCount = newText.length;
  //
  const wordCount = newText.split(" ").filter((word) => word !== "").length;
  //
  const paragraphCount = newText
    .split("\n")
    .filter((para) => para !== "").length;

  return (
    <div className="Container">
      <h2>
        <i className="fa-brands fa-wordpress"></i> Word Counter
      </h2>
      <div className="super ">
        <div className="box-components d-flex justify-content-between align-items-center">
          <Word wordCount={wordCount} />
          <Letter letterCount={letterCount} />
          <Paragraph paragraphCount={paragraphCount} />
        </div>
        <div>
          <Textarea setNewText={setNewText} newText={newText} />
        </div>
        <div className="box-button">
          <button className="btn">Click To Uppercase</button>
          <button className="btn">Click To Lowerces</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
