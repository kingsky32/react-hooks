import React from "react";
import useScroll from "../Hooks/useScroll";

const UseScroll = () => {
  const { y } = useScroll();
  return (
    <div style={{ position: "fixed" }}>
      <h1 style={{ color: y > 100 ? "red" : "blue" }}>Hi</h1>
    </div>
  );
};

export default UseScroll;
