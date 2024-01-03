import { DateError } from "./Exceptions/DateError";
import { ImmatError } from "./Exceptions/ImmatError";
import { MarqueError } from "./Exceptions/MarqueError";
import { ModeleError } from "./Exceptions/ModeleError";
import { NumPermisError } from "./Exceptions/NumPermisError";

//finito
class UnVehicule {
  // définition de la classe gérant les données d’un vehicule
  private _noImmat: string;
  private _dateImmat: string;
  private _modeleVehicule: string;
  private _marqueVehicule: string;
  private _noPermis: string;
  constructor(
    no_immat = "",
    date_immat = "",
    modele_vehicule = "",
    marque_vehicule = "",
    no_permis = ""
  ) {
    // initialisation à l’instanciation
    this._noImmat = no_immat;
    this._dateImmat = date_immat;
    this._modeleVehicule = modele_vehicule;
    this._marqueVehicule = marque_vehicule;
    this._noPermis = no_permis;
  }
  // définition des « getters » et des « setters » pour la lecture/écriture des attributs privés de la classe
  get noImmat(): string {
    return this._noImmat;
  }
  set noImmat(no_immat: string) {
    const regex = /^[A-Z]{2}\d{3}[A-Z]{2}$/;

    if (!regex.test(no_immat)) {
      throw new ImmatError(
        "N° immat invalide, un numéro d'immatriculation est constitué ainsi : 2 lettres, 3 chiffres, 2 lettres "
      );
    }
    this._noImmat = no_immat;
  }
  get dateImmat(): string {
    return this._dateImmat;
  }
  set dateImmat(date_immat: string) {
    if (!dateValide(date_immat)) {
      throw new DateError("Date Immatriculation invalide");
    }
    this._dateImmat = date_immat;
  }
  get modeleVehicule(): string {
    return this._modeleVehicule;
  }
  set modeleVehicule(modele_vehicule: string) {
    if (!/^[A-Za-z\s\d]{3,}$/.test(modele_vehicule)) {
      throw new ModeleError(
        "Le modèle doit etre constitué de lettres, chiffres et espaces, 1 caractère minimum "
      );
    }
    this._modeleVehicule = modele_vehicule;
  }
  get marqueVehicule(): string {
    return this._marqueVehicule;
  }
  set marqueVehicule(marque_vehicule: string) {
    if (!/^[A-Za-z\s]{3,}$/.test(marque_vehicule)) {
      throw new MarqueError(
        "La marque doit être constituée de caractères alphabétiques et d'espaces(pas obligatoire), avec un minimum de 3 caractères."
      );
    }
    this._marqueVehicule = marque_vehicule;
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
  // TRIKI OSAMA MOUSSAID YOUSSEF
}
type TVehicules = { [key: string]: UnVehicule }; // tableau d’objets UnVehicule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class LesVehicules {
  constructor() {
    // rien
  }
}

function dateValide(date: string): boolean {
  const dateJour = new Date();
  const dateSelec = new Date(date);
  if (dateSelec <= dateJour && !isNaN(dateSelec.getTime())) {
    return true;
  } else return false;
}

export { UnVehicule };
export { LesVehicules };
export { TVehicules };
