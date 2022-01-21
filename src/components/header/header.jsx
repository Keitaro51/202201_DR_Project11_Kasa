import {Link} from 'react-router-dom'
import '../header/header.css'
import logo from '../../assets/logo_colorized.svg'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo kasa"/>
            <nav>
                <ul>
                    <li /*className={isActive}*/><Link to="/">ACCUEIL</Link></li>
                    <li /*className={isActive}*/><Link to="/about">A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;