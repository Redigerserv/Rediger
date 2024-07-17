import React, { useEffect, useState, useRef} from 'react'
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


// import redigerlogo from '../../assets/img/logo/LOGO HD Sub white.png'
import redigerlogo from '../../assets/img/Rediger/logo.png'

import logo from "../../assets/img/logo/logo.svg"
import cart from "../../assets/img/icon/cart.svg"
import user from "../../assets/img/icon/user.svg"
import Image from 'next/image';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);

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

        // <header>
        //     <nav className="toolbar">
        //         <div className="px-4 py-2">
        //             <div className="d-flex justify-content-between align-items-center">

        //                 <div className="d-flex align-items-center">
        //                     <IoIosMenu className='toolbar-menu' onClick={toggleShow} />
        //                     <Offcanvas show={show} onHide={handleClose} scroll={true} backdropClassName='true'>
        //                         <Offcanvas.Header closeButton>
        //                             <Offcanvas.Title>Rediger Portal</Offcanvas.Title>
        //                         </Offcanvas.Header>
        //                         <Offcanvas.Body>
        //                             <ul className="list-group list-group-flush" style={{ fontSize: '13px' }}>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <IoHomeOutline strokeWidth={0} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">Home</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <LuAlignHorizontalJustifyStart strokeWidth={1} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">START A BUSINESS</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <MdOutlineAppRegistration strokeWidth={0} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">
        //                                             LICENCE/REGISTRATION
        //                                         </span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <RxDashboard strokeWidth={0} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">
        //                                             GST REGISTRATION
        //                                         </span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <SiTaxbuzz strokeWidth={0} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">
        //                                             LEGAL DRAFT
        //                                         </span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <LuAlignHorizontalJustifyStart strokeWidth={1} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">CAREERS</span>
        //                                     </Link>
        //                                 </li>
        //                                 <li className="list-group-item p-0">
        //                                     <Link
        //                                         href={'/'}
        //                                         className="text-black text-decoration-none d-flex justify-content-start align-items-center px-1 py-2"
        //                                         onClick={handleClose}
        //                                     >
        //                                         <MdWorkOutline strokeWidth={0} size={25} className='fs-4 me-2' />
        //                                         <span className="text-uppercase">ADMIN</span>
        //                                     </Link>
        //                                 </li>
        //                             </ul>
        //                         </Offcanvas.Body>
        //                     </Offcanvas>

        //                     <Link
        //                         href={'/'}
        //                         className="toolbar-brand text-white text-decoration-none"
        //                     >
        //                         REDIGER
        //                     </Link>
        //                 </div>

        //                 <ul className="d-flex align-items-center list-unstyled toolbar-filter">
        //                     <li>
        //                         <Link
        //                             href="/aboutUs"
        //                             className="text-white text-decoration-none"
        //                         >About us</Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href="/login"
        //                             className="text-white text-decoration-none"
        //                         >Login</Link>
        //                     </li>
        //                     <li>
        //                         <Link href={'/'} className="text-white ">
        //                             <div className="position-relative customMsgBadge">
        //                                 <IoNotifications size={22} />
        //                                 <span className="position-absolute start-100 translate-middle bg-danger rounded-circle countBadge">
        //                                     0
        //                                 </span>
        //                             </div>
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href="/"
        //                             className="text-white text-decoration-none"
        //                         ><IoSettingsOutline size={22} /></Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>

        <>
            <header className="header-area header-style-3">
                {/* <div className="main-header-area header-bottom pt-lg-15 pb-lg-15 pt-md-15 pb-md-15 pt-xs-15 pb-xs-15 "> */}
                <div className={`main-header-area header-bottom pt-lg-15 pb-lg-15 pt-md-15 pb-md-15 pt-xs-15 pb-xs-15 ${isSticky ? 'sticky-header' : ''}`} ref={headerRef}>
                    <div className="px-5">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-7 col-md-7 col-6">
                                <div className="">
                                    <div className="logo">
                                        <Link href={"/"}>
                                            <Image src={redigerlogo} alt="logo"  style={{width:"160px" , height:"50px"}}/>
                                        </Link>
                                    </div>
                                    {/* <div className="search-form d-none d-md-inline-block">
                                        <form action="#">
                                            <div className="input-wrap">
                                                <input type="email" placeholder="Search" />
                                                <button type="submit"><i
                                                    className="fa-regular fa-magnifying-glass"></i></button>
                                            </div>
                                        </form>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-5 col-md-5 col-6 d-flex justify-content-end align-items-center p-0">
                                <div className="main-menu d-none d-xl-block">
                                    <ul>
                                        <li className="has-dropdown">
                                            <a>Start Business</a>
                                            <ul className="sub-menu">
                                                <li><Link href={"/"}>Private limited Company</Link></li>
                                                <li><Link href={"/"}>One Person Company</Link></li>
                                                <li><Link href={"/"}>Limited Liability Comapny</Link></li>
                                                <li><Link href={"/"}>Partnership Firm</Link></li>
                                                <li><Link href={"/"}>Sole Proprietorship</Link></li>
                                                <li><Link href={"/"}>DSC</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <a>Licence/Registration</a>
                                            <ul className="sub-menu">
                                                <li><Link href={"/"}>Fssai Registration</Link></li>
                                                <li><Link href={"/"}>Msme Registration</Link></li>
                                                <li><Link href={"/"}>Trade Registration</Link></li>
                                                <li><Link href={"/"}>Shop Act</Link></li>
                                                <li><Link href={"/"}>Trade Licence</Link></li>
                                                <li><Link href={"/"}>Import and Export</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <a>Tax</a>
                                            <ul className="sub-menu">
                                                <li><Link href={"/"}>GST Registration</Link></li>
                                                <li><Link href={"/"}>TDS Return Filing</Link></li>
                                                <li><Link href={"/"}>Professional Tax Registration</Link></li>
                                                <li><Link href={"/"}>Provident Fund</Link></li>
                                                <li><Link href={"/"}>ESIS</Link></li>
                                                <li><Link href={"/"}>LUT Filing Under GST</Link></li>
                                            </ul>
                                        </li>
                                        {/* <li><Link href={"/aboutUs"}>Careers</Link> </li> */}
                                        <li className="has-dropdown">
                                            <a>Legal draft</a>
                                            <ul className="sub-menu">
                                                <li><Link href={"/"}>Non-Disclosure Agreement</Link></li>
                                                <li><Link href={"/"}>Partnership Deed</Link></li>
                                                <li><Link href={"/"}>Memorandum of Understanding MOU</Link></li>
                                            </ul>
                                        </li>
                                        {/* <li><Link href={"/aboutUs"}>About Us</Link> </li> */}
                                        {/* <li><a href="contact.html">Contact</a></li> */}

                                        <li className="has-dropdown">
                                            <a>More</a>
                                            <ul className="sub-menu">
                                                <li><Link href={"/"}>Careers </Link></li>
                                                <li><Link href={"/aboutUs"}>About Us</Link></li>
                                                <li><Link href={"/login"}>Login</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="header-dropdown d-none d-md-block" style={{ marginLeft: "30px" }}>
                                    <form action="#">
                                        <div className="select-wrap nice-select-active">
                                            <select className='form-select'>
                                                <option value="Category">Category</option>
                                                <option value="Category">Web Development</option>
                                                <option value="Category">Software</option>
                                                <option value="Category">UI/UX Design</option>
                                                <option value="Category">Data Science</option>
                                                <option value="Category">Artificial Int</option>
                                                <option value="Category">Miscellaneous</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>

                                <div className="open-menu-bar d-xl-none d-inline-block" onClick={toggleShow}>
                                    <div className="bar-1"></div>
                                    <div className="bar-2"></div>
                                    <div className="bar-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain was born and will give you a complete account of the system and
                                    expound the actual teachings of the great explore
                                </p>
                            </div>
                        </div>
                        <div className="offset-widget mb-30 pr-10">
                            <div className="info-widget info-widget2">
                                <h4 className="offset-title mb-20">Contact Info</h4>
                                <p>
                                    <i className="fal fa-address-book"></i>
                                    23/A, Miranda City Likaoli Prikano, Dope</p>
                                <p>
                                    <i className="fal fa-phone"></i>
                                    +0989 7876 9865 9
                                </p>
                                <p>
                                    <i className="fal fa-envelope-open"></i>
                                    info@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="header-buttons d-flex justify-content-center mt-20">
                        <a href="login.html">
                            <Image src={user} alt="icon" />
                        </a>
                        <a href="cart.html">
                            <Image src={cart} alt="icon" />
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Header
