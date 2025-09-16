import '@styles/Home.css';
import Banner from '@components/general/Banner.jsx';
import Card from '@components/home/Card.jsx';
import Logements from '@assets/data/logements.js';
import photoBanner from '@assets/LogosAndImages/image_opening.png';
import { Link } from 'react-router-dom';

function Home() {
  const slogan=["Chez vous, partout et ailleurs", photoBanner]
  
  return (
    <section className="homecoming">
      <Banner bannerSlogan={slogan[0]} bannerPhoto={slogan[1]} />
      <div className="firstAdds">
        {Logements.map(({id, title, cover}, i) => (
            <Link to={`lodging/:${id}`} className="myLink">
              <Card title={title} cover={cover} />
            </Link>))}
      </div>
    </section>
  );
}

export default Home;