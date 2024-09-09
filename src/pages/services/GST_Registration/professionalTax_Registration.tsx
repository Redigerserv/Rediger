import Head from "next/head";

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
                <div className="blog-details border-top mt-160 xl-mt-140 pt-100 xl-pt-80 mb-150 xl-mb-100">
                    <div className="container">
                        <div className="row gx-xl-5">
                            <div className="col-lg-8">
                                <div className="blog-post-meta mb-60 lg-mb-40">
                                    {/* <div className="post-info"><a href="blog_02.html">Rashed Kabir .</a> 6 min</div> */}
                                    <h3 className="blog-title">Professioanl Tax Registration</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-xl-5">
                            <div className="col-lg-12">
                                <article className="blog-post-meta">
                                    <figure className="post-img position-relative m0  figurebgImg">
                                        {/* <div className="fw-500 date d-inline-block">17 SEP</div> */}
                                    </figure>
                                    <div className="post-data pt-50 md-pt-30">
                                        <p>Company incorporation is the process of setting up a business entity in accordance with the laws of the country. It involves registering a company name, obtaining necessary licenses and permits, and filing documents with the relevant government agencies. Once a company is incorporated, it must comply with all post-incorporation compliances and statutory registrations to remain in good standing. One such compliance is Professional Tax Registration (PT). This registration is typically required for companies that employ people in India, as it requires them to deduct professional tax from their employees' salaries and deposit it with the government authorities. By registering for PT, companies can ensure that they are compliant with all applicable laws and regulations.</p>
                                        <div className="quote-wrapper">
                                            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto"><img src="images/lazy.svg" data-src="images/icon/icon_67.svg" alt="" className="lazy-img" /></div>
                                            <div className="row">
                                                <div className="col-xxl-10 col-xl-11 col-lg-12 col-md-9 m-auto">
                                                    <h4>Quick solutions coupled with extraordinary nice performance—a recommendation that's great.</h4>
                                                </div>
                                            </div>
                                            <h6>James Bond. <span>USA</span></h6>
                                        </div>
                                        <p>Professional tax is imposed by the State government on all salaried individuals and working professionals, including to Directors and on company too. It is levied based on the individual's employment, trade or profession. The tax rates vary from states, however, the maximum amount that can be levied is Rs.2,500 per annum to each Director and company. Some states don't charge professional tax.<br />
                                            For employees Professional Tax amount depends on the salary structure,
                                            it is mandatory to hold and pay to the state government.</p>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <div className="div">
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
                                    <input type="text" placeholder="Rashed Kabir" />
                                </div>
                                <div className="input-wrapper mb-40">
                                    <label>Email*</label>
                                    <input type="email" placeholder="rshdkabir@gmail.com" />
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