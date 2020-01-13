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
  grid: number[][] = [...Array(20)].map(e => Array(20));
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
    console.table(this.grid);
  }

  newGrid() {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        this.grid[i][j] = Math.round(Math.random());
      }
    }
  }

  //Math.round(Math.random())
  gameOfLife() {
    console.log('game of life');
  }
}
