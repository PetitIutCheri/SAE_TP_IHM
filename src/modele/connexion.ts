class Connexion {
    constructor() {
    this.init();
    }
    init() {
    // à adapter avec voter nom de base et vos identifiants de connexion
    APIpageWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr','3306'
    ,'toto3u_bdinventaire', 'toto3u_appli','motdepasse', 'utf8');
    }
    }
    let connexion = new Connexion;
    export {connexion}
    