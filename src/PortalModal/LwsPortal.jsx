import { useEffect } from "react";
import { createPortal } from "react-dom";

const LwsPortal = ({ children }) => {
  const mounElement = document.getElementById("portal-root");
  const divElement = document.createElement("div");

  useEffect(() => {
    mounElement.appendChild(divElement);
    return () => mounElement.removeChild(divElement);
  }, [divElement, mounElement]);

  return createPortal(children, divElement);
};

export default LwsPortal;
