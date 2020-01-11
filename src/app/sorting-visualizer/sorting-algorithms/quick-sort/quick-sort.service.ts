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
        if (i >= 0) {
          arrayBars[i].style.backgroundColor = '#D32F2F';
          arrayBars[i].style.color = 'white';
        }

        arrayBars[j].style.backgroundColor = '#D32F2F';
        arrayBars[j].style.color = 'white';

        await this.sleepService.sleep(10);
        if (i >= 0) {
          arrayBars[i].style.backgroundColor = '#1976D2';
          arrayBars[i].style.color = 'white';
        }
        arrayBars[j].style.backgroundColor = '#1976D2';
        arrayBars[j].style.color = 'white';

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
