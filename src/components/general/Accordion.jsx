import '@styles/FixedElements/PinkBox.css';

function Accordion({rotation, title, description}) {
    let sheet = "canvas";
    if (rotation == "arrow" || rotation == "arrow cw-turning") {
        sheet="canvas contracting";
        console.log({rotation});
        return;
    } else {
        console.log({rotation});
        sheet="canvas describing";
    }

    return(
        <>
            <div className={sheet}>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Accordion;