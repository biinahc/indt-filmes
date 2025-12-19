import { Component, inject } from '@angular/core';
import { FilmeService } from '../../shared/services/filme-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ListFilmes } from '../../shared/component/list-filmes/list-filmes';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ListFilmes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private filmeService = inject(FilmeService);

  filmesResource = rxResource({
    stream: () => this.filmeService.getFilmesPopulares(),  
  })  

}
