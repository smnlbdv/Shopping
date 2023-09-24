import './footer.css'
import fb from './../../socials/fb.svg'
import inst from './../../socials/inst.svg'
import tw from './../../socials/tw.svg'
import lin from './../../socials/in.svg'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer_contact">
                        <h2 className="footer__contact_title">
                            FASHION
                        </h2>
                        <p className="footer__contact_desc">
                            Complete your style with awesome clothes from us.
                        </p>
                        <div className="footer__contact_link">
                            <a href="/">
                                <img src={fb} alt="" />
                            </a>
                            <a href="/">
                                <img src={inst} alt="" />
                            </a>
                            <a href="/">
                                <img src={tw} alt="" />
                            </a>
                            <a href="/">
                                <img src={lin} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="footer__list">
                        <ul className="footer__items">
                            <h3 className="items__header">Company</h3>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Support</li>
                            <li>Careers</li>
                        </ul>
                        <ul className="footer__items">
                            <h3 className="items__header">Quick Link</h3>
                            <li>Share Location</li>
                            <li>Orders Tracking</li>
                            <li>Size Guide</li>
                            <li>FAQs</li>
                        </ul>
                        <ul className="footer__items">
                            <h3 className="items__header">Legal</h3>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;