import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SortingVisualizerService {
  newArray() {
    const array: number[] = [];
    for (let i = 0; i < 100; i++) {
      array.push(this.randomIntFromInterval(5, 1000));
    }
    return array;
  }

  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
