import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class BubbleSortService {
  constructor(private sleepService: SleepService) {}

  async bubbleSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    const n = array.length - 1;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        if (array[j] > array[j + 1]) {
          await this.sleepService.sleep(0.01);
          arrayBars[j].style.backgroundColor = 'yellow';
          arrayBars[j + 1].style.backgroundColor = 'yellow';
          await this.sleepService.sleep(0.01);
          arrayBars[j].style.backgroundColor = 'purple';
          arrayBars[j + 1].style.backgroundColor = 'purple';
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }
}
