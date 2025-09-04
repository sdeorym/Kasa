import '@styles/Home.css';
import Banner from '@components/home/Banner.jsx';
import Card from '@components/home/Card.jsx';
import Logements from '@assets/data/logements.js';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
          <div className="second">
            {kasaLots.flatMap((rowNumber) => (
                <div className="firstAdds">                  
                    {Logements.slice((rowNumber*3), ((rowNumber+1)*3)).map(({id, title, cover}, i) => (
                        <Link to={`lodging/:${id}`} className="myLink">
                          <Card title={title} cover={cover} />
                        </Link>)
                        )}
                </div>
            ))}
          </div>
        ) :
        <div className="firstAdds">
          {Logements.slice(0, 3).map(({id, title, cover}, i) => (
              <Link to={`lodging/:${id}`} className="myLink">
                <Card title={title} cover={cover} />
              </Link>))}
        </div>
      }
    </section>
  );
}

export default Home;