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

  constructor(private basicAlgorithmService: BasicAlgorithmService) {}

  ngOnInit() {
    this.basicAlgorithmSub = this.basicAlgorithmService.basicAlgorithmEmitter.subscribe(
      (action: string) => {
        console.log(action);
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

  ngOnDestroy() {
    this.basicAlgorithmSub.unsubscribe();
  }
}
