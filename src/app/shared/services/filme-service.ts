import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { FilmeResponse } from '../models/Filme';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {

  private API_URL = environments.api_url;
  private API_KEY = environments.api_key;
  private http = inject(HttpClient);

 // get é para pegar os dados da api
  getFilmesPopulares () {
    return this.http.get<FilmeResponse>(`${this.API_URL}/movie/popular?api_key=${this.API_KEY}`);
  }

  gerFilmesTop() {
    return this.http.get<FilmeResponse>(`${this.API_URL}/movie/top_rated?api_key=${this.API_KEY}`);
  }

}
