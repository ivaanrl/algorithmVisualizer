import { Injectable } from '@angular/core';
import { SleepService } from 'src/app/shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class GameOfLifeService {
  constructor(private sleepService: SleepService) {}

  async gameOfLife(ogArray: number[][], nextGen: number[][]) {
    await this.getNeighbours(ogArray, nextGen);
    await this.sleepService.sleep(2000);
    ogArray = nextGen;
    this.gameOfLife(ogArray, nextGen);
  }

  async getNeighbours(ogArray: number[][], nextGen: number[][]) {
    for (let i = 0; i < 35; i++) {
      for (let j = 0; j < 50; j++) {
        let sumOfNeighbours = 0;
        if (i > 0) sumOfNeighbours += ogArray[i - 1][j];
        if (i < ogArray.length - 1) sumOfNeighbours += ogArray[i + 1][j];

        if (j > 0) sumOfNeighbours += ogArray[i][j - 1];
        if (j < ogArray[0].length - 1) sumOfNeighbours += ogArray[i][j + 1];

        if (i > 0 && j > 0) sumOfNeighbours += ogArray[i - 1][j - 1];
        if (i < ogArray.length - 1 && j > 0)
          sumOfNeighbours += ogArray[i + 1][j - 1];
        if (i < ogArray.length - 1 && j < ogArray[0].length - 1)
          sumOfNeighbours += ogArray[i + 1][j + 1];
        if (i > 0 && j < ogArray[0].length - 1)
          sumOfNeighbours += ogArray[i - 1][j + 1];

        if (ogArray[i][j] === 1 && sumOfNeighbours < 2) {
          nextGen[i][j] = 0;
        } else if (ogArray[i][j] === 1 && sumOfNeighbours > 3) {
          nextGen[i][j] = 0;
        } else if (ogArray[i][j] === 0 && sumOfNeighbours === 3) {
          nextGen[i][j] = 1;
        } else nextGen[i][j] = ogArray[i][j];
      }
    }
  }
}
