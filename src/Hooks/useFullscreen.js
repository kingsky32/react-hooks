import { useRef } from "react";

const useFullscreen = (onFullS) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (onFullS && typeof onFullS === "function") {
        onFullS(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (onFullS && typeof onFullS === "function") {
      onFullS(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default useFullscreen;
