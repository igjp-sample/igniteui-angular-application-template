import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { switchMap } from 'rxjs/operators';
import { Transaction, TransactionType } from 'igniteui-angular';
@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor(private http: HttpClient) {}
  private url: string = 'api/people';
  private readonly refreshToken$ = new BehaviorSubject(undefined);
  private readonly data$ = this.refreshToken$.pipe(
    switchMap(() => this.http.get('/api/people')));
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getData(): Observable<any> {
    return this.data$;
  }

  updateSingleItem(dataItem: any): void {
    this.http
      .put(`${this.url}/${dataItem.id}`, dataItem, this.httpOptions)
      .subscribe(response => {
        this.refreshToken$.next(undefined); // reference - https://dev.to/eyassh/data-and-page-content-refresh-patterns-in-angular-434i
      }
    );
  }

  changeData(transactions: Transaction[]): void {
    transactions.forEach(item => {
      switch (item.type) {
        case TransactionType.ADD: {
          // this.gridStore.add(item.value);
          break;
        }

        case TransactionType.UPDATE: {
          this.http
            .put(`${this.url}/${item.id}`, item.newValue, this.httpOptions)
            .subscribe(response => {
              this.refreshToken$.next(undefined); // reference - https://dev.to/eyassh/data-and-page-content-refresh-patterns-in-angular-434i
            }
          );
          break;
        }

        case TransactionType.DELETE: {
          break;
        }
      }
    });
  }
}
