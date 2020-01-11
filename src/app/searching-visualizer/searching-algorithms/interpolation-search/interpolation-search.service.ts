import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class InterpolationSearchService {
  constructor(private sleepService: SleepService) {}

  async interpolationSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    let low = 0;
    let high = array.length - 1;

    while (low <= high && target >= array[low] && target <= array[high]) {
      if (low === high) {
        await this.sleepService.sleep(50);
        arrayItems[low].style.backgroundColor = '#D32F2F';
        arrayItems[low].style.color = 'white';
        if (array[low] === target) return low;
        return -1;
      }

      let pos = Math.floor(
        low +
          ((high - low) / (array[high] - array[low])) * (target - array[low])
      );

      await this.sleepService.sleep(50);
      arrayItems[pos].style.backgroundColor = '#D32F2F';
      arrayItems[pos].style.color = 'white';
      if (array[pos] === target) {
        return pos;
      }

      if (array[pos] < target) {
        low = pos + 1;
      } else {
        high = pos - 1;
      }
    }
    return -1;
  }
}
