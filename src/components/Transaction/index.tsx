import { Container } from "./styles";

interface TransactionProps{
  title: string;
  price: string;
  category: string;
  date: string;
  type: string;
}

export function Transaction({title, category,date,price,type}:TransactionProps){
  return(
    <Container>
      <td className="title">{title}</td>
      <td className={`price -${type}`}>{price}</td>
      <td className="category">{category}</td>
      <td className="date">{date}</td>
    </Container>
  )
}