import '@styles/FixedElements/General.css';

function Banner({bannerSlogan, bannerPhoto}) {
    return(
        <div className="slogan">
            <img src={bannerPhoto}></img> 
            <h1>{bannerSlogan}</h1>
        </div>
    )
}

export default Banner;