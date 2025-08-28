import '@styles/Lodging.css';
import leftie from '@assets/LogosAndImages/left_arrow.png';
import rightie from '@assets/LogosAndImages/right_arrow.png';
import { useState, useEffect } from 'react';

function PhotoLodging({lodgePictures}) {
    const [image, setImage] = useState(lodgePictures[0]);
    const [imageIndex, setImageIndex] = useState(0);

    /*  const limit = lodgePictures.length - 1;
        const [righty, setRighty] = useState(false);
        const [lefty, setLefty] = useState(false);
        let [photo, setPhoto] = useState(0);
        let goPhoto = lodgePictures[photo];

            useEffect(() => {                
                if (lefty) {
                    if (photo == 0) {setPhoto(photo=limit);}
                    else {setPhoto(photo-=1)}
                        goPhoto = lodgePictures[photo];
                        return;}            
                else return;
            },[lefty]);

            useEffect(() => {                
                if (righty) {
                    if (photo != limit) {setPhoto(photo+=1);}
                    else {setPhoto(0);}
                        goPhoto = lodgePictures[photo];
                        return;}
                else return;
            },[righty]);

    const previousPhoto = () => {
        setLefty(!lefty)
    };
    const nextPhoto = () => {
        setRighty(!righty)
    };
    <img src={leftie} className="arrowing leftie" onClick={previousPhoto}></img>
    <img src={rightie} className="arrowing rightie" onClick={nextPhoto}></img>
*/

    function goNext() {
        // Attention le state se met à jour APRES la fonction
        setImageIndex(imageIndex === lodgePictures.length - 1 ? 0 : imageIndex + 1)
    }

    function goPrevious() {
        // Attention le state se met à jour APRES la fonction
        setImageIndex(imageIndex === 0 ?   lodgePictures.length - 1 : imageIndex - 1 )
    }

    useEffect(() => {
        setImage(lodgePictures[imageIndex])
    }, [imageIndex])

    return (
        <>  
            <span className="photoLodging">
                <img className="lodgeGallery" src={image}></img>
                {(lodgePictures.length > 1) ? 
                (<span>
                    <button onClick={goPrevious} className="leftie"><img src={leftie}></img></button>
                    <button onClick={goNext} className="rightie"><img src={rightie}></img></button></span>)
                : (<span></span>)}                
            </span>
        </>
    )
}

export default PhotoLodging;