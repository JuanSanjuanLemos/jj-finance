import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { Container } from "./styles";

interface TransactionProps{
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
  type: string;
}

export function Transaction({title, category,date,price,type,id}:TransactionProps){
  const { deleteTransaction} = useTransactionsContext();
  
  return(
    <Container>
      <td className="title">{title}</td>
      <td className={`price -${type}`}>{type=== "withdrawal"&& "-"} {price}</td>
      <td className="category">{category}</td>
      <td className="date">{date}</td>
      <td className="delete"><button onClick={() => deleteTransaction(id)}>Deletar</button></td>
    </Container>
  )
}