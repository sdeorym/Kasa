import '@styles/Lodging.css';
import leftie from '@assets/LogosAndImages/left_arrow.png';
import rightie from '@assets/LogosAndImages/right_arrow.png';
import { useState, useEffect } from 'react';

function PhotoLodging({lodgeTitle, lodgePictures}) {
    const [image, setImage] = useState(lodgePictures[0]);
    const [imageIndex, setImageIndex] = useState(0);
    
    // Attention: state updates after the function (goNext or goPrevious).
    function goNext() {
        setImageIndex(imageIndex === lodgePictures.length - 1 ? 0 : imageIndex + 1)
    }

    function goPrevious() {
        setImageIndex(imageIndex === 0 ?   lodgePictures.length - 1 : imageIndex - 1 )
    }

    useEffect(() => {
        setImage(lodgePictures[imageIndex])
    }, [imageIndex])

    return (
        <>  
            <div className="photoLodging">
                <img className="lodgeGallery" src={image} alt={lodgeTitle}></img>
                {(lodgePictures.length > 1) ? 
                (<span>
                    <button onClick={goPrevious} className="leftie"><img src={leftie} alt="=>"></img></button>
                    <button onClick={goNext} className="rightie"><img src={rightie} alt="<="></img></button></span>)
                : (<span></span>)}
                <span className="red">{imageIndex+1} / {lodgePictures.length}</span>                
            </div>
        </>
    )
}

export default PhotoLodging;