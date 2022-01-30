import './footer.css'
import logo from "../../assets/logo_b&w.svg"

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;