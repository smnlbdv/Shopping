import './download.css'
import image from './../../images/vouchers-img.png'
import iconAppStore from './../../icons/app-store.png'
import iconGooglePlay from './../../icons/google-play.png'

const DownloadApp = () => {
    return ( 
        <section className="downloadApp">
            <div className="container">
                <div className="section__inner">
                    <div className="download__desc">
                        <div className="desc__text">
                            <h2 className="desc__title">
                                DOWNLOAD APP & GET THE VOUCHER!
                            </h2>
                            <p className="desc__lower">
                                Get 30% off for first transaction using
                                Rondovision mobile app for now.
                            </p>
                        </div>
                        <div className="desc__icon">
                            <a href="/" className="icon__app">
                                <img src={iconAppStore} alt="" />
                            </a>
                            <a href="/" className="icon__app">
                                <img src={iconGooglePlay} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="download__image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default DownloadApp;