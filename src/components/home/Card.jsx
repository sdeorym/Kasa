import '@styles/Home.css';

function Card({title, cover}) {
    return(
        <>
            <div className="thumb">
                <h2>{title}</h2>
                <img src={cover} alt={title}></img>                
            </div>
        </>        
    )
}

export default Card;