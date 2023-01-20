import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
      // if (prevValue === true) {
      //   return setIsDone(false)
      // } else if (prevValue === false) {
      //   return setIsDone(true)
      // }
    });
  }
  // props are read only
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
