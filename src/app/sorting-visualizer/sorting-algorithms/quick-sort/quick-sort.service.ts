import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class QuickSortService {
  constructor(private sleepService: SleepService) {}

  async partition(
    array: number[],
    startIndex: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    const pivot = array[endIndex];
    let i = startIndex - 1;
    for (let j = startIndex; j < endIndex; j++) {
      if (array[j] < pivot) {
        i++;
        await this.sleepService.sleep(5);
        if (i >= 0) arrayBars[i].style.backgroundColor = 'yellow';
        arrayBars[j].style.backgroundColor = 'yellow';

        await this.sleepService.sleep(10);
        if (i >= 0) arrayBars[i].style.backgroundColor = 'purple';
        arrayBars[j].style.backgroundColor = 'purple';

        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    [array[i + 1], array[endIndex]] = [array[endIndex], array[i + 1]];

    return i + 1;
  }

  async quickSort(
    array: number[],
    startIndex: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    if (endIndex < startIndex) return;
    let pi = await this.partition(array, startIndex, endIndex, arrayBars);

    await this.quickSort(array, startIndex, pi - 1, arrayBars);
    await this.quickSort(array, pi + 1, endIndex, arrayBars);
  }
}
