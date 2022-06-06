import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { Container } from "../components/login";

import { signIn, useSession,getCsrfToken, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

export default function Login() {
  return (
    <>
      <Head>
        <title>Faça seu login</title>
      </Head>
      <Container>
        <section className="content">
          <div className="login">
            <div className="logo">
              <Image src="/images/logo-white.svg" alt="JJ Finance" layout="fill" priority />
            </div>
            <h1>Bem-vindo!</h1>
            <p>
              Faça login com seu email para começar!
            </p>
            <button onClick={() => signIn("google",{redirect: true, callbackUrl: '/'},{ prompt: "login" })}>
              <span className="icon-github">
                <FcGoogle />
              </span>
              Login
            </button>
          </div>
        </section>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async({req}) =>{
  const session = await getSession({req});
  if(session?.user){
      return{
          redirect:{
              destination: '/',
              permanent:false,
          }
      }
  }
  return{props:{}}
}