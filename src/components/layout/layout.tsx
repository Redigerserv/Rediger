
// components

import Footer from "./footer"
import Header from "./header"
import ScrollToTopButton  from "../shared/scrollToTopButton"
import Preloader from  "./preloader"





const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {


    return (
      <>
<Preloader/>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <ScrollToTopButton/>
      </>
    )

}

export default Layout
