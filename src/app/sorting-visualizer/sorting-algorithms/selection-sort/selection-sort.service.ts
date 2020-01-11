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
        arrayBars[i].style.backgroundColor = 'yellow';
        arrayBars[min].style.backgroundColor = 'yellow';

        await this.sleepService.sleep(10);
        arrayBars[i].style.backgroundColor = 'purple';
        arrayBars[min].style.backgroundColor = 'purple';

        [array[i], array[min]] = [array[min], array[i]];
      }
    }
  }
}
