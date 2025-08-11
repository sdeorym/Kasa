import '@styles/lodging.css';
import Title from '@components/lodging/Title.jsx';
import FlatLocation from '@components/lodging/FlatLocation.jsx';
import Pinkies from '@components/lodging/Pinkies.jsx';
import CityZone from '@components/lodging/CityZone.jsx';
import FlatFeatures from '@components/lodging/FlatFeatures.jsx';
//import Logements from '@assets/data/logements.js';
//import PinkBox from '@components/general/PinkBox.jsx';

function Lodging({id}) {
  
  // Récupérer l'id via un useParams
  // Utiliser la méthode "find" sur le tableau JSON pour trouver la bonne entrée. 
  // Hint : utiliser un useEffect pour gérer le changement d'id

  return (
    <div className="lodgingView">
      <h1>Aquí va la foto</h1>
      <div className = "titling">
        <Title />
        <FlatLocation />
      </div>
      <div className = "pinkboxing">
        <Pinkies />
      </div>        
      <span className = "flatData">
        <span className = "starlettes">Estrellitas</span>
        <span className = "zoneHost">
          <CityZone />
          <span>Foto host</span>
        </span>
      </span>
      <div className="features">
        <FlatFeatures title="Description" />
        <FlatFeatures title="Équipements" />
      </div>
      
    </div>
  );
}

export default Lodging;