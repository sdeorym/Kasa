import '@styles/FixedElements/PinkBox.css';

function CanvasAccordion({animKind, description}) {

return(
        <>
            <div className={"canvas " + animKind}>
                {(typeof description === "string") ? 
                    (<p className={"canvastext " + animKind}>{description}</p>) : 
                    (<ul className={"canvastext " + animKind}>
                        {description.map((item, i) => (<li key={i}>{item}</li>))}</ul>)}                
            </div>
        </>
    )
}

export default CanvasAccordion;