import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Column } from 'src/app/models/column';
import {
  IgxGridComponent,
  IgxGridTransaction,
  IgxTransactionService,
  TransactionType,
  Transaction,
  IGridToolbarExportEventArgs
} from 'igniteui-angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
})
export class GridComponent implements OnInit {
  columns: Column[];
  clipboardOptions = {
    enabled: true,
    copyHeaders: false,
    copyFormatters: true,
    separator: "\t"
  };
  @Input('data') data: any[] = [];
  @Output() changeData = new EventEmitter<Transaction[]>();
  @ViewChild('grid', { static: true }) grid: IgxGridComponent;

  get canDelete(): boolean {
    return this.grid.selectedRows.length > 0;
  }

  get canUndo(): boolean {
    return this.grid.transactions.canUndo;
  }

  get canRedo(): boolean {
    return this.grid.transactions.canRedo;
  }

  get canCommit(): boolean {
    return this.grid.transactions.getAggregatedChanges(true).length > 0;
  }

  get canClear(): boolean {
    return this.grid.transactions.canUndo || this.grid.transactions.canRedo;
  }

  constructor() { }

  ngOnInit() {
    this.columns = [
      { field: 'id', dataType: 'number' },
      { field: '姓', dataType: 'string', editable: true },
      { field: '名', dataType: 'string', editable: true },
      { field: '性別', dataType: 'string', editable: true },
      { field: '生年月日', dataType: 'date', editable: true },
      { field: '年齢', dataType: 'number' },
      { field: '血液型', dataType: 'string', editable: true },
      { field: '郵便番号', dataType: 'string', editable: true },
      { field: '住所', dataType: 'string', editable: true },
      { field: '携帯電話', dataType: 'string', editable: true },
      { field: 'メールアドレス', dataType: 'string', editable: true }
    ];
  }

  onDelete(): void {
    const rowIDs = this.grid.selectedRows;
    rowIDs.forEach(rowID => this.grid.deleteRow(rowID));
  }

  onUndo(): void {
    this.grid.transactions.undo();
  }

  onRedo(): void {
    this.grid.transactions.redo();
  }

  onCommit(): void {
    const changes = this.grid.transactions.getAggregatedChanges(true);
    this.changeData.emit(changes);
    this.grid.transactions.commit(this.grid.data);
  }

  onClear(): void {
    this.grid.transactions.clear();
  }

  onToolbarExporting(event: IGridToolbarExportEventArgs): void {
    const selectedRows = this.grid.selectedRows;
    if (!selectedRows.length) {
      // デフォルトのエクスポート処理に任せる
      return;
    }

    // デフォルトのエクスポート処理はキャンセルし選択行のみをエクスポートする
    event.cancel = true;

    const data = this.grid.filteredSortedData;

    const dataToExport = [];
    for(let i = 0, rowsLength = selectedRows.length; i < rowsLength; i++) {
      const selectedItem = data.find(item => item.id === selectedRows[i]);
      if (selectedItem) {
        dataToExport.push(selectedItem);
      }
    }

    if (!dataToExport.length) {
      return;
    }

    event.exporter.exportData(dataToExport, event.options);
  }
}
