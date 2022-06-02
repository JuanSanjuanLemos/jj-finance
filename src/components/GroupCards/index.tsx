import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { AmountCards } from "../AmountCards";
import { Container } from "./styles";

export function GroupCards() {
  const { amount, valueInflows, valueWithdrawals } = useTransactionsContext();
  return (
    <Container>
      <div className="wrapper-cards">
        <AmountCards
          imageName="inflows.svg"
          type="Entradas"
          value={valueInflows.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
        <AmountCards
          imageName="withdrawal.svg"
          type="Saídas"
          value={valueWithdrawals.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
        <AmountCards
          className="-balance"
          imageName="dolar.svg"
          type="Saldo"
          value={amount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        />
      </div>
    </Container>
  );
}
