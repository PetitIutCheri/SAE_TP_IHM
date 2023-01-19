class Connexion {
    constructor() {
        this.init();
    }
    init() {
        APIpageWeb.bdOpen('devbdd.iutmetz.univ-lorraine.fr', '3306', 'tijou7u_2022_IHM', 'tijou7u_appli', '', 'utf8');
    }
}
// eslint-disable-next-line no-var
let connexion = new Connexion;
export { connexion };
//# sourceMappingURL=connexion.js.map