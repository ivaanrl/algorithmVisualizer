import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class FibonacciSearchService {
  constructor(private sleepService: SleepService) {}

  async fibonacciSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    let len = array.length;
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;

    while (fibM < len) {
      fibMMm2 = fibMMm1;
      fibMMm1 = fibM;
      fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
      let i = Math.min(offset + fibMMm2, len - 1);

      await this.sleepService.sleep(50);
      arrayItems[i].style.backgroundColor = '#D32F2F';
      arrayItems[i].style.color = 'white';

      if (array[i] < target) {
        fibM = fibMMm1;
        fibMMm1 = fibMMm2;
        fibMMm2 = fibM - fibMMm1;
        offset = i;
      } else if (array[i] > target) {
        fibM = fibMMm2;
        fibMMm1 = fibMMm1 - fibMMm2;
        fibMMm2 = fibM - fibMMm1;
      } else {
        return i;
      }
    }

    if (fibMMm1 && array[offset + 1] == target) return offset + 1;

    return -1;
  }
}
