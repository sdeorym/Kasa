import logoFooter from '@assets/LogosAndImages/logo_footer.png';
import '@styles/General.css';

function Footer() {
    return (
        <div className="footerEnvironment">
            <img src={logoFooter} alt='Logo kasa' className="logoBlack"></img>
            <p className="copyright">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer;