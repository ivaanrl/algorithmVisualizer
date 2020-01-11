import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class JumpSearchService {
  constructor(private sleepService: SleepService) {}

  async jumpsearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    const len = array.length;
    let step = Math.floor(Math.sqrt(len));

    let prev = 0;
    while (array[Math.min(step, len) - 1] < target) {
      await this.sleepService.sleep(50);
      arrayItems[Math.min(step, len) - 1].style.backgroundColor = '#D32F2F';
      arrayItems[Math.min(step, len) - 1].style.color = 'white';
      prev = step;
      step += Math.floor(Math.sqrt(len));
      if (prev >= len) {
        return -1;
      }
    }

    while (array[prev] < target) {
      arrayItems[prev].style.backgroundColor = '#D32F2F';
      arrayItems[prev].style.color = 'white';
      prev++;

      if (prev == Math.min(step, len)) {
        return -1;
      }
    }

    if (array[prev] === target) {
      return prev;
    }

    return -1;
  }
}
