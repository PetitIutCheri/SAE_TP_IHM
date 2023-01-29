import { LesThemes, LesThemesByAbonnement } from "../modele/data_theme";
class VueAbonnementListe {
    constructor() { }
    get form() { return this._form; }
    get data() { return this._data; }
    get grille() { return this._grille; }
    get montent() { return this._montant; }
    init(form) {
        this._grille = new GrilleTabulaire;
        this._data = [];
        this._form = form;
        const lesThemes = new LesThemes;
        this._montant = LesThemesByAbonnement.getTotal();
        this._data = lesThemes.listAll();
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
}
let vueAbonnementListe = new VueAbonnementListe;
export { vueAbonnementListe };
//# sourceMappingURL=class_abonnement_theme.js.map