import { useSession, signOut } from "next-auth/react";

import { Container } from "./styles";

export function SignOutButton(){
  const { data: session } = useSession();
  
  return(
    <Container onClick={()=> signOut()}>
      Desconectar de <strong>{session?.user?.name}</strong>
    </Container>
  )
}