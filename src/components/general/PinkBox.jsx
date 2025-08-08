import '@styles/FixedElements/PinkBox.css';
import arrowIcon from '@assets/LogosAndImages/arrow.png';
import CanvasAccordion from '@components/general/CanvasAccordion.jsx';
import { useState, useEffect } from 'react';

function PinkBox({title, description}) {
    const [isOpen, setIsOpen] = useState(false);
    const [animKind, setAnimKind] = useState("hideAnim");
    // const [animPosition, setAnimPosition] = useState(false);
    // const [animKind, setAnimKind] = useState("");
    // const [timeOut, setTimeOut] = useState();


    // useEffect(() => {
    //     // traitement ne se déclenche que si animPosition change
    //     animKind = animPosition ? "displayAnim" : "hideAnim";
    // }, [animPosition]);

    useEffect(() => {
        /* if (!clicked) return; // ICI Première execution on s'arrête
        // function arrowAnim() {        
        //     if (animPosition == false) { // Si animPosition = false === si Clicked === false
        //         setAnimPosition(true);   // ICI
        //         // setAnimKind("displayAnim");
        //         console.log(animPosition);
        //     } else if (animPosition == true) { // Si animPostion == True ==== si clicked === true
        //         setAnimPosition(false);
        //         // setAnimKind("hideAnim");
        //         console.log(animPosition);
        //     }
        //     let timer=setTimeOut(setClicked(false));
        //     console.log(clicked);
        // }
        // arrowAnim();  */         
                
        if (!isOpen) {
            setAnimKind("hideAnim");
            console.log("hideAnim", title);
        }

        if (isOpen) {
            setAnimKind("displayAnim");
            console.log("displayAnim", title);
        }

    },[isOpen]);
    console.log("before return ", title, animKind);

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