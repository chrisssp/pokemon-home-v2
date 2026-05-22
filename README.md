# Pokédex Home v2 — Detailed Pokémon Explorer

<p align="center">
  <img src="https://img.shields.io/badge/Ionic-7-4584FF?logo=ionic&logoColor=white" alt="Ionic 7">
  <img src="https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white" alt="Angular 17">
  <img src="https://img.shields.io/badge/Capacitor-5-119EED?logo=capacitor&logoColor=white" alt="Capacitor 5">
</p>

<p align="center">
  <em>Pokedex app with detailed Pokémon stats, abilities, moves, and modal-based information display</em>
</p>

<p align="center">
  <a href="https://github.com/chrisssp/pokemon-home-v2/issues">Report Bug</a>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## About Pokédex Home v2

A cross-platform mobile application built with Ionic and Angular that connects to the PokeAPI. An enhanced version of the Pokédex experience featuring detailed modal views with base stats (HP, Attack, Defense, Special Attack, Special Defense, Speed), abilities, moves, weight, height, and pagination controls.

### Ecosystem

| Component | Repository | Stack |
|-----------|-----------|-------|
| Pokedex App (v2) | [chrisssp/pokemon-home-v2](https://github.com/chrisssp/pokemon-home-v2) | Ionic 7, Angular 17, Capacitor 5 |

## Features

- User authentication with protected routes
- Browse Pokémon with search by name
- Detailed modal view per Pokémon
- Base stats visualization (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
- Pokémon attributes: types, abilities, weight, height, base experience
- Moves list with two-column layout
- Pagination controls (previous/next)
- Cross-platform Android APK included

## Quick Start

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI 17

### Setup

```bash
git clone https://github.com/chrisssp/pokemon-home-v2.git
cd pokemon-home-v2
npm install
```

### Development

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Build for Android

```bash
ng build
npx cap copy android
npx cap open android
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for branch naming, commit conventions, and PR workflow.

## License

This project is licensed under the GPL v3 — see the [LICENSE](LICENSE) file for details.
