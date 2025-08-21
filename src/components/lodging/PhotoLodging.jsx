import '@styles/Lodging.css';
import leftie from '@assets/LogosAndImages/left_arrow.png';
import rightie from '@assets/LogosAndImages/right_arrow.png';
import { useState, useEffect } from 'react';

function PhotoLodging({lodgePictures}) {
    const limit = lodgePictures.length - 1;
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