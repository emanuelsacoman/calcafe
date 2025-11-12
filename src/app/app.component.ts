import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'vazão pulverização', url: '/folder/vazao', icon: 'water' },
    //{ title: 'Teste', url: '/folder/teste', icon: 'paper-plane' },
    //{ title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    //{ title: 'Archived', url: '/folder/archived', icon: 'archive' },
    //{ title: 'Trash', url: '/folder/trash', icon: 'trash' },
    //{ title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  paletteToggle = false; 

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.initializeDarkTheme(prefersDark.matches);

    prefersDark.addEventListener('change', (mediaQuery) => {
      this.initializeDarkTheme(mediaQuery.matches);
    });
  }

  toggleChange(event: any) {
    this.toggleDarkTheme(event.detail.checked);
  }

  private toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    localStorage.setItem('darkMode', shouldAdd ? 'true' : 'false');
  }

  private initializeDarkTheme(isDark: boolean) {
    const saved = localStorage.getItem('darkMode');
    const darkMode = saved === 'true' || (saved === null && isDark);
    document.body.classList.toggle('dark', darkMode);
    this.paletteToggle = darkMode;
  }
}
