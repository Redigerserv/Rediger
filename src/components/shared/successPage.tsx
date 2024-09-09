import Image from 'next/image';
import React from 'react';

import bgImage from "../../assets/images/portalRediger/successpage-BG.jpeg"
import { Button } from 'react-bootstrap';

const SuccessPage: React.FC = () => {
    return (
        <div className="hero-banner-one  z-1 pt-225 xl-pt-200  position-relative">
            <div className='' style={{ textAlign: "center" }}>
                <div className='succesDiv'>
                    <h1 className='hero-heading text-center wow fadeInUp' style={{ fontSize: "" }}>Thank You!</h1>
                    <p className='fs-24 color-dark text-center wow fadeInUp' style={{ fontSize: "" }}>You have just done the hardest.</p>
                    <div className='mt-4 mb-4'>
                        <Button variant='outline-primary' className='btn-one' size='lg'>Go back home</Button>
                    </div>
                    <p><b>*your login information will be send to your email.</b></p>
                </div>
                <Image src={bgImage} className='' alt={''} style={{ width: "auto", height: "auto", margin: "auto" }} />
            </div>
        </div>
    );
};

export default SuccessPage;