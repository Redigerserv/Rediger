import Head from "next/head";
import Link from "next/link";

const MsmeRegistration = () => {
    return (
        <>
            <Head>
                <title>Rediger App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon-new.jpeg" />
            </Head>
            <div className="DSC">
                <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-80 xl-pb-80 md-pb-60 position-relative">
                    <div className="container">
                        <h3 className="mb-35 xl-mb-20 pt-15">Msme Registration</h3>
                        <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                            <li><Link href={'/'}>Home</Link></li>
                            <li>/</li>
                            <li>Msme Registration</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-details border-top pt-100 xl-pt-80 mb-150 xl-mb-100">
                    <div className="container">
                        <div className="row gx-xl-5">
                            <div className="col-lg-8">
                                <article className="blog-post-meta">
                                    <figure className="post-img position-relative m0  msmebgImg">
                                        {/* <div className="fw-500 date d-inline-block">17 SEP</div> */}
                                    </figure>
                                    <div className="post-data pt-50 md-pt-30">
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog-sidebar dot-bg ms-xxl-4 md-mt-60">
                                    <div className="categories bg-white bg-wrapper mb-30">
                                        <h5 className="mb-20">Other Services</h5>
                                        <ul className="style-none">
                                            <li><Link href={"/services/license-registration/fssaiRegistration"}>Fssai Registration</Link></li>
                                            {/* <li><Link href={"/services/license-registration/msmeRegistration"}>Msme Registration</Link></li> */}
                                            <li><Link href={"/services/license-registration/trademarkRegistration"}>Trademark Registration</Link></li>
                                            <li><Link href={"/services/license-registration/shopAct"}>Shop Act</Link></li>
                                            <li><Link href={"/services/license-registration/tradeLicence"}>Trade Licence</Link></li>
                                            <li><Link href={"/services/license-registration/ImportandExport"}>Import and Export</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="div">
                            <p>MSMEs (Micro, Small and Medium Enterprises) are an important part of the Indian economy. They provide a platform for entrepreneurs to start their own businesses and contribute to the country’s GDP. The process of company formation for MSMEs can be quite daunting, but with the right guidance, it can be made simpler. In this article, we will discuss the various steps involved in company formation for MSMEs and how they can benefit from it. We will also look at some of the advantages that come with setting up an MSME and why it is important to do so. Finally, we will explore some of the challenges that come with setting up an MSME and how they can be overcome.</p>
                            <p>The MSME sector is one of the most important sectors in any economy. It provides employment to a large number of people, contributes significantly to GDP and helps in the overall growth of the country. Company formation is a critical step for anyone wanting to start an MSME business. It requires careful planning and understanding of the legal process involved in setting up a company. With the help of AI, this process can be made simpler, faster and more efficient. AI tools can provide guidance on company formation procedures, helping entrepreneurs make informed decisions about their business structure and operations.</p>

                            <p>Classification of an enterprise is done in terms of investment.</p>
                            <p>In case of investment made in plant and machinery</p>

                            <table className="table table-bordered table-responsive">
                                <tbody><tr>
                                    <td><p>Classification</p></td>
                                    <td><p>Micro</p></td>
                                    <td><p>Small</p></td>
                                    <td><p>Medium</p></td>
                                </tr>
                                    <tr>
                                        <td><p>Manufacturing Enterprises and Enterprises rendering Services</p></td>
                                        <td><p>Investment in Plant and Machinery or Equipment:<br />
                                            Not more than Rs.1 crore and Annual Turnover ; not more than Rs. 5    crore</p></td>
                                        <td><p>Investment in Plant and Machinery or Equipment:<br />
                                            Not more than Rs.10 crore and Annual Turnover ; not more than Rs. 50    crore</p></td>
                                        <td><p>Investment in Plant and Machinery or Equipment:</p>
                                            <p>Not more than Rs.50 crore and Annual Turnover ; not more than Rs. 250    crore</p></td>
                                    </tr>
                                </tbody></table>
                            <p><b>Advantages</b></p>
                            <ul className="style-none list-item">
                                <li>
                                    Finance from banks is easy to obtain due to the Government support. Interest rates maybe less compare with regular lending rates.
                                </li>
                                <li>
                                    Protection against delayed payment from buyers with compound interest
                                </li>
                                <li>
                                    collateral-free loans of up to 50 lakhs for individual MSMEs through Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)
                                </li>
                                <li>
                                    ISO Certification Charges are Reimbursed
                                </li>
                                <li>
                                    Concession on electricity bills
                                </li>

                            </ul>
                            <p><b>List of documents required for MSME Registration</b></p>
                            <ul className="style-none list-item">
                                <li>
                                    Address proof of business
                                </li>
                                <li>
                                    Copies of purchase bill and sale bill
                                </li>
                                <li>
                                    Partnership Deed/ MOA and AOA.
                                </li>
                                <li>
                                    Bills of machinery purchased.
                                </li>
                                <li>
                                    Copy of licenses
                                </li>
                                <li>
                                    Caste and Sub caste
                                </li>
                                <li>
                                    No.of employees deployed
                                </li>

                            </ul>
                            <p>
                                <b>Note: For firms that are listed in Schedule -III of the Industrial Licensing Exemption Notification, no Industrial license is needed. Every other enterprise must obtain it for the PRC (Provisional Registration Certificate) application.</b>
                            </p>
                            <li>
                                All statutory and administrative clearances such as No Objection Certificate  from pollution board.
                            </li>



                        </div>
                        <div className="blog-comment-form mt-50">
                            <h3 className="blog-inner-title">Leave A Comment</h3>
                            <p><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="text-decoration-underline fw-500">Sign in</a> Sign-in to post your comment or signup if you don’t have any account.</p>
                            <form action="#" className="mt-30">
                                <div className="input-wrapper mb-30">
                                    <label>Name*</label>
                                    <input type="text" placeholder="User Name" />
                                </div>
                                <div className="input-wrapper mb-40">
                                    <label>Email*</label>
                                    <input type="email" placeholder="username@gmail.com" />
                                </div>
                                <div className="input-wrapper mb-30">
                                    <textarea placeholder="Your Comment"></textarea>
                                </div>
                                <button className="btn-five rounded-0">Post Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MsmeRegistration;