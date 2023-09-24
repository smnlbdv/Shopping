
import './promo.css'
import promo_image from './../../images/header-img.png'

const Promo = () => {
    return ( 
       <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className="higligth">
                                <span>LET’S</span>
                            </span>
                                EXPLORE
                            <span className="higligth higligth-yellow">
                                <span>UNIQUE</span>
                            </span> 
                                CLOTHES.
                        </div>
                        <div className="promo__desc">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo__btn-wrapper">
                            <a className='promo__btn' href="/">
                                Shop Now
                            </a>
                        </div>
                    </div>
                    <div className="promo__image">
                        <img src={promo_image} alt="Promo" />
                    </div>
                </div>
            </div>
       </section> 
    );
}
 
export default Promo;