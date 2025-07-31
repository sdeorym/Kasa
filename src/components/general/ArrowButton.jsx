import arrow from '@assets/LogosAndImages/arrow.png';
import '@styles/FixedElements/PinkBox.css';
import { useState, useEffect } from 'react';

function ArrowButton() {
    const [arrowPosition, setArrowPosition] = useState(false);
    return(
        <>
            <img src={arrow} className="arrow"></img>
        </>
    )
}

export default ArrowButton;