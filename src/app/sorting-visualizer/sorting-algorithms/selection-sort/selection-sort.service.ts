import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class SelectionSortService {
  constructor(private sleepService: SleepService) {}

  async selectionSort(
    array: number[],
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    for (var i = 0; i < array.length; i++) {
      let min = i;

      for (var j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }
      }

      if (i !== min) {
        await this.sleepService.sleep(10);
        arrayBars[i].style.backgroundColor = '#D32F2F';
        arrayBars[min].style.backgroundColor = '#D32F2F';

        await this.sleepService.sleep(10);
        arrayBars[i].style.backgroundColor = '#1976D2';
        arrayBars[min].style.backgroundColor = '#1976D2';

        [array[i], array[min]] = [array[min], array[i]];
      }
    }
  }
}
