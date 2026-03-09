const menot = [
  { id: 1, nimi: "musiikki-ilta", paikka: "oodi" },
  { id: 2, nimi: "teatteri-ilta", paikka: "mansku" },
  { id: 3, nimi: "urheilutreenit", paikka: "myltsi" },
];

console.log(menot[1].paikka);

const tervehdi = (nimi) => "hei " + nimi + "!";

console.log(tervehdi("Mado"));

const tervehdi2 = (nimi) => {
  return "Hei " + nimi + "!";
};

console.log(tervehdi2("Maija"));

const laskeAlennettuHinta = (hinta, alennusprosentti) => {
  const alennettuOsuus = hinta * (alennusprosentti / 100);
  const alennettuHinta = hinta - alennettuOsuus;
  return alennettuHinta;
};

console.log("100e:n 33% alennettu hinta on " + laskeAlennettuHinta(100, 33));

const rooli = "andy";

if (rooli === "admin") {
  console.log("Täydet oikeudet");
} else if (rooli === "käyttäjä") {
  console.log("Rajoitetut käyttäjäoikeudet");
} else {
  console.log("Ei oikeuksia!");
}

console.log("------------------------------");

const osallistujat = ["matti", "maija", "mikko"];

for (const osallistuja of osallistujat) {
  console.log("for: " + osallistuja);
}

console.log("------------------------------");

osallistujat.forEach((osallistuja) => {
  console.log("forEach: " + osallistuja);
});

console.log("------------------------------");
console.log("map");

const kayttajat = [
  { id: 1, nimi: "Pekka", email: "pekka@email.com", salasana: "hash123" },
  { id: 2, nimi: "Matti", email: "matti@email.com", salasana: "hash456" },
  { id: 3, nimi: "Pekka", email: "pekka@email.com", salasana: "hash789" },
];

const julkisetTiedot = kayttajat.map((kayttaja) => {
  return {
    id: kayttaja.id,
    nimi: kayttaja.nimi,
    email: kayttaja.email,
  };
});

console.log(julkisetTiedot);

console.log("------------------------------");
console.log("filter");

const tapahtumat = [
  { id: 1, tapahtuma: "Kiss", onAktiivinen: false },
  { id: 1, tapahtuma: "Dj Orion", onAktiivinen: true },
  { id: 1, tapahtuma: "Metallica", onAktiivinen: false },
];

const aktiivisetTapahtumat = tapahtumat.filter((t) => t.onAktiivinen);

console.log(aktiivisetTapahtumat);

console.log("------------------------------");
console.log("Etsi yksi id joka on 2");

const etsiId = kayttajat.find((k) => k.id === 2);

console.log(etsiId);

console.log("------------------------------");
console.log("Promise");

// Kuviteltu tietokantahaku
const haeKayttaja = (id) => {
  return new Promise((resolve, reject) => {
    // Simuloi tietokantahakua
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nimi: "Matti" }); // Onnistui
      } else {
        reject(new Error("Käyttäjää ei löydy")); // Epäonnistui
      }
    }, 1000);
  });
};

console.log("------------------------------");
console.log("Async/Await");

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
