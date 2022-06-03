import Head from "next/head";
import { GroupCards } from "../components/GroupCards";
import { Header } from "../components/Header";
import { TableTransactions } from "../components/TableTransactions";

import { ModalProvider } from "../hooks/useModalContext";
import { ModalNewTransaction } from "../components/ModalNewTransaction";

import { TransactionsProvider } from "../contexts/transactionsContext";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { ListTransactions } from "../components/ListTransactions";

export default function Home() {
  const [isSmallVersion, setIsSmallVersion] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(()=>{
    if(width < 576){
      setIsSmallVersion(true)
    }
    else setIsSmallVersion(false)
  },[width]);
  return (
    <TransactionsProvider>
      <ModalProvider>
        <Head>
          <title>JJ Finance</title>
        </Head>
        <Header />
        <GroupCards />
        {isSmallVersion ? <ListTransactions /> : <TableTransactions/>}
        <ModalNewTransaction />
      </ModalProvider>
    </TransactionsProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async({req}) =>{
  const session = await getSession({req});
  if(!session?.user){
      return{
          redirect:{
              destination: '/login',
              permanent:false,
          }
      }
  }
  return{
      props:{}
  }
}