import "@/styles/globals.css";
import Head from 'next/head';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
import { SessionProvider } from 'next-auth/react';
// styles
// import '@/styles/app.min.css'
// import '@/styles/dropdown.css'
import '@/styles/main.scss'
// import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/assets/scss/style.scss'
import '@/assets/css/responsive.css'


const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
    <SessionProvider session={session}>
    <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
      
    </>
  );
}

export default App;
