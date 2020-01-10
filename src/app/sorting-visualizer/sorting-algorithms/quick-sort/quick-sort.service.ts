import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuickSortService {
  async partition(
    array: number[],
    startIndex: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    const pivot = array[endIndex];
    let i = startIndex - 1;
    for (let j = startIndex; j < endIndex; j++) {
      if (array[j] < pivot) {
        i++;
        await this.sleep(10);
        if (i >= 0) arrayBars[i].style.backgroundColor = 'yellow';
        arrayBars[j].style.backgroundColor = 'yellow';
        [array[i], array[j]] = [array[j], array[i]];
        await this.sleep(10);
        if (i >= 0) arrayBars[i].style.backgroundColor = 'purple';
        arrayBars[j].style.backgroundColor = 'purple';
      }
    }

    [array[i + 1], array[endIndex]] = [array[endIndex], array[i + 1]];

    return i + 1;
  }

  async quickSort(
    array: number[],
    startIndex: number,
    endIndex: number,
    arrayBars: HTMLCollectionOf<HTMLElement>
  ) {
    if (endIndex < startIndex) return;
    let pi = await this.partition(array, startIndex, endIndex, arrayBars);
    //Promise.all([
    await this.quickSort(array, startIndex, pi - 1, arrayBars),
      await this.quickSort(array, pi + 1, endIndex, arrayBars);
    //]);
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
