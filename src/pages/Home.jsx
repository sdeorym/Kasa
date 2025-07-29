import '@styles/Home.css';
import Card from '@components/home/Card.jsx';
import Banner from '@components/general/Banner.jsx';
import Logements from '@assets/data/logements.js';
import { useState, useEffect } from 'react';

function Home() {
  /*let tits =[];
  Logements.forEach((miKasa) => {
    if (!tits.includes(miKasa.title)) {
      tits.push(miKasa.title);}})
  console.log("Estamos en home", tits);*/
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
                    Logements.slice(rowNumber*3, (rowNumber*3+(flatNumber+3))).map(({title}, i) => (
                      <Card key={`card-${rowNumber}-${flatNumber}-${i}`} title={title} />)
                      ))}
                </div>
            ))}
          </span>
        ) :
        <div className="firstAdds">
          {kasaCards.slice(0, 1).flatMap((_,flatNumber) =>
            Logements.slice(0, 3).map(({title}, i) => (
              <Card key={`plainCard-${flatNumber}-${Logements.title}`} title={title} />)))}
        </div>
      }
    </section>
  );
}

export default Home;