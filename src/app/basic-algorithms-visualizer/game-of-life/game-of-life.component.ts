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
  Modal: {
    title: string;
    text: string;
    list: string[];

    progressBar: number;
  } = {
    title: 'Game of Life',
    text:
      "The Game of Life is a cellular automaton devised by John Horton Conway. It's an evolution based game. These are the rules:",
    list: [
      'Any live cell with fewer than two live neighbours dies, as if by underpopulation.',
      'Any live cell with two or three live neighbours lives on to the next generation.',
      'Any live cell with more than three live neighbours dies, as if by overpopulation.',
      'Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.'
    ],
    progressBar: 100
  };

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

  getProgressWidth() {
    return `${this.Modal.progressBar}%`;
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
