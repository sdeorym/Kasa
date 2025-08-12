import '@styles/FixedElements/PinkBox.css';

function CanvasAccordion({animKind, description}) {
    return(
        <>
            <div className={"canvas " + animKind}>
                <p className={"canvastext " + animKind}>{description}</p>
            </div>
        </>
    )
}

export default CanvasAccordion;