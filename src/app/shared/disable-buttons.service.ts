import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DisableButtonsService {
  buttonSwitchEmitter = new EventEmitter();
  switchNewArrayEmmiter = new EventEmitter();

  onButtonSwitch() {
    this.buttonSwitchEmitter.emit();
  }

  onVisualizeAlgorithm() {
    this.switchNewArrayEmmiter.emit();
  }
}
