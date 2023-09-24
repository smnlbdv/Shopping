import './brands.css'

import hm from './../../brands/HM.svg'
import az from './../../brands/Amazon.svg'
import lt from './../../brands/Lacoste.svg'
import lv from './../../brands/Levis.svg'
import ob from './../../brands/Obey.svg'
import sh from './../../brands/Shopify.svg'


const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <div className="list__brands">
                    <ul className="brands__list">
                        <li>
                            <a href="/">
                                <img src={hm} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={ob} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={sh} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={lt} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={lv} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={az} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Brands;