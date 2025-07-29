import Banner from '@components/general/Banner.jsx';
import Values from '@components/about/Values.jsx'
import '@styles/About.css';


function About() {
  const values = [
    {
		"id": "0",
		"title": "Reliability",
		"description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos son conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
	  },
    {"id": "1",
		"title": "Respect",
		"description": "La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
	  },
    {"id": "2",
		"title": "Service",
		"description": "La qualité du service est au coeur de notre engagement chez Jasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
	  },
    {"id": "3",
		"title": "Sécurité",
		"description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	  },
  ]
  return (
    <section className="whataboutism">
      <Banner />
      <div className="kasaValues">
        {values.map((e) => 
          <Values id={e.id} title={e.title} description={e.description}/>)}
      </div>
    </section>
  );
}

export default About;