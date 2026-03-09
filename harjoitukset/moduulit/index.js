// index.js
//
// Tämä on pääohjelma. Täältä käynnistetään harjoitus.
// Aja tämä komennolla: node index.js

import { rekisteroidy, kirjaudu } from "./controllers/auth.js";
import { haeKaikkiKayttajat, haeKayttaja } from "./controllers/users.js";

// ============================================================
// HARJOITUS 1: Named Export - käyttäjien haku
// ============================================================
console.log("\n========================================");
console.log("HARJOITUS 1: Haetaan käyttäjät");
console.log("========================================");

haeKaikkiKayttajat();

// ============================================================
// HARJOITUS 2: Named Export - yksittäinen käyttäjä
// ============================================================
console.log("\n========================================");
console.log("HARJOITUS 2: Haetaan yksittäinen käyttäjä");
console.log("========================================");

haeKayttaja(2);          // Löytyy
haeKayttaja(999);        // Ei löydy

// ============================================================
// HARJOITUS 3: Rekisteröinti - onnistunut
// ============================================================
console.log("\n========================================");
console.log("HARJOITUS 3: Rekisteröinti (onnistunut)");
console.log("========================================");

rekisteroidy("Laura Leinonen", "laura@example.com", "salasana123");

// ============================================================
// HARJOITUS 4: Rekisteröinti - virhetilanteet
// ============================================================
console.log("\n========================================");
console.log("HARJOITUS 4: Rekisteröinti (virheet)");
console.log("========================================");

rekisteroidy("M", "matti@example.com", "salasana123");   // Nimi liian lyhyt
rekisteroidy("Teppo", "teppoexample.com", "salasana123"); // Email väärä
rekisteroidy("Teppo", "teppo@example.com", "lyhyt");      // Salasana liian lyhyt
rekisteroidy("Teppo", "matti@example.com", "salasana123");// Email jo käytössä

// ============================================================
// HARJOITUS 5: Kirjautuminen
// ============================================================
console.log("\n========================================");
console.log("HARJOITUS 5: Kirjautuminen");
console.log("========================================");

kirjaudu("maija@example.com", "mikätahansa");  // Onnistuu
kirjaudu("olematon@example.com", "salasana");  // Epäonnistuu

// ============================================================
// KOKEILE ITSE!
// ============================================================
//
// Poista kommenttimerkki (#) alta ja kokeile:
//
// rekisteroidy("Oma Nimi", "oma@email.com", "omasalasana");
// kirjaudu("oma@email.com", "omasalasana");
// haeKayttaja(1);
