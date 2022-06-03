import { Box } from "./styles";

interface TransactionMobileProps{
  title: string;
  price: string;
  category: string;
  date: string;
  type: string;
}


export function TransactionMobile({category,date,price,title,type,}:TransactionMobileProps){
  return(
    <Box>
      <h2>{title}</h2>
      <strong className={`price -${type}`}>{type=== "withdrawal"&& "-"} {price}</strong>
      <div className="category-date">
        <p>{category}</p>
        <p>{date}</p>
      </div>
    </Box>
  )
}