import { Link } from "react-router-dom";
import '@styles/Error.css';

function BackToHome() {
    return(
        <div>
            <Link to="/"><h3 className="errorBack">Retourner sur la page d’accueil</h3></Link>
        </div>
    )
}

export default BackToHome;