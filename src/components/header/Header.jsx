import logo from './../../icons/logo.svg'
import './header.css'


function Header () {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="/" className="logo">
                            <img src={logo} alt="" />
                            <span>Fashion</span>
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="/" className="item__link">CATALOGUE</a>
                            </li>
                            <li className="nav__item">
                                <a href="/" className="item__link">FASHION</a>
                            </li>
                            <li className="nav__item">
                                <a href="/" className="item__link">FAVOURITE</a>
                            </li>
                            <li className="nav__item">
                                <a href="/" className="item__link">LIFESTYLE</a>
                            </li>
                            <li className="nav__item">
                                <a href="/" className="item__link header__nav-btn">SIGN UP</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header