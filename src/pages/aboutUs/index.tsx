import { FaWpforms } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const AboutUs = () => {
    return(
        <>
        <div className="aboutus"><div className="first center flex"><div className="heading"><h2>Register Your Business Quickly <br/> and <br/> Fulfill Your Business Requirements</h2></div></div><div className="flex second"><div><h1>About Us</h1><p>Rediger is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently. We assist entrepreneurs and start-ups in providing consultations for their businesses. We have a tailor-made solution in the best interests of your business, and we provide a guaranteed and satisfactory service.</p><p>We have a group of independent professionals and no member firm has any authority to obligate or bind Rediger or any other member firm vis-à-vis third parties, nor does Rediger have any such authority to obligate or bind any member firm. The professionals on our platform also do not advertise nor solicit business from potential clients. One thing that is unique about Rediger is that clients themselves post their queries or come with their cases on our platform looking for highly qualified experts. Ultimately, the client finds who he or she wants to engage as their experts.</p></div><div><iframe src="https://www.youtube.com/embed/UdG1AA2gWQs?autoplay=1" title="YouTube Video" ></iframe></div></div><div className="fourth flex"><div>
            <img alt="img" loading="lazy" width="7185" height="4795" decoding="async" data-nimg="1" className="img" src="https://st2.depositphotos.com/2931363/9781/i/950/depositphotos_97810170-stock-photo-people-looking-at-laptop.jpg"/></div><div><h1>Why Rediger?</h1><ol><h3><li>Instant Response.</li></h3><h3><li>Personalized Solutions.</li></h3><h3><li>Trust and Reliability.</li></h3><h3><li>Affordable.</li></h3><h3><li>Simplified Process.</li></h3><h3><li>Compliance Ensured.</li></h3></ol></div></div><div className="fifth Grid"><div className="child flex"><div>
            <FaWpforms color="#fff" size={45}/>
                </div><div><h3>Fill Up the Form</h3></div></div><div className="child flex"><div><MdPayment color="#fff" size={45}/></div><div><h3>Make Online Payment</h3></div></div><div className="child flex"><div>
                <MdOutlinePhoneCallback color="#fff" size={45}/>
            </div><div><h3>Our Executive Will Contact You</h3></div></div><div className="child flex"><div>
            <IoIosMail color="#fff" size={45}/>

                </div><div><h3>Get Confirmation</h3></div></div></div></div>
        </>
    )
}
export default AboutUs;