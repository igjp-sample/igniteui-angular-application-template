import { StateService } from './../../../../../states/state.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  private _ageGroups$ = new BehaviorSubject<any[]>([]);

  get ageGroups$(): Observable<any[]> {
    return this._ageGroups$.asObservable();
  }

  private _genders$ = new BehaviorSubject<any[]>([]);

  get genders$(): Observable<any[]> {
    return this._genders$.asObservable();
  }

  private _bloodTypes$ = new BehaviorSubject<any[]>([]);

  get bloodTypes$(): Observable<any[]> {
    return this._bloodTypes$.asObservable();
  }

  constructor(private service: StateService) { }

  ngOnInit() {
    this.service.getData().subscribe(data => {
      let twenties = 0;
      let thirties = 0;
      let fourties = 0;
      let fifties = 0;
      let A = 0;
      let B = 0;
      let AB = 0;
      let O = 0;
      let man = 0;
      let woman = 0;
      for (const item of data) {

        const age = item['年齢']
        if (20 <= age && age < 30) twenties++;
        if (30 <= age && age < 40) thirties++;
        if (40 <= age && age < 50) fourties++;
        if (50 <= age && age < 60) fifties++;

        const bloodType = item['血液型'];
        if (bloodType === 'A') A++;
        if (bloodType === 'B') B++;
        if (bloodType === 'AB') AB++;
        if (bloodType === 'O') O++;

        item['性別'] === '男' ? man++ : woman++;

        this._ageGroups$.next([
          { ageGroup: '20代', count: twenties },
          { ageGroup: '30代', count: thirties },
          { ageGroup: '40代', count: fourties },
          { ageGroup: '50代', count: fifties }
        ]);

        this._bloodTypes$.next([
          { bloodType: 'A', count: A },
          { bloodType: 'B', count: B },
          { bloodType: 'AB', count: AB },
          { bloodType: 'O', count: O }
        ]);

        this._genders$.next([
          { gender: '男', count: man },
          { gender: '女', count: woman }
        ]);
      }
    });
  }
}
