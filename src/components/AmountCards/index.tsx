import Image from "next/image";
import { Container } from "./styles";

interface AmountCardsProps{
  imageName: string;
  value: string;
  type: string;
  className?: string;
}

export function AmountCards({imageName,type,value, className}:AmountCardsProps){
  return(
    <Container className={className}>
      <div className="wrapper-type">
        <h3>{type}</h3>
        <div className="img">
          <Image src={`/images/${imageName}`} layout='fill' />
        </div>
      </div>
      <strong>{value}</strong>
    </Container>
  )
}