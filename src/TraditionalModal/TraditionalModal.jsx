import { useState } from "react";
import ModalContent from "../Modal/ModalContent";

const TraditionalModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="ml-4 relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        onClick={() => setShowModal(true)}
        className="text-lg bg-red-500 px-4 py-1 text-white rounded"
      >
        Show Traditional Modal
      </button>
      {showModal && <ModalContent onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default TraditionalModal;
