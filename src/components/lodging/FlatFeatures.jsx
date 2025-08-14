import PinkBox from '@components/general/PinkBox.jsx';
import '@styles/FixedElements/PinkBox.css';

function FlatFeatures({title, description}) {
    return(
        <>
            <PinkBox title={title} description={description} />
        </>
    )
}

export default FlatFeatures;