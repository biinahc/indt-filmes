import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  
  // Descomente a linha abaixo para injetar o Router
  //const router = inject(Router);

  // Complete a lógica do guard aqui, por exemplo: chame o método isAuthenticated do AuthService
  if () {
    // Se o usuário estiver autenticado retorne true, exemplo: return true;
  }

  // Descomente as linhas abaixo para redirecionar o usuário se ele não estiver autenticado
 // router.navigate([''])

 // retorne false se o usuário não estiver autenticado
  // return false;

};
