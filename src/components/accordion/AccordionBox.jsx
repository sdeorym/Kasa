import '@styles/AccordionBox.css';
import arrowIcon from '@assets/LogosAndImages/arrow.png';
import CanvasAccordion from '@components/accordion/CanvasAccordion.jsx';
import { useState, useEffect } from 'react';

function AccordionBox({title, description}) {
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
                <div className="pinky">        
                    <h2 className="pinkTitle">{title}</h2>
                    <button onClick={handleClick}><img src={arrowIcon} className={`arrow ${animKind}`} alt="PRESS HERE"></img></button>
                </div>
                <div className="monAccordion"><CanvasAccordion title={title} description={description} animKind={animKind} /></div>
            </div>
        </>
        )
}

export default AccordionBox;