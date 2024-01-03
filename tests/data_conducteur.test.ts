import { UnCond } from "../src/data_conducteur";
import { DateError } from "../src/Exceptions/DateError";
import { NomPrenomError } from "../src/Exceptions/NomPrenomError";
import { NumPermisError } from "../src/Exceptions/NumPermisError";

let conducteur: UnCond;

beforeEach(() => {
  conducteur = new UnCond();
});

test("set noPermis correctement", () => {
  const noPermis = "CD24";
  conducteur.noPermis = noPermis;
  expect(conducteur.noPermis).toBe(noPermis);
});

test("set noPermis invalide", () => {
  const noPermis = "ADC123";
  expect(() => {
    conducteur.noPermis = noPermis;
  }).toThrow(NumPermisError);
});

test("set datePermis correctement", () => {
  const datePermis = "2021-12-31";
  conducteur.datePermis = datePermis;
  expect(conducteur.datePermis).toBe(datePermis);
});

test("set datePermis invalide", () => {
  const datePermis = "2023-dsqba";
  expect(() => {
    conducteur.datePermis = datePermis;
  }).toThrow(DateError);
});

test("set nomCond correctement", () => {
  const nomCond = "Trik-i";
  conducteur.nomCond = nomCond;
  expect(conducteur.nomCond).toBe(nomCond);
});

test("set nomCond invalide", () => {
  const nomCond = "Triki27";
  expect(() => {
    conducteur.nomCond = nomCond;
  }).toThrow(NomPrenomError);
});

test("set prenomCond correctement", () => {
  const prenomCond = "Tri-Ki Osama_";
  conducteur.prenomCond = prenomCond;
  expect(conducteur.prenomCond).toBe(prenomCond);
});

test("set prenomCond invalide", () => {
  const prenomCond = "a";
  expect(() => {
    conducteur.prenomCond = prenomCond;
  }).toThrow(NomPrenomError);
});
