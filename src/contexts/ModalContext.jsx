import {createContext, useState} from 'react'

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  const openModal = (modalType, id = null) => {
    setActiveModal(modalType);
    setPlayerToDelete(id);
  };
  const closeModal = () => {
    setActiveModal(null);
    setPlayerToDelete(null);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, activeModal, playerToDelete }}
    >
      {children}
    </ModalContext.Provider>
  );
}