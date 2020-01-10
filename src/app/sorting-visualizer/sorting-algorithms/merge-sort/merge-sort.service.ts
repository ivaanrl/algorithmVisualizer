import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MergeSortService {
  getMergeSortAnimations(array: number[]) {
    const animations: number[][] = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    this.mergeSortHelper(
      array,
      0,
      array.length - 1,
      auxiliaryArray,
      animations
    );
    return animations;
  }

  private mergeSortHelper(
    mainArray: number[],
    startIndex: number,
    endIndex: number,
    auxiliaryArray: number[],
    animations: number[][]
  ) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    this.mergeSortHelper(
      auxiliaryArray,
      startIndex,
      middleIndex,
      mainArray,
      animations
    );
    this.mergeSortHelper(
      auxiliaryArray,
      middleIndex + 1,
      endIndex,
      mainArray,
      animations
    );
    this.merge(
      mainArray,
      startIndex,
      middleIndex,
      endIndex,
      auxiliaryArray,
      animations
    );
  }

  private merge(
    mainArray: number[],
    startIndex: number,
    middleIndex: number,
    endIndex: number,
    auxiliaryArray: number[],
    animations: number[][]
  ) {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    while (i <= middleIndex && j <= endIndex) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }

    while (i <= middleIndex) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIndex) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
}
