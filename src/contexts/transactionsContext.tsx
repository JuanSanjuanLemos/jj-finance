import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface TransactionsProviderProps{
  children: ReactNode;
}

interface Trasaction {
  title: string;
  price: number;
  category: string;
  type: string;
  date: string;
}

interface TrasactionFormatted {
  title: string;
  price: string;
  category: string;
  type: string;
  date: string;
}

interface TransactionContextData{
  getData: () => void;
  listTransactions: TrasactionFormatted[];
  valueWithdrawals: number;
  valueInflows:number;
  amount: number;
  isLoading:boolean;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){
  const [listTransactions, setListTransactions] = useState<TrasactionFormatted[]>([]);
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
      setListTransactions(formattedData(newData));
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

  useEffect(()=>{
    setAmount(valueInflows - valueWithdrawals);

  },[valueInflows,valueWithdrawals])
  function formattedData(data: Trasaction[]) {
    const transactionsFormatted: TrasactionFormatted[] = data.map(
      (t) => {
        return {
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
    <TransactionsContext.Provider value={{getData,listTransactions,valueWithdrawals,valueInflows,amount,isLoading}}>
      {children}
    </TransactionsContext.Provider>
  )
}