import '@styles/About.css';
import arrow from '@assets/LogosAndImages/arrow.png';

function PinkBox({title}) {
    return(
        <div className="pinky">        
            <span className="arrowy">
                <h2>{title}</h2>
                <img src={arrow} alt='Flèche' className="arrow"></img>
            </span>
        </div>
    )
}

export default PinkBox;