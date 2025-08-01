import '@styles/FixedElements/PinkBox.css';
import ArrowButton from '@components/general/ArrowButton.jsx';
import Accordion from '@components/general/Accordion.jsx';

function PinkBox({title, description}) {
   
    return(
        <div className="pinky">        
            <span className="arrowy">
                <h2>{title}</h2>
                <span className="arrowMe"><ArrowButton /></span>
                <Accordion title={title} description={description} />
            </span>
        </div>
    )
}

export default PinkBox;