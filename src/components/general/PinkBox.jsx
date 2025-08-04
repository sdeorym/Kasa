import '@styles/FixedElements/PinkBox.css';
import ArrowButton from '@components/general/ArrowButton.jsx';
import Accordion from '@components/general/Accordion.jsx';
import { useState, useEffect } from 'react';

function PinkBox({title, description}) {
    const [rotation, setRotation] = useState("arrow");
    const [canvasing, setCanvas] = useState(""); 

    return(
        <div className="extendable"> 
            <span className="pinky">        
                <span className="arrowy">
                    <h2>{title}</h2>
                    <span className="arrowMe"><ArrowButton rotation={rotation} setRotation={setRotation} /></span>
                </span>            
            </span>
            <span className={canvasing}><Accordion title={title} description={description} rotation={rotation} /></span>
        </div>
        )
}

export default PinkBox;