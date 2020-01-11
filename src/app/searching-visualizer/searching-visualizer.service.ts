import { Injectable, EventEmitter } from '@angular/core';
import { SleepService } from '../shared/sleep.service';
import { LinearSearchService } from './searching-algorithms/linear-search/linear-search.service';
import { BinarySearchService } from './searching-algorithms/binary-search/binary-search.service';
import { QuickSortService } from '../sorting-visualizer/sorting-algorithms/quick-sort/quick-sort.service';
import { JumpSearchService } from './searching-algorithms/jump-search/jump-search.service';
import { InterpolationSearchService } from './searching-algorithms/interpolation-search/interpolation-search.service';

@Injectable({ providedIn: 'root' })
export class SearchingVisualizerService {
  searchEmitter = new EventEmitter();

  constructor(
    private sleepService: SleepService,
    private quickSortService: QuickSortService,
    private linearSearchService: LinearSearchService,
    private binarySearchService: BinarySearchService,
    private jumpSearchService: JumpSearchService,
    private interpolationSearchService: InterpolationSearchService
  ) {}

  onEmitSearch(action: string, searchValue: string) {
    this.searchEmitter.emit([action, searchValue]);
  }

  newArray() {
    const array: number[] = [];
    for (let i = 0; i < 70; i++) {
      array.push(this.randomIntFromInterval(0, 999));
    }
    return array;
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async linearSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    const result = await this.linearSearchService.linearSearch(
      array,
      target,
      arrayItems
    );
    if (result !== -1) {
      arrayItems[result].style.backgroundColor = '#1976D2';
      arrayItems[result].style.color = 'white';
    }
  }

  async binarySearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    await this.sortArrayForSearch(array, arrayItems);
    const result = await this.binarySearchService.binarySearch(
      array,
      0,
      array.length - 1,
      target,
      arrayItems
    );
    if (result !== -1) {
      arrayItems[result].style.backgroundColor = '#1976D2';
      arrayItems[result].style.color = 'white';
    }
  }

  async jumpSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    await this.sortArrayForSearch(array, arrayItems);
    const result = await this.jumpSearchService.jumpsearch(
      array,
      target,
      arrayItems
    );
    if (result !== -1) {
      arrayItems[result].style.backgroundColor = '#1976D2';
      arrayItems[result].style.color = 'white';
    }
  }

  async interpolationSearch(
    array: number[],
    target: number,
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    await this.sortArrayForSearch(array, arrayItems);
    const result = await this.interpolationSearchService.interpolationSearch(
      array,
      target,
      arrayItems
    );
    if (result !== -1) {
      arrayItems[result].style.backgroundColor = '#1976D2';
      arrayItems[result].style.color = 'white';
    }
  }

  private async sortArrayForSearch(
    array: number[],
    arrayItems: HTMLCollectionOf<HTMLElement>
  ) {
    await this.quickSortService.quickSort(
      array,
      0,
      array.length - 1,
      arrayItems
    );
    const arr: HTMLElement[] = [].slice.call(arrayItems);
    for (let i = 0; i < arr.length; i++) {
      await this.sleepService.sleep(5);
      arr[i].style.backgroundColor = 'white';
      arr[i].style.color = '#1976d2';
    }
  }
}
