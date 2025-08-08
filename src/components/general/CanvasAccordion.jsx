import '@styles/FixedElements/PinkBox.css';
//import { useState } from 'react';

function CanvasAccordion({animKind, description}) {

    console.log("Estamos en el acordeón", animKind);

    return(
        <>
            <div className={"canvas " + animKind}>
                <p className={"canvastext " + animKind}>{description}</p>
            </div>
        </>
    )
}

export default CanvasAccordion;