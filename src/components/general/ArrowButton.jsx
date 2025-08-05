import arrow from '@assets/LogosAndImages/arrow.png';
import '@styles/FixedElements/PinkBox.css';
import { useState, useEffect } from 'react';

function ArrowButton( {animPosition, setAnimPosition, clicked, setClicked}) {
    //Hay que mandar rotation como prop state al padre comun, que es PinkBox, para que funcione ahí.

    const [rotation, useRotation] = useState("arrow");
    const handleClick = () => {
        setClicked(true);        
    };
    
    useEffect(() => {
        if (!clicked) return;
        function arrowAnim() {        
            if (animPosition == false) {                
                setAnimPosition(true);
                useRotation("arrow ccw-turning");
                setClicked(false);
            } else if (animPosition == true) {
                setAnimPosition(false);
                useRotation("arrow cw-turning");
                setClicked(false);
            }
        }    
        arrowAnim();
    },[clicked]);
    return(
        <>
            <img src={arrow} onClick={handleClick} className={rotation}></img>
        </>
    )
}

export default ArrowButton;