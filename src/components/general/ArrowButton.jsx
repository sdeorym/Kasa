import arrow from '@assets/LogosAndImages/arrow.png';
import '@styles/FixedElements/PinkBox.css';
import { useState, useEffect } from 'react';

function ArrowButton() {
    const [arrowPosition, setArrowPosition] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [ccw, setCcw]=useState(true);
    const [cw, setCw]=useState(false);
    
    const handleClick = () => {
        setClicked(true);        
    };

    useEffect(() => {
        function arrowAnim() {
            if (clicked == true) {
                if (arrowPosition == false) {
                    setCcw(true);
                    setCw(false);
                    setArrowPosition(true);
                    setClicked(false);
                } else {
                    setArrowPosition(false);
                    setClicked(false);
                }
            }
        }
        arrowAnim();
    }, [clicked]);

    return(
        <>
            <img src={arrow} onClick={handleClick} className={`arrow ${!arrowPosition ? "ccw-turning" : "cw-turning"}`}></img>
        </>
    )
}

export default ArrowButton;