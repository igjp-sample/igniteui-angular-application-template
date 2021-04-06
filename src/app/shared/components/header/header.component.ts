import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() icon = 'menu';
  @Input() title = 'Ignite UI for Angular Application Template';
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleAction() {
    this.clicked.emit();
    // this.changeNavigationMode.emit();
  }
}
