import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class LinearSearchService {
  constructor(private sleepService: SleepService) {}

  async linearSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    for (let i = 0; i < array.length; i++) {
      await this.sleepService.sleep(50);
      arrayItems[i].style.backgroundColor = '#D32F2F';
      arrayItems[i].style.color = 'white';

      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }
}
