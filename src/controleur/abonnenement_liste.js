import {VueAbonnementListe} from "./class_abonnement_liste.js";

VueAbonnementListe.init({
    tableAbonnement:document.querySelector('id=[table_abonnement]'),
    btnDetail:document.querySelector('id=[btn_detail]'),
    btnAjouter:document.querySelector('id=[btn_ajouter]'),
    btnModifier:document.querySelector('id=[btn_modifier]'),
    btnSupprimer:document.querySelector('id=[btn_supprimer]'),
}
);