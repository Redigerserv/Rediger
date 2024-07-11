import React, { MouseEvent } from 'react'
import Image from 'next/image'
import Head from 'next/head'

import bg from '../../assets/img/page-title/page-title-bg.jpg'
import profile from '../../assets/img/icon/profile.svg'
import msge from '../../assets/img/icon/message-bold.svg'
import call from '../../assets/img/icon/call-bold.svg'
import lock from '../../assets/img/icon/lock-bold.svg'
import google from '../../assets/img/icon/google.svg'

const Login = () => {

    return (
        <>
           <main>
            <div className="breadcrumb-section pt-190 pb-150 pt-lg-120 pb-lg-120 pt-md-80 pb-md-80 pt-xs-50 pb-xs-50"
                 style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                  }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page-title-content">
                                <h2 className="title">Signup</h2>
                                <div className="breadcrumb-menu">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">Pages</a></li>
                                        <li><a href="about-us.html">Signup</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup-section pt-150 pb-150 pt-lg-120 pb-lg-90 pt-md-80 pb-md-50 pt-xs-50 pb-xs-20">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="signup-form">
                                <div className="section-title text-center mb-50">
                                    <div className="title">
                                        <h2>Create Your Account</h2>
                                    </div>
                                </div>
                                <form action="">
                                    <div className="input-wrap mb-20">
                                        <span><Image src={profile} alt="icon"/></span>
                                        <input type="text" placeholder="Username"/>
                                    </div>
                                    <div className="input-wrap mail mb-20">
                                        <span><Image src={msge} alt="icon"/></span>
                                        <input type="email" placeholder="Email Name"/>
                                    </div>
                                    <div className="input-wrap phone mb-20">
                                        <span><Image src={call} alt="icon"/></span>
                                        <input type="text" placeholder="Phone Number"/>
                                    </div>
                                    <div className="input-wrap pass mb-20">
                                        <span><Image src={lock} alt="icon"/></span>
                                        <input type="text" placeholder="Password"/>
                                    </div>
                                    <div className="input-wrap pass mb-20">
                                        <span><Image src={lock} alt="icon"/></span>
                                        <input type="text" placeholder="Confirm Password"/>
                                    </div>
                                    <div className="input-check mb-20">
                                        <input type="checkbox"/>
                                        <span>I have read and agree to the Terms & Conditions</span>
                                    </div>
                                    <div className="col-12">
                                        <div className="submit-btn">
                                            <button className="signup-btn btn-1" type="submit">Submit Now</button>
                                            <span className="divider">OR</span>
                                            <button className="signup-btn"><Image className="mr-20"
                                                    src={google} alt="icon"/> Sign Up With
                                                Google</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Login
