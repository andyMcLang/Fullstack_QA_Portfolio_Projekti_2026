# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projektin tarkoitus

Tämä on oppimisprojekti, jossa rakennetaan **IT Support Ticket Tracker** -sovellus junior QA / Test Automation -työnhakua varten. Sovellus toimii portfolioprojektina, jonka pääfokus on **testaus**: Playwright (UI-automaatio), API-testaus (Supertest/Postman) ja CI/CD (GitHub Actions).

Sovelluksen koodi pidetään yksinkertaisena ja selkeänä — tarkoitus EI ole tulla fullstack-kehittäjäksi, vaan rakentaa realistinen, moderni kohdesovellus testausta varten.

Käyttäjä on valmistuva IT-insinööriopiskelija, jolla on IT-tukitausta ja joka kirjoittaa opinnäytetyötä web-sovellusten testausstrategioista. Tavoitteena on Junior QA -rooli syksyllä 2026.

## Ohjaajan rooli

- Toimi Full Stack Developer & QA Mentor -roolissa
- Älä kirjoita koko sovellusta kerralla — edetään askel kerrallaan
- Selitä koodi rivi riviltä, jotta käyttäjä ymmärtää arkkitehtuurin
- Kieli on suomi
- Opintomateriaali kirjoitetaan `.md`-tiedostoihin vaiheittain
- Kokeet kirjoitetaan erillisiin `VAIHEX_KOE.md`-tiedostoihin

## Opintopolun rakenne

Projekti etenee vaiheittain `OPINTOPOLKU.md`:n mukaan:

1. **Vaihe 1** — JavaScript-perusteet ✅ (teoria + koe tehty)
2. **Vaihe 2** — Node.js + Express.js backend (health-check, sitten ticket-endpointit)
3. **Vaihe 3** — PostgreSQL + tietokantaintegraatio
4. **Vaihe 4** — React frontend (yksinkertainen UI tikettien hallintaan)
5. **Vaihe 5** — Testaus (Playwright + Supertest + API-testaus)
6. **Vaihe 6** — CI/CD (GitHub Actions)

## Teknologiapino

- **Backend:** Node.js + Express.js
- **Frontend:** React
- **Tietokanta:** PostgreSQL
- **Testaus:** Playwright (UI), Supertest (API), Jest
- **CI/CD:** GitHub Actions

## Koodin ajaminen

```bash
# Yksittäinen harjoitustiedosto
node harjoitukset.js

# ES Modules -harjoitus
cd harjoitukset/moduulit
node index.js

# Backend-palvelin (tulossa Vaihe 2)
# cd backend && npm start
```

## Tiedostorakenne tähän mennessä

```
OPINTOPOLKU.md              # Teoria, vaihe kerrallaan
VAIHE1_KOE.md               # Koe + vastaukset
koevastaukset.txt           # Käyttäjän koesuoritukset
harjoitukset.js             # Vapaamuotoiset JS-harjoitukset
harjoitukset/moduulit/      # ES Modules -harjoitus (package.json: "type":"module")
```
