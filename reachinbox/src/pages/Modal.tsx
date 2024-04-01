import React, { ReactNode } from "react";
import "../App.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md relative">
        <button
          className="close-button absolute top-2 right-2"
          onClick={onClose}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
