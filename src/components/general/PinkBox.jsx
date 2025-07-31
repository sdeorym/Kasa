import '@styles/FixedElements/PinkBox.css';
import ArrowButton from '@components/general/ArrowButton.jsx';

function PinkBox({title}) {
   
    return(
        <div className="pinky">        
            <span className="arrowy">
                <h2>{title}</h2>
                <span className="arrowMe"><ArrowButton /></span>
            </span>
        </div>
    )
}

export default PinkBox;