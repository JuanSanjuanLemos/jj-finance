import Image from "next/image";
import { useEffect } from "react";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { TransactionMobile } from "../TransactionMobile";
import { Container } from "./styles";

export function ListTransactions(){
  const { listTransactions, getData, isLoading } = useTransactionsContext();
  useEffect(() => {
    getData();
  }, []);
  return(
    <Container>
      <div className="header">
        <h1>Listagem</h1>
        <p className="amount-items">{listTransactions.length} itens</p>
      </div>
      {!isLoading ? (
          listTransactions.length > 0 ? (
            <div className="wrapper-list">
              {listTransactions.map((t, i) => {
                return <TransactionMobile category={t.category} date={t.date} price={t.price} title={t.title} type={t.type} key={i++} />
              })}
            </div>
          ) : (
            <h2 className="not-transactions">
              Você ainda não possui transações!
            </h2>
          )
        ) : (
          <div className="loader">
            <Image src="/images/loader.gif" alt="carregando" layout="fill" />
          </div>
        )}
    </Container>
  )
}