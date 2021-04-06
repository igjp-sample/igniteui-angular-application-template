import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { IgxListModule, IgxForOfModule } from 'igniteui-angular';
import { IgxIconModule, IgxInputGroupModule, IgxDatePickerModule, IgxProgressBarModule, IgxButtonModule, IgxRippleModule, IgxSnackbarModule } from "igniteui-angular";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormRoutingModule,
    IgxListModule,
    IgxForOfModule,

    IgxIconModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxProgressBarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxSnackbarModule
  ]
})
export class FormModule { }
