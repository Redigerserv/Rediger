import "@/styles/globals.css";
import Head from 'next/head';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
// styles
// import '@/styles/app.min.css'
// import '@/styles/dropdown.css'
import '@/styles/main.scss'
// import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/assets/scss/style.scss'
import '@/assets/css/responsive.css'


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
