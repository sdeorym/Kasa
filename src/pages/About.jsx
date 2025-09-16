import '@styles/About.css';
import Banner from '@components/general/Banner.jsx';
import AccordionBox from '@components/accordion/AccordionBox.jsx';
import photoBanner from '@assets/LogosAndImages/image_about.png';

function About() {
  const slogan=["", photoBanner]
  const values = [
    {
		  "id": "0",
		  "title": "Fiabilité",
		  "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos son conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
	  },
    {
      "id": "1",
		  "title": "Respect",
		  "description": "La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
	  },
    {
      "id": "2",
		  "title": "Service",
		  "description": "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
	  },
    {
      "id": "3",
		  "title": "Sécurité",
		  "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	  },
  ]
  return (
    <section className="whataboutism">
      <Banner bannerSlogan={slogan[0]} bannerPhoto={slogan[1]} />
      <div className="kasaValues">
        {values.map((e) => 
          <AccordionBox title={e.title} description={e.description} />)}
      </div>
    </section>
  );
}

export default About;