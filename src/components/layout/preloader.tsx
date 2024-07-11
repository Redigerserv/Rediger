import { useEffect, useState } from 'react';

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
                    <div className="icon"><img src="assets/img/logo/loader.png" alt="" className="m-auto d-block" width="60" />
                    </div>
                    <div className="txt-loading">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
