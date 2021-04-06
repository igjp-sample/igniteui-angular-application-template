import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './components/grid/grid.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { PipeModule } from '../../pipe.module';

import {
  changei18n,
  IgxGridModule,
  IgxSelectModule,
  IgxExcelExporterService,
  IgxCsvExporterService
} from 'igniteui-angular';
import { IgxResourceStringsJA } from 'igniteui-angular-i18n';
changei18n(IgxResourceStringsJA);

@NgModule({
  declarations: [GridComponent, GridPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    GridRoutingModule,
    IgxGridModule,
    IgxSelectModule,
    PipeModule
  ],
  providers: [
    IgxExcelExporterService,
    IgxCsvExporterService
  ]
})
export class GridModule { }
