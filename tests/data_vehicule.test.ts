import { UnVehicule } from "../src/data_vehicule";
import { DateError } from "../src/Exceptions/DateError";
import { ImmatError } from "../src/Exceptions/ImmatError";
import { MarqueError } from "../src/Exceptions/MarqueError";
import { ModeleError } from "../src/Exceptions/ModeleError";
import { NumPermisError } from "../src/Exceptions/NumPermisError";

let vehicule: UnVehicule;

beforeEach(() => {
  vehicule = new UnVehicule();
});

test("set noImmat correctement", () => {
  const noImmat = "AB123CD";
  vehicule.noImmat = noImmat;
  expect(vehicule.noImmat).toBe(noImmat);
});

test("set noImmat invalide", () => {
  const noImmat = "ACD21";
  expect(() => {
    vehicule.noImmat = noImmat;
  }).toThrow(ImmatError);
});

test("set dateImmat correctement", () => {
  const dateImmat = "2023-05-29";
  vehicule.dateImmat = dateImmat;
  expect(vehicule.dateImmat).toBe(dateImmat);
});

test("set dateImmat invalide", () => {
  const dateImmat = "2023-50-29";
  expect(() => {
    vehicule.dateImmat = dateImmat;
  }).toThrow(DateError);
});

test("set dateImmat chaine", () => {
  const dateImmat = "chilling";
  expect(() => {
    vehicule.dateImmat = dateImmat;
  }).toThrow(DateError);
});

test("set modeleVehicule correctement", () => {
  const modeleVehicule = "Hyundai Kona 2";
  vehicule.modeleVehicule = modeleVehicule;
  expect(vehicule.modeleVehicule).toBe(modeleVehicule);
});

test("set modeleVehicule invalide", () => {
  const modeleVehicule = "@@@%!";
  expect(() => {
    vehicule.modeleVehicule = modeleVehicule;
  }).toThrow(ModeleError);
});

test("set marqueVehicule correctement", () => {
  const marqueVehicule = "Tesla Ford";
  vehicule.marqueVehicule = marqueVehicule;
  expect(vehicule.marqueVehicule).toBe(marqueVehicule);
});

test("set marqueVehicule invalide(contient chiffre)", () => {
  const marqueVehicule = "Tesla modele 3";
  expect(() => {
    vehicule.marqueVehicule = marqueVehicule;
  }).toThrow(MarqueError);
});

test("set noPermis correctement", () => {
  const noPermis = "AB12";
  vehicule.noPermis = noPermis;
  expect(vehicule.noPermis).toBe(noPermis);
});

test("set noPermis invalide(ordre incorrect)", () => {
  const noPermis = "A12B";
  expect(() => {
    vehicule.noPermis = noPermis;
  }).toThrow(NumPermisError);
});

test("set noPermis invalide(longueur incorrecte)", () => {
  const noPermis = "AB12CD17";
  expect(() => {
    vehicule.noPermis = noPermis;
  }).toThrow(NumPermisError);
});
