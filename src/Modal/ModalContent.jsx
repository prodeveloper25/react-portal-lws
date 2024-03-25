const Child = () => {
  return (
    <div className="border border-blue-500 p-2">
      <h1>I am a Child</h1>
      <button className="text-lg bg-yellow-500 px-4 py-1 text-white rounded">
        Click Me
      </button>
    </div>
  );
};

const ModalContent = ({ onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="flex justify-center flex-col items-center border rounded-lg absolute px-5 gap-7 top-20 bg-black text-white left-12 bottom-80 z-10"
    >
      <h1 className="mb-3 text-2xl">Hey I am Nahid</h1>
      <Child />
      <button
        onClick={onClose}
        className="text-lg bg-blue-500 px-4 py-1 text-white rounded"
      >
        Close
      </button>
    </div>
  );
};

export default ModalContent;
