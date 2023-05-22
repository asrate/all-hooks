import React, { useRef } from "react";

export const Useref = () => {
  const ref = useRef(null);
  const onClick = () => {
    ref.current.value = "";
  };
  return (
    <div>
      <input placeholder="Ex..." ref={ref} />
      <button onClick={onClick}>change name</button>
    </div>
  );
};
