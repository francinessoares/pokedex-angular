import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  carregarPokemons(): Observable<any> {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    return this.httpClient.get<any>(url).pipe();
  }
}
