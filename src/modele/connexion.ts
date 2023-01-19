class Connexion {
	constructor() {
		this.init();
    }
	init() : void {
		APIpageWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr','3306','tijou7u_SAEIHM','tijou7u_appli','', 'utf8');
	}
  }
  // eslint-disable-next-line no-var
let connexion = new Connexion;

export {connexion}