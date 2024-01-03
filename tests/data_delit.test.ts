import { UnTypeDelit } from "../src/data_delit";
import { IdError } from "../src/Exceptions/IdError";
import { NatureError } from "../src/Exceptions/NatureError";
import { TarifError } from "../src/Exceptions/TarifError";

let delit: UnTypeDelit;

beforeEach(() => {
  delit = new UnTypeDelit();
});

test("set idDelit correctement", () => {
  const idDelit = "25";
  delit.idDelit = idDelit;
  expect(delit.idDelit).toBe(idDelit);
});

test("set idDelit negative", () => {
  const idDelit = "-15";
  expect(() => {
    delit.idDelit = idDelit;
  }).toThrow(IdError);
});

test("set idDelit pas un nombre", () => {
  const idDelit = "aa";
  expect(() => {
    delit.idDelit = idDelit;
  }).toThrow(IdError);
});

test("set idDelit pas un entier", () => {
  const idDelit = "136.25";
  expect(() => {
    delit.idDelit = idDelit;
  }).toThrow(IdError);
});

test("set nature correctement", () => {
  const nature = "2021-12-31";
  delit.natureDelit = nature;
  expect(delit.natureDelit).toBe(nature);
});

test("set nature pas longue assez", () => {
  const nature = "zz";
  expect(() => {
    delit.natureDelit = nature;
  }).toThrow(NatureError);
});

test("set tarif correctement", () => {
  const tarif = "220";
  delit.tarif = tarif;
  expect(delit.tarif).toBe(tarif);
});

test("set tarif pas un nombre", () => {
  const tarif = "Bing";
  expect(() => {
    delit.tarif = tarif;
  }).toThrow(TarifError);
});

test("set tarif nombre negatif", () => {
  const tarif = "-25";
  expect(() => {
    delit.tarif = tarif;
  }).toThrow(TarifError);
});
