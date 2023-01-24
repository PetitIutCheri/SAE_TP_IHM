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
    detailClick(nomFichierHTML, idConteneur) {
        if (this._grille.getIdSelect() !== "") {
            const chaine = '?affi&' + encodeURIComponent(this._grille.getIdSelect());
            APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
        }
    }
    ajouterClick(nomFichierHTML, idConteneur) {
        const chaine = '?ajout&';
        APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
    }
    modifierClick(nomFichierHTML, idConteneur) {
        if (this._grille.getIdSelect() !== "") {
            const chaine = '?modif&' + encodeURIComponent(this._grille.getIdSelect());
            APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
        }
    }
    supprimerClick() {
        if (this._grille.getIdSelect() !== "") {
            APIpageWeb.confirmation("Suppression de l'abonnement", "Confirmez-vous la suppression de l'abonnement" + this._grille.getIdSelect(), vueAbonnementListe, "supprimerAbonnement()");
        }
    }
    supprimerAbonnement() {
        let lesAbonnements = new LesAbonnements();
        lesAbonnements.delete(this._grille.getIdSelect());
        this._grille.delSelectLine();
    }
}
let vueAbonnementListe = new VueAbonnementListe;
export { vueAbonnementListe };
//# sourceMappingURL=class_abonnement_liste.js.map