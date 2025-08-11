import '@styles/Home.css';
import Banner from '@components/home/Banner.jsx';
import Card from '@components/home/Card.jsx';
import Logements from '@assets/data/logements.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  const kasaCards = [0, 1, 2];
  const kasaLots = [0, 1];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Cleaning Up
    return () => window.removeEventListener('resize', handleResize);}, []);

  return (
    <section className="homecoming">
      <Banner />
      {window.innerWidth > 766 ? (       
          <span className="second">
            {kasaLots.flatMap((_, rowNumber) => (
                <div className="firstAdds">                  
                    {kasaCards.slice(0, 1).flatMap((_,flatNumber) =>
                    Logements.slice(rowNumber*3, (rowNumber*3+(flatNumber+3))).map(({id, title, cover, pictures, description, host, rating, location, equipments}, i) => (
                      <Link to={`@pages/lodging/:${id}`} className="myLink" id={id} title={title} ><Card key={`card-${rowNumber}-${flatNumber}-${i}`} title={title} /></Link>)
                      ))}
                </div>
            ))}
          </span>
        ) :
        <div className="firstAdds">
          {kasaCards.slice(0, 1).flatMap((_,flatNumber) =>
            Logements.slice(0, 3).map(({id, title, cover, pictures, description, host, rating, location, equipments}, i) => (
              <Link to={`lodging/:${id}`} className="myLink" id={id} title={title} ><Card key={`plainCard-${flatNumber}-${Logements.title}`} title={title} /></Link>)))}
        </div>
      }
    </section>
  );
}

export default Home;