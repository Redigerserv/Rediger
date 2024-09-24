import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { IoIosMenu } from "react-icons/io"
import { LuAlignHorizontalJustifyStart } from "react-icons/lu";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { SiTaxbuzz } from "react-icons/si";
import { MdWorkOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5"

import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineWork } from "react-icons/md";

import backImg from "../../assets/images/portalRediger/blueimage.png"
import { useSession, signOut } from 'next-auth/react';

// import cart from "../../assets/img/icon/cart.svg"
// import user from "../../assets/images/logo/logo_01.svg"
import Image from 'next/image';
import { Modal } from 'react-bootstrap';
import Login from '../shared/login';

const Header = () => {
    const { data: session } = useSession();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

    const b = '/blueimage.png'

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll < 245) {
                setIsSticky(false);
            } else {
                setIsSticky(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <>
            <header className={`theme-main-menu menu-overlay menu-style-one backimg sticky-menu ${isSticky ? 'fixed' : ''}`} ref={headerRef}  >

                <div className="alert-wrapper text-center">
                    {/* <p className="fs-16 m0 text-white">The <a href="listing_01.html" className="fw-500">flash sale</a> go on. The offer will end in — <span>This Sunday</span></p> */}
                    <p className="fs-16 m0 text-white">Last-minute ITR filing? Don't worry, we've got you covered — <span>Let our experts handle it — <Link href="" className="fw-500">File today!"</Link></span></p>
                </div>

                <div className="inner-content gap-one" >
                    <div className="top-header position-relative">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="logo order-lg-0">
                                <Link href="/" className="d-flex align-items-center">
                                    Rediger
                                    {/* <Image src={user} alt=""/> */}
                                </Link>
                            </div>
                            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                                <ul className="d-flex align-items-center style-none">

                                    <li>
                                    {!session ? (
                                         <a data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one" onClick={() => setShowModal(true)}><i className="fa-regular fa-lock"></i> <span>Login/Register</span></a>
                                    ) : (
                                        <a data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one" onClick={() => signOut()}><i className="fa-regular fa-lock"></i> <span>Logout</span></a>

                                    //     <div>
                                    //     <h2>Signed in as {session.user?.email}</h2>
                                    //     <button onClick={() => signOut()}>Sign Out</button>
                                    // </div>
                                    )}
                                       
                                    </li>
                                    {/* <li className="d-none d-md-inline-block ms-3">
                                        <a href="dashboard/add-property.html" className="btn-two" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li> */}
                                </ul>
                            </div>
                            <nav className="navbar navbar-expand-lg p0 order-lg-2">
                                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation" onClick={toggleShow}>
                                    <span></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav align-items-lg-center">
                                        <li className="d-block d-lg-none"><div className="logo"><a href="index.html" className="d-block"><img src="images/logo/logo_01.svg" alt="" /></a></div></li>
                                        {/* <li className="nav-item dashboard-menu">
                                            <Link className="nav-link" href="/">Home</Link>
                                        </li> */}
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">Start a Business
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link href={"/services/start-business/privateLimitedCompany"} className="dropdown-item"><span>Private Limited Company</span></Link></li>
                                                <li><Link href={"/services/start-business/onePersonCompany"} className="dropdown-item"><span>One Person Company</span></Link></li>
                                                <li><Link href={"/services/start-business/limitedLiabilityCompany"} className="dropdown-item"><span>Limited Liability Company</span></Link></li>
                                                <li><Link href={"/services/start-business/partnershipFirm"} className="dropdown-item"><span>Partnership Firm</span></Link></li>
                                                <li><Link href={"/services/start-business/nidhiRegistration"} className="dropdown-item"><span>Nidhi Company Registration</span></Link></li>
                                                <li><Link href={"/services/start-business/soleProprietorship"} className="dropdown-item"><span>Sole Proprietorship</span></Link></li>
                                                <li><Link href={"/services/start-business/section_8_company"} className="dropdown-item"><span>Section 8 Company or NPO</span></Link></li>
                                                <li><Link href={"/services/start-business/DSC"} className="dropdown-item"><span>DSC</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">Licence/Registration
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link href={"/services/license-registration/fssaiRegistration"} className="dropdown-item"><span>Fssai Registration</span></Link></li>
                                                <li><Link href={"/services/license-registration/msmeRegistration"} className="dropdown-item"><span>Msme Registration</span></Link></li>
                                                <li><Link href={"/services/license-registration/trademarkRegistration"} className="dropdown-item"><span>Trademark Registration</span></Link></li>
                                                <li><Link href={"/services/license-registration/shopAct"} className="dropdown-item"><span>Shop Act</span></Link></li>
                                                <li><Link href={"/services/license-registration/tradeLicence"} className="dropdown-item"><span>Trade Licence</span></Link></li>
                                                <li><Link href={"/services/license-registration/ImportandExport"} className="dropdown-item"><span>Import and Export</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">GST Registration 
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><Link href={"/services/GST_Registration/GST_registration"} className="dropdown-item"><span>GST Registration</span></Link></li>
                                                <li><Link href={"/services/GST_Registration/LUT_filing_Under_GST"} className="dropdown-item"><span>LUT Filling Under GST</span></Link></li>
                                                <li><Link href={"/services/GST_Registration/TDS-ReturnFiling"} className="dropdown-item"><span>TDS Return Filing</span></Link></li>
                                                <li><Link href={"/services/GST_Registration/professionalTax_Registration"} className="dropdown-item"><span>Professional Tax Registration</span></Link></li>
                                                <li><Link href={"/services/GST_Registration/providentFund"} className="dropdown-item"><span>Provident Fund</span></Link></li>
                                                <li><Link href={"/services/GST_Registration/ESIS"} className="dropdown-item"><span>ESIS</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">Legal Draft
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link href={"/services/legal-Draft/non-disclosure-agreement"} className="dropdown-item"><span>Non Disclosure Agreement</span></Link></li>
                                                <li><Link href={"/services/legal-Draft/partnership-Deed"} className="dropdown-item"><span>Partnership Deed</span></Link></li>
                                                <li><Link href={"/services/legal-Draft/MOU"} className="dropdown-item"><span>Memorandum of Understanding (MOU)</span></Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/aboutUs" >About Us</Link>
                                            {/* <ul className="dropdown-menu">
                                                <li><a href="index.html" className="dropdown-item"><span>Home 01</span></a></li>
                                                <li><a href="index-2.html" className="dropdown-item"><span>Home 02</span></a></li>
                                                <li><a href="index-3.html" className="dropdown-item"><span>Home 03</span></a></li>
                                                <li><a href="index-4.html" className="dropdown-item"><span>Home 04</span></a></li>
                                                <li><a href="index-5.html" className="dropdown-item"><span>Home 05</span></a></li>
                                                <li><a href="index-6.html" className="dropdown-item"><span>Home 06</span></a></li>
                                                <li><a href="index-7.html" className="dropdown-item"><span>Home 07</span></a></li>
                                            </ul> */}
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contactUs">Contact us</Link>
                                            {/* <ul className="dropdown-menu">
                                                <li><a href="index.html" className="dropdown-item"><span>Home 01</span></a></li>
                                                <li><a href="index-2.html" className="dropdown-item"><span>Home 02</span></a></li>
                                                <li><a href="index-3.html" className="dropdown-item"><span>Home 03</span></a></li>
                                                <li><a href="index-4.html" className="dropdown-item"><span>Home 04</span></a></li>
                                                <li><a href="index-5.html" className="dropdown-item"><span>Home 05</span></a></li>
                                                <li><a href="index-6.html" className="dropdown-item"><span>Home 06</span></a></li>
                                                <li><a href="index-7.html" className="dropdown-item"><span>Home 07</span></a></li>
                                            </ul> */}
                                        </li>
                                        {/* <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">Blog
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="blog_01.html" className="dropdown-item"><span>Blog Grid</span></a></li>
                                                <li><a href="blog_02.html" className="dropdown-item"><span>Blog List</span></a></li>
                                                <li><a href="blog_03.html" className="dropdown-item"><span>Blog 2 column</span></a></li>
                                                <li><a href="blog_details.html" className="dropdown-item"><span>Blog Details</span></a></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="d-md-none ps-2 pe-2 mt-20">
                                            <a href="dashboard/add-property.html" className="btn-two w-100" target="_blank"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </nav>
                        </div>

                    </div>
                    {/* <Image src={backImg} alt="" className="lazy-img shapes w-100 illustration" style={{ height: "auto" }} /> */}

                </div>
            </header>


           <Login showModal={showModal} setShowModal={setShowModal}/>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>  <div className="logo">
                        <a href="/">
                            REDIGER PORTAL
                        </a>
                    </div></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="off-canvas-menu mb-30">
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='sideNavHeading'><RxDashboard size={22} className='mx-2' /> DASHBOARD</Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='sideNavHeading'><LuAlignHorizontalJustifyStart size={22} className='mx-2' /> START A BUSINESS</Accordion.Header>
                                <Accordion.Body className='p-0'>
                                    <div className="div">
                                        <ul style={{ margin: "0px" }}>
                                            <li className='sideNavItem'>Private limited Company</li><hr className='m-0' />
                                            <li className='sideNavItem'>One Person Company</li><hr className='m-0' />
                                            <li className='sideNavItem'>Limited Liability Comapny</li><hr className='m-0' />
                                            <li className='sideNavItem'>Partnership Firm</li><hr className='m-0' />
                                            <li className='sideNavItem'>Sole Proprietorship</li><hr className='m-0' />
                                            <li className='sideNavItem'>DSC</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='sideNavHeading'><MdOutlineAppRegistration size={22} className='mx-2' /> LICENCE / REGISTRATION</Accordion.Header>
                                <Accordion.Body className='p-0'>
                                    <div className="div">
                                        <ul style={{ margin: "0px" }}>
                                            <li className='sideNavItem'>Fssai Registration</li><hr className='m-0' />
                                            <li className='sideNavItem'>Msme Registration</li><hr className='m-0' />
                                            <li className='sideNavItem'>Trade Registration</li><hr className='m-0' />
                                            <li className='sideNavItem'>Shop Act</li><hr className='m-0' />
                                            <li className='sideNavItem'>Trade Licence</li><hr className='m-0' />
                                            <li className='sideNavItem'>Import and Export</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='sideNavHeading'><SiTaxbuzz size={22} className='mx-2' />GST REGISTRATION TAXES</Accordion.Header>
                                <Accordion.Body className='p-0'>
                                    <div className="div">
                                        <ul style={{ margin: "0px" }}>
                                            <li className='sideNavItem'>GST Registration</li><hr className='m-0' />
                                            <li className='sideNavItem'>TDS Return Filing</li><hr className='m-0' />
                                            <li className='sideNavItem'>Professional Tax Registration</li><hr className='m-0' />
                                            <li className='sideNavItem'>Provident Fund</li><hr className='m-0' />
                                            <li className='sideNavItem'>ESIS</li><hr className='m-0' />
                                            <li className='sideNavItem'>LUT Filing Under GST</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='sideNavHeading careers'><MdOutlineWork size={22} className='mx-2' /> CAREERS</Accordion.Header>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header className='sideNavHeading'><SiTaxbuzz size={22} className='mx-2' />LEGAL DRAFT</Accordion.Header>
                                <Accordion.Body className='p-0'>
                                    <div className="div">
                                        <ul style={{ margin: "0px" }}>
                                            <li className='sideNavItem'>Non-Disclosure Agreement</li><hr className='m-0' />
                                            <li className='sideNavItem'>Partnership Deed</li><hr className='m-0' />
                                            <li className='sideNavItem'>Memorandum of Understanding MOU</li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <hr />
                    <div className="offset-sidebar">
                        <div className="mobile-menu"></div>
                        <div className="offset-widget mb-40">
                            <div className="info-widget">
                                <h4 className="offset-title mb-20">About Us</h4>
                                <p className="mb-30">
                                    Rediger is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently.
                                </p>
                            </div>
                        </div>
                        <div className="offset-widget mb-30 pr-10">
                            <div className="info-widget info-widget2">
                                <h4 className="offset-title mb-20">Contact Info</h4>
                                <p>
                                    <i className="fal fa-address-book mx-2"></i>
                                    Pratima Arcade, Flat No:201, KPHB VI Phase, Hyderabad Nexus Lane, Land Mark: Karnataka Bank (in the Same Building 2nd Floor), KV Rangareddy District, Hyderabad, Telangana-500085</p>
                                <p>
                                    <i className="fal fa-phone mx-2"></i>
                                    +91-9032225574
                                </p>
                                <p>
                                    <i className="fal fa-envelope-open mx-2"></i>
                                    Vijendra@rediger.in
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="header-buttons d-flex justify-content-center mt-20">
                        <a href="login.html">
                            {/* <Image src={user} alt="icon" /> */}
                        </a>
                        <a href="cart.html">
                            {/* <Image src={cart} alt="icon" /> */}
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>



        </>
    )
}

export default Header
