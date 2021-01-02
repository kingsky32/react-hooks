import React from "react";
import useBeforeLeave from "../Hooks/useBeforeLeave";

const UseBeforeLeave = () => {
  const beForeLife = () => console.log("Pls dont leave");
  useBeforeLeave(beForeLife);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
};

export default UseBeforeLeave;
