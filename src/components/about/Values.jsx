import AccordionBox from '@components/general/AccordionBox.jsx';
import '@styles/FixedElements/AccordionBox.css';

function Values({id, title, description}) {
    return(
        <>
            <AccordionBox title={title} description={description} />
        </>
    )
}

export default Values;