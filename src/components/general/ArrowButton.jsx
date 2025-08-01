import arrow from '@assets/LogosAndImages/arrow.png';
import '@styles/FixedElements/PinkBox.css';
import { useState, useEffect } from 'react';

function ArrowButton() {
    //Hay que mandar rotation como prop state al padre comun, que es PinkBox, para que funcione ahí.
    const [clicked, setClicked] = useState(false);
    const [arrowPosition, setArrowPosition] = useState(false);    
    const [rotation, setRotation]=useState("arrow");    

    const handleClick = () => {
        setClicked(true);        
    };
    
    useEffect(() => {
        if (!clicked) return;

        function arrowAnim() {        
            if (arrowPosition == false) {                
                setArrowPosition(true);
                setRotation("arrow ccw-turning");
                setClicked(false);
            } else if (arrowPosition == true) {
                setArrowPosition(false);
                setRotation("arrow cw-turning");
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