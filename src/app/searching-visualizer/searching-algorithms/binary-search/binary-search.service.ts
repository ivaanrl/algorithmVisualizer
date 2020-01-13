import { Injectable } from '@angular/core';
import { QuickSortService } from 'src/app/sorting-visualizer/sorting-algorithms/quick-sort/quick-sort.service';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class BinarySearchService {
  constructor(private sleepService: SleepService) {}

  async binarySearch(
    array: number[],
    startIndex: number,
    endIndex: number,
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    if (endIndex >= startIndex) {
      let mid = Math.floor(startIndex + (endIndex - startIndex) / 2);

      await this.sleepService.sleep(50);
      arrayItems[mid].style.backgroundColor = '#D32F2F';
      arrayItems[mid].style.color = 'white';
      if (array[mid] === target) {
        return mid;
      }
      if (array[mid] > target) {
        return this.binarySearch(
          array,
          startIndex,
          mid - 1,
          target,
          arrayItems
        );
      }

      return this.binarySearch(array, mid + 1, endIndex, target, arrayItems);
    }
    return -1;
  }
}
