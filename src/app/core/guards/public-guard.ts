import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth-service";

export const publicGuard: CanActivateFn = (route, state) => {

    const authService = inject(AuthService);
    
    // injet o Router para redirecionar o usuário se ele estiver autenticado


    // Complete a lógica do guard aqui, por exemplo: chame o método isAuthenticated do AuthService
    if () {
        router.navigate(['home'])
        // Se o usuário estiver autenticado retorne false
    }

    // Se o usuário não estiver autenticado retorne true

}