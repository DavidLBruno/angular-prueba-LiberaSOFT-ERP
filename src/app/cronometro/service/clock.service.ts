import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  timer$: Observable<number> = interval(1000);

  constructor() {}
}
