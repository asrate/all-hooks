import React from "react";
import { useState } from "react";

export const Usestate = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const show = () => {
  //   setText(!text);
  // };
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setText(!text);
        }}
      >
        Increment
      </button>
      {text && <h1>hello</h1>}
    </div>
  );
};
