import Image from "next/image";
import { useEffect } from "react";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { TransactionMobile } from "../TransactionMobile";
import { Container } from "./styles";

export function ListTransactions(){
  const { listTransactionsFormatted, getData, isLoading } = useTransactionsContext();
  useEffect(() => {
    getData();
  }, []);
  return(
    <Container>
      <div className="header">
        <h1>Listagem</h1>
        <p className="amount-items">{listTransactionsFormatted.length} itens</p>
      </div>
      {!isLoading ? (
          listTransactionsFormatted.length > 0 ? (
            <div className="wrapper-list">
              {listTransactionsFormatted.map((t) => {
                return <TransactionMobile id={t.id} key={t.id} category={t.category} date={t.date} price={t.price} title={t.title} type={t.type} />
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