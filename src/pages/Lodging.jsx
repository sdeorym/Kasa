import '@styles/lodging.css';
import PhotoLodging from '@components/lodging/PhotoLodging.jsx';
import Title from '@components/lodging/Title.jsx';
import FlatLocation from '@components/lodging/FlatLocation.jsx';
import Pinkies from '@components/lodging/Pinkies.jsx';
import Starlettes from '@components/lodging/Starlettes.jsx';
import CityHost from '@components/lodging/CityHost.jsx';
import FlatFeatures from '@components/lodging/FlatFeatures.jsx';
import Logements from '@assets/data/logements.js';
import { useParams } from 'react-router-dom';

function Lodging() {
  let params = useParams();
  let idx = params.id;
  let il=idx.length;
  idx = idx.slice(1, il);
  var lodging = Searching (idx, Logements);
 
  function Searching(datum, array) {
    for (let i=0; i<array.length; i++) {
      if (datum == array[i].id) {
        return array[i];
      }
    }
    return null;
  }
  
  // Récupérer l'id via un useParams
  // Utiliser la méthode "find" sur le tableau JSON pour trouver la bonne entrée. 
  // Hint : utiliser un useEffect pour gérer le changement d'id

  let flatTags = lodging.tags;
  let lodgingFields = [{"Title": "Description", "Content": lodging.description}, {"Title": "Équipements", "Content": lodging.equipments}]; 
  let cityHost=lodging.host;
  let lodgeCover = lodging.cover;
  let lodgePictures = lodging.pictures;
  
  return (
    <div className="lodgingView">
      <PhotoLodging lodgeCover= {lodgeCover} lodgePictures={lodgePictures}/>
      <div className="lodgeContent">
        <div className = "titling">
          <Title flatTitle = {lodging.title} />
          <FlatLocation location={lodging.location} />
          <span className = "pinkboxing">
            {flatTags.map((flatTags) => <Pinkies flatTags = {flatTags} />)}
          </span>
        </div> 
        <div className = "flatData">
          <span><Starlettes stars={lodging.rating} /></span>
          <span><CityHost cityHost={cityHost} /></span>
        </div>
      </div>
      <div className="features">
        {lodgingFields.map((issue) => <FlatFeatures title={issue.Title} description={issue.Content} />)}        
      </div>      
    </div>
  );
}

export default Lodging;