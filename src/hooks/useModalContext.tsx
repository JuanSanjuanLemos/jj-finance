import { createContext, ReactNode, useContext, useState } from "react";

interface ModalProviderProps{
  children: ReactNode;
}

interface ModalContextData{
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({children}: ModalProviderProps){
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal(){
    setIsModalOpen(true);
  }
  function closeModal(){
    setIsModalOpen(false);
  }

  return(
    <ModalContext.Provider value={{isModalOpen, closeModal,openModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal(){
  const context = useContext(ModalContext);
  return context;
} 