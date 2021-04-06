import { GridComponent } from './../../components/grid/grid.component';
import { StateService } from './../../../../states/state.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'igniteui-angular';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridPageComponent implements OnInit {
  data$: Observable<any[]>;
  constructor(private service: StateService) { }

  ngOnInit() {
    this.data$ = this.service.getData();
  }

  onChangeData(transactions: Transaction[]): void {
    this.service.changeData(transactions);
  }
}
