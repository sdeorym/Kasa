import '@styles/lodging.css';
import PhotoLodging from '@components/lodging/PhotoLodging.jsx';
import Title from '@components/lodging/Title.jsx';
import FlatLocation from '@components/lodging/FlatLocation.jsx';
import Pinkies from '@components/lodging/Pinkies.jsx';
import Starlettes from '@components/lodging/Starlettes.jsx';
import CityHost from '@components/lodging/CityHost.jsx';
import AccordionBox from '@components/general/AccordionBox.jsx';
import Logements from '@assets/data/logements.js';
import { useParams, Navigate } from 'react-router-dom';

function Lodging() {
  let params = useParams();
  let idx = params.id;
  let il=idx.length;
  //We slice to delete leading colon in the search.
  idx = idx.slice(1, il);
  var lodging = Searching (idx, Logements);
  if (lodging == null)
    {return (<Navigate to='/error' />);}
  function Searching(datum, array) {
    for (let i=0; i<array.length; i++) {
      if (datum == array[i].id) {
        return array[i];
      }
    }
    return null;
  }
  let flatTags = lodging.tags;
  let lodgingFields = [{"Title": "Description", "Content": lodging.description}, {"Title": "Équipements", "Content": lodging.equipments}]; 
  let cityHost=lodging.host;
  let lodgeCover = lodging.cover;
  let lodgePictures = lodging.pictures;
  
  return (
    <div className="lodgingView">
      <PhotoLodging lodgeTitle={lodging.title} lodgeCover={lodgeCover} lodgePictures={lodgePictures}/>
      <div className="lodgeContent">
        <div className = "titling">
          <Title flatTitle = {lodging.title} />
          <FlatLocation location={lodging.location} />
          <span className = "AccordionBoxing">
            {flatTags.map((flatTags) => <Pinkies flatTags = {flatTags} />)}
          </span>
        </div> 
        <div className = "flatData">
          <span><Starlettes stars={lodging.rating} /></span>
          <span><CityHost cityHost={cityHost} /></span>
        </div>
      </div>
      <div className="features">
        {lodgingFields.map((issue) => <AccordionBox title={issue.Title} description={issue.Content} />)}        
      </div>      
    </div>
  );
}

export default Lodging;