import './card.css'
import iconArrow from './../../icons/arrow.svg'

const Card = (props) => {
    return ( 
        <div className="card">
            <img className='card__img' src={props.img} alt="" />
            <div className="card__body">
                <div className="card__text">
                    <div className="card__title">
                        {props.title}
                    </div>
                    <div className="card__muted">
                        Explore Now!
                    </div>
                </div>
                <div className="card__icon">
                    <img src={iconArrow} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Card;