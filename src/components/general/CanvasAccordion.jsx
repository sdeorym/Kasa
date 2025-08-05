import '@styles/FixedElements/PinkBox.css';
//import { useState } from 'react';

function CanvasAccordion({clicked, animPosition, title, description}) {
    /*const [canvasing, setCanvas] = useState("");
    const [textual, setTextual] = useState("");*/
let canvasing="";
let textual="";
    console.log({clicked, animPosition, title});
    if (!clicked) {
        return;} 
    else {
    if (animPosition == false) {
        /*setCanvas("canvas-visible describing");
        setTextual("dropDown");*/
        canvasing = "canvas";
        textual = "dropDown";
    } else {
        /*setCanvas("canvas-nonvisible contracting");
        setTextual("sitUp");*/
        canvasing = "";
        textual = "climbUp";
    }}
    return(<p>Ola ke ase</p>);
    return(
        <div>
            <div className={canvasing}>
                <p className={textual}>{description}</p>
            </div>
        </div>
    )
}

export default CanvasAccordion;