import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Pokemon {
  name: string;
  image: string;
  types: string[];
  abilities: string[];
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  baseExperience: number;
  height: number;
  weight: number;
  hiddenAbility: string;
  moves: string[];
  sprites: any;
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  async getPokemonByName(name: string): Promise<Pokemon> {
    try {
      const response: any = await this.http.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`).toPromise();
      return this.mapPokemonData(response);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      throw error;
    }
  }

  async getPokemones(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    const response: any = await this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).toPromise();
    const pokemons: Pokemon[] = await Promise.all(response.results.map(async (pokemon: any) => {
      const fullPokemonData: any = await this.http.get(pokemon.url).toPromise();
      return this.mapPokemonData(fullPokemonData);
    }));

    return pokemons;
  }

  private mapPokemonData(data: any): Pokemon {
    const abilities = data.abilities.map((ability: any) => ability.ability.name);
    const types = data.types.map((type: any) => type.type.name);
    const stats = data.stats.reduce((acc: any, stat: any) => {
      acc[stat.stat.name] = stat.base_stat;
      return acc;
    }, {});

    const moves = data.moves.map((move: any) => move.move.name).slice(0, 6);

    return {
      name: data.name,
      image: data.sprites.front_default,
      abilities: abilities,
      types: types,
      hp: stats.hp,
      attack: stats.attack,
      defense: stats.defense,
      specialAttack: stats["special-attack"],
      specialDefense: stats["special-defense"],
      speed: stats.speed,
      baseExperience: data.base_experience,
      height: data.height,
      weight: data.weight,
      hiddenAbility: data.abilities.find((ability: any) => ability.is_hidden)?.ability.name || 'N/A',
      moves: moves,
      sprites: data.sprites
    };
  }
}
