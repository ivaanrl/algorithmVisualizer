import { Injectable } from '@angular/core';
import { MergeSortService } from '../sorting-algorithms/merge-sort/merge-sort.service';
import { QuickSortService } from '../sorting-algorithms/quick-sort/quick-sort.service';

@Injectable({ providedIn: 'root' })
export class SortingVisualizerService {
  ANIMATION_SPEED_MS = 3;
  NUMBER_OF_ARRAY_BARS = 310;
  PRIMARY_COLOR = 'purple';
  SECONDARY_COLOR = 'yellow';
  constructor(
    private mergeSortService: MergeSortService,
    private quickSortService: QuickSortService
  ) {}

  newArray() {
    const array: number[] = [];
    for (let i = 0; i < 150; i++) {
      array.push(this.randomIntFromInterval(5, 1000));
    }
    return array;
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    const animationsArray = this.mergeSortService.getMergeSortAnimations(array);
    for (let i = 0; i < animationsArray.length; i++) {
      const shouldColorChange = i % 3 !== 2;
      if (shouldColorChange) {
        const barOneIndex = animationsArray[i][0];
        const barTwoIndex = animationsArray[i][1];
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const barOneStyle = arrayBars[barOneIndex].style;
        const color = i % 3 === 0 ? this.SECONDARY_COLOR : this.PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIndex = animationsArray[i][0];
          const newHeight = animationsArray[i][1];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    const startIndex = 0;
    const endIndex = array.length - 1;
    this.quickSortService.quickSort(array, startIndex, endIndex, arrayBars);
  }
}
