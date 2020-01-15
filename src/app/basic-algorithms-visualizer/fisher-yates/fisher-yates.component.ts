import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicAlgorithmService } from '../basic-algorithm.service';

@Component({
  selector: 'app-fisher-yates',
  templateUrl: './fisher-yates.component.html',
  styleUrls: ['./fisher-yates.component.scss']
})
export class FisherYatesComponent implements OnInit, OnDestroy {
  basicAlgorithmSub: Subscription;
  array: number[] = [];
  Modal: {
    title: string;
    text: string;
    list: string[];

    progressBar: number;
  } = {
    title: 'Fisher-Yates shuffle',
    text:
      'The Fisher-Yates shuffle is an algorithm for generating a random permutation of a finite sequence. The algorithm produces an unbiased permutation: every permutation is equally likely. How it works:',
    list: [
      'It iterates over every item in the array, while generating a new random position within the array range.',
      "It switches the element that it's corresponding to the current iteration with the one in the randomly generated posistion.",
      'At the end of the loop, the array will be sorted.'
    ],
    progressBar: 100
  };

  constructor(private basicAlgorithmService: BasicAlgorithmService) {}

  ngOnInit() {
    this.basicAlgorithmSub = this.basicAlgorithmService.basicAlgorithmEmitter.subscribe(
      (action: string) => {
        switch (action) {
          case 'fisherYates':
            this.fisherYates();
            break;
        }
      }
    );

    this.newArray();
  }

  newArray() {
    for (let i = 1; i < 51; i++) {
      this.array.push(i);
    }
  }

  fisherYates() {
    this.basicAlgorithmService.fisherYates(
      this.array,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  getProgressWidth() {
    return `${this.Modal.progressBar}%`;
  }

  ngOnDestroy() {
    this.basicAlgorithmSub.unsubscribe();
  }
}
