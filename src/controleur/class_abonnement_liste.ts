import {LesAbonnements} from "../modele/data_abonnement.js"

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

   this._grille = APIpageWeb.showArray(this.form.tableAbonnement.id,this._data,'abon_num',true)
}
detailClick(nomFichierHTML:string, idConteneur:string):void{
   if (this._grille.getIdSelect() !== ""){
   const chaine='?affi&' +encodeURIComponent (this._grille.getIdSelect());
   APIpageWeb.showModal(nomFichierHTML+chaine, idConteneur);
   }
}
ajouterClick(nomFichierHTML:string, idConteneur:string):void{
   const chaine='?ajout&';
   APIpageWeb.showModal(nomFichierHTML+chaine, idConteneur);
}
modifierClick(nomFichierHTML:string, idConteneur:string):void{
   if (this._grille.getIdSelect() !== ""){
   const chaine='?modif&'+encodeURIComponent (this._grille.getIdSelect());
   APIpageWeb.showModal(nomFichierHTML+chaine, idConteneur);
}
}
supprimerClick():void{
   if(this._grille.getIdSelect()!== ""){
      APIpageWeb.confirmation("Suppression de l'abonnement","Confirmez-vous la suppression de l'abonnement"+this._grille.getIdSelect(),vueAbonnementListe,"supprimerAbonnement()")
   }
}
supprimerAbonnement():void{
   let lesAbonnements : LesAbonnements = new LesAbonnements();

   lesAbonnements.delete(this._grille.getIdSelect());
   this._grille.delSelectLine();
}


}

let vueAbonnementListe = new VueAbonnementListe
export{vueAbonnementListe}


