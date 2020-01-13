import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicAlgorithmService } from '../basic-algorithm.service';

@Component({
  selector: 'app-game-of-life',
  templateUrl: './game-of-life.component.html',
  styleUrls: ['./game-of-life.component.scss']
})
export class GameOfLifeComponent implements OnInit {
  basicAlgorithmSub: Subscription;
  grid: number[][] = [...Array(50)].map(e => Array(50));
  constructor(private basicAlgorithmService: BasicAlgorithmService) {}

  ngOnInit() {
    this.basicAlgorithmSub = this.basicAlgorithmService.basicAlgorithmEmitter.subscribe(
      (action: string) => {
        switch (action) {
          case 'gameOfLife':
            this.gameOfLife();
            break;
        }
      }
    );

    this.newGrid();
  }

  newGrid() {
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        this.grid[i][j] = Math.round(Math.random());
      }
    }
  }

  gameOfLife() {
    this.basicAlgorithmService.gameOfLife(this.grid, this.grid.slice());
  }
}
