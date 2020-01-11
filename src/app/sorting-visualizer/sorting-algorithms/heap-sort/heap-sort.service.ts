import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class HeapSortService {
  constructor(private sleepService: SleepService) {}
  async heapSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    const n: number = array.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
      await this.heapify(array, n, i, arrayBars);
    }

    for (let i = n - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      await this.heapify(array, i, 0, arrayBars);
    }
  }

  async heapify(
    array: number[],
    n: number,
    i: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < n && array[l] > array[largest]) {
      largest = l;
    }

    if (r < n && array[r] > array[largest]) {
      largest = r;
    }

    if (largest != i) {
      await this.sleepService.sleep(0.5);
      arrayBars[i].style.backgroundColor = '#D32F2F';
      arrayBars[largest].style.backgroundColor = '#D32F2F';

      await this.sleepService.sleep(0.5);
      arrayBars[i].style.backgroundColor = '#1976D2';
      arrayBars[largest].style.backgroundColor = '#1976D2';
      [array[i], array[largest]] = [array[largest], array[i]];
      await this.heapify(array, n, largest, arrayBars);
    }
  }
}
