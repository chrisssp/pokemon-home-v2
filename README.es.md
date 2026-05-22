# Pokédex Home v2 — Explorador Detallado de Pokémon

<p align="center">
  <img src="https://img.shields.io/badge/Ionic-7-4584FF?logo=ionic&logoColor=white" alt="Ionic 7">
  <img src="https://img.shields.io/badge/Angular-17-DD0031?logo=angular&logoColor=white" alt="Angular 17">
  <img src="https://img.shields.io/badge/Capacitor-5-119EED?logo=capacitor&logoColor=white" alt="Capacitor 5">
</p>

<p align="center">
  <em>Aplicación Pokédex con estadísticas detalladas, habilidades, movimientos y visualización en modales</em>
</p>

<p align="center">
  <a href="https://github.com/chrisssp/pokemon-home-v2/issues">Reportar error</a>
</p>

<p align="center">
  <a href="README.md">🇬🇧 English</a> · <a href="README.es.md">🇪🇸 Español</a>
</p>

---

## Acerca de Pokédex Home v2

Aplicación móvil multiplataforma construida con Ionic y Angular que se conecta a la PokeAPI. Versión mejorada de la experiencia Pokédex con vistas modales detalladas que incluyen estadísticas base (PS, Ataque, Defensa, Ataque Especial, Defensa Especial, Velocidad), habilidades, movimientos, peso, altura y controles de paginación.

### Ecosistema

| Componente | Repositorio | Stack |
|-----------|-----------|-------|
| Pokedex App (v2) | [chrisssp/pokemon-home-v2](https://github.com/chrisssp/pokemon-home-v2) | Ionic 7, Angular 17, Capacitor 5 |

## Funcionalidades

- Autenticación de usuarios con rutas protegidas
- Explorar Pokémon con búsqueda por nombre
- Vista modal detallada por Pokémon
- Visualización de estadísticas base (PS, Ataque, Defensa, At. Esp., Def. Esp., Velocidad)
- Atributos: tipos, habilidades, peso, altura, experiencia base
- Lista de movimientos en dos columnas
- Controles de paginación (anterior/siguiente)
- APK Android incluido

## Inicio rápido

### Requisitos previos

- Node.js 18+
- npm 9+
- Angular CLI 17

### Instalación

```bash
git clone https://github.com/chrisssp/pokemon-home-v2.git
cd pokemon-home-v2
npm install
```

### Desarrollo

```bash
ng serve
```

Navega a `http://localhost:4200/`.

### Compilar para Android

```bash
ng build
npx cap copy android
npx cap open android
```

## Contribuciones

Lee [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las convenciones de ramas, commits y PRs.

## Licencia

Este proyecto está bajo la licencia GPL v3 — ver [LICENSE](LICENSE) para más detalles.
