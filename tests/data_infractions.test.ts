import { UneInfraction } from "../src/data_infractions";
import { IdError } from "../src/Exceptions/IdError";
import { DateError } from "../src/Exceptions/DateError";
import { ImmatError } from "../src/Exceptions/ImmatError";
import { NumPermisError } from "../src/Exceptions/NumPermisError";

let infraction: UneInfraction;

beforeEach(() => {
  infraction = new UneInfraction();
});

test("set id_Inf correctement", () => {
  const id_Inf = "13";
  infraction.id_Inf = id_Inf;
  expect(infraction.id_Inf).toBe(id_Inf);
});

test("set id_Inf pas un nombre", () => {
  const id_Inf = "AD";
  expect(() => {
    infraction.id_Inf = id_Inf;
  }).toThrow(IdError);
});

test("set id_Inf negatif", () => {
  const id_Inf = "-35";
  expect(() => {
    infraction.id_Inf = id_Inf;
  }).toThrow(IdError);
});

test("set id_Inf pas entier", () => {
  const id_Inf = "12.6";
  expect(() => {
    infraction.id_Inf = id_Inf;
  }).toThrow(IdError);
});

test("set date_Inf correctement", () => {
  const date_Inf = "2016-05-21";
  infraction.date_Inf = date_Inf;
  expect(infraction.date_Inf).toBe(date_Inf);
});

test("set date_Inf invalide", () => {
  const date_Inf = "20-dsq ba";
  expect(() => {
    infraction.date_Inf = date_Inf;
  }).toThrow(DateError);
});

test("set no_immat correctement", () => {
  const no_immat = "DE567FG";
  infraction.no_immat = no_immat;
  expect(infraction.no_immat).toBe(no_immat);
});

test("set no_immat invalide", () => {
  const no_immat = "TRI21D";
  expect(() => {
    infraction.no_immat = no_immat;
  }).toThrow(ImmatError);
});

test("set no_Permis correctement", () => {
  const no_Permis = "FG85";
  infraction.no_Permis = no_Permis;
  expect(infraction.no_Permis).toBe(no_Permis);
});

test("set no_Permis invalide(ordre incorrect)", () => {
  const no_Permis = "85FG";
  expect(() => {
    infraction.no_Permis = no_Permis;
  }).toThrow(NumPermisError);
});

test("set no_Permis invalide(longueur incorrecte)", () => {
  const no_Permis = "FG85BG95";
  expect(() => {
    infraction.no_Permis = no_Permis;
  }).toThrow(NumPermisError);
});
