import { useContext } from "react";
import { TransactionsContext } from "../contexts/transactionsContext";

export function useTransactionsContext (){
  const context = useContext(TransactionsContext);
  return context;
}