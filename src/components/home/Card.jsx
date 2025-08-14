import '@styles/Home.css';

function Card({title, cover}) {
    return(
        <>
            <div className="thumb">
                <h6>{title}</h6>
                <img src={cover}></img>
                
            </div>
        </>        
    )
}

export default Card;