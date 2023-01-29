import { LesAbonnements } from "../modele/data_abonnement";
import { LesAdherents } from "../modele/data_adherent";
class VueAbonnementEdit {
    constructor() {
        //rien
    }
    get form() { return this._form; }
    initMsgErreur() {
        // pour chaque champ à vérifier, création des 3 messages d'erreur + msg pour correct
        // avec chaîne vide si pas d'erreur générée pour un type d'erreur potentielle
        this._erreur = {
            edtAbonnementNum: { statut: 'vide',
                msg: { correct: "",
                    vide: "Le numéro d'abonnement doit être renseigné.",
                    inconnu: "Le numéro ne peut contenir que des lettres et des chiffres.",
                    doublon: "Le numéro de l'abonnement est déjà attribué."
                } },
            dateAbonnement: { statut: 'vide',
                msg: { correct: "",
                    vide: "la date doit etre renseigné.",
                    inconnu: "la date doit etre de la forme jj/mm/AAAA",
                    doublon: ""
                } },
            edtAdherentNum: { statut: 'vide',
                msg: { correct: "",
                    vide: "Le numéro d'adherent doit être renseigné.",
                    inconnu: "Le numéro ne peut contenir que des lettres et des chiffres.",
                    doublon: ""
                } }
            // a voir si on gere ici le message d'erreur du nombre de theme etcc...
        };
    }
    init(params, form) {
        this._form = form;
        this._params = params;
        this.initMsgErreur();
        let titre;
        switch (this._params.statut) {
            case 'ajout':
                titre = "Nouvel abonnement";
                break;
            case 'modif':
                titre = "Modification dun abonnement";
                break;
            default: titre = "Détail dun abonnement";
        }
        this.form.divTitre.textContent = titre;
        const lesAbonnements = new LesAbonnements;
        // const lesAdherents = new LesAdherents
        const affi = this._params.statut === 'affi';
        if (this._params.statut !== 'ajout') {
            const abonnement = lesAbonnements.byAbonNum(params.id);
            // const adherent = lesAdherents.byAdhNum(params.id)
            this.form.edtAbonnementNum.value = abonnement.abonNum;
            this.form.edtAdherentNum.value = abonnement.adhNum;
            this.form.dateAbonnement.value = abonnement.abonDate;
            this.form.areaCommentaire.value = abonnement.abonComment;
            this.form.edtAbonnementNum.readOnly = true;
            this.form.dateAbonnement.readOnly = true;
            this.form.areaCommentaire.readOnly = affi;
            this.form.edtAdherentNum.readOnly = true;
            this._erreur.edtAbonnementNum.statut = "correct";
            this.detailAdherent(abonnement.adhNum);
        }
        ;
        this.form.btnAnnuler.hidden = affi;
        this.form.btnValider.hidden = affi;
        this.form.btnRetour.hidden = !affi;
        let chaine = "?" + encodeURIComponent(this._params.statut)
            + "&" + encodeURIComponent(this._params.id);
        APIpageWeb.show(this.form.fichierHTMLAdhesion + chaine, this.form.divAdhesion.id);
    }
    verifNum(valeur) {
        const lesAbonnements = new LesAbonnements;
        const err = this._erreur.edtAbonnementNum;
        err.statut = "correct";
        const chaine = valeur.trim();
        if (chaine.length > 0) {
            if (!chaine.match(/^([a-zA-Z0-9]+)$/)) {
                this._erreur.edtAbonnementNum.statut = 'inconnu';
            }
            else if ((this._params.statut === 'ajout') && (lesAbonnements.byAbonNum(chaine))) {
                this._erreur.edtAbonnementNum.statut = 'doublon';
            }
        }
        else
            err.statut = 'vide';
    }
    // verifEtage(valeur : string):void {
    //     const err = this._erreur.edtEtage
    //     err.statut = "correct";
    //     const chaine : string = valeur.trim();
    //     if (chaine.length === 0) {
    //     err.statut = 'vide';
    //     }
    //     }
    detailAdherent(valeur) {
        const err = this._erreur.edtAbonnementNum;
        const lesAdhs = new LesAdherents;
        const adh2 = this._form.divAdh2;
        const adh3 = this._form.divAdh3;
        adh2.textContent = "";
        adh3.textContent = "";
        err.statut = "correct";
        const chaine = valeur.trim();
        if (chaine.length > 0) {
            const adh = lesAdhs.byAdhNum(chaine);
            if (adh.adhNum !== "") {
                adh2.textContent
                    = "Adhérent" + "\n\r" + adh.adhCiv + " " + adh.adhNom + " " + adh.adhPrenom + "\n\r" + adh.adhMel + "\n\r" + adh.adhAdr + "\n\r" + adh.adhCp + adh.adhVille;
                adh3.textContent = "Catégorie Scioprofessionelle" + "\n\r" + adh.cspNum;
            }
            else {
                err.statut = 'inconnu';
                adh2.textContent = err.msg.inconnu;
                adh3.textContent = err.msg.inconnu;
            }
        }
        else
            err.statut = 'vide';
    }
    retourClick(fichierHTML) {
        APIpageWeb.hide(fichierHTML);
    }
    traiteErreur(uneErreur, zone) {
        let correct = true;
        zone.textContent = "";
        if (uneErreur.statut !== "correct") { // non correct ==> erreur
            if (uneErreur.msg[uneErreur.statut] !== '') { // erreur
                zone.textContent = uneErreur.msg[uneErreur.statut];
                correct = false;
            }
        }
        return correct;
    }
}
let vueAbonnementEdit = new VueAbonnementEdit;
export { vueAbonnementEdit };
export { VueAbonnementEdit };
//# sourceMappingURL=class_abonnement_edit.js.map