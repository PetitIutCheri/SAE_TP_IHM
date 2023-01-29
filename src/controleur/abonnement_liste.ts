import {vueAbonnementListe} from "./class_abonnement_liste.js";

vueAbonnementListe.init({
    tableAbonnement:document.querySelector('[id=table_abonnement]'),
    btnDetail:document.querySelector('[id=btn_detail]'),
    btnAjouter:document.querySelector('[id=btn_ajouter]'),
    btnModifier:document.querySelector('[id=btn_modifier]'),
    btnSupprimer:document.querySelector('[id=btn_supprimer]')
})
vueAbonnementListe.form.btnDetail.addEventListener ('click',function (){
    vueAbonnementListe.detailClick('abonnement_edit','div_modale')
});
vueAbonnementListe.form.btnAjouter.addEventListener ('click',function (){
    vueAbonnementListe.ajouterClick('abonnement_edit','div_modale')
});
vueAbonnementListe.form.btnModifier.addEventListener ('click',function (){
    vueAbonnementListe.modifierClick('abonnement_edit','div_modale')
});
vueAbonnementListe.form.btnSupprimer.addEventListener ('click',function (){
    vueAbonnementListe.supprimerClick();
});