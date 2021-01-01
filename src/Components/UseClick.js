import React from "react";
import useClick from "../Hooks/useClick";

const UseClick = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <div ref={title}>Hi</div>
    </div>
  );
};

export default UseClick;
