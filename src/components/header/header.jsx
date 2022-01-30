import {Link, useLocation} from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo_colorized.svg'

function Header() {
      const location = useLocation()
      const {pathname} = location
      
    return (
        <header>
            <img src={logo} alt="logo kasa"/>
            <nav>
                <ul>
                    <li ><Link to="/" className={pathname === "/" ? "isActive" : ""}>ACCUEIL</Link></li>
                    <li ><Link to="/about" className={pathname === "/about" ? "isActive" : ""}>A PROPOS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;