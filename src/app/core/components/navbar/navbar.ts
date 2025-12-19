import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  // Injete o AuthService para usar na navbar
  authService = inject(AuthService)
}
