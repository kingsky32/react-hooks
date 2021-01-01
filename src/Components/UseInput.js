import React from "react";
import useInput from "../Hooks/useInput";

const UseInput = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
