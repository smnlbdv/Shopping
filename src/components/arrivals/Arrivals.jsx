import './arrivals.css'
import Card from '../card/Card';

import Cat_01 from './../../categories/cat-01.jpg'
import Cat_02 from './../../categories/cat-02.jpg'
import Cat_03 from './../../categories/cat-03.jpg'

const Arrivals = () => {
    return ( 
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="arrivals__title">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirt" img={Cat_01}/>
                    <Card title="Coats & Parkas" img={Cat_02}/>
                    <Card title="Tees & T-Shirt" img={Cat_03}/>
                </div>
            </div>
        </section>
     );
}
 
export default Arrivals;