import { connexion } from "./connexion";
class UnAbonnement { // définition de la classe gérant les données d’un département
    private _abon_num: string;
    private _abon_date : string;
    private _abon_comment : string;
    private _adh_num : string;
    constructor(abon_num = "", abon_date ="" , abon_comment = "",adh_num = "" ) {
    // initialisation à l’instanciation
    this._abon_num = abon_num;
    this._abon_date = abon_date;
    this._abon_comment = abon_comment;
    this._adh_num = adh_num;
    }
    // définition des « getters » et des « setters » pour la lecture/écriture des attributs privés de la classe
get abon_num():string { return this._abon_num; }
set abon_num ( abon_num : string ) { this._abon_num = abon_num; }
get abon_date():string { return this._abon_date; }
set abon_date ( abon_date : string ) { this._abon_date = abon_date; }
get abon_comment():string { return this._abon_comment; }
set abon_comment ( resp_dept : string ) { this._abon_comment = resp_dept; }
get adh_num():string { return this._adh_num; }
set adh_num ( resp_dept : string ) { this._adh_num = resp_dept; }

toArray():TtabAsso{
// renvoie l’objet sous la forme d’un tableau associatif 
// pour un affichage dans une ligne d’un tableau HTML
let tableau : TtabAsso = {'abon_num':this.abon_num, 'abon_date':this.abon_date, 'abon_comment':this.abon_comment,'adh_num':this.adh_num };
return tableau;
}

}
class TAbonnement { [key : string]: UnAbonnement} ;

class LesAbonnements {
    constructor(){

    }
    private load(result : TdataSet) : TAbonnement{
        // à partir d’un TdataSet, conversion en tableau d’objets UnDept 
        const abons : TAbonnement = {};
        for (let i=0; i<result.length; i++) {
        const item:TtabAsso = result[i];
        const abon = new UnAbonnement(item['abon_num'], item['abon_date'], item['abon_comment'], item['adh_num']);
        abons[abon.abon_num] = abon; // clé d’un élément du tableau : code dépt 
        }
        return abons
}

private prepare(where:string):string { // préparation de la requête avec ou sans restriction (WHERE)
    let sql : string;
    sql = "SELECT abon_num, abon_comment, adh_num FROM ABONNEMENT";
    if (where !== "")
    {
    sql += " WHERE " +where;
    }
    return sql;
}
}