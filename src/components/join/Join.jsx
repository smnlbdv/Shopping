import './joinemail.css'


const Join = () => {
    return ( 
        <section className="join__email">
            <div className="container">
                <div className="join__inner">
                    <h2 className="join__title">
                        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                    </h2>
                    <p className="join__desc">
                        Type your email down below and be young wild generation
                    </p>
                    <div className="join__input">
                        <input type="text" placeholder='Add your email here'/>
                        <button className='join__btn'>SEND</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Join;