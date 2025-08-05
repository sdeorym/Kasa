import '@styles/FixedElements/PinkBox.css';
import ArrowButton from '@components/general/ArrowButton.jsx';
import CanvasAccordion from '@components/general/CanvasAccordion.jsx';
import { useState } from 'react';

function PinkBox({title, description}) {
    const [clicked, setClicked] = useState(false);
    const [animPosition, setAnimPosition] = useState(false);

    return(
        <div className="extendable"> 
            <span className="pinky">        
                <span className="arrowy">
                    <h2>{title}</h2>
                    <span className="arrowMe"><ArrowButton animPosition={animPosition} setAnimPosition={setAnimPosition} clicked={clicked} setClicked={setClicked} /></span>
                </span>            
            </span>
            <span id="monAccordion"><CanvasAccordion title={title} description={description} clicked={clicked} animPosition={animPosition} /></span>
        </div>
        )
}

export default PinkBox;