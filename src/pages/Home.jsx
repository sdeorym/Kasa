import '@styles/Home.css';
import Banner from '@components/home/Banner.jsx';
import Card from '@components/home/Card.jsx';
import Logements from '@assets/data/logements.js';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

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
  
  let experimento = 
    Logements.map(({id, title, cover, pictures, description, host, rating, location, equipments}, i) => {title});
  console.log("experimento = ", experimento);



  return (
    <section className="homecoming">
      <Banner />
      {window.innerWidth > 766 ? (       
          <span className="second">
            {kasaLots.flatMap((_, rowNumber) => (
                <div className="firstAdds">                  
                    {kasaCards.slice(0, 1).flatMap((_,flatNumber) =>
                    Logements.slice(rowNumber*3, (rowNumber*3+(flatNumber+3))).map(({id, title, cover, pictures, description, host, rating, location, equipments}, i) => (
                      <Link to={`@pages/lodging/:${id}`} className="myLink"><Card title={title} /></Link>)
                      ))}
                </div>
            ))}
          </span>
        ) :
        <div className="firstAdds">
          {kasaCards.slice(0, 1).flatMap((_,flatNumber) =>
            Logements.slice(0, 3).map(({id, title, cover, pictures, description, host, rating, location, equipments}, i) => (
              <Link to={`lodging/:${id}`} className="myLink">
                <Card title={title} />
              </Link>)))}
        </div>
      }
    </section>
  );
}

export default Home;