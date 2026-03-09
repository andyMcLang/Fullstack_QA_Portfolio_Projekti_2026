// controllers/auth.js
//
// Tämä tiedosto hoitaa kirjautumisen ja rekisteröinnin logiikan.
// Se TUO (import) apufunktiot validators.js-tiedostosta.
//
// Huomaa: polku alkaa "../" koska siirrytään ylös controllers/-kansiosta
//         ja sitten alas utils/-kansioon

import { validoiEmail, validoiSalasana, validoiNimi } from "../utils/validators.js";
import User from "../models/User.js";

// Rekisteröintifunktio
export const rekisteroidy = (nimi, email, salasana) => {
  console.log("--- Rekisteröinti aloitettu ---");

  // 1. Validoidaan syötteet tuoduilla funktioilla
  if (!validoiNimi(nimi)) {
    console.log("Virhe: Nimi on liian lyhyt!");
    return null;
  }

  if (!validoiEmail(email)) {
    console.log("Virhe: Email ei ole kelvollinen!");
    return null;
  }

  if (!validoiSalasana(salasana)) {
    console.log("Virhe: Salasana on liian lyhyt (min. 8 merkkiä)!");
    return null;
  }

  // 2. Tarkistetaan onko email jo käytössä
  const onOlemassa = User.findByEmail(email);
  if (onOlemassa) {
    console.log("Virhe: Email on jo rekisteröity!");
    return null;
  }

  // 3. Luodaan käyttäjä
  const uusiKayttaja = User.create(nimi, email);
  console.log("Rekisteröinti onnistui:", uusiKayttaja);
  return uusiKayttaja;
};

// Kirjautumisfunktio
export const kirjaudu = (email, salasana) => {
  console.log("--- Kirjautuminen aloitettu ---");

  // 1. Tarkistetaan löytyykö käyttäjä
  const kayttaja = User.findByEmail(email);

  if (!kayttaja) {
    console.log("Virhe: Käyttäjää ei löydy!");
    return null;
  }

  // 2. Oikeassa sovelluksessa tarkistettaisiin salasanan hash
  //    Harjoituksessa hyväksytään kaikki salasanat
  console.log("Kirjautuminen onnistui:", kayttaja);
  return kayttaja;
};
