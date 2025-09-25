import React from 'react';

import backgroundImage from '../assets/montagne.png';

import imgPatrimoine from '../assets/StPaul.png'; // Ajustez le chemin si nécessaire
import imgSport from '../assets/montagne2.png';
import imgGourmand from '../assets/ville.png';
import imgFamille from '../assets/plage2.png';
import imgNature from '../assets/montagne3.png';

// --- Données pour chaque carte (Mise à jour de imageUrl) ---
const cardData = [
  {
    title: "Un patrimoine culturel  d’exception",
    description: "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
    linkText: "À voir: Le Festival de Cannes, Carnaval de Nice, Fête du Citron",
    // Utiliser la variable importée et la formater avec 'url()'
    imageUrl: `url(${imgPatrimoine})`, 
    altText: "Village médiéval de la Côte d'Azur",
  },
  {
    title: "Le sport au rythme de la Méditerranée",
    description: "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.  ",
    linkText: "À voir : Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
    imageUrl: `url(${imgSport})`, 
    altText: "Randonnée dans l'Estérel",
  },
  {
    title: "Une destination gourmande  et authentique",
    description: "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
    buttonText: "Consulter la liste des meilleurs restaurants",
    imageUrl: `url(${imgGourmand})`, 
    altText: "Rue provençale avec restaurants",
  },
  {
    title: "Des expériences inoubliables  en famille",
    description: "Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.",
    imageUrl: `url(${imgFamille})`, 
    altText: "Famille sur la plage",
  },
  {
    title: "L’évasion en pleine nature",
    description: "Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
    buttonText: "Consulter la liste des sentiers pédestres",
    imageUrl: `url(${imgNature})`, 
    altText: "Falaise au bord de la mer",
  },
];

// --- Reste du code (Styles et Composants) ---
// ... Le reste du code de styles et des composants Card et CardsPage reste inchangé ...

// --- Styles généraux (pour la mise en page principale) ---
const styles = {
  pageContainer: {
    backgroundColor: '#F5F5F5', // couleur de fallback
    backgroundImage: `url(${backgroundImage})`, // image de fond
    backgroundSize: 'cover',       // pour qu'elle couvre tout le conteneur
    backgroundPosition: 'center',  // centrage
    backgroundRepeat: 'no-repeat', // pas de répétition
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 colonnes pour la première ligne
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  secondRowContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '20px auto 0 auto',
  }
};


// --- Composant d'une Carte (Card) ---

const cardStyles = {
  card: {
    position: 'relative',
    color: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
    blueLink: {
    color: 'blue',          // <- lien bleu
    textDecoration: 'none',
    fontSize: '0.85em',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
    },
    blueText: {
    color: '#4682B4', // bleu clair pour les liens
    fontWeight: 'bold',
    },


  // La couleur de la carte "Un patrimoine culturel" (rouge)
  redOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(200, 50, 50, 0.8)', // Rouge foncé
    zIndex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    opacity: 0, // Commence invisible
    transition: 'opacity 0.3s ease',
  },
  cardContent: {
    position: 'relative',
    zIndex: 2, // Assure que le texte est au-dessus du dégradé
    padding: '20px',
    // Dégradé sombre en bas pour la lisibilité
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
  },
  cardTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
    lineHeight: '1.2',
  },
  cardDescription: {
    fontSize: '0.9em',
    marginBottom: '15px',
    opacity: 0.85,
  },
  // Style de l'image de fond
  bgImage: (url, alt) => ({
    backgroundImage: url,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  }),
  // Style pour le lien/bouton
  actionLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.85em',
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
  },
//   actionButtonBlue: {
//   backgroundColor: 'transparent',      // fond transparent
//   color: '#4682B4',                     // texte bleu
//   border: '2px solid #4169E1',         // bordure bleu
//   padding: '10px 15px',
//   borderRadius: '20px',
//   fontSize: '0.85em',
//   fontWeight: 'bold',
//   cursor: 'pointer',
//   marginTop: '15px',
//   display: 'inline-block',
//   transition: 'all 0.3s ease',
// },
actionButtonBlue: {
  backgroundColor: 'transparent',
  color: '#4682B4',
  border: '2px solid #4169E1',
  padding: '10px 15px',
  borderRadius: '30px',      // bouton arrondi
  fontSize: '0.85em',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '15px',
  display: 'inline-flex',    // pour aligner texte + symbole
  alignItems: 'center',
  gap: '8px',                // espace entre texte et symbole
  transition: 'all 0.3s ease',
},


actionButtonBlueHover: {
backgroundColor: '#00BFFF',
color: 'white',
border: '2px solid #00BFFF',
}


};

const Card = ({ title, description, linkText, buttonText, imageUrl, altText, isFirst }) => {
  // Styles pour la superposition rouge de la première carte (uniquement pour le style)
  const [isHovered, setIsHovered] = React.useState(false);

  const finalRedOverlayStyle = isFirst ? {
    ...cardStyles.redOverlay,
    opacity: isHovered ? 1 : 0.8, // Laisse voir l'image derrière
    zIndex: 3, // Au-dessus du contenu pour montrer la couleur
  } : {};

  // Contenu à afficher dans la superposition rouge (simulant le style de l'image)
  const redBoxContent = isFirst && (
    <div style={{ padding: '0px 20px 20px 20px', position: 'relative', zIndex: 4 }}>
        
        <div style={cardStyles.cardTitle}>
            {title}
        </div>
        <div style={cardStyles.cardDescription}>
            {description}
        </div>
        {linkText && (
        <a href="#" style={cardStyles.actionLink}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>
            {linkText.split(':')[0]}: {/* "À voir :" en blanc */}
            </span>
            <span style={cardStyles.blueText}>
            {linkText.split(':')[1]} {/* le reste du lien en bleu clair */}
            </span>
        </a>
        )}

    </div>
  );

  // Le contenu normal (pour les autres cartes)
  const normalContent = (
    <div style={cardStyles.cardContent}>
      {/* La première carte a un style d'en-tête différent */}
      {!isFirst && <div style={cardStyles.cardTitle}>{title}</div>}
      {isFirst && <div style={{ color: 'white', backgroundColor: 'darkred', padding: '5px 10px', display: 'inline-block', marginBottom: '10px', fontWeight: 'bold' }}>
        {title.split(' ')[0] + ' ' + title.split(' ')[1]}
      </div>}
      
      {/* Pour les cartes 2 à 5 */}
      {!isFirst && (
        <>
          <div style={cardStyles.cardDescription}>{description}</div>
          {linkText && (
            <a href="#" style={cardStyles.actionLink}>
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                {linkText.split(':')[0]}: {/* "À voir :" en blanc */}
                </span>
                <span style={cardStyles.blueText}>
                {linkText.split(':')[1]} {/* le reste du lien en bleu clair */}
                </span>
            </a>
            )}

          {buttonText && (
            <button style={cardStyles.actionButtonBlue}>
                {buttonText}
                <span style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                border: '2px solid #00BFFF', // bordure bleue
                color: '#00BFFF',
                fontWeight: 'bold',
                fontSize: '0.85em',
                }}>
                &gt;
                </span>
            </button>
            )}
        </>
      )}
    </div>
  );

  return (
    <div 
      style={cardStyles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardStyles.bgImage(imageUrl, altText)} role="img" aria-label={altText} />
      
      {/* S'assurer que le contenu du texte est en bas */}
      {isFirst ? redBoxContent : normalContent}
      
      {/* Dégradé/couleur spécifique pour la première carte */}
      {isFirst && <div style={finalRedOverlayStyle}></div>}
    </div>
  );
};


// --- Composant principal ---
const CardsPage = () => {
  return (
    <div style={styles.pageContainer}>
      {/* Première ligne : 2 cartes */}
      <div style={styles.gridContainer}>
        {cardData.slice(0, 2).map((data, index) => (
          <Card key={index} {...data} isFirst={index === 0} />
        ))}
      </div>

      {/* Deuxième ligne : 3 cartes */}
      <div style={styles.secondRowContainer}>
        {cardData.slice(2).map((data, index) => (
          <Card key={index + 2} {...data} isFirst={false} />
        ))}
      </div>
    </div>
  );
};

export default CardsPage;