import { vueAbonnementEdit } from "./class_abonnement_edit";
vueAbonnementEdit.init(APIpageWeb.params, {
    edtAbonnementNum: document.querySelector('[id = edt_abonnement_num]'),
    dateAbonnement: document.querySelector('[id = date_abonnement_date]'),
    areaCommentaire: document.querySelector('[id = area_commentaire]'),
    edtAdherentNum: document.querySelector('[id = edt_adherent_num]'),
    btnValider: document.querySelector('[id = btn_valider]'),
    btnAnnuler: document.querySelector('[id = btn_annuler]'),
    btnRetour: document.querySelector('[id = btn_retour]'),
    divTitre: document.querySelector('[id = div_titre]'),
    fichierHTMLAdhesion: "aa",
    divAdhesion: document.querySelector('[id = div_adh]'),
    divAdh2: document.querySelector('[id = div_adh2]'),
    divAdh3: document.querySelector('[id = div_adh3]')
});
vueAbonnementEdit.form.edtAdherentNum.addEventListener('change', function () {
    vueAbonnementEdit.detailAdherent(vueAbonnementEdit.form.edtAdherentNum.value);
});
vueAbonnementEdit.form.btnRetour.addEventListener('click', function () {
    vueAbonnementEdit.retourClick("abonnement_edit");
}); // fermer abonnement_edit
vueAbonnementEdit.form.btnAnnuler.addEventListener('click', function () {
    vueAbonnementEdit.retourClick("abonnement_edit");
});
//vueAbonnementEdit.form.btnValider.addEventListener ('click', function () {
// vueAbonnementEdit.validerClick("salle_edit",vueSalleEquipement); });
//# sourceMappingURL=abonnement_edit.js.map