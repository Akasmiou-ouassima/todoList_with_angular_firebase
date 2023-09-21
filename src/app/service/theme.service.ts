import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light-theme';

  constructor() {}

  setTheme(theme: string): void {
    this.currentTheme = theme;
    document.documentElement.className = theme;
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
