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
          await this.sleepService.sleep(0.001);
          arrayBars[j].style.backgroundColor = '#D32F2F';
          arrayBars[j + 1].style.backgroundColor = '#D32F2F';
          await this.sleepService.sleep(0.001);
          arrayBars[j].style.backgroundColor = '#1976D2';
          arrayBars[j + 1].style.backgroundColor = '#1976D2';
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  }
}
