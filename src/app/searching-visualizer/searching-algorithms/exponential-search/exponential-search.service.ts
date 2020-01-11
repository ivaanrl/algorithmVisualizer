import { Injectable } from '@angular/core';
import { BinarySearchService } from '../binary-search/binary-search.service';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class ExponentialSearchService {
  constructor(
    private binarySearchService: BinarySearchService,
    private sleepService: SleepService
  ) {}

  async exponentialSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    const len = array.length;
    if (array[0] === target) {
      return 0;
    }

    let i = 1;

    while (i < len && array[i] <= target) {
      await this.sleepService.sleep(50);
      arrayItems[i].style.backgroundColor = '#D32F2F';
      arrayItems[i].style.color = 'white';
      i = i * 2;
    }

    return await this.binarySearchService.binarySearch(
      array,
      i / 2,
      Math.min(i, len),
      target,
      arrayItems
    );
  }
}
