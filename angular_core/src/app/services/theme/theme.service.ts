import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleTheme() {
    throw new Error('Method not implemented.');
  }
  darkMode = true;
  constructor() {}

  isDarkMode(): boolean {
    return this.darkMode;
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
  }

  setDarkMode(value: boolean): void {
    this.darkMode = value;
  }
}
