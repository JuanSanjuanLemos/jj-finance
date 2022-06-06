import { Box } from "./styles";
import { BsTrash } from "react-icons/bs";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
interface TransactionMobileProps{
  id: number;
  title: string;
  price: string;
  category: string;
  date: string;
  type: string;
}


export function TransactionMobile({category,date,price,title,type,id}:TransactionMobileProps){
  const { deleteTransaction} = useTransactionsContext();

  return(
    <Box>
      <div className="title-close">
        <h2>{title}</h2> 
        <button onClick={() => deleteTransaction(id)}><BsTrash /></button>
      </div>
      <strong className={`price -${type}`}>{type=== "withdrawal"&& "-"} {price}</strong>
      <div className="category-date">
        <p>{category}</p>
        <p>{date}</p>
      </div>
    </Box>
  )
}