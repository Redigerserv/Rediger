
// components

import Footer from "./footer"
import Header from "./header"
import ScrollToTopButton from "../shared/scrollToTopButton"
import Preloader from "./preloader"





const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {


  return (
    <>
    <div className="main-page-wrapper">
    <Preloader />
      <Header />
      <main className="">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
    
    </>
  )

}

export default Layout
