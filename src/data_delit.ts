import { IdError } from "./Exceptions/IdError";
import { NatureError } from "./Exceptions/NatureError";
import { TarifError } from "./Exceptions/TarifError";

class UnTypeDelit {
  private _idDelit: string;
  private _natureDelit: string;
  private _tarif: string;
  constructor(id_delit = "", nature = "", tarif = "") {
    // initialisation à l’instanciation
    this._idDelit = id_delit;
    this._natureDelit = nature;
    this._tarif = tarif;
  }
  // définition des « getters » et des « setters » pour les attributs privés de la classe
  get idDelit(): string {
    return this._idDelit;
  }
  set idDelit(id_delit: string) {
    if (!Number.isInteger(parseFloat(id_delit)) || parseFloat(id_delit) < 0) {
      throw new IdError("Id delit doit etre un entier positif");
    }
    this._idDelit = id_delit;
  }
  get natureDelit(): string {
    return this._natureDelit;
  }
  set natureDelit(nature: string) {
    if (nature.length < 9) {
      throw new NatureError("La nature du delit doit etre constituée d'au moins 9 caractères");
    }
    this._natureDelit = nature;
  }
  get tarif(): string {
    return this._tarif;
  }
  set tarif(tarif: string) {
    if (parseFloat(tarif) < 0 || isNaN(parseFloat(tarif))) {
      throw new TarifError("La tarif du delit doit etre un reel strictement positif");
    }
    this._tarif = tarif;
  }
}
type TTypeDelits = { [key: string]: UnTypeDelit }; // tableau d’objets UnTypeDelit
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export { UnTypeDelit };
export { TTypeDelits };
