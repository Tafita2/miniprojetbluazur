// Styles de base inspirés de l'image (couleurs et disposition)
const styles = {
  // Conteneur principal (la partie bleue azur)
  mainFooter: {
    backgroundColor: '#3090F0', // Bleu vif similaire à l'image
    color: 'white',
    padding: '150px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap' as const, // correction TS
  },
  // Style pour le logo BLU AZUR
  logoContainer: {
    textAlign: 'center' as const, // correction TS
    marginBottom: '20px',
  },
  logoText: {
    fontSize: '4em',
    fontWeight: 'bold',
    lineHeight: '0.9',
  },
  azurText: {
    fontSize: '1.2em',
    letterSpacing: '5px',
    marginTop: '5px',
  },
  // Conteneur des informations de contact
  contactContainer: {
    textAlign: 'left' as const, // correction TS
  },
  contactTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  // Bande des droits d'auteur (la partie bleu foncé)
  copyrightBar: {
    backgroundColor: '#204080',
    color: 'white',
    textAlign: 'center' as const, // correction TS
    padding: '35px 20px',
    fontSize: '0.9em',
  },
};

const Footer = () => {
  return (
    <footer>
      {/* SECTION PRINCIPALE DU FOOTER */}
      <div style={styles.mainFooter}>
        
        {/* LOGO BLU AZUR */}
        <div style={styles.logoContainer}>
          <div style={styles.logoText}>BLU</div>
          <div style={styles.azurText}>AZUR</div>
        </div>

        {/* CONTACTEZ-NOUS */}
        <div style={styles.contactContainer}>
          <div style={styles.contactTitle}>Contactez-nous</div>
          
          <div style={styles.contactItem}>
            📧 &nbsp; info@bluazur.com
          </div>
          
          <div style={styles.contactItem}>
            📞 &nbsp; +1 555 555-5555
          </div>
          
          <div style={styles.contactItem}>
            <span style={{ marginRight: '20px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.008 1.195-3.136 3.024-3.136.877 0 1.96.157 1.96.157v1.81h-1.14c-.933 0-1.114.587-1.114 1.185V8.05h2.03l-.328 2.007h-1.702v5.625C13.074 15.396 16 12.067 16 8.049z"/>
              </svg>
            </span>
            @ BLU Azur
          </div>
        </div>
        
      </div>

      {/* BANDE DES DROITS D'AUTEUR */}
      <div style={styles.copyrightBar}>
        © Tous droits réservés à Blu Azur
      </div>
    </footer>
  );
};

export default Footer;
