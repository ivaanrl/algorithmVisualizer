import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class MergeSortService {
  constructor(private sleepService: SleepService) {}

  async merge(
    array: number[],
    startIndex: number,
    m: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    console.log(m);
    console.log(endIndex);
    let n1 = m - startIndex + 1;
    let n2 = endIndex - m;

    const l = [...Array(n1)];
    const r = [...Array(n2)];

    for (let i = 0; i < n1; i++) {
      l[i] = array[startIndex + i];
    }
    for (let j = 0; j < n2; j++) {
      r[j] = array[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = startIndex;

    while (i < n1 && j < n2) {
      if (l[i] <= r[j]) {
        await this.sleepService.sleep(5);
        arrayBars[k].style.backgroundColor = '#D32F2F';
        await this.sleepService.sleep(5);
        arrayBars[k].style.backgroundColor = '#1976D2';

        array[k] = l[i];
        i++;
      } else {
        await this.sleepService.sleep(5);
        arrayBars[k].style.backgroundColor = '#D32F2F';
        await this.sleepService.sleep(5);
        arrayBars[k].style.backgroundColor = '#1976D2';

        array[k] = r[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      await this.sleepService.sleep(5);
      arrayBars[k].style.backgroundColor = '#D32F2F';
      await this.sleepService.sleep(5);
      arrayBars[k].style.backgroundColor = '#1976D2';

      array[k] = l[i];
      i++;
      k++;
    }

    while (j < n2) {
      await this.sleepService.sleep(5);
      arrayBars[k].style.backgroundColor = '#D32F2F';
      await this.sleepService.sleep(5);
      arrayBars[k].style.backgroundColor = '#1976D2';

      array[k] = r[j];
      j++;
      k++;
    }
  }

  async mergeSort(
    array: number[],
    startIndex: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    if (startIndex < endIndex) {
      let m = startIndex + Math.floor((endIndex - startIndex) / 2);
      await this.mergeSort(array, startIndex, m, arrayBars);
      await this.mergeSort(array, m + 1, endIndex, arrayBars);

      await this.merge(array, startIndex, m, endIndex, arrayBars);
    }
  }
}
