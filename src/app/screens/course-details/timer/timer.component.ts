import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, finalize, interval, map, of, scan, startWith, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TimerComponent {
  interval$!: Observable<string | null>
  constructor() {
    const date = new Date()
    const numOfMillisecondTillEndOfDay = date.setHours(23, 59, 59, 999)
    this.interval$ = interval(1000).pipe(map(()=>{
      const timeDiff=numOfMillisecondTillEndOfDay - Date.now()
      if(timeDiff == 0) return null
      else{
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
      }
    }))
  }
}
