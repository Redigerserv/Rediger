import Head from "next/head";
import useAOS from "../hooks/useAOS";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick"
// import mainbgImg from "../assets/images/lazy.svg"
import mainbgImg from "../assets/images/assets/ils_01.svg"
import homeImg from "../assets/images/icon/icon_01.svg"
import service2 from "../assets/images/icon/icon_02.svg"
import service3 from "../assets/images/icon/icon_03.svg"
import shape1 from "../assets/images/shape/shape_01.svg"
import screen01 from "../assets/images/assets/screen_01.png"

import agent01 from "../assets/images/agent/img_01.jpg"
import agent02 from "../assets/images/agent/img_02.jpg"
import agent03 from "../assets/images/agent/img_03.jpg"
import agent04 from "../assets/images/agent/img_04.jpg"
import agent05 from "../assets/images/agent/img_05.jpg"
import screen12 from "../assets/images/assets/screen_12.png"

import icon07 from "../assets/images/icon/icon_07.svg"
import icon08 from "../assets/images/icon/icon_08.svg"
import icon09 from "../assets/images/icon/icon_09.svg"


import titleshape08 from "../assets/images/shape/title_shape_08.svg"
import ils02 from "../assets/images/assets/ils_02.svg"
import Login from "@/components/shared/login";
import { useState } from "react";



// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Home = () => {

    const [showModal, setShowModal] = useState(false);


    useAOS({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
    });

    var settings = {
        dots: true,
        arrows: false,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // centerMode: true
    };


    var agents = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Rediger App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
            <div className="hero-banner-one bg-pink z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 m-auto">
                            <h1 className="hero-heading text-center wow fadeInUp">We take care of All your business compliance needs! <span className="d-inline-block position-relative"><img src="images/lazy.svg" data-src="images/shape/shape_01.svg" alt="" className="lazy-img" /></span></h1>
                            <p className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">An online business compliance platform that helps entrepreneurs and other individuals with various, registrations, tax filings, and other legal matters.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 m-auto">
                            <div className="search-wrapper-one layout-one bg position-relative">
                                <div className="bg-wrapper">
                                        <div className="">
                                            <div className="">
                                                <div className="input-box-one lg-mt-10">
                                                    <button className="fw-500 tran3s search-btn" onClick={() => setShowModal(true)}>Register Now</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Image src={mainbgImg} alt="" className="lazy-img shapes w-100 illustration" style={{ height: "auto" }} />
            </div>


            <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-60 md-pb-60">
                <div className="main-content m-auto">
                    <Slider {...settings}>
                        <div>
                            <div className="item">
                                <div className="feedback-block-one text-center">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <img src="images/media/img_01.jpg" alt="" className="rounded-circle m-auto avatar" />
                                            <h6 className="fs-20 m0 pt-10">Jonathan Harry</h6>
                                            <span className="fs-16">Milan, Itlay</span>
                                        </div>
                                        <div className="col-md-6">
                                            <blockquote>Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!</blockquote>
                                        </div>
                                        <div className="col-md-3">
                                            <img src="images/lazy.svg" data-src="images/assets/rating_01.png" alt="" className="lazy-img m-auto" />
                                            <p className="text-center m0 pt-10"><span className="fw-500 color-dark">13k rating</span> (4.7 Rating)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="feedback-block-one text-center">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <img src="images/media/img_02.jpg" alt="" className="rounded-circle m-auto avatar" />
                                            <h6 className="fs-20 m0 pt-10">Sofia Rena</h6>
                                            <span className="fs-16">New York, USA</span>
                                        </div>
                                        <div className="col-md-6">
                                            <blockquote>People who are sentinels are definitely the working very hard now, so that they can enjoy the fruits.</blockquote>
                                        </div>
                                        <div className="col-md-3">
                                            <img src="images/lazy.svg" data-src="images/assets/rating_01.png" alt="" className="lazy-img m-auto" />
                                            <p className="text-center m0 pt-10"><span className="fw-500 color-dark">10k rating</span> (4.5 Rating)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="feedback-block-one text-center">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <img src="images/media/img_03.jpg" alt="" className="rounded-circle m-auto avatar" />
                                            <h6 className="fs-20 m0 pt-10">Rashed Kabir</h6>
                                            <span className="fs-16">Dhaka, BD</span>
                                        </div>
                                        <div className="col-md-6">
                                            <blockquote>They are very strict about themselves and their work, and do not have a carefree attitude to anything in life.</blockquote>
                                        </div>
                                        <div className="col-md-3">
                                            <img src="images/lazy.svg" data-src="images/assets/rating_01.png" alt="" className="lazy-img m-auto" />
                                            <p className="text-center m0 pt-10"><span className="fw-500 color-dark">11k rating</span> (4.8 Rating)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>


            <div className="block-feature-one mt-150 xl-mt-50">
                <div className="container">
                    <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
                        <h3> <span>Our Services <Image src={shape1} alt="" className="lazy-img" /></span></h3>
                        <p className="fs-24">Your trusted real estate partner in every transaction.</p>
                    </div>
                    <div className="row gx-xl-5">
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40">
                                <Image src={homeImg} alt="" className="lazy-img m-auto h-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Private Limited Company</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">Explore Private Limited Company and uncover your ideal working space.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
                                <Image src={service2} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Fssai Registration</div>
                                <p className="fs-24 ps-xxl-3 pe-xxl-3">Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
                                <Image src={service3} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Provident Fund</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-xl-5">
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40">
                                <Image src={homeImg} alt="" className="lazy-img m-auto h-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Msme Registration</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
                                <Image src={service2} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">One person Company</div>
                                <p className="fs-24 ps-xxl-3 pe-xxl-3">Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
                                <Image src={service3} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Partnership Firm</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-xl-5">
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40">
                                <Image src={homeImg} alt="" className="lazy-img m-auto h-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Limited Liability Company</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">Explore homy’s 2 million+ homes and uncover your ideal living space.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
                                <Image src={service2} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Import and Export</div>
                                <p className="fs-24 ps-xxl-3 pe-xxl-3">Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
                                <Image src={service3} alt="" className="lazy-img  h-auto m-auto icon" />
                                <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Sole Proprietorship</div>
                                <p className="fs-24 ps-xxl-4 pe-xxl-4">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="block-feature-two mt-150 xl-mt-110 mb-30">
                <div className="wrapper">
                    <div className="row gx-xl-5">
                        <div className="col-xxl-7 col-md-6 d-flex wow fadeInLeft">
                            <div className="block-one w-100 h-100">
                                <div className="position-relative z-1 h-100">
                                    <h3 className="mb-55">Secure your family's dream home.</h3>
                                    <a className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle ms-3" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <div className="card-box text-center">
                                        <h3 className="main-count fw-500">0<span className="counter">7</span>+</h3>
                                        <p className="fs-20">Years Experience <br />with proud.</p>
                                    </div>
                                    <Image src={screen01} alt="" className="lazy-img shapes screen_01" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-md-6 wow fadeInRight">
                            <div className="block-two">
                                <div className="bg-wrapper">
                                    <h4>Who we are?</h4>
                                    <p className="fs-22 mt-20">Your premier partner in real estate. <br /> Transforming properties into dreams. Let us guide you home with expertise.</p>
                                    <div className="counter-wrapper ps-xl-3 pb-30 mt-45 mb-50">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="counter-block-one mt-20">
                                                    <div className="main-count fw-500 color-dark"><span className="counter">1.7</span>K+</div>
                                                    <span>Completed Project</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="counter-block-one mt-20">
                                                    <div className="main-count fw-500 color-dark"><span className="counter">1.3</span>mil+</div>
                                                    <span>Happy Customers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-style-one fs-22 color-dark style-none">
                                        <li>Loan & low Interest facility</li>
                                        <li>Over 100k+ property & update regularly</li>
                                        <li>Expert agent consultation</li>
                                    </ul>
                                    <div className="d-inline-flex flex-wrap align-items-center mt-15 md-mt-10">
                                        <a href="about_us_01.html" className="btn-two mt-20 me-4"><span>More Details</span></a>
                                        <a href="contact.html" className="btn-three mt-20"><span>Request a Callback</span> <i className="fa-light fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft">
                            <div className="title-one mb-45 lg-mb-30">
                                <h3 className="text-white">Exclusive <span>Monthly <img src="images/lazy.svg" data-src="images/shape/title_shape_04.svg" alt="" className="lazy-img" /></span>Deal for you.</h3>
                                <p className="fs-24 text-white pe-xl-5 me-xxl-5">Don't miss out on this personalized monthly exclusive offer for you.</p>
                            </div>
                            <a href="listing_details_02.html" className="btn-six">More Details</a>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="property-item md-mt-60 position-relative z-1">
                                <div className="row gx-0">
                                    <div className="col-md-5 d-flex">
                                        <div className="gutter border-right w-100 h-100">
                                            <div className="tag mb-20">FOR SELL</div>
                                            <h4 className="mb-70 sm-mb-40">Luxury fisa orkit villa.</h4>
                                            <ul className="style-none d-flex action-icons">
                                                <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                                <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                                <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex">
                                        <div className="gutter w-100 h-100">
                                            <p>Mirpur 10, National Stadium, 1210, Dhaka, BD</p>
                                            <h2 className="price text-center">$28,100.00</h2>
                                            <ul className="style-none d-flex feature">
                                                <li>
                                                    <strong className="d-block color-dark fw-500 fs-20">2137</strong>
                                                    <span className="fs-16">sqft</span>
                                                </li>
                                                <li className="text-center">
                                                    <strong className="d-block color-dark fw-500 fs-20">03</strong>
                                                    <span className="fs-16">bed</span>
                                                </li>
                                                <li className="text-end">
                                                    <strong className="d-block color-dark fw-500 fs-20">02</strong>
                                                    <span className="fs-16">bath</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="button-group gutter d-flex justify-content-between align-items-center">
                                    <a href="listing_details_02.html" className="btn-three"><span>Check Full Details</span></a>
                                    <a href="listing_details_02.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="agent-section-one position-relative z-1 mt-150 xl-mt-120">
                <div className="container">
                    <div className="position-relative">
                        <div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
                            <h3>Our <span>Agents<img src="images/lazy.svg" data-src="images/shape/title_shape_05.svg" alt="" className="lazy-img" /></span></h3>
                            <p className="fs-22 mt-xs">Lorem  is placeholder text commonly used  graphic </p>
                        </div>
                        <div className="wrapper position-relative z-1">
                            <div className="agent-slider-one">
                                <Slider {...agents}>
                                    <div>
                                        <div className="item">
                                            <div className="agent-card-one position-relative">
                                                <div className="img border-20">
                                                    <Image src={agent01} alt="" className="w-100 tran5s" />
                                                </div>
                                                <div className="text-center">
                                                    <h6>Mark Filo</h6>
                                                    <a href="agent_details.html" className="stretched-link">CEO & Founder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item">
                                            <div className="agent-card-one position-relative">
                                                <div className="img border-20">
                                                    <Image src={agent02} alt="" className="w-100 tran5s" />
                                                </div>
                                                <div className="text-center">
                                                    <h6>Chris Matial</h6>
                                                    <a href="agent_details.html" className="stretched-link">Retailer</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item">
                                            <div className="agent-card-one position-relative">
                                                <div className="img border-20">
                                                    <Image src={agent03} alt="" className="w-100 tran5s" />
                                                </div>
                                                <div className="text-center">
                                                    <h6>Jubayer Al Hasan</h6>
                                                    <a href="agent_details.html" className="stretched-link">Marketing Expert</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item">
                                            <div className="agent-card-one position-relative">
                                                <div className="img border-20">
                                                    <Image src={agent04} alt="" className="w-100 tran5s" />
                                                </div>
                                                <div className="text-center">
                                                    <h6>Jannatul Ferdaus</h6>
                                                    <a href="agent_details.html" className="stretched-link">Broker</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="item">
                                            <div className="agent-card-one position-relative">
                                                <div className="img border-20">
                                                    <Image src={agent05} alt="" className="w-100 tran5s" />
                                                </div>
                                                <div className="text-center">
                                                    <h6>Chris Matial</h6>
                                                    <a href="agent_details.html" className="stretched-link">Broker</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <div className="section-btn text-center md-mt-60">
                            <a href="agent.html" className="btn-one fw-normal">Meet Entire Team</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex order-lg-last">
                            <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
                                <div className="title-one mb-60 lg-mb-40">
                                    <div className="upper-title">CB ESTIMATE</div>
                                    <h3>Get quick <span>estimate<img src="images/lazy.svg" data-src="images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> on your home.</h3>
                                    <p className="fs-24 color-dark">Master your property's valuation for a poised entry into the real estate market, armed with self-assurance and insight.</p>
                                </div>
                                <form action="#" className="me-xl-4">
                                    <input type="email" placeholder="Your Email Address..." />
                                    <button>Find out</button>
                                </form>
                                <div className="fs-16 mt-10 opacity-75">*For accurate info please <a href="contact.html" className="fst-italic color-dark text-decoration-underline">contact us.</a></div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                                {/* <div className="img-bg" style="background-image: url(images/media/img_11.jpg);"></div> */}
                                <div className="img-bg featureFour"></div>
                                <div className="card-one">
                                    <div className="text text-center z-1">
                                        <h6>Your estimate is in!</h6>
                                        <h3>$378,30.00</h3>
                                    </div>
                                    <Image src={screen12} alt="" className="lazy-img w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="block-feature-five position-relative z-1 bg-pink pt-100 lg-pt-80 pb-130 xl-pb-100 lg-pb-80 mt-225 xl-mt-200 lg-mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 m-auto">
                            <div className="title-one text-center mb-35 lg-mb-20">
                                <h3>We’r here to help <br /> you get your <span>dream home<img src="images/lazy.svg" data-src="images/shape/title_shape_07.svg" alt="" className="lazy-img" /></span></h3>
                                <p className="fs-24 color-dark">It’s easy to start with us with these simple steps</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-xxl-11 m-auto">
                            <div className="row gx-xl-5 justify-content-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card-style-one text-center wow fadeInUp mt-40">
                                        <Image src={icon07} alt="" className="lazy-img m-auto icon" />
                                        <h5 className="mt-50 lg-mt-30 mb-15">Create Account</h5>
                                        <p className="pe-xxl-4 ps-xxl-4">It’s very easy to open an account and start your journey.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card-style-one text-center wow fadeInUp mt-40 arrow position-relative" data-wow-delay="0.1s">
                                        <Image src={icon08} alt="" className="lazy-img m-auto icon" />
                                        <h5 className="mt-50 lg-mt-30 mb-15">Find Home</h5>
                                        <p className="pe-xxl-4 ps-xxl-4">Complete your profile with all the info to get attention of client.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
                                        <Image src={icon09} alt="" className="lazy-img m-auto icon" />
                                        <h5 className="mt-50 lg-mt-30 mb-15">Quick Process</h5>
                                        <p className="pe-xxl-4 ps-xxl-4">Apply & get your preferable jobs with all the requirements and get it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="images/lazy.svg" data-src="images/shape/shape_07.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="images/lazy.svg" data-src="images/shape/shape_08.svg" alt="" className="lazy-img shapes shape_02" />
            </div>


            <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
                                <h3 className="text-white m0">Start your <span>Journey<img src="images/lazy.svg" data-src="images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> As a Customer.</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-wrapper me-auto ms-auto me-lg-0">
                                <form action="#">
                                    <input type="email" placeholder="Email address" />
                                    <button>Get Started</button>
                                </form>
                                <div className="fs-16 mt-10 text-white">Already a Agent? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-8 m-auto">
                            <div className="title-one mb-45 md-mb-30">
                                <h2>Any Inquiry? <span>Feel free<Image src={titleshape08} alt="" className="lazy-img" /></span> To contact Us.</h2>
                            </div>
                            <a href="contact.html" className="btn-five text-uppercase">SEND MESSAGE</a>
                        </div>
                    </div>
                </div>
                <Image src={ils02} alt="" className="lazy-img shapes h-auto w-100 illustration" />
            </div>


            <Login showModal={showModal} setShowModal={setShowModal}/>


        </>
    );
}

export default Home;
