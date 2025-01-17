import React, { createContext, useContext, useState } from "react";


const ModalContext = createContext();


export const ModalProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);


  const handleClick = () => {
    setIsModal(true);
  };

  const handleClose = () => {
    setIsModal(false);
  };

  return (
    <ModalContext.Provider value={{ isModal, handleClick, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
  };