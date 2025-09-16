import '@styles/General.css';
import { Link, useLocation } from "react-router-dom";
import logoS from '@assets/LogosAndImages/logo_small.png';
import logoL from '@assets/LogosAndImages/logo_large.png';

function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isAbout = location.pathname === "/about";

    return (
        <div>
            <nav className="navBarEnvironment">
                <img src={logoS} alt='Logo kasa' className="logoS"></img>
                <img src={logoL} alt='Logo kasa' className="logoL"></img>
                <span className="pageIndex">
                    <Link to="/" className={isHome ? "homeLink activePage" : "homeLink navlinks"}>Accueil</Link>
                    <Link to="/about" className={isAbout ? "aboutLink activePage" : "aboutLink navlinks"}>À propos</Link>
                </span>
            </nav>            
        </div>
    )
}

export default Navbar;