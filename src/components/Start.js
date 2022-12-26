import  { useState } from "react";

export default function Start(props) {
  const [enteredUserName, setEnteredUserName] = useState("");

  const clickHandler = () => {
    console.log(enteredUserName);
    enteredUserName && props.setUsername(enteredUserName);
  };

  const enteredUsername = (e) => {
    setEnteredUserName(e.target.value);
  };

  return (
    <div className="start">
      <input
        placeholder="Enter your name"
        className="startInput"
        onChange={enteredUsername}
      />
      <button className="startButton" onClick={clickHandler}>
        Start
      </button>
    </div>
  );
}
