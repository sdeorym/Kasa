import '@styles/FixedElements/General.css';

function Banner({bannerSlogan, bannerPhoto}) {
    return(
        <div className="slogan">
            <img src={bannerPhoto} alt="Paysage de montagne"></img> 
            <h1>{bannerSlogan}</h1>
        </div>
    )
}

export default Banner;