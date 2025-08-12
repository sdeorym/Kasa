import '@styles/lodging.css';
import Title from '@components/lodging/Title.jsx';
import FlatLocation from '@components/lodging/FlatLocation.jsx';
import Pinkies from '@components/lodging/Pinkies.jsx';
import CityZone from '@components/lodging/CityZone.jsx';
import FlatFeatures from '@components/lodging/FlatFeatures.jsx';
import Logements from '@assets/data/logements.js';
import { useParams } from 'react-router-dom';

function Lodging() {
  let params = useParams();
  let idx = params.id;
  let il=idx.length;
  idx = idx.slice(1, il);
  console.log(idx);
  var lodging = Searching (idx, Logements);
 
  function Searching(datum, array) {
    for (let i=0; i<array.length; i++) {
      if (datum == array[i].id) {
        return array[i];
      }
    }
    return null;
  }
  console.log(lodging.title);
  // Récupérer l'id via un useParams
  // Utiliser la méthode "find" sur le tableau JSON pour trouver la bonne entrée. 
  // Hint : utiliser un useEffect pour gérer le changement d'id
  let flatTitle = lodging.title;
  let location = lodging.location;
   
  //Hay que hacer una extracción de los tags mediante una función lambda

  return (
    <div className="lodgingView">
      <img src={lodging.cover}></img>
      <div className = "titling">
        <Title flatTitle = {lodging.title} />
        <FlatLocation location={lodging.location} />
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
        <FlatFeatures title="Description" description="Vaya casa cojonuda hay aquí, papi." />
        <FlatFeatures title="Équipements" />
      </div>      
    </div>
  );
}

export default Lodging;