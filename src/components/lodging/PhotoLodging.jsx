import '@styles/Lodging.css';
import leftie from '@assets/LogosAndImages/left_arrow.png';
import rightie from '@assets/LogosAndImages/right_arrow.png';
import { useState, useEffect } from 'react';

function PhotoLodging({lodgePictures}) {
    const limit = lodgePictures.length - 1;
    let i=0;

    const [righty, setRighty] = useState(false);
    const [lefty, setLefty] = useState(false);
    let [photo, setPhoto] = useState([]);

        useEffect(() => {                
        if (lefty) {
            if (photo != 0) {
                setPhoto(photo-=1)
                }
            else {
                setPhoto(limit);
                lodgePictures[limit];
                return;
            }
            lodgePictures[i] = lodgePictures[photo];
            return;}
        },[lefty]);

        useEffect(() => {                
            if (righty) {
                if (photo == limit) {setPhoto(0)}
                else {setPhoto(photo+=1)}
                lodgePictures[i] = lodgePictures[photo];
            return;}
        },[righty]);

    const previousPhoto = () => {
        setLefty(!lefty)
    };
    const nextPhoto = () => {
        setRighty(!righty)
    };

    let goPhoto = lodgePictures[i];

    return (
        <>  
            <span className="photoLodging">
                <img className="lodgeGallery" src={goPhoto}></img>
                <img src={leftie} className="arrowing leftie" onClick={previousPhoto}></img>
                <img src={rightie} className="arrowing rightie" onClick={nextPhoto}></img>
            </span>
        </>
    )
}

export default PhotoLodging;