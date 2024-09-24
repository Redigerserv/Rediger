import Head from "next/head";
import Link from "next/link";

const FssaiRegistration = () => {
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
                        <h3 className="mb-35 xl-mb-20 pt-15">Fssai Registration</h3>
                        <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                            <li><Link href={'/'}>Home</Link></li>
                            <li>/</li>
                            <li>Fssai Registration</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-details border-top pt-100 xl-pt-80 mb-150 xl-mb-100">
                    <div className="container">
                        <div className="row gx-xl-5">
                            <div className="col-lg-8">
                                <article className="blog-post-meta">
                                    <figure className="post-img position-relative m0  fassaibgImg">
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
                                            {/* <li><Link href={"/services/license-registration/fssaiRegistration"}>Fssai Registration</Link></li> */}
                                            <li><Link href={"/services/license-registration/msmeRegistration"}>Msme Registration</Link></li>
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
                        <p>FSSAI stands for the Food Safety and Standards Authority of India, which is the primary regulatory body responsible for ensuring the safety and quality of food products in India. FSSAI registration is mandatory for all food business operators (FBOs) in India, including manufacturers, processors, distributors, retailers, and importers.</p>
                            <p>Here are the steps involved in obtaining FSSAI registration in India:</p>
                            <p>Determine the Type of FSSAI Registration: FSSAI offers three types of registrations, depending on the size and nature of the food business:</p>
                            <ul className="style-none list-item">
                                <li>Basic FSSAI Registration: This is suitable for small businesses with an annual turnover of up to Rs. 12 lakh. It is also known as FSSAI License Type A.</li>
                                <li>State FSSAI Registration: This is applicable to medium-sized businesses with an annual turnover between Rs. 12 lakh and Rs. 20 crore. It is also known as FSSAI License Type B.</li>
                                <li>Central FSSAI Registration: This is required for large businesses with an annual turnover exceeding Rs. 20 crore. It is also known as FSSAI License Type C.</li>
                            </ul>
                            <p>Prepare the Required Documents: Gather the necessary documents for FSSAI registration, which typically include:</p>
                            <ul className="style-none list-item">
                                <li>Form-B: This is the application form for FSSAI registration.</li>
                                <li>Identity proof and address proof of the proprietor or partners or directors, depending on the type of business entity.</li>
                                <li>Proof of possession of premises (e.g., rental agreement or property documents).</li>
                                <li>List of food products to be handled or manufactured.</li>
                                <li>Partnership deed or certificate of incorporation, depending on the business entity.</li>
                                <li>Affidavit or declaration stating the compliance with the Food Safety and Standards Act.</li>
                            </ul>
                            <p><b>Submit the Application:</b> Fill out the FSSAI registration application form (Form-B) with accurate details and attach the required documents. You can submit the application online through the FSSAI website or at the nearest Food and Drug Administration (FDA) office.</p>
                            <p><b>Pay the Fee:</b> Pay the registration fee as applicable for the chosen license category. The fee varies depending on the type and scale of the food business.</p>
                            <p><b>Verification and Inspection:</b> After submitting the application, the FSSAI authorities will verify the provided information and may conduct an inspection of the premises. They may also request additional documents or information during this process.</p>
                            <p><b>Issuance of FSSAI Registration Certificate:</b> If the authorities are satisfied with the application and premises, they will issue the FSSAI registration certificate. This certificate contains a unique 14-digit registration or license number, which must be displayed on food packages and promotional materials.</p>
                            <p>It's important to note that FSSAI registration needs to be renewed periodically, typically once every one to five years, depending on the license category. Failure to obtain or renew the FSSAI registration can result in penalties and legal consequences.</p>
                            <p>For detailed and up-to-date information on FSSAI registration, it's recommended to visit the official FSSAI website or consult with a legal professional or FSSAI consultant familiar with the process.</p>

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
export default FssaiRegistration;