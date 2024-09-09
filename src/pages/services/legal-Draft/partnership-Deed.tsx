import Head from "next/head";

const PartnershipDeed = () => {
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
                                    <h3 className="blog-title">Partnership Deed</h3>
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
                                        <p>The Key points needed to Draft a Partnership Deed.</p>
                                        <ul className="style-none list-item">
                                            <li>Place of Business</li>
                                            <li>Parties to Business</li>
                                            <li>Address of Business</li>
                                            <li>Address of Partners</li>
                                            <li>Main Objects of the company</li>
                                            <li>Profit sharing</li>
                                            <li>Remuneration</li>
                                            <li>Capital Contribution</li>
                                            <li>The Duration of the Firm</li>
                                            <li>Witnesses</li>
                                        </ul>
                                        <p><b>Note: Reach our Legal team to help you on Drafting.</b></p>
                                    </div>
                                </article>
                            </div>
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
export default PartnershipDeed;