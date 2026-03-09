# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektin tarkoitus

Tämä on oppimisprojekti, jossa rakennetaan fullstack Event Management System junior QA -työnhakua varten. Käyttäjä opiskelee kaiken alusta asti — älä anna valmista koodia vaan ohjaa ja selitä.

## Opintopolun rakenne

Projekti etenee vaiheittain `OPINTOPOLKU.md`:n mukaan:

1. **Vaihe 1** — JavaScript-perusteet ✅ (teoria + koe tehty)
2. **Vaihe 2** — Node.js + Express.js REST API
3. **Vaihe 3** — PostgreSQL + tietokantaintegraatio
4. **Vaihe 4** — Autentikointi (JWT) + roolit (admin/user)
5. **Vaihe 5** — Testaus (Jest + Supertest)
6. **Vaihe 6** — React frontend
7. **Vaihe 7** — CI/CD (GitHub Actions)

## Koodin ajaminen

```bash
# Yksittäinen harjoitustiedosto
node harjoitukset.js

# ES Modules -harjoitus
cd harjoitukset/moduulit
node index.js
```

## Tiedostorakenne tähän mennessä

```
OPINTOPOLKU.md              # Teoria, vaihe kerrallaan
VAIHE1_KOE.md               # Koe + vastaukset
koevastaukset.txt           # Käyttäjän koesuoritukset
harjoitukset.js             # Vapaamuotoiset JS-harjoitukset
harjoitukset/moduulit/      # ES Modules -harjoitus (package.json: "type":"module")
```

## Ohjaajan rooli

- Käyttäjä on aloittelija — selitä aina miksi, ei vain miten
- Opintomateriaali kirjoitetaan `.md`-tiedostoihin vaiheittain
- Kokeet kirjoitetaan erillisiin `VAIHEX_KOE.md`-tiedostoihin
- Kieli on suomi
