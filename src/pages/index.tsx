import Head from "next/head";
import { GroupCards } from "../components/GroupCards";
import { Header } from "../components/Header";
import { TableTransactions } from "../components/TableTransactions";

import { ModalProvider } from "../hooks/useModalContext";
import { ModalNewTransaction } from "../components/ModalNewTransaction";

import { TransactionsProvider } from "../contexts/transactionsContext";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <TransactionsProvider>
      <ModalProvider>
        <Head>
          <title>JJ Finance</title>
        </Head>
        <Header />
        <GroupCards />
        <TableTransactions/>
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