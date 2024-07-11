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
    <footer>
    <div className="footer-section">
        <div className="footer-top pt-50 pb-30 pt-md-50 pb-md-20 pt-xs-40 pb-xs-10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="footer-widget-layout-top" data-aos="fade-up" data-aos-delay="250">
                            <div className="footer-widget-top">
                                <div className="footer-logo" style={{color:"#fff", fontSize:"25px"}}>
                                    {/* <img src="assets/img/logo/footer-Logo.png" alt="logo"/> */}
                                    Rediger
                                </div>
                            </div>
                            <div className="footer-widget-top">
                                <div className="title">
                                    <p>Contact Us</p>
                                </div>
                                <div className="content">
                                    <div className="phone-icon">
                                        <i className="fa-regular fa-phone-xmark"></i>
                                    </div>
                                    <div className="number">
                                        <a href="#">+91-9032225574</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-widget-top">
                                <div className="title">
                                    <p>Need Email</p>
                                </div>
                                <div className="content">
                                    <div className="phone-icon">
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="number">
                                        <a href="#">Vijendra@rediger.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-middle pt-60 pb-30 pt-xs-40 pb-xs-10">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-12 text-xl-start text-center mb-lg-30 mb-md-30 mb-xs-10">
                        <div className="footer-widget" data-aos="fade-up" data-aos-delay="150">
                            <div className="title">
                                <h4>Information</h4>
                            </div>
                            <div className="text">
                                <p>We take care of ALL your business compliance needs</p>
                            </div>
                            <div className="footer-btn">
                                <a href="">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-4">
                        <div className="footer-widget" data-aos="fade-up" data-aos-delay="200">
                            <div className="title">
                                <h4>Services</h4>
                            </div>
                            <ul>
                                <li><a href="course-details.html">Provident Fund</a></li>
                                <li><a href="course-details.html">Partnership Firm</a></li>
                                <li><a href="course-details.html">GST Registration</a></li>
                                <li><a href="course-details.html">Trademark Registration</a></li>
                                <li><a href="blog-grid.html">One Person Comapny</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-4">
                        <div className="footer-widget" data-aos="fade-up" data-aos-delay="250">
                            <div className="title">
                                <h4>Quick Links</h4>
                            </div>
                            <ul>
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="contact.html">App Download</a></li>
                                <li><Link href="/aboutUs">About Us</Link></li>
                                <li><a href="contact.html">Market Place</a></li>
                                <li><a href="blog-classNameic.html">Blog News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-4">
                        <div className="footer-widget" data-aos="fade-up" data-aos-delay="300">
                            <div className="title">
                                <h4>Contacts</h4>
                            </div>
                            <div className="text">
                                <p>Show Us Some Love On Social Media</p>
                            </div>
                            <div className="social-icon">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright pt-60 pb-60 pt-lg-40 pb-lg-40 pt-md-30 pb-md-30 pt-xs-25 pb-xs-25">
            <div className="container">
                <div className="row text-center">
                    <div className="col-xl-12">
                        <div className="copyright-text">
                            <p> &copy; 2023 rediger.in 
                                {/* <a href="https://themeforest.net/user/hamina-themes/portfolio">Hamina-Themes</a> */}
                                . All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
