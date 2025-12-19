import { Component, input } from '@angular/core';
import { Filme } from '../../models/Filme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-filme',
  imports: [CommonModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css',
})
export class CardFilme {
  // Descomente a linha abaixo para receber o filme como input
  movie = input.required<Filme>();
}
