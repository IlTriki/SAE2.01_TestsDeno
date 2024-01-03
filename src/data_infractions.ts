import { DateError } from "./Exceptions/DateError";
import { IdError } from "./Exceptions/IdError";
import { ImmatError } from "./Exceptions/ImmatError";
import { NumPermisError } from "./Exceptions/NumPermisError";

//finito
class UneInfraction {
  private _id_Inf: string;
  private _date_Inf: string;
  private _no_immat: string;
  private _no_Permis: string;
  constructor(id_inf = "", date_inf = "", no_immat = "", no_permis = "") {
    this._id_Inf = id_inf;
    this._date_Inf = date_inf;
    this._no_immat = no_immat;
    this._no_Permis = no_permis;
  } // TRIKI OSAMA MOUSSAID YOUSSEF
  get id_Inf(): string {
    return this._id_Inf;
  }
  set id_Inf(id_inf: string) {
    if (!Number.isInteger(parseFloat(id_inf)) || parseFloat(id_inf) < 0) {
      throw new IdError("Id infraction doit etre un entier positif");
    }
    this._id_Inf = id_inf;
  }
  get date_Inf(): string {
    return this._date_Inf;
  }
  set date_Inf(date_inf: string) {
    if (!dateValide(date_inf)) {
      throw new DateError("Date infraction invalide");
    }
    this._date_Inf = date_inf;
  }
  get no_immat(): string {
    return this._no_immat;
  }
  set no_immat(no_immat: string) {
    const regex = /^[A-Z]{2}\d{3}[A-Z]{2}$/;

    if (!regex.test(no_immat)) {
      throw new ImmatError(
        "N° immat invalide, un numéro d'immatriculation est constitué ainsi : 2 lettres, 3 chiffres, 2 lettres "
      );
    }
    this._no_immat = no_immat;
  }
  get no_Permis(): string {
    return this._no_Permis;
  }
  set no_Permis(no_permis: string) {
    const regex = /^[A-Z]{2}\d{2}$/;
    if (!regex.test(no_permis)) {
      throw new NumPermisError(
        "N° permis invalide, un numéro de permis est constitué de 2 lettres suivies de 2 chiffres"
      );
    }
    this._no_Permis = no_permis;
  }
}
type TInfraction = { [key: string]: UneInfraction };
class LesInfractions {
  constructor() {
    // rien
  }
  private prepare(where: string): string {
    let sql: string;
    sql = "SELECT id_inf, date_inf, no_immat, no_permis ";
    sql += " FROM infraction";
    if (where !== "") {
      sql += " WHERE " + where;
    }
    return sql;
  }
}

function dateValide(date: string): boolean {
  const dateJour = new Date();
  const dateSelec = new Date(date);
  if (dateSelec <= dateJour && !isNaN(dateSelec.getTime())) {
    return true;
  } else return false;
}

export { UneInfraction };
export { LesInfractions };
export { TInfraction };
