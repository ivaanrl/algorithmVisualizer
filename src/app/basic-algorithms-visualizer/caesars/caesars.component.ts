import { Component, OnInit, OnDestroy } from '@angular/core';
import { BasicAlgorithmService } from '../basic-algorithm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-caesars',
  templateUrl: './caesars.component.html',
  styleUrls: ['./caesars.component.scss']
})
export class CaesarsComponent implements OnInit, OnDestroy {
  stringArray: string[] = [
    'e',
    'x',
    'a',
    'm',
    'p',
    'l',
    'e',
    ' ',
    's',
    't',
    'r',
    'i',
    'n',
    'g'
  ];
  shiftValue: number;
  cipheredArray: string[] = [];
  inputAndShiftSub: Subscription;
  basicAlgorithmSub: Subscription;

  constructor(private basicAlgorithmService: BasicAlgorithmService) {}

  ngOnInit() {
    this.inputAndShiftSub = this.basicAlgorithmService.inputChangedEmitter.subscribe(
      ([inputValue, shiftvalue]) => {
        this.stringArray = [];
        this.shiftValue = shiftvalue;
        inputValue.split('').forEach(char => {
          this.stringArray.push(char);
        });
      }
    );

    this.basicAlgorithmSub = this.basicAlgorithmService.basicAlgorithmEmitter.subscribe(
      (action: string) => {
        switch (action) {
          case 'caesars':
            this.caesars();
            break;
        }
      }
    );
  }

  async caesars() {
    await this.basicAlgorithmService.caesars(
      this.stringArray,
      this.shiftValue,
      document.getElementsByClassName('letter-square') as HTMLCollectionOf<
        HTMLElement
      >,
      this.cipheredArray,
      document.getElementsByClassName('ciphered-array') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  ngOnDestroy() {
    this.inputAndShiftSub.unsubscribe();
    this.basicAlgorithmSub.unsubscribe();
  }
}
