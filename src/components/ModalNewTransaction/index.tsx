import { MdClose } from "react-icons/md";

import Modal from "react-modal";
import { useModal } from "../../hooks/useModalContext";
import { FormNewTransaction } from "../FormNewTransaction";
import { BoxIcon } from "./styles";


interface TrasactionFormatted {
  title: string;
  price: string;
  category: string;
  type: string;
  date:string;
}

export function ModalNewTransaction(){
  const {isModalOpen, closeModal} = useModal();
  const bg = {
    overlay: {
      background: "#00000078"
    }
  };
  return(
    <Modal className="main-modal" isOpen={isModalOpen} style={bg} onRequestClose={closeModal}>
      <BoxIcon>
        <MdClose onClick={closeModal} />
      </BoxIcon>
      <FormNewTransaction/>
    </Modal>
  )
}