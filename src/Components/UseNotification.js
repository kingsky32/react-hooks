import React from "react";
import useNotification from "../Hooks/useNotification";

const UseNotification = () => {
  const triggerNotif = useNotification("Can I steal your kimchi", {
    body: "I love kimchi dont you",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default UseNotification;
