import { useModal } from "../../hooks/useModalContext";
import { Container } from "./style";

export function NewTransactionButton(){
  const {openModal} = useModal();

  return(
    <Container onClick={openModal}>
      Nova Transação
    </Container>
  )
}