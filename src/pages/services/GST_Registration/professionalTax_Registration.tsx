import Head from "next/head";
import Link from "next/link";

const ProfessioanlTaxRegistration = () => {
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
                        <h3 className="mb-35 xl-mb-20 pt-15">Professioanl Tax Registration</h3>
                        <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                            <li><Link href={'/'}>Home</Link></li>
                            <li>/</li>
                            <li>Professioanl Tax Registration</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-details border-top pt-100 xl-pt-80 mb-150 xl-mb-100">
                    <div className="container">
                        <div className="row gx-xl-5">
                            <div className="col-lg-8">
                                <article className="blog-post-meta">
                                    <figure className="post-img position-relative m0  professionalTaxbgImg">
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
                                            <li><Link href={"/services/GST_Registration/GST_registration"}>GST Registration</Link></li>
                                            <li><Link href={"/services/GST_Registration/LUT_filing_Under_GST"}>LUT Filling Under GST</Link></li>
                                            <li><Link href={"/services/GST_Registration/TDS-ReturnFiling"}>TDS Return Filing</Link></li>
                                            {/* <li><Link href={"/services/GST_Registration/professionalTax_Registration"}>Professional Tax Registration</Link></li> */}
                                            <li><Link href={"/services/GST_Registration/providentFund"}>Provident Fund</Link></li>
                                            <li><Link href={"/services/GST_Registration/ESIS"}>ESIS</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="div">
                        <p>Company incorporation is the process of setting up a business entity in accordance with the laws of the country. It involves registering a company name, obtaining necessary licenses and permits, and filing documents with the relevant government agencies. Once a company is incorporated, it must comply with all post-incorporation compliances and statutory registrations to remain in good standing. One such compliance is Professional Tax Registration (PT). This registration is typically required for companies that employ people in India, as it requires them to deduct professional tax from their employees' salaries and deposit it with the government authorities. By registering for PT, companies can ensure that they are compliant with all applicable laws and regulations.</p>
                                        <p>Professional tax is imposed by the State government on all salaried individuals and working professionals, including to Directors and on company too. It is levied based on the individual's employment, trade or profession. The tax rates vary from states, however, the maximum amount that can be levied is Rs.2,500 per annum to each Director and company. Some states don't charge professional tax.<br />
                                            For employees Professional Tax amount depends on the salary structure,
                                            it is mandatory to hold and pay to the state government.</p>
                                
                            <p><b>When it is Mandatory ?</b></p>
                            <p>
                                If a companies turnover exceeds Rs.10 Lakhs during the period, with
                                immediate effect such entity needs to get PT registration.
                            </p>
                            <p>
                                <b>Note : In case you are a business owner and have employees in
                                    different states, then you have to get a professional tax registration
                                    for those states.
                                </b>
                            </p>
                            <p><b>Documents required for Professional Tax Registration</b></p>
                            <p>
                                Here is a list of documents required to register for professional tax:
                            </p>
                            <ul className="style-none list-item">
                                <li>
                                    Certificate of Incorporation, including MOA &amp; AOA / LLP Agreement.
                                </li>
                                <li>
                                    PAN card of Company/LLP which is attested by the company Director
                                </li>
                                <li>
                                    Bank account of the company including bank statement and cancelled
                                    cheque
                                </li>
                                <li>Place of business</li>
                                <li>No objection certificate from the owner of the premises.</li>
                                <li>Address and identity proof from all the directors</li>
                                <li>Passport size photographs soft copies</li>
                                <li>The statement of consent by the partners.</li>
                                <li>Shop and establishment certificate</li>
                                <li>Salary register and attendance register</li>
                            </ul>
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
export default ProfessioanlTaxRegistration;