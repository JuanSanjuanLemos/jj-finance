import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface TransactionsProviderProps{
  children: ReactNode;
}

interface Trasaction {
  id:number;
  title: string;
  price: number;
  category: string;
  type: string;
  date: string;
}

interface TrasactionFormatted {
  id:number;
  title: string;
  price: string;
  category: string;
  type: string;
  date: string;
}

interface TransactionContextData{
  getData: () => void;
  listTransactionsFormatted: TrasactionFormatted[];
  listTransactions: Trasaction[];
  valueWithdrawals: number;
  valueInflows:number;
  amount: number;
  isLoading:boolean;
  deleteTransaction: (id:number) => void;
  setIsLoading: (isLoading: boolean)=>void;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){
  const [listTransactionsFormatted, setListTransactionsFormatted] = useState<TrasactionFormatted[]>([]);
  const [listTransactions, setListTransactions] = useState<Trasaction[]>([]);
  const [valueInflows, setValueInflows] = useState(0);
  const [valueWithdrawals, setValueWithdrawal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();


  async function getData() {
    setIsLoading(true);
    try{
      const res = await fetch("/api/getTransactions");
      const newData = await res.json();
      setListTransactionsFormatted(formattedData(newData));
      setListTransactions(newData);
      getValueInflows(newData);
      getValueWithdrawals(newData);
    }
    catch{
      signOut().then(()=>router.push('/login'))
    }
    setIsLoading(false);
  }

  function getValueInflows(data:Trasaction[])
  {
    const listPrice = data.filter(t => t.type === "inflow").map(t=> t.price)
    setValueInflows(listPrice.reduce((amount, current) => {
      return amount + current
    },0));
  }

  function getValueWithdrawals(data:Trasaction[])
  {
    const listPrice = data.filter(t => t.type === "withdrawal").map(t=> t.price)
    setValueWithdrawal(listPrice.reduce((amount, current) => {
      return amount + current
    },0));
  }

  async function deleteTransaction(id:number){
    const newList = listTransactions.filter(t=> t.id !== id);
    setListTransactions(listTransactions);
    setListTransactionsFormatted(formattedData(newList));
    setIsLoading(true);
    const requestOptions ={
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({data: newList})
    };
    await fetch("api/updateTransactions", requestOptions);
    getData();
  }

  useEffect(()=>{
    setAmount(valueInflows - valueWithdrawals);

  },[valueInflows,valueWithdrawals])
  function formattedData(data: Trasaction[]) {
    const transactionsFormatted: TrasactionFormatted[] = data.map(
      (t) => {
        return {
          id: t.id,
          title: t.title,
          price: t.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          }),
          type: t.type,
          category: t.category,
          date: t.date,
        };
      }
    );
    return transactionsFormatted;
  }
  return(
    <TransactionsContext.Provider value={{getData,listTransactions,listTransactionsFormatted,deleteTransaction, setIsLoading, valueWithdrawals,valueInflows,amount,isLoading}}>
      {children}
    </TransactionsContext.Provider>
  )
}