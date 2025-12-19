import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  // Importe o CommonModule e o FormsModule para usar formulários e diretivas comuns do Angular
  // Para isso, escreva dentro do array imports: [CommonModule, FormsModule],
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // Descomente a linha abaixo para injetar o AuthService
  private authService = inject(AuthService)

  // Estado local usando Signals
  isRegistering = signal(false);
  

  // Campos do formulário
  username = ''; // Variavel que será ligada ao input de username, para capturar o valor digitado pelo usuário
  password = ''; // Variavel que será ligada ao input de email, para capturar o valor digitado pelo usuário
  name = ''; // Variavel que será ligada ao input de password, para capturar o valor digitado pelo usuário

  // Função que será usada para alternar entre os modos de login e registro
  toggleMode() {
    this.isRegistering.update(v => !v);
  }

  // Função que será chamada quando o formulário for submetido pelo usuário
  onSubmit() {

    // Verifica se o usuário está no modo de registro de novos usuários
    if (this.isRegistering()) {

      // Chama o método register do AuthService para criar uma nova conta
      // Para isso, descomente a linha abaixo
      const success = this.authService.register({ username: this.username, password: this.password, name: this.name });
      
      // Verifica se o registro foi bem-sucedido
      if (success) {
        // Se o registro for bem-sucedido, alterna de volta para o modo de login
        this.toggleMode();
      } 
    } else {
      // Se isRegistering for falso, o usuário está tentando fazer login
      // Chama o método login do AuthService para autenticar o usuário, descomente a linha abaixo para isso.
      const success = this.authService.login(this.username, this.password);
    }
  }
}
