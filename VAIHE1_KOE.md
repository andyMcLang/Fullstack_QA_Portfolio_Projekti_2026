# Vaihe 1: JavaScript-perusteet - KOE

Tämä koe testaa opintopolun Vaihe 1:n sisällön hallintaa.

**Ohjeet:**
- Vastaa kaikkiin tehtäviin
- Älä katso vastauksia ennen kuin olet yrittänyt kaikkia
- Kirjoita vastauksesi paperille tai erilliseen tiedostoon
- Vastaukset löytyvät kokeen lopusta

**Arviointi:**
- 0-40% - Kertaa materiaali uudelleen
- 41-70% - Perusteet hallussa, kertaa heikot kohdat
- 71-90% - Hyvä osaaminen, valmis jatkamaan
- 91-100% - Erinomainen, siirry Vaiheeseen 2

---

# OSA 1: Monivalintakysymykset (20 pistettä)

Valitse oikea vaihtoehto. Jokaisesta oikeasta vastauksesta saat 2 pistettä.

## Kysymys 1
Mikä on oikea tapa määritellä muuttuja, jonka arvoa ei voi muuttaa?

```
A) var nimi = "Matti";
B) let nimi = "Matti";
C) const nimi = "Matti";
D) constant nimi = "Matti";
```

## Kysymys 2
Mikä on taulukon ensimmäisen alkion indeksi?

```
A) 1
B) 0
C) -1
D) first
```

## Kysymys 3
Mitä seuraava koodi tulostaa?

```javascript
const luvut = [10, 20, 30];
console.log(luvut.length);
```

```
A) 2
B) 3
C) 30
D) undefined
```

## Kysymys 4
Mikä on oikea tapa vertailla kahta arvoa JavaScriptissä?

```
A) rooli = "admin"
B) rooli == "admin"
C) rooli === "admin"
D) rooli equals "admin"
```

## Kysymys 5
Mikä array-metodi palauttaa UUDEN taulukon suodatetuilla arvoilla?

```
A) map()
B) filter()
C) find()
D) forEach()
```

## Kysymys 6
Mitä `await` tekee?

```
A) Pysäyttää ohjelman kokonaan
B) Odottaa Promisen valmistumista
C) Luo uuden säikeen
D) Toistaa funktion
```

## Kysymys 7
Missä `await`-avainsanaa voi käyttää?

```
A) Missä tahansa funktiossa
B) Vain async-funktiossa
C) Vain silmukoiden sisällä
D) Vain try-lohkon sisällä
```

## Kysymys 8
Miten tuot nimetyn funktion toisesta tiedostosta?

```
A) import validoiEmail from "./validators.js";
B) import { validoiEmail } from "./validators.js";
C) require { validoiEmail } from "./validators.js";
D) include validoiEmail from "./validators.js";
```

## Kysymys 9
Mitä seuraava koodi tekee?

```javascript
const { nimi, email } = kayttaja;
```

```
A) Luo uuden objektin
B) Poistaa nimi ja email -kentät objektista
C) Poimii nimi ja email -arvot omiin muuttujiin
D) Yhdistää kaksi objektia
```

## Kysymys 10
Mikä on spread-operaattori?

```
A) ++
B) **
C) ...
D) ??
```

---

# OSA 2: Koodin lukeminen (30 pistettä)

Analysoi koodi ja vastaa kysymyksiin. Jokaisesta oikeasta vastauksesta saat 5 pistettä.

## Tehtävä 1
Mitä seuraava koodi tulostaa?

```javascript
const henkilo = {
  nimi: "Anna",
  ika: 28,
  kaupunki: "Tampere"
};

console.log(henkilo.ika);
```

**Vastaus:** _______________

## Tehtävä 2
Mitä seuraava koodi tulostaa?

```javascript
const numerot = [5, 10, 15, 20];
const tuplat = numerot.map(n => n * 2);
console.log(tuplat);
```

**Vastaus:** _______________

## Tehtävä 3
Mitä seuraava koodi tulostaa?

```javascript
const pisteet = [85, 42, 91, 67, 38];
const lapiMenneet = pisteet.filter(p => p >= 50);
console.log(lapiMenneet);
```

**Vastaus:** _______________

## Tehtävä 4
Mitä seuraava koodi tulostaa?

```javascript
const kayttajat = [
  { id: 1, nimi: "Matti" },
  { id: 2, nimi: "Maija" },
  { id: 3, nimi: "Mikko" }
];

const loydetty = kayttajat.find(k => k.id === 2);
console.log(loydetty.nimi);
```

**Vastaus:** _______________

## Tehtävä 5
Mitä seuraava koodi tulostaa?

```javascript
const a = [1, 2, 3];
const b = [4, 5];
const c = [...a, ...b];
console.log(c);
```

**Vastaus:** _______________

## Tehtävä 6
Mitä seuraava koodi tulostaa?

```javascript
const nimi = "Koodari";
const vuosi = 2026;
const viesti = `Hei ${nimi}, tervetuloa vuoteen ${vuosi}!`;
console.log(viesti);
```

**Vastaus:** _______________

---

# OSA 3: Virheiden etsiminen (20 pistettä)

Jokaisessa koodissa on virhe. Etsi virhe ja selitä miten korjaisit sen. Jokaisesta oikeasta korjauksesta saat 5 pistettä.

## Tehtävä 1

```javascript
const laskeYhteen = (a, b) {
  return a + b;
};
```

**Mikä on väärin?** _______________
**Miten korjaat?** _______________

## Tehtävä 2

```javascript
const haeData = async () => {
  const data = await haeTietokannasta();
  return data;
};

const tulos = await haeData();
console.log(tulos);
```

**Mikä on väärin?** _______________
**Miten korjaat?** _______________

## Tehtävä 3

```javascript
const kayttaja = {
  nimi: "Testi",
  email: "testi@example.com"
};

if (kayttaja.rooli = "admin") {
  console.log("Admin-käyttäjä");
}
```

**Mikä on väärin?** _______________
**Miten korjaat?** _______________

## Tehtävä 4

```javascript
const nimet = ["Anna", "Matti", "Liisa"];
console.log(nimet[3]);
```

**Mikä on väärin?** _______________
**Mitä koodi tulostaa?** _______________

---

# OSA 4: Koodin kirjoittaminen (30 pistettä)

Kirjoita pyydetty koodi. Pisteet annetaan toimivuuden ja oikeellisuuden perusteella.

## Tehtävä 1 (5 pistettä)
Kirjoita nuolifunktio `onTaynnaIkainen`, joka ottaa parametrina iän (numero) ja palauttaa `true` jos ikä on 18 tai enemmän, muuten `false`.

```javascript
// Kirjoita funktio tähän:


// Käyttö:
// onTaynnaIkainen(20) -> true
// onTaynnaIkainen(15) -> false
```

## Tehtävä 2 (5 pistettä)
Kirjoita funktio `laskeKeskiarvo`, joka ottaa parametrina taulukon numeroita ja palauttaa niiden keskiarvon.

```javascript
// Kirjoita funktio tähän:


// Käyttö:
// laskeKeskiarvo([10, 20, 30]) -> 20
// laskeKeskiarvo([5, 5, 5, 5]) -> 5
```

## Tehtävä 3 (10 pistettä)
Sinulla on taulukko tapahtumia. Kirjoita koodi joka:
1. Suodattaa vain aktiiviset tapahtumat
2. Poimii niistä vain nimet uuteen taulukkoon

```javascript
const tapahtumat = [
  { id: 1, nimi: "Koodausilta", aktiivinen: true },
  { id: 2, nimi: "Peruttu meetup", aktiivinen: false },
  { id: 3, nimi: "Testing workshop", aktiivinen: true },
  { id: 4, nimi: "Vanha tapahtuma", aktiivinen: false }
];

// Kirjoita koodi tähän:


// Odotettu tulos: ["Koodausilta", "Testing workshop"]
```

## Tehtävä 4 (10 pistettä)
Kirjoita async-funktio `haeJaKasittele`, joka:
1. Kutsuu annettua async-funktiota `haeTiedot()`
2. Käsittelee mahdolliset virheet try/catch:lla
3. Palauttaa datan onnistuessa
4. Palauttaa `null` virhetilanteessa

```javascript
// Oletetaan että tämä funktio on olemassa:
// const haeTiedot = async () => { ... };

// Kirjoita funktio tähän:


```

---

# OSA 5: Soveltava tehtävä (BONUS - 10 pistettä)

Tämä tehtävä testaa kokonaisymmärrystä. Se on vapaaehtoinen lisätehtävä.

## Tehtävä
Kirjoita funktio `validoiRekisterointi`, joka tarkistaa käyttäjän rekisteröintitiedot:

**Säännöt:**
- Email täytyy sisältää @-merkki
- Salasanan täytyy olla vähintään 8 merkkiä pitkä
- Nimen täytyy olla vähintään 2 merkkiä pitkä

**Funktio palauttaa objektin:**
- `{ piviossa: true }` jos kaikki OK
- `{ onnistui: false, virheet: [...] }` jos virheitä

```javascript
// Kirjoita funktio tähän:


// Käyttö:
// validoiRekisterointi({
//   nimi: "Matti",
//   email: "matti@example.com",
//   salasana: "salasana123"
// }) -> { onnistui: true }

// validoiRekisterointi({
//   nimi: "M",
//   email: "mattiexample.com",
//   salasana: "123"
// }) -> { onnistui: false, virheet: ["Nimi liian lyhyt", "Email ei kelpaa", "Salasana liian lyhyt"] }
```

---
---
---

# VASTAUKSET

**Älä katso näitä ennen kuin olet vastannut kaikkiin tehtäviin!**

<details>
<summary>Klikkaa nähdäksesi vastaukset (tai scrollaa alas)</summary>

---

## OSA 1: Monivalintakysymykset

1. **C** - `const` estää arvon muuttamisen
2. **B** - Taulukot alkavat indeksistä 0
3. **B** - `.length` palauttaa alkioiden määrän (3)
4. **C** - Kolme yhtäsuuruusmerkkiä on tarkka vertailu
5. **B** - `filter()` suodattaa ja palauttaa uuden taulukon
6. **B** - `await` odottaa Promisen valmistumista
7. **B** - `await` toimii vain `async`-funktion sisällä
8. **B** - Nimetty vienti tuodaan aaltosulkeissa
9. **C** - Destrukturointi poimii arvot muuttujiin
10. **C** - Spread-operaattori on kolme pistettä `...`

---

## OSA 2: Koodin lukeminen

1. **28** - `henkilo.ika` palauttaa ika-kentän arvon

2. **[10, 20, 30, 40]** - `map` kertoo jokaisen luvun kahdella

3. **[85, 91, 67]** - `filter` suodattaa vain >= 50 arvot

4. **Maija** - `find` löytää objektin jossa id === 2, ja tulostamme sen nimen

5. **[1, 2, 3, 4, 5]** - Spread yhdistää taulukot

6. **Hei Koodari, tervetuloa vuoteen 2026!** - Template literal yhdistää muuttujat tekstiin

---

## OSA 3: Virheiden etsiminen

1. **Virhe:** Nuolifunktiosta puuttuu nuoli `=>`
   **Korjaus:** `const laskeYhteen = (a, b) => { return a + b; };`

2. **Virhe:** `await` on käytetty async-funktion ulkopuolella (ylimmällä tasolla)
   **Korjaus:** Kääri kutsu async-funktioon tai käytä `.then()`:
   ```javascript
   haeData().then(tulos => console.log(tulos));
   // TAI
   const main = async () => {
     const tulos = await haeData();
     console.log(tulos);
   };
   main();
   ```

3. **Virhe:** Ehtolauseessa käytetään `=` (sijoitus) eikä `===` (vertailu)
   **Korjaus:** `if (kayttaja.rooli === "admin")`

4. **Virhe:** Indeksi 3 on taulukon ulkopuolella (indeksit 0-2)
   **Tulostaa:** `undefined`

---

## OSA 4: Koodin kirjoittaminen

### Tehtävä 1
```javascript
const onTaynnaIkainen = (ika) => {
  return ika >= 18;
};

// Tai lyhyemmin:
const onTaynnaIkainen = (ika) => ika >= 18;
```

### Tehtävä 2
```javascript
const laskeKeskiarvo = (numerot) => {
  let summa = 0;
  for (const numero of numerot) {
    summa += numero;
  }
  return summa / numerot.length;
};

// Tai reduce:lla:
const laskeKeskiarvo = (numerot) => {
  const summa = numerot.reduce((acc, num) => acc + num, 0);
  return summa / numerot.length;
};
```

### Tehtävä 3
```javascript
const aktiivistenNimet = tapahtumat
  .filter(tapahtuma => tapahtuma.aktiivinen)
  .map(tapahtuma => tapahtuma.nimi);

// Tulos: ["Koodausilta", "Testing workshop"]
```

### Tehtävä 4
```javascript
const haeJaKasittele = async () => {
  try {
    const data = await haeTiedot();
    return data;
  } catch (error) {
    console.log("Virhe:", error.message);
    return null;
  }
};
```

---

## OSA 5: Soveltava tehtävä (BONUS)

```javascript
const validoiRekisterointi = ({ nimi, email, salasana }) => {
  const virheet = [];

  if (nimi.length < 2) {
    virheet.push("Nimi liian lyhyt");
  }

  if (!email.includes("@")) {
    virheet.push("Email ei kelpaa");
  }

  if (salasana.length < 8) {
    virheet.push("Salasana liian lyhyt");
  }

  if (virheet.length === 0) {
    return { onnistui: true };
  } else {
    return { onnistui: false, virheet: virheet };
  }
};
```

---

## Pistelasku

| Osa | Maksimipisteet |
|-----|----------------|
| Osa 1: Monivalinta | 20 |
| Osa 2: Koodin lukeminen | 30 |
| Osa 3: Virheiden etsiminen | 20 |
| Osa 4: Koodin kirjoittaminen | 30 |
| **Yhteensä** | **100** |
| Bonus | +10 |

</details>

---

**Onnea kokeeseen!**

Kun olet tehnyt kokeen, voit kertoa tuloksesi ja käymme läpi kohdat jotka tuottivat vaikeuksia.
