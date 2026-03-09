# Fullstack QA Portfolio - Opintopolku

## Projektin tavoite

Rakennat **Event Management System** -sovelluksen, jossa:
- Käyttäjät voivat rekisteröityä ja kirjautua
- Käyttäjät voivat luoda tapahtumia
- Käyttäjät voivat liittyä tapahtumiin
- Admin-käyttäjät voivat hallinnoida kaikkea
- Kaikki toiminnot testataan kattavasti

Tämä dokumentti on oppimispolkusi. Etene järjestyksessä.

---

# VAIHE 1: JavaScript-perusteet

Ennen kuin kirjoitat backend-koodia, sinun täytyy ymmärtää JavaScript.
Tämä on **kriittinen vaihe** - älä ohita sitä!

---

## 1.1 Muuttujat

Muuttuja on "laatikko", johon tallennat tietoa.

### let - muuttuva arvo

```javascript
let nimi = "Matti";
nimi = "Maija";  // Voit muuttaa arvoa
```

**Käyttö:** Kun arvo voi muuttua myöhemmin.

### const - pysyvä arvo

```javascript
const syntymavuosi = 1995;
syntymavuosi = 2000;  // VIRHE! Ei voi muuttaa
```

**Käyttö:** Kun arvo ei saa muuttua. **Suosi aina const:ia** - käytä let:iä vain kun muuttaminen on välttämätöntä.

### var - älä käytä

```javascript
var vanhatyyli = "älä käytä";
```

**Miksi ei?** `var` toimii eri tavalla kuin `let` ja `const`. Se on vanha tapa ja aiheuttaa bugeja. Unohda sen olemassaolo.

---

## 1.2 Tietotyypit

JavaScript tunnistaa erilaisia tietotyyppejä:

### Primitiivityypit

```javascript
// String (merkkijono)
const nimi = "Tapahtuma";
const kuvaus = 'Tämä on kuvaus';  // Voit käyttää " tai '

// Number (numero)
const osallistujia = 25;
const hinta = 19.99;

// Boolean (tosi/epätosi)
const onAktiivinen = true;
const onPeruutettu = false;

// Undefined (ei arvoa)
let tulevaTapahtuma;  // undefined - ei ole vielä asetettu

// Null (tyhjä arvo tarkoituksella)
const poistettuTapahtuma = null;  // Tarkoituksella tyhjä
```

### Milloin käyttää mitäkin?

| Tyyppi | Käyttötarkoitus | Esimerkki projektissa |
|--------|-----------------|----------------------|
| String | Tekstit | Käyttäjänimi, tapahtuman nimi |
| Number | Luvut | Osallistujamäärä, ID-numerot |
| Boolean | Kyllä/Ei -valinnat | Onko kirjautunut? Onko admin? |
| Undefined | Ei vielä määritelty | Muuttuja odottaa arvoa |
| Null | Tarkoituksella tyhjä | Poistettu resurssi |

---

## 1.3 Objektit (Object)

Objekti ryhmittää yhteen kuuluvia tietoja.

```javascript
const kayttaja = {
  id: 1,
  nimi: "Matti Meikäläinen",
  email: "matti@example.com",
  rooli: "user",
  onAktiivinen: true
};

// Tietojen lukeminen
console.log(kayttaja.nimi);        // "Matti Meikäläinen"
console.log(kayttaja["email"]);    // "matti@example.com"

// Tietojen muuttaminen
kayttaja.rooli = "admin";
```

### Miksi objektit ovat tärkeitä?

Backend-koodissa käsittelet jatkuvasti objekteja:
- Käyttäjätiedot tulevat objektina
- Tapahtumatiedot ovat objekteja
- API-vastaukset ovat objekteja

```javascript
// Esimerkki: Tapahtuma-objekti
const tapahtuma = {
  id: 42,
  nimi: "Koodausilta",
  paikka: "Helsinki",
  paivamaara: "2026-04-15",
  maxOsallistujat: 30,
  luoja: {
    id: 1,
    nimi: "Matti"
  }
};

// Sisäkkäisten tietojen lukeminen
console.log(tapahtuma.luoja.nimi);  // "Matti"
```

---

## 1.4 Taulukot (Array)

Taulukko on lista samankaltaisia asioita.

```javascript
const osallistujat = ["Matti", "Maija", "Mikko"];

// Lukeminen (indeksi alkaa 0:sta!)
console.log(osallistujat[0]);  // "Matti"
console.log(osallistujat[2]);  // "Mikko"

// Listan pituus
console.log(osallistujat.length);  // 3

// Lisääminen loppuun
osallistujat.push("Laura");

// Poistaminen lopusta
osallistujat.pop();
```

### Taulukko objekteja

Tämä on **erittäin yleinen** rakenne backend-koodissa:

```javascript
const tapahtumat = [
  { id: 1, nimi: "Koodausilta", paikka: "Helsinki" },
  { id: 2, nimi: "Testing Workshop", paikka: "Tampere" },
  { id: 3, nimi: "React-kurssi", paikka: "Turku" }
];

// Ensimmäisen tapahtuman nimi
console.log(tapahtumat[0].nimi);  // "Koodausilta"
```

---

## 1.5 Funktiot

Funktio on uudelleenkäytettävä koodilohko.

### Perinteinen funktio

```javascript
function tervehdi(nimi) {
  return "Hei, " + nimi + "!";
}

const viesti = tervehdi("Matti");
console.log(viesti);  // "Hei, Matti!"
```

### Nuolifunktio (Arrow Function)

Modernimpi tapa kirjoittaa funktioita:

```javascript
const tervehdi = (nimi) => {
  return "Hei, " + nimi + "!";
};

// Lyhyt muoto (kun vain yksi rivi)
const tervehdi = (nimi) => "Hei, " + nimi + "!";
```

### Funktiot parametreilla

```javascript
const laskeHinta = (perusHinta, alennusProsentti) => {
  const alennus = perusHinta * (alennusProsentti / 100);
  return perusHinta - alennus;
};

const lopullinen = laskeHinta(100, 20);
console.log(lopullinen);  // 80
```

### Miksi funktiot ovat tärkeitä?

Backend-koodi koostuu funktioista:

```javascript
// Esimerkki: API-käsittelijä
const haeKayttaja = (id) => {
  // Hae käyttäjä tietokannasta
  // Palauta käyttäjätiedot
};

const luoTapahtuma = (tapahtumaData) => {
  // Validoi data
  // Tallenna tietokantaan
  // Palauta luotu tapahtuma
};
```

---

## 1.6 Ehtolauseet

Ehtolauseilla ohjaat ohjelman kulkua.

### if / else if / else

```javascript
const rooli = "admin";

if (rooli === "admin") {
  console.log("Täydet oikeudet");
} else if (rooli === "user") {
  console.log("Rajoitetut oikeudet");
} else {
  console.log("Ei oikeuksia");
}
```

### Vertailuoperaattorit

```javascript
// Yhtäsuuruus (käytä AINA kolmea yhtäsuuruusmerkkiä!)
kayttaja.rooli === "admin"    // tarkka vertailu
kayttaja.rooli == "admin"     // löysä vertailu - ÄLÄ KÄYTÄ

// Erisuuruus
kayttaja.rooli !== "user"

// Suurempi/pienempi
osallistujat.length > 0
osallistujat.length <= maxMaara

// Loogiset operaattorit
if (onKirjautunut && onAdmin) {
  // Molemmat ehdot totta
}

if (onAdmin || onOmistaja) {
  // Jompikumpi totta
}

if (!onPoistettu) {
  // Ei ole poistettu (käänteinen)
}
```

### Käytännön esimerkki

```javascript
const voikoLiittyaTapahtumaan = (tapahtuma, kayttaja) => {
  // Tarkista onko tapahtuma täynnä
  if (tapahtuma.osallistujat.length >= tapahtuma.maxOsallistujat) {
    return false;
  }

  // Tarkista onko käyttäjä jo mukana
  if (tapahtuma.osallistujat.includes(kayttaja.id)) {
    return false;
  }

  // Tarkista onko tapahtuma peruttu
  if (tapahtuma.onPeruutettu) {
    return false;
  }

  return true;
};
```

---

## 1.7 Silmukat

Silmukoilla käyt läpi taulukoita.

### for...of (suositus)

```javascript
const osallistujat = ["Matti", "Maija", "Mikko"];

for (const osallistuja of osallistujat) {
  console.log(osallistuja);
}
// Tulostaa: Matti, Maija, Mikko
```

### forEach

```javascript
osallistujat.forEach((osallistuja) => {
  console.log(osallistuja);
});
```

### map - luo uusi taulukko

**Erittäin tärkeä!** Käytetään paljon API-vastauksissa.

```javascript
const kayttajat = [
  { id: 1, nimi: "Matti", email: "matti@example.com", salasana: "hash123" },
  { id: 2, nimi: "Maija", email: "maija@example.com", salasana: "hash456" }
];

// Poista salasanat API-vastauksesta
const julkisetTiedot = kayttajat.map((kayttaja) => {
  return {
    id: kayttaja.id,
    nimi: kayttaja.nimi,
    email: kayttaja.email
    // salasana jätetään pois!
  };
});
```

### filter - suodata taulukko

```javascript
const tapahtumat = [
  { id: 1, nimi: "Tapahtuma 1", onAktiivinen: true },
  { id: 2, nimi: "Tapahtuma 2", onAktiivinen: false },
  { id: 3, nimi: "Tapahtuma 3", onAktiivinen: true }
];

// Vain aktiiviset tapahtumat
const aktiiviset = tapahtumat.filter((tapahtuma) => {
  return tapahtuma.onAktiivinen === true;
});
// Tulos: [{ id: 1, ... }, { id: 3, ... }]

// Lyhyempi muoto
const aktiiviset = tapahtumat.filter(t => t.onAktiivinen);
```

### find - etsi yksi

```javascript
const kayttajat = [
  { id: 1, nimi: "Matti" },
  { id: 2, nimi: "Maija" }
];

const kayttaja = kayttajat.find(k => k.id === 2);
// Tulos: { id: 2, nimi: "Maija" }
```

---

## 1.8 Async/Await ja Promiset

**Tämä on kriittinen osio!** Backend-ohjelmointi on täynnä asynkronista koodia.

### Mikä on asynkroninen koodi?

Jotkut operaatiot vievät aikaa:
- Tietokantahaut
- API-kutsut
- Tiedostojen luku

JavaScript ei odota näitä - se jatkaa eteenpäin. Siksi tarvitset `async/await`.

### Promise (lupaus)

Promise on "lupaus" tulevasta arvosta.

```javascript
// Kuviteltu tietokantahaku
const haeKayttaja = (id) => {
  return new Promise((resolve, reject) => {
    // Simuloi tietokantahakua
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nimi: "Matti" });  // Onnistui
      } else {
        reject(new Error("Käyttäjää ei löydy"));  // Epäonnistui
      }
    }, 1000);
  });
};
```

### async/await

Tekee asynkronisesta koodista luettavampaa:

```javascript
// Funktio pitää merkitä async-sanalla
const naytaKayttaja = async () => {
  try {
    // await odottaa Promisen valmistumista
    const kayttaja = await haeKayttaja(1);
    console.log(kayttaja);
  } catch (error) {
    // Jos Promise epäonnistuu (reject)
    console.log("Virhe:", error.message);
  }
};
```

### Käytännön esimerkki

```javascript
// Näin backend-koodi oikeasti näyttää
const luoTapahtuma = async (req, res) => {
  try {
    // 1. Hae käyttäjä tietokannasta
    const kayttaja = await haeKayttaja(req.userId);

    // 2. Tarkista oikeudet
    if (!kayttaja) {
      return res.status(401).json({ error: "Ei oikeuksia" });
    }

    // 3. Luo tapahtuma tietokantaan
    const tapahtuma = await tallennaTapahtuma(req.body);

    // 4. Palauta vastaus
    return res.status(201).json(tapahtuma);

  } catch (error) {
    // Joku meni pieleen
    return res.status(500).json({ error: "Palvelinvirhe" });
  }
};
```

### Tärkeää muistaa

1. `async` funktio palauttaa aina Promisen
2. `await` voi käyttää vain `async` funktion sisällä
3. Käytä aina `try/catch` virheiden käsittelyyn

---

## 1.9 Moduulit (Import/Export)

Isoissa projekteissa koodi jaetaan tiedostoihin.

### Named Export (nimetty vienti)

```javascript
// tiedosto: utils/validators.js
export const validoiEmail = (email) => {
  return email.includes("@");
};

export const validoiSalasana = (salasana) => {
  return salasana.length >= 8;
};
```

```javascript
// tiedosto: controllers/auth.js
import { validoiEmail, validoiSalasana } from "../utils/validators.js";

const rekisteroidy = (email, salasana) => {
  if (!validoiEmail(email)) {
    throw new Error("Virheellinen email");
  }
  // ...
};
```

### Default Export

```javascript
// tiedosto: models/User.js
const User = {
  findById: async (id) => { /* ... */ },
  create: async (data) => { /* ... */ }
};

export default User;
```

```javascript
// tiedosto: controllers/users.js
import User from "../models/User.js";

const haeKayttaja = async (id) => {
  return await User.findById(id);
};
```

### CommonJS (vanha tapa)

Saatat nähdä myös tätä:

```javascript
// Vienti
module.exports = { validoiEmail, validoiSalasana };

// Tuonti
const { validoiEmail } = require("./validators");
```

Tämä on Node.js:n vanhempi moduulijärjestelmä. Molemmat toimivat, mutta ES Modules (import/export) on moderni standardi.

---

## 1.10 Virheenkäsittely

### try/catch

```javascript
const kasitteleData = (data) => {
  try {
    const tulos = JSON.parse(data);
    return tulos;
  } catch (error) {
    console.log("Virhe:", error.message);
    return null;
  }
};
```

### Omien virheiden heittäminen

```javascript
const haeKayttaja = async (id) => {
  const kayttaja = await tietokanta.hae(id);

  if (!kayttaja) {
    throw new Error("Käyttäjää ei löydy");
  }

  return kayttaja;
};

// Käyttö
try {
  const kayttaja = await haeKayttaja(999);
} catch (error) {
  console.log(error.message);  // "Käyttäjää ei löydy"
}
```

---

## 1.11 Template Literals (malliliteraalit)

Helpompi tapa yhdistää tekstiä ja muuttujia:

```javascript
const nimi = "Matti";
const ika = 25;

// Vanha tapa
const viesti = "Hei, " + nimi + "! Olet " + ika + " vuotta vanha.";

// Moderni tapa (käytä backtick-merkkiä `)
const viesti = `Hei, ${nimi}! Olet ${ika} vuotta vanha.`;

// Monirivinen teksti
const html = `
  <div>
    <h1>${tapahtuma.nimi}</h1>
    <p>${tapahtuma.kuvaus}</p>
  </div>
`;
```

---

## 1.12 Destrukturointi

Nopea tapa poimia arvoja objekteista ja taulukoista.

### Objektin destrukturointi

```javascript
const kayttaja = {
  id: 1,
  nimi: "Matti",
  email: "matti@example.com",
  rooli: "admin"
};

// Vanha tapa
const nimi = kayttaja.nimi;
const email = kayttaja.email;

// Destrukturointi
const { nimi, email, rooli } = kayttaja;

console.log(nimi);   // "Matti"
console.log(email);  // "matti@example.com"
```

### Funktion parametreissa

```javascript
// Ilman destrukturointia
const luoTapahtuma = (data) => {
  const nimi = data.nimi;
  const paikka = data.paikka;
  // ...
};

// Destrukturoinnilla
const luoTapahtuma = ({ nimi, paikka, paivamaara }) => {
  console.log(nimi);    // Suoraan käytössä
  console.log(paikka);  // Suoraan käytössä
};
```

### Taulukon destrukturointi

```javascript
const varit = ["punainen", "vihreä", "sininen"];

const [ensimmainen, toinen] = varit;
console.log(ensimmainen);  // "punainen"
console.log(toinen);       // "vihreä"
```

---

## 1.13 Spread-operaattori (...)

### Taulukon kopiointi ja yhdistäminen

```javascript
const alku = [1, 2, 3];
const loppu = [4, 5, 6];

// Yhdistä
const kaikki = [...alku, ...loppu];  // [1, 2, 3, 4, 5, 6]

// Kopioi (ei viittaus alkuperäiseen)
const kopio = [...alku];
```

### Objektin kopiointi ja päivitys

```javascript
const kayttaja = {
  nimi: "Matti",
  email: "matti@example.com"
};

// Päivitä yksittäinen kenttä (luo uuden objektin)
const paivitetty = {
  ...kayttaja,
  email: "uusi@example.com"
};

// Tulos: { nimi: "Matti", email: "uusi@example.com" }
```

---

# Yhteenveto Vaihe 1

Nyt tunnet JavaScript-perusteet:

| Konsepti | Mitä opit |
|----------|-----------|
| Muuttujat | `const`, `let` |
| Tietotyypit | String, Number, Boolean, null, undefined |
| Objektit | Tiedon ryhmittely |
| Taulukot | Listojen käsittely |
| Funktiot | Uudelleenkäytettävä koodi |
| Ehtolauseet | Ohjelman logiikka |
| Silmukat | `for...of`, `map`, `filter`, `find` |
| Async/Await | Asynkroninen koodi |
| Moduulit | Koodin jakaminen tiedostoihin |
| Virheenkäsittely | `try/catch` |
| Template Literals | Merkkijonojen yhdistäminen |
| Destrukturointi | Arvojen poimiminen |
| Spread-operaattori | Kopiointi ja yhdistäminen |

---

# Seuraava vaihe

Kun olet lukenut ja ymmärtänyt nämä perusteet, ilmoita minulle niin siirrymme **Vaihe 2: Node.js ja Express.js** -osioon.

Vaiheessa 2 opit:
- Node.js:n perusteet
- Express.js-palvelimen luominen
- REST API:n rakentaminen
- Reititys ja middleware
- HTTP-metodit (GET, POST, PUT, DELETE)

---

## Kysymyksiä?

Jos jokin kohta jäi epäselväksi, kysy rohkeasti! Selitän esimerkkien avulla.

Voit myös pyytää lisää harjoituksia mistä tahansa aiheesta.
