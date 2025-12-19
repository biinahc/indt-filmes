import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private users: User[] = [
    { name: 'Patolino', username: '@patolino', password: '123' }
  ]
  private router = inject(Router);

  currentUser = signal<User | null>(this.intilizedUser());
  authenticated = signal<boolean>(!!this.currentUser());

  intilizedUser(): User | null {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  }
  
  register(user: User): boolean {
    if (this.users.find((userCadastrado) => userCadastrado.username === user.username)) {
      return false;
    }

    this.users.push(user);
    return true;

  }


  login(username: string, password: string): boolean {
    // Verifica se o usuário existe na lista de usuários
    // descomente a linha abaixo para buscar o usuário
    const user = this.users.find((user) => user.username === username && user.password === password);

    // Se o usuário for encontrado, atualize o estado do serviço
    if (user) {
      // este código atualiza o estado do serviço para refletir o usuário autenticado
      //descomente as linhas abaixo para isso
      this.currentUser.set(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authenticated.set(true);
      this.router.navigate(['home'])
      return true;
    }

    return false;

  }

  logout(): void {
    // este código limpa o estado do serviço para refletir que o usuário não está mais autenticado
    // descomente as linhas abaixo para isso
    this.currentUser.set(null);
    this.authenticated.set(false);
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
