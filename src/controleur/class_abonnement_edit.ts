import { UnAbonnement,LesAbonnements } from "../modele/data_abonnement";
import { UnAdherent,LesAdherents  } from "../modele/data_adherent";

type TstatutValeur = 'correct' | 'vide' | 'inconnu' | 'doublon'

type TErreur = {status : TstatutValeur, msg:{[key in TstatutValeur]:string}}

type TAbonnementEditForm = { 
    edtAbonnementNum:HTMLInputElement,
    dateAbonnement:HTMLInputElement,
    areaCommentaire:HTMLAreaElement,
    edtAdherentNum:HTMLInputElement,
    btnValider:HTMLInputElement,
    btnAnnuler:HTMLInputElement,
    btnRetour:HTMLInputElement,
    divTitre:HTMLElement,
    identification_adh:HTMLElement,
    melAdh:HTMLElement,
    adresseAdh:HTMLElement,
    codePostalAdh:HTMLElement,
    fichierHTMLAdhesion :string,
    divAdhesion:HTMLElement
    
}
class VueAbonnementEdit{
    private _params: Tparams
    private _form : TAbonnementEditForm
    private _erreur : {
        [key:string] : TErreur
    }
    constructor(){
     //rien
    }
    get form():TAbonnementEditForm {return this._form}

    initMsgErreur():void { 
        // pour chaque champ à vérifier, création des 3 messages d'erreur + msg pour correct
        // avec chaîne vide si pas d'erreur générée pour un type d'erreur potentielle
        this._erreur = { 
        edtNum : {status :'vide'
        , msg:{correct:""
        , vide:"Le numéro d'abonnement doit être renseigné."
        ,inconnu :"Le numéro ne peut contenir que des lettres et des chiffres."
        ,doublon:"Le numéro de l'abonnement est déjà attribué."
        } }
        ,dateAbonnement :{status :'vide'
        , msg:{correct:""
        , vide:"la date doit etre renseigné."
        ,inconnu:"la date doit etre de la forme jj/mm/AAAA"
        ,doublon:""
        } }
        ,edtAdherentNum: {status :'vide'
        , msg:{correct:""
        , vide:"Le numéro d'adherent doit être renseigné."
        ,inconnu :"Le numéro ne peut contenir que des lettres et des chiffres."
        ,doublon:""
        } }
        // a voir si on gere ici le message d'erreur du nombre de theme etcc...
        }
        }
   
        init(params: Tparams, form:TAbonnementEditForm):void{
            this._form = form;
            this._params = params;
            this.initMsgErreur();
            let titre : string;
            switch (this._params.statut) {
            case 'ajout' : titre = "Nouvel abonnement"; break;
            case 'modif' : titre = "Modification dun abonnement"; break;
            default : titre = "Détail dun abonnement";
            }
            this.form.divTitre.textContent = titre;

            const lesAbonnements = new LesAbonnements
            const affi = this._params.statut === 'affi';
            if(this._params.statut !== 'ajout'){
                const abonnement = lesAbonnements.byAbonNum(params.id)
                this.form.edtAbonnementNum.value = abonnement.abonNum;
                this.form.dateAbonnement.value = abonnement.abonDate;
                this.form.areaCommentaire.ariaValueText = abonnement.abonComment;
                this.form.edtAdherentNum.value=abonnement.adhNum;
                this.form.edtAbonnementNum.readOnly = true;
                this.form.dateAbonnement.readOnly = true;
                this.form.areaCommentaire.ariaReadOnly =  affi.toString();
                this.form.edtAdherentNum.readOnly = true;

                this._erreur.edtAbonnementNum.status = "correct"
                //this.detailAdherent(adherent.codeAdh);
            }
            this.form.btnAnnuler.hidden = affi;
            this.form.btnValider.hidden = affi;
            this.form.btnRetour.hidden = !affi;
            
            let chaine : string = "?" +encodeURIComponent(this._params.statut) 
            +"&" +encodeURIComponent(this._params.id);
            APIpageWeb.show(this.form.fichierHTMLAdhesion +chaine, this.form.divAdhesion.id);
        }

}