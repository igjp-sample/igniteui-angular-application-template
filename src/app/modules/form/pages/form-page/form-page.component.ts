import { StateService } from './../../../../states/state.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DisplayDensityToken, DisplayDensity, IListItemClickEventArgs, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact } }],
})
export class FormPageComponent implements OnInit {
  data$: Observable<any[]>;
  data: any[];

  private selectedId: number;
  private selectedItem: any;
  form: FormGroup;

  @ViewChild('snackbar', { static: true }) snackbar: IgxSnackbarComponent;
  
  constructor(private service: StateService, private fb: FormBuilder) {
    this.form = fb.group({
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      birthday: [null, Validators.required],
      zipcode: [null, Validators.required],
      address: [null, Validators.required],
      phone: [null],
      email: [null]
    });
    
    this.data$ = this.service.getData();
    this.data$.subscribe(people => this.data = people);
  }

  ngOnInit() {
  }

  onItemClicked(event: IListItemClickEventArgs): void {
    this.selectedItem = this.getItem(event.item.index);
    this.selectedId = this.selectedItem.id;
    

    this.form.patchValue({
      lastName: this.selectedItem['姓'],
      firstName: this.selectedItem['名'],
      birthday: new Date(this.selectedItem['生年月日']),
      zipcode: this.selectedItem['郵便番号'],
      address: this.selectedItem['住所'],
      phone: this.selectedItem['携帯電話'],
      email: this.selectedItem['メールアドレス']
    });
  }
  
  onSubmit($event):void {
    console.log(this.form);
    const rawValue = this.form.getRawValue();
    const updatedItem = this.selectedItem;
    updatedItem['姓'] = rawValue.lastName;
    updatedItem['名'] = rawValue.firstName;
    updatedItem['生年月日'] = rawValue.birthday.toLocaleDateString();
    updatedItem['郵便番号'] = rawValue.zipcode;
    updatedItem['住所'] = rawValue.address;
    updatedItem['携帯電話'] = rawValue.phone;
    updatedItem['メールアドレス'] = rawValue.email;

    this.service.updateSingleItem(updatedItem);

    this.snackbar.show();
  }

  isSelected(item: any): boolean {
    return item.id === this.selectedId;
  }

  isItemSelected() : boolean{
    if(this.selectedItem === undefined) return false;
    if(this.selectedItem === null ) return false;
    return true;
  }

  isFilled(name: string): boolean {
    return !!this.form.get(name).value;
  }

  clear(name: string): void {
    return this.form.get(name).setValue(null);
  }

  getItem(index: number){
    return this.data[index];
  }
}
