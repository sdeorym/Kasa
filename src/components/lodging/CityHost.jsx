import '@styles/Lodging.css';

function CityHost({cityHost}) {
    let hostname = cityHost.name.split(" ");
    console.log(hostname);

    return(
        <>  
            <span className="permahost">
                <span class="permaname">{hostname[0]}<br/>{hostname[1]}</span>
                <img src={cityHost.picture} className="permaphoto" alt="Host"></img>
            </span>
        </>
    )
}

export default CityHost;