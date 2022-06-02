import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import Modal from "react-modal";

import {SessionProvider as NextAuthProvider} from 'next-auth/react';


Modal.setAppElement("body");
function MyApp({ Component, pageProps }: AppProps) {

  return(
    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyle />
    </NextAuthProvider>
  )
}

export default MyApp
