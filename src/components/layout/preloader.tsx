import Image from 'next/image';
import { useEffect, useState } from 'react';


import loadingLogo from '../../assets/images/portalRediger/rediger-preloader.jpeg'

const Preloader = () => {

    const [isPreloader, setPreloader] = useState(false);

    useEffect(() => {
        const body = document.body;
        setTimeout(() => {
            setPreloader(true);
            body.style.overflow = 'visible';
        }, 2500);
    }, []);

    return (
        <>
            <div className={`preloader ${isPreloader ? 'd-none' : ''}`} >
                <div id="ctn-preloader" className="ctn-preloader">
                    <div className="icon"><Image src={loadingLogo} alt="" className="m-auto d-block" width="100" />
                    </div>
                    {/* <div className="txt-loading" style={{fontSize:"30px" , fontWeight:'600'}}>
                        <span data-text-preloader="R" className="letters-loading">
                            R
                        </span>
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                        <span data-text-preloader="D" className="letters-loading">
                            D
                        </span>
                        <span data-text-preloader="I" className="letters-loading">
                            I
                        </span>
                        <span data-text-preloader="G" className="letters-loading">
                            G
                        </span>
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                        <span data-text-preloader="R" className="letters-loading">
                            R
                        </span>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default Preloader;
