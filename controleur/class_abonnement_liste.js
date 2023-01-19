import { LesAbonnements } from "../modele/data_abonnement.js";
class VueAbonnementListe {
    constructor() { }
    get form() { return this._form; }
    get data() { return this._data; }
    get grille() { return this._grille; }
    init(form) {
        this._grille = new GrilleTabulaire;
        this._data = [];
        this._form = form;
        const lesAbonnements = new LesAbonnements;
        this._data = lesAbonnements.listAll();
        this._grille = APIpageWeb.showArray(this.form.tableAbonnement.id, this._data, 'abon_num', true);
    }
}
let vueAbonnementListe = new VueAbonnementListe;
export { vueAbonnementListe };
//# sourceMappingURL=class_abonnement_liste.js.map