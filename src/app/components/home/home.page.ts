import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../../services/login/login.service';
import { PokeapiService, Pokemon } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  pokemonList: Pokemon[] = [];
  originalPokemonList: Pokemon[] = [];
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(private modalCtrl: ModalController,
    public loginService: LoginService,
    private pokeapi: PokeapiService) { }

  ngOnInit() {
    this.getPokemones();
  }

  async getPokemones(offset: number = 0) {
    this.originalPokemonList = await this.pokeapi.getPokemones(this.pageSize, offset);
    this.pokemonList = [...this.originalPokemonList];
  }

  async searchPokemon(name: string) {
      const pokemon = await this.pokeapi.getPokemonByName(name);
      this.pokemonList = [pokemon];
  }

  onSearchChange(event: CustomEvent) {
    const searchTerm = event.detail.value;
    if (searchTerm.trim() !== '') {
      this.searchPokemon(searchTerm.toLowerCase());
    } else {
      this.pokemonList = [...this.originalPokemonList];
    }
  }

  async openModal(pokemonNombre: string) {
    const modal = await this.modalCtrl.create({
      component: 'modal-' + pokemonNombre.toLowerCase(),
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async goToNextPage() {
    this.currentPage++;
    const offset = (this.currentPage - 1) * this.pageSize;
    await this.getPokemones(offset);
  }

  async goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      const offset = (this.currentPage - 1) * this.pageSize;
      await this.getPokemones(offset);
    }
  }
}
