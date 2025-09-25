import bgImage from "../assets/Piscine2.png";

export default function ReservationSection() {
  return (
    <section className="relative">
      {/* Hero avec image */}
      <div
        className="relative h-[700px] md:h-[780px] lg:h-[820px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlays : 1) assombrir + 2) gradient bleu à gauche */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-blue-500/30 to-transparent"></div>
        </div>

        {/* Contenu centré */}
        <div className="relative z-10 w-full text-white px-6">
          <div className="mx-auto max-w-[1100px] text-center">
            <h1 className="hero-title">Réservations</h1>

            <p className="hero-subtitle">
              <strong>Offrez-vous un séjour inoubliable</strong> dans l’un de nos appartements Blu Azur. {" "}
              <span className="block sm:inline">
                Profitez d’un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
              </span>
            </p>

          <div className="mt-6 flex justify-center">
            <button
              style={{
                backgroundColor: '#4097FF', // fond bleu
                color: 'white',
                border: '2px solid #00BFFF', // bordure bleue
                padding: '10px 20px',
                borderRadius: '20px',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
              }}
              onClick={() => { /* remplace par ta navigation */ }}
              aria-label="Réserver maintenant"
            >
              <span>Réservez dès maintenant votre séjour !</span>
              
              {/* icône > arrondi avec bordure bleue */}
              <span style={{ 
                display: 'inline-flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                border: '2px solid white', // icône avec bordure blanche pour contraster avec le fond bleu
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.85em',
              }}>
                &gt;
              </span>
            </button>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
