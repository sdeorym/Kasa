import '@styles/FixedElements/PinkBox.css';
import arrowIcon from '@assets/LogosAndImages/arrow.png';
import CanvasAccordion from '@components/general/CanvasAccordion.jsx';
import { useState, useEffect } from 'react';

function PinkBox({title, description}) {
    const [isOpen, setIsOpen] = useState(false);
    const [animKind, setAnimKind] = useState("hideAnim");

    useEffect(() => {                
        if (!isOpen) {
            setAnimKind("hideAnim");
        }
        if (isOpen) {
            setAnimKind("displayAnim");
        }
    },[isOpen]);

    const handleClick = () => {
        setIsOpen(!isOpen)
    };

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