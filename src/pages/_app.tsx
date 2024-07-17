import "@/styles/globals.css";
import Head from 'next/head';
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";
// styles
import '@/styles/app.min.css'
import '@/styles/dropdown.css'
import '@/styles/main.scss'
import styles from "@/styles/Home.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import '@/assets/css/animate.css'
import '@/assets/css/aos.css'
import '@/assets/css/main.css'
import '@/assets/css/nice-select.css'
import '@/assets/css/odometer.css' 
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/slick.css'
import '@/assets/css/spacing.css'
import '@/assets/css/swiper.min.css'
import '@/assets/css/venobox.min.css'
import '@/assets/css/fontawesome.min.css'
import '@/assets/css/swiper-bundle.min.css'
import '@/assets/scss/_off-canvas-menu.scss'
import '@/assets/scss/_overlay.scss'
import '@/assets/scss/main.scss'
import '@/assets/scss/_default.scss'
import '@/assets/scss/_faq.scss'




// import '@/assets/js/aos'
// import '@/assets/js/jquery-ui'
// import '@/assets/js/jquery-ui-slider-range'
// import '@/assets/js/jquery.appear'
// import '@/assets/js/script'

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
