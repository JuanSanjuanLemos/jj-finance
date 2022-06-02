import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsGoogle } from "react-icons/bs";
import { Container } from "../components/login";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push(`/`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>Faça seu login</title>
      </Head>
      <Container>
        <section className="content">
          <div className="login">
            <div className="logo">
              <Image src="/images/logo-white.svg" layout="fill" priority />
            </div>
            <h1>Bem-vindo!</h1>
            <p>
              <span className="icon-github">
                <BsGoogle />
              </span>{" "}
              Faça login com seu email para começar
            </p>
            <button onClick={() => signIn("google")}>
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
