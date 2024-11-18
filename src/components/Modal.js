import ReactDOM from "react-dom";

function Modal({ ...props }) {
  const { setShowEditModal } = props;
  const modalOverlay = "fixed inset-0 bg-gray-300 opacity-80";
  const modalContent =
    "fixed text-center border-[1px] border-solid border-[grey] inset-[35rem] top-[8rem] bg-white";
  return ReactDOM.createPortal(
    <div className={modalOverlay}>
      <div className={modalContent}>
        <div className="flex justify-end mr-4 mt-1">
          <button onClick={() => setShowEditModal(false)}>X</button>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-root")
  );
}

export default Modal;
