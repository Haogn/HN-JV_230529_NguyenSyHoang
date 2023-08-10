import React from "react";

function Textarea({ setNewText, newText }) {
  const handleChangeText = (e) => {
    setNewText(e.target.value);
  };
  return (
    <div>
      <textarea
        className="textarea"
        placeholder="Enter/Paste Your Text Here"
        value={newText}
        onChange={(e) => handleChangeText(e)}
      ></textarea>
    </div>
  );
}

export default Textarea;
