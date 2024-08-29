
// components

import Footer from "./footer"
import Header from "./header"
import ScrollToTopButton from "../shared/scrollToTopButton"
import Preloader from "./preloader"
import Chatbot from "../shared/chatbot"





const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {


  return (
    <>
    <div className="main-page-wrapper">
    <Preloader />
      <Header />
      <main className="">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <Chatbot/>
    </div>
    
    </>
  )

}

export default Layout
