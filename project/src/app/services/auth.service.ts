import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = true;
  private userRole: 'admin' | 'user' | null = null;

  constructor() {}

  login(username: string, password: string) {
    if (username && password) {
      this.isAuthenticated = true;
      this.userRole = username === 'admin' ? 'admin' : 'user';
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userRole = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  hasRole(role: 'admin' | 'user'): boolean {
    return this.userRole === role;
  }
}
