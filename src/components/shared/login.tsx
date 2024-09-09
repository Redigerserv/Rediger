import Image from "next/image";
import { Modal } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import googleImg from "../../assets/images/icon/google.png"
import facebookImg from "../../assets/images/icon/facebook.png"
import Link from "next/link";

const Login = ({ showModal, setShowModal }: any) => {
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <div className="container">
                    <div className="user-data-form modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                        <div className="form-wrapper m-auto">

                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <Nav variant="pills" className="">
                                            <Nav.Item className="text-center">
                                                <Nav.Link eventKey="first">Login</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="text-center">
                                                <Nav.Link eventKey="second">Signup</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content className="mt-30">
                                            <Tab.Pane eventKey="first">
                                                <div className="text-center mb-20">
                                                    <h2>Welcome Back!</h2>
                                                    {/* <p className="fs-20 color-dark">Still don't have an account? <Link href="/">Sign up</Link></p> */}
                                                </div>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group-meta position-relative mb-25">
                                                                <label>Email*</label>
                                                                <input type="email" placeholder="Youremail@gmail.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta position-relative mb-20">
                                                                <label>Password*</label>
                                                                <input type="password" placeholder="Enter Password" className="pass_log_id" />
                                                                <span className="placeholder_icon">
                                                                    {/* <span className="passVicon"><img src="images/icon/icon_68.svg" alt="" /></span> */}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            {/* <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <input type="checkbox" id="remember" />
                                                        <label htmlFor="remember">Keep me logged in</label>
                                                    </div>
                                                    <a href="#">Forget Password?</a>
                                                </div> */}
                                                        </div>
                                                        <div className="col-12">
                                                            <button className="btn-two w-100 text-uppercase d-block mt-20">Login</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="text-center mb-20">
                                                    <h2>Register</h2>
                                                    {/* <p className="fs-20 color-dark">Already have an account? <a href="#">Login</a></p> */}
                                                </div>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="input-group-meta position-relative mb-25">
                                                                <label>Name*</label>
                                                                <input type="text" placeholder="Varun Punzuri" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta position-relative mb-25">
                                                                <label>Email*</label>
                                                                <input type="email" placeholder="varunpunzuri@gmail.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="input-group-meta position-relative mb-20">
                                                                <label>Password*</label>
                                                                <input type="password" placeholder="Enter Password" className="pass_log_id" />
                                                                {/* <span className="placeholder_icon"><span className="passVicon"><img src="images/icon/icon_68.svg" alt="" /></span></span> */}
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <input type="checkbox" id="remember2" />
                                                                    <label>By hitting the "Register" button, you agree to the <a href="#">Terms conditions</a> & <a href="#">Privacy Policy</a></label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-12">
                                                            <button className="btn-two w-100 text-uppercase d-block mt-20">Sign Up</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>

                            {/* <div className="d-flex align-items-center mt-30 mb-10">
                                <div className="line"></div>
                                <span className="pe-3 ps-3 fs-6">OR</span>
                                <div className="line"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                        <Image src={googleImg} alt="" />
                                        <span className="ps-3">Signup with Google</span>
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
                                        <Image src={facebookImg} alt="" />
                                        <span className="ps-3">Signup with Facebook</span>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default Login;