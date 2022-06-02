import Image from "next/image";
import { NewTransactionButton } from "../NewTransactionButton";
import { SignOutButton } from "../SignOutButton";
import { Container } from "./styles";

import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Header(){
  const [isSmallVersion, setIsSmallVersion] = useState(false);
  const { width } = useWindowDimensions();
  useEffect(()=>{
    if(width < 564){
      setIsSmallVersion(true)
    }
    else setIsSmallVersion(false)
  },[width])
  return(
    <Container>
      <div className="content">
        <div className={`wrapper-logo ${isSmallVersion&& "-sm"}`}>
         <Image priority src={isSmallVersion ? "/favicon.svg" : "/images/logo.svg"} layout="fill" />
        </div>
        <div className="wrapper-buttons">
          <SignOutButton />
          <NewTransactionButton />
        </div>
      </div>
    </Container>
  )
}