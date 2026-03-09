// models/User.js
//
// Tämä tiedosto sisältää User-mallin.
// Malli kuvaa miten käyttäjädata käsitellään.
//
// Default Export = oletusvienti
// -> Tuodaan ILMAN aaltosulkeita: import User from "..."
// -> Voit antaa sille minkä nimen haluat tuodessa

// Kuviteltu käyttäjätietokanta (oikeasti tämä olisi PostgreSQL)
const kayttajat = [
  { id: 1, nimi: "Matti Meikäläinen", email: "matti@example.com", rooli: "admin" },
  { id: 2, nimi: "Maija Virtanen",    email: "maija@example.com", rooli: "user" },
  { id: 3, nimi: "Mikko Korhonen",    email: "mikko@example.com", rooli: "user" }
];

const User = {
  // Hae kaikki käyttäjät
  findAll: () => {
    return kayttajat;
  },

  // Hae yksi käyttäjä id:llä
  findById: (id) => {
    return kayttajat.find(k => k.id === id);
  },

  // Hae käyttäjä emaililla
  findByEmail: (email) => {
    return kayttajat.find(k => k.email === email);
  },

  // Luo uusi käyttäjä
  create: (nimi, email) => {
    const uusiKayttaja = {
      id: kayttajat.length + 1,
      nimi: nimi,
      email: email,
      rooli: "user"
    };
    kayttajat.push(uusiKayttaja);
    return uusiKayttaja;
  }
};

export default User;
