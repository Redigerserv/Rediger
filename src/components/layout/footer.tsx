import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
    return (
        // <footer className="my-4">
        //   <Script src="/js/vendor/bootstrap.bundle.min.js"></Script>
        //   <Script src="/js/app.min.js"></Script>
        //   <p className="text-center small fw-light">
        //     &copy; 2023 rediger.in. All Rights Reserved
        //   </p>
        // </footer>
        //     <footer>
        //     <div className="footer-section">
        //         <div className="footer-top pt-50 pb-30 pt-md-50 pb-md-20 pt-xs-40 pb-xs-10">
        //             <div className="container">
        //                 <div className="row align-items-center">
        //                     <div className="col-xl-12">
        //                         <div className="footer-widget-layout-top" data-aos="fade-up" data-aos-delay="250">
        //                             <div className="footer-widget-top">
        //                                 <div className="footer-logo" style={{color:"#fff", fontSize:"25px"}}>

        //                                     Rediger
        //                                 </div>
        //                             </div>
        //                             <div className="footer-widget-top">
        //                                 <div className="title">
        //                                     <p>Contact Us</p>
        //                                 </div>
        //                                 <div className="content">
        //                                     <div className="phone-icon">
        //                                         <i className="fa-regular fa-phone-xmark"></i>
        //                                     </div>
        //                                     <div className="number">
        //                                         <a href="#">+91-9032225574</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="footer-widget-top">
        //                                 <div className="title">
        //                                     <p>Need Email</p>
        //                                 </div>
        //                                 <div className="content">
        //                                     <div className="phone-icon">
        //                                         <i className="fa-regular fa-envelope"></i>
        //                                     </div>
        //                                     <div className="number">
        //                                         <a href="#">Vijendra@rediger.in</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="footer-middle pt-60 pb-30 pt-xs-40 pb-xs-10">
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col-xl-3 col-md-12 text-xl-start text-center mb-lg-30 mb-md-30 mb-xs-10">
        //                         <div className="footer-widget" data-aos="fade-up" data-aos-delay="150">
        //                             <div className="title">
        //                                 <h4>Information</h4>
        //                             </div>
        //                             <div className="text">
        //                                 <p>We take care of ALL your business compliance needs</p>
        //                             </div>
        //                             <div className="footer-btn">
        //                                 <a href="">Sign Up</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-3 col-md-4">
        //                         <div className="footer-widget" data-aos="fade-up" data-aos-delay="200">
        //                             <div className="title">
        //                                 <h4>Services</h4>
        //                             </div>
        //                             <ul>
        //                                 <li><a href="course-details.html">Provident Fund</a></li>
        //                                 <li><a href="course-details.html">Partnership Firm</a></li>
        //                                 <li><a href="course-details.html">GST Registration</a></li>
        //                                 <li><a href="course-details.html">Trademark Registration</a></li>
        //                                 <li><a href="blog-grid.html">One Person Comapny</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-3 col-md-4">
        //                         <div className="footer-widget" data-aos="fade-up" data-aos-delay="250">
        //                             <div className="title">
        //                                 <h4>Quick Links</h4>
        //                             </div>
        //                             <ul>
        //                                 <li><a href="contact.html">Contact Us</a></li>
        //                                 <li><a href="contact.html">App Download</a></li>
        //                                 <li><Link href="/aboutUs">About Us</Link></li>
        //                                 <li><a href="contact.html">Market Place</a></li>
        //                                 <li><a href="blog-classNameic.html">Blog News</a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className="col-xl-3 col-md-4">
        //                         <div className="footer-widget" data-aos="fade-up" data-aos-delay="300">
        //                             <div className="title">
        //                                 <h4>Contacts</h4>
        //                             </div>
        //                             <div className="text">
        //                                 <p>Show Us Some Love On Social Media</p>
        //                             </div>
        //                             <div className="social-icon">
        //                                 <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        //                                 <a href="#"><i className="fa-brands fa-twitter"></i></a>
        //                                 <a href="#"><i className="fa-brands fa-instagram"></i></a>
        //                                 <a href="#"><i className="fa-brands fa-youtube"></i></a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="footer-copyright pt-60 pb-60 pt-lg-40 pb-lg-40 pt-md-30 pb-md-30 pt-xs-25 pb-xs-25">
        //             <div className="container">
        //                 <div className="row text-center">
        //                     <div className="col-xl-12">
        //                         <div className="copyright-text">
        //                             <p> &copy; 2023 rediger.in 
        //                                 {/* <a href="https://themeforest.net/user/hamina-themes/portfolio">Hamina-Themes</a> */}
        //                                 . All
        //                                 Rights Reserved.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <>

            <div className="footer-one" style={{borderTop:"1px solid #000"}}>
                <div className="position-relative z-1">
                    <div className="container py-3">
                        <div className="row justify-content-between">
                            <div className="col-lg-6">
                                <div className="footer-intro">
                                    <div className="bg-wrapper">
                                        <div className="logo mb-20">
                                            <a href="index.html">
                                                Rediger
                                                {/* <img src="images/logo/logo_01.svg" alt="" /> */}
                                            </a>
                                        </div>
                                        <p className="mb-60 lg-mb-40 md-mb-20">Pratima Arcade, Flat No:201, KPHB VI Phase, Hyderabad Nexus Lane, Land Mark: Karnataka Bank (in the Same Building 2nd Floor), KV Rangareddy District, Hyderabad, Telangana-500085</p>
                                        <h6>CONTACT</h6>
                                        <a href="#" className="email fs-24 text-decoration-underline tran3s mb-70 lg-mb-50">Vijendra@rediger.in</a>
                                        <ul className="style-none d-flex align-items-center social-icon">
                                            <li><Link href="/"><i className="fa-brands fa-square-facebook"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-square-twitter"></i></Link></li>
                                            <li><Link href="/"><i className="fa-brands fa-square-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex flex-wrap">
                                    <div className="footer-nav mt-100 lg-mt-80 xs-mt-50">
                                        <h5 className="footer-title">Links</h5>
                                        <ul className="footer-nav-link style-none">
                                            <li><Link href={"/services/start-business/privateLimitedCompany"}>Private Limited Company</Link></li>
                                            <li><Link href={"/services/license-registration/tradeLicence"} >Trade Licence</Link></li>
                                            <li><Link href={"/services/license-registration/ImportandExport"}>Import & Export</Link></li>
                                            <li><Link href={"/services/GST_Registration/TDS-ReturnFiling"}>TDS Return Filing</Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer-nav mt-100 lg-mt-80 xs-mt-30">
                                        <h5 className="footer-title">Legal</h5>
                                        <ul className="footer-nav-link style-none">
                                            <li><Link href="/">Terms & conditions</Link></li>
                                            <li><Link href="/">Cookie</Link></li>
                                            <li><Link href="/">Privacy policy</Link></li>
                                            <li><Link href="/">Faq’s</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Footer
