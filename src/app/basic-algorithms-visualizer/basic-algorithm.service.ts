import { Injectable, EventEmitter } from '@angular/core';
import { SleepService } from '../shared/sleep.service';

@Injectable({ providedIn: 'root' })
export class BasicAlgorithmService {
  basicAlgorithmEmitter = new EventEmitter();
  inputChangedEmitter = new EventEmitter();

  constructor(private sleepService: SleepService) {}

  onBasicAlgorithmEmit(action: string) {
    this.basicAlgorithmEmitter.emit(action);
  }

  onInputChangeEmit(inputValue: string, shiftValue: number) {
    this.inputChangedEmitter.emit([inputValue, shiftValue]);
  }

  async caesars(
    array: string[],
    shift: number,
    arrayContainer: HTMLCollectionOf<HTMLElement>,
    cipheredArray: string[],
    cipheredArrayContainer: HTMLCollectionOf<HTMLElement>
  ) {
    for (let i = 0; i < array.length; i++) {
      let code = array[i].charCodeAt(0);
      cipheredArray.push(array[i]);
      arrayContainer[i].style.backgroundColor = '#D32F2F';

      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        if (code >= 65 && code <= 90) {
          while (code + shift > 90) {
            code -= 26;
          }

          while (code + shift < 65) {
            code += 26;
          }
        }

        if (code >= 97 && code <= 122) {
          while (code + shift > 122) {
            code -= 26;
          }
          while (code + shift < 97) {
            code += 26;
          }
        }

        if (Math.abs(shift) > 26) {
          shift = shift % 26;
        }

        for (let j = 0; j <= shift; j++) {
          await this.sleepService.sleep(400);
          cipheredArray[i] = String.fromCharCode(code + j);
        }
      }
      await this.sleepService.sleep(200);
      cipheredArrayContainer[i].style.backgroundColor = '#1976d2';
      arrayContainer[i].style.backgroundColor = '#1976d2';
    }
  }
}
