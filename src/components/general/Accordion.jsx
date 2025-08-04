import '@styles/FixedElements/PinkBox.css';
import { useState } from 'react';

function Accordion({rotation, title, description, canvasing, setCanvas}) {
    const [textual, setTextual] = useState("");
    if (rotation == "arrow" || rotation == "arrow cw-turning") {
        setCanvas = "canvas contracting";
        setTextual = "";
        return;
    } else {
        setCanvas = "canvas describing";
        setTextual = "dropDown";
        return;
    }

    return(
        <>
            <div className={canvasing}>
                <p className={textual}>{description}</p>
            </div>
        </>
    )
}

export default Accordion;