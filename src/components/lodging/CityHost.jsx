import '@styles/Lodging.css';

function CityHost({cityHost}) {
    console.log({cityHost});
    return(
        <>  
            <span className="permahost">
                <span class="permaname"><p>{cityHost.name}</p></span>
                <img src={cityHost.picture} className="permaphoto"></img>
            </span>
        </>
    )
}

export default CityHost;