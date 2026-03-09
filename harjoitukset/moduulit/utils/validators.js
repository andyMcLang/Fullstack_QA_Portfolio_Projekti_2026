// utils/validators.js
//
// Tämä tiedosto sisältää uudelleenkäytettäviä validointifunktioita.
// Nämä funktiot viedään (export) muiden tiedostojen käyttöön.
//
// Named Export = nimetty vienti
// -> Tuodaan aina aaltosulkeissa: import { validoiEmail } from "..."

export const validoiEmail = (email) => {
  return email.includes("@");
};

export const validoiSalasana = (salasana) => {
  return salasana.length >= 8;
};

export const validoiNimi = (nimi) => {
  return nimi.length >= 2;
};
