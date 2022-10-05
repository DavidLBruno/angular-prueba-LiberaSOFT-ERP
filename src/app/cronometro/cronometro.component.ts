import { Component, OnInit } from '@angular/core';
import { ClockService } from './service/clock.service';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit {
  seconds: number;
  constructor(private clockSVC: ClockService) {
    this.seconds = 0;
  }

  startClock(): void {
    this.clockSVC.timer$.subscribe(() => (this.seconds = this.seconds + 1));
  }

  resetClock(): void {
    this.seconds = 0;
  }

  ngOnInit(): void {}
}
