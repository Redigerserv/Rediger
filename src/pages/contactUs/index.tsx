import Image from "next/image";

import contactIcon from "../../assets/images/icon/icon_39.svg"
import Head from "next/head";

const ContactUs = () => {
    return(
        <>
              <Head>
                <title>Rediger App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
        <div className="contactus">
        <div className="contact-us border-top mt-160 xl-mt-140 pt-80 lg-pt-60">

			<div className="container">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
                        <div className="title-one text-center wow fadeInUp">
                            <h3>Questions? Feel Free to Reach Out Via Message.</h3>
                        </div>
                    </div>
                </div>

			</div>
            <div className="address-banner wow fadeInUp mt-60 lg-mt-40">    
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
						<div className="block position-relative z-1 mt-25">
							<div className="d-xl-flex align-items-center">
								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><Image src={contactIcon}  alt="" className="lazy-img"/></div>
								<div className="text">
									<p className="fs-22">We’r always happy to help.</p>
									<a href="#" className="tran3s">ask@rediger.com</a>
								</div>
							</div>
						</div>
						<div className="block position-relative skew-line z-1 mt-25">
							<div className="d-xl-flex align-items-center">
								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><Image src={contactIcon}  alt="" className="lazy-img"/></div>
								<div className="text">
									<p className="fs-22">Our hotline number</p>
									<a href="#" className="tran3s">+91-9032225574</a>
									{/* <a href="#" className="tran3s">&nbsp; +991 377 9731</a> */}
								</div>
							</div>
						</div>
						<div className="block position-relative z-1 mt-25">
							<div className="d-xl-flex align-items-center">
								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><Image src={contactIcon}  alt="" className="lazy-img"/></div>
								<div className="text">
									<p className="fs-22">Live chat</p>
									<a href="#" className="tran3s">www.redigerlivechat.com</a>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>

            <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="form-style-one wow fadeInUp">
                            <form action="" id="contact-form" data-toggle="validator">
                                <h3>Send Message</h3>
                                <div className="messages"></div>
                                <div className="row controls">
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-30">
                                            <label htmlFor="">Name*</label>
                                            <input type="text" placeholder="Your Name*" name="name" data-error="Name is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-40">
                                            <label htmlFor="">Email*</label>
                                            <input type="email" placeholder="Email Address*" name="email" data-error="Valid email is required."/>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-35">
                                            <textarea placeholder="Your message*" name="message" data-error="Please,leave us a message."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12"><button className="btn-nine text-uppercase rounded-3 fw-normal w-100">Send Message</button></div>
                                </div>
                            </form>
                        </div> 
                    </div>
                    <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
                        <div className="contact-map-banner w-100">
                            <div className="gmap_canvas h-100 w-100">
                                <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=rediger faserv&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
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
export default ContactUs;