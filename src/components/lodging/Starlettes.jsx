import '@styles/Lodging.css';
import pinkStar from '@assets/LogosAndImages/pink_star.png';
import grayStar from '@assets/LogosAndImages/gray_star.png';

function Starlettes({stars}) {
    let starlette = parseInt(stars);
    let star = [];
    for (let i=1; i<= 5; i+=1){
        if (i<=starlette)
            {star.push("*");}
        else if (i>starlette && i<=5)
            {star.push("+");}
    }

    return(
        <>
            <span className="starlettes">
                {star.map((item) => 
                    (item == "*") ? (<span><img src={pinkStar} alt="*"></img></span>) : (<span><img src={grayStar} alt=" "></img></span>)
                )}
            </span>
        </>
    )
}

export default Starlettes;