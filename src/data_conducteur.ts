import { DateError } from "./Exceptions/DateError";
import { NomPrenomError } from "./Exceptions/NomPrenomError";
import { NumPermisError } from "./Exceptions/NumPermisError";

//finito
class UnCond {
  private _noPermis: string;
  private _nomCond: string;
  private _prenomCond: string;
  private _datePermis: string;
  constructor(no_permis = "", nom_cond = "", prenom_cond = "", date_permis = "") {
    this._noPermis = no_permis;
    this._nomCond = nom_cond;
    this._prenomCond = prenom_cond;
    this._datePermis = date_permis;
  }
  get noPermis(): string {
    return this._noPermis;
  }
  set noPermis(no_permis: string) {
    const regex = /^[A-Z]{2}\d{2}$/;
    if (!regex.test(no_permis)) {
      throw new NumPermisError(
        "N° permis invalide, un numéro de permis est constitué de 2 lettres suivies de 2 chiffres"
      );
    }
    this._noPermis = no_permis;
  }
  get nomCond(): string {
    return this._nomCond;
  }
  set nomCond(nom_cond: string) {
    const regex = /^[A-Za-z-_\s]{2,}$/;
    if (!regex.test(nom_cond)) {
      throw new NomPrenomError(
        "Nom saisie invalide, il doit etre constitué d'au moins 2 caractères, alphabétiques, tiret, espace uniquement"
      );
    }
    this._nomCond = nom_cond;
  }
  get prenomCond(): string {
    return this._prenomCond;
  }
  set prenomCond(prenom_cond: string) {
    const regex = /^[A-Za-z-_\s]{2,}$/;
    if (!regex.test(prenom_cond)) {
      throw new NomPrenomError(
        "Prenom saisie invalide, il doit etre constitué d'au moins 2 caractères, alphabétiques, tiret, espace uniquement"
      );
    }
    this._prenomCond = prenom_cond;
  }
  get datePermis(): string {
    return this._datePermis;
  }
  set datePermis(date_permis: string) {
    if (!dateValide(date_permis)) {
      throw new DateError("Date permis invalide");
    }
    this._datePermis = date_permis;
  }
}
type TConds = { [key: string]: UnCond };
class LesConds {
  constructor() {
    // rien
  }

  private prepare(where: string): string {
    let sql: string;
    sql = "SELECT no_permis, nom, prenom, date_permis FROM conducteur ";
    if (where !== "") {
      sql += " WHERE " + where;
    }
    return sql;
  }
  // TRIKI OSAMA MOUSSAID YOUSSEF
}

function dateValide(date: string): boolean {
  const dateJour = new Date();
  const dateSelec = new Date(date);
  if (dateSelec <= dateJour && !isNaN(dateSelec.getTime())) {
    return true;
  } else return false;
}

export { UnCond };
export { LesConds };
export { TConds };
