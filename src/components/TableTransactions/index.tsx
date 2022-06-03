import Image from "next/image";
import { useEffect } from "react";
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { Transaction } from "../Transaction";
import { Container } from "./styles";

export function TableTransactions() {
  const { listTransactions, getData, isLoading } = useTransactionsContext();
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <div className="wrapper">
        {!isLoading ? (
          listTransactions.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {listTransactions.map((t, i) => {
                  return (
                    <Transaction
                      category={t.category}
                      date={t.date}
                      price={t.price}
                      title={t.title}
                      type={t.type}
                      key={i++}
                    />
                  );
                })}
              </tbody>
            </table>
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
      </div>
    </Container>
  );
}
