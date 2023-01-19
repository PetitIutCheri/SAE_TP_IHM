import {LesAbonnements} from "../modele/data_abonnement"
 type TAbonnementListeForm = {
    /* page abonnement_liste.html */
 tableAbonnement : HTMLTableElement,
 btnDetail :HTMLInputElement, btnAjouter :HTMLInputElement, 
btnModifier :HTMLInputElement, btnSupprimer : HTMLInputElement,


}
class VueAbonnementListe {
   private _grille : GrilleTabulaire;
   private _data : TdataSet;
   private _form : TAbonnementListeForm
   constructor() {/*rien */ }

   get form() :TAbonnementListeForm {return this._form}
   get data() :TdataSet {return this._data}
   get grille() :GrilleTabulaire {return this._grille}

init(form : TAbonnementListeForm):void{
   this._grille = new GrilleTabulaire;
   this._data = [];
   this._form = form;
   
   const lesAbonnements = new LesAbonnements;
   this._data = lesAbonnements.listAll();

   this._grille = APIpageWeb.showArray(this.form.tableAbonnement.id,this._data,'abonNum',true)
}

}

let vueAbonnementListe = new VueAbonnementListe
export{vueAbonnementListe}


