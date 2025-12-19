import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router); 

  isRegistering = signal(false);
  username = '';
  password = '';
  name = '';

  toggleMode() {
    this.isRegistering.update(v => !v);
  }

  onSubmit() {
    if (this.isRegistering()) {
      const success = this.authService.register({ 
        username: this.username, 
        password: this.password, 
        name: this.name 
      });
      
      if (success) {
        this.toggleMode();
      } 
    } else {
      const success = this.authService.login(this.username, this.password);
      
      if (success) {
        this.router.navigate(['/home']); 
      }
    }
  }
}