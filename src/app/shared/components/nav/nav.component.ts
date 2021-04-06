import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  pages = [
    { url: '/dashboard', icon: 'dashboard', name: 'ダッシュボード'},
    { url: '/grid', icon: 'grid_on', name: 'データ一覧'},
    { url: '/form', icon: 'input', name: '入力フォーム'}
  ];

  @ViewChild('nav', { static: true }) nav: IgxNavigationDrawerComponent;

  constructor() { }

  toggleNavigation(): void {
    this.nav.toggle();
  }

  get isOpen(): boolean {
    return this.nav.isOpen;
  }

  onOpening(): void {
    // this.navigationService.opening();
  }

  onClosing(): void {
    // this.navigationService.closing();
  }

  onOpened(): void {
    // this.navigationService.changeNavigationMode(NavigationMode.normal);
  }

  onClosed(): void {
    // this.navigationService.changeNavigationMode(NavigationMode.mini);
  }

}
