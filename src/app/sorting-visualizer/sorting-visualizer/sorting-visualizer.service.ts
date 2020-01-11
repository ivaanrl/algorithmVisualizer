import { Injectable } from '@angular/core';
import { MergeSortService } from '../sorting-algorithms/merge-sort/merge-sort.service';
import { QuickSortService } from '../sorting-algorithms/quick-sort/quick-sort.service';
import { async } from '@angular/core/testing';
import { HeapSortService } from '../sorting-algorithms/heap-sort/heap-sort.service';
import { SleepService } from 'src/app/shared/sleep.service';
import { BubbleSortService } from '../sorting-algorithms/bubble-sort/bubble-sort.service';

@Injectable({ providedIn: 'root' })
export class SortingVisualizerService {
  ANIMATION_SPEED_MS = 3;
  NUMBER_OF_ARRAY_BARS = 310;
  PRIMARY_COLOR = 'purple';
  SECONDARY_COLOR = 'yellow';
  constructor(
    private sleepService: SleepService,
    private mergeSortService: MergeSortService,
    private quickSortService: QuickSortService,
    private heapSortService: HeapSortService,
    private bubbleSortService: BubbleSortService
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

  async mergeSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
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

  async quickSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    const startIndex = 0;
    const endIndex = array.length - 1;
    await this.quickSortService.quickSort(
      array,
      startIndex,
      endIndex,
      arrayBars
    );
    const arr: HTMLElement[] = [].slice.call(arrayBars);
    for (let i = 0; i < arr.length; i++) {
      await this.sleepService.sleep(5);
      arr[i].style.backgroundColor = 'rgba(131, 225, 91, 1)';
    }
  }

  async heapSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    await this.heapSortService.heapSort(array, arrayBars);
    const arr: HTMLElement[] = [].slice.call(arrayBars);
    for (let i = 0; i < arr.length; i++) {
      await this.sleepService.sleep(5);
      arr[i].style.backgroundColor = 'rgba(131, 225, 91, 1)';
    }
  }

  async bubbleSort(array: number[], arrayBars: HTMLCollectionOf<HTMLElement>) {
    await this.bubbleSortService.bubbleSort(array, arrayBars);
    const arr: HTMLElement[] = [].slice.call(arrayBars);
    for (let i = 0; i < arr.length; i++) {
      await this.sleepService.sleep(5);
      arr[i].style.backgroundColor = 'rgba(131, 225, 91, 1)';
    }
  }
}
