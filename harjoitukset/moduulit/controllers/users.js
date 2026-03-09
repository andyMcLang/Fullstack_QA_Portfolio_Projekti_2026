// controllers/users.js
//
// Tämä tiedosto hoitaa käyttäjiin liittyvät toiminnot.
// Se TUO (import) User-mallin oletusvientiä käyttäen (ilman aaltosulkeita).

import User from "../models/User.js";

// Hae kaikki käyttäjät
export const haeKaikkiKayttajat = () => {
  console.log("--- Haetaan kaikki käyttäjät ---");
  const kayttajat = User.findAll();
  console.log(`Löydettiin ${kayttajat.length} käyttäjää:`);
  console.log(kayttajat);
  return kayttajat;
};

// Hae yksittäinen käyttäjä
export const haeKayttaja = (id) => {
  console.log(`--- Haetaan käyttäjä id:llä ${id} ---`);
  const kayttaja = User.findById(id);

  if (!kayttaja) {
    console.log("Käyttäjää ei löydy!");
    return null;
  }

  console.log("Käyttäjä löytyi:", kayttaja);
  return kayttaja;
};
