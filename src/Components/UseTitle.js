import React from "react";
import useTitle from "../Hooks/useTitle";

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return <div>Hi</div>;
};

export default UseTitle;
