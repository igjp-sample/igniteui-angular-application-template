import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page/dashboard-page.component';
import { IgxCardModule, IgxIconModule, IgxSnackbarModule } from 'igniteui-angular';
import {
  IgxDataChartCoreModule,
  IgxDataChartCategoryModule,
  IgxDataChartAnnotationModule,
  IgxDoughnutChartModule,
  IgxPieChartModule,
  IgxItemLegendModule
} from 'igniteui-angular-charts';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,

    IgxCardModule,
    IgxIconModule,
    IgxSnackbarModule,

    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    IgxDataChartAnnotationModule,
    IgxDoughnutChartModule,
    IgxPieChartModule,
    IgxItemLegendModule,
    
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
