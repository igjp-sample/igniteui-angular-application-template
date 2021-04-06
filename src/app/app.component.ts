import { NavComponent } from './shared/components/nav/nav.component';
import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Ignite Ui for Angular Application Template';
  @ViewChild('nav', { static: true }) nav: NavComponent;

  onClicked() {
    this.nav.toggleNavigation();
  }

  get mainWidth(): string {
    if (this.nav.isOpen) {
      return 'calc(100vw - 200px)';
    }
    if (!this.nav.isOpen) {
      return 'calc(100vw - 60px)';
    }
    return 'calc(100vw - 200px)';
  }
}
