import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class InsertionSortService {
  constructor(private sleepService: SleepService) {}

  async insertionSort(
    array: number[],
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;

      while (j >= 0 && array[j] > key) {
        await this.sleepService.sleep(0.01);
        arrayBars[j].style.backgroundColor = '#D32F2F';
        arrayBars[j + 1].style.backgroundColor = '#D32F2F';

        await this.sleepService.sleep(0.01);
        arrayBars[j].style.backgroundColor = '#1976D2';
        arrayBars[j + 1].style.backgroundColor = '#1976D2';
        array[j + 1] = array[j];
        j = j - 1;
      }

      array[j + 1] = key;
    }
  }
}
