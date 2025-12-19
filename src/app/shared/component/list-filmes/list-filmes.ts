import { Component, ElementRef, input, viewChild } from '@angular/core';
import { Filme } from '../../models/Filme';
import { CommonModule } from '@angular/common';
import { CardFilme } from '../card-filme/card-filme';

@Component({
  selector: 'app-list-filmes',
  imports: [CommonModule, CardFilme],
  templateUrl: './list-filmes.html',
  styleUrl: './list-filmes.css',
})
export class ListFilmes {
  // descomente as linhas abaixo para receber os filmes e o título como inputs
  filmes = input.required<Filme[]>();
  titulo = input.required<string>();


 // descomente a linha abaixo para referenciar o elemento do carrossel
  carousel = viewChild<ElementRef<HTMLDivElement>>('carousel');

  scroll(direction: 'left' | 'right') {
    const el = this.carousel()?.nativeElement;
    if (el) {
      const scrollAmount = 300;
      el.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  
}
