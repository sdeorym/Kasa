import '@styles/FixedElements/PinkBox.css';
import arrowIcon from '@assets/LogosAndImages/arrow.png';
import CanvasAccordion from '@components/general/CanvasAccordion.jsx';
import { useState, useEffect } from 'react';

function PinkBox({title, description}) {
    const [clicked, setClicked] = useState(false);
    const [animPosition, setAnimPosition] = useState(false);
    const [animKind, setAnimKind] = useState("hideAnim");
    const [timeOut, setTimeOut] = useState();
    const handleClick = () => {
        setClicked(true);
    };        
    useEffect(() => {
        if (!clicked) return;
        function arrowAnim() {        
            if (animPosition == false) {
                setAnimPosition(true);
                setAnimKind("displayAnim");
            } else if (animPosition == true) {
                setAnimPosition(false);
                setAnimKind("hideAnim");
            }
            let timer=setTimeOut(setClicked(false));
            console.log(clicked);
        }
        arrowAnim();            
    },[clicked]);
    
    return(
        <>
            <div className="extendable"> 
                <span className="pinky">        
                    <span className="arrowy">
                        <h2>{title}</h2>
                        <span className="arrowMe"><img src={arrowIcon} onClick={handleClick} className={`arrow ${animKind}`}></img></span>
                    </span>            
                </span>
                <span id="monAccordion"><CanvasAccordion title={title} description={description} animKind={animKind} /></span>
            </div>
        </>
        )
}

export default PinkBox;