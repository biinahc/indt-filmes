import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verifica se o usuário está autenticado
  
  // Se não estiver autenticado, redireciona para a rota desejada
  return router.createUrlTree(['/login']); 
};