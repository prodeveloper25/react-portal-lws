import { createPortal } from "react-dom";

const MyPortal = ({ children, direction }) => {
  return createPortal(children, direction);
};

export default MyPortal;
