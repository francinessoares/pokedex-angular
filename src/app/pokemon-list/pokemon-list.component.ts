import { Component, Output } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.buscarPokemons();
  }

  buscarPokemons(): void {
    this.pokemonService.carregarPokemons().subscribe((resp) => {
      this.pokemons = resp.results;
    });
  }
}
