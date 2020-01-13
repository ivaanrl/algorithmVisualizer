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
    let fib2 = 0;
    let fib1 = 1;
    let fibM = fib2 + fib1;

    while (fibM < len) {
      fib2 = fib1;
      fib1 = fibM;
      fibM = fib2 + fib1;
    }

    let offset = -1;

    while (fibM > 1) {
      let i = Math.min(offset + fib2, len - 1);

      await this.sleepService.sleep(50);
      arrayItems[i].style.backgroundColor = '#D32F2F';
      arrayItems[i].style.color = 'white';

      if (array[i] < target) {
        fibM = fib1;
        fib1 = fib2;
        fib2 = fibM - fib1;
        offset = i;
      } else if (array[i] > target) {
        fibM = fib2;
        fib1 = fib1 - fib2;
        fib2 = fibM - fib1;
      } else {
        return i;
      }
    }

    if (fib1 && array[offset + 1] == target) return offset + 1;

    return -1;
  }
}
