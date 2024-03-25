import { useState } from "react";
import ModalContent from "../Modal/ModalContent";
import LwsPortal from "./LwsPortal";

const PortalModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    console.log("I am Click");
  };
  return (
    <div
      className="ml-4 relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden"
      onClick={handleClick}
    >
      <button
        onClick={() => setShowModal(true)}
        className="text-lg bg-green-500 px-4 py-1 text-white rounded"
      >
        Show Portal Modal
      </button>{" "}
      {showModal && (
        //   this is my portal

        /* <MyPortal direction={document.getElementById("portal-root")}>
        <ModalContent onClose={() => setShowModal(false)} />
    </MyPortal> */

        // this is lws portal
        <LwsPortal>
          <ModalContent onClose={() => setShowModal(false)} />
        </LwsPortal>
      )}
    </div>
  );
};

export default PortalModal;
