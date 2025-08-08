import arrowIcon from '@assets/LogosAndImages/arrow.png';
import '@styles/FixedElements/PinkBox.css';

function ArrowButton( {animKind}) {

    return(
        <>
            <img src={arrowIcon} onClick={handleClick} className={`arrow ${animKind}`}></img>
        </>
    )
}

export default ArrowButton;