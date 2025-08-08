import { Link } from "react-router-dom";
import Footer from "@components/general/Footer";
import Navbar from "@components/general/Navbar";
import '@styles/lodging.css';

function Lodging() {


  // Récupérer l'id via un useParams

  // Utiliser la méthode "find" sur le tableau JSON pour trouver la bonne entrée. 
  // Hint : utiliser un useEffect pour gérer le changement d'id




  return (
    <>
      <Navbar />
      <h1>Casitas en Or-casitas</h1>
      <Footer />
    </>
  );
}

export default Lodging;