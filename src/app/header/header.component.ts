import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortingVisualizerService } from '../sorting-visualizer/sorting-visualizer/sorting-visualizer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  disableButtons = true;
  disableNewArray = false;
  buttonSwitchSub: Subscription;
  NewArrayButtonSub: Subscription;

  constructor(private sortingVisualizerService: SortingVisualizerService) {}

  ngOnInit() {
    this.buttonSwitchSub = this.sortingVisualizerService.buttonSwitchEmitter.subscribe(
      () => {
        this.switchButtons();
      }
    );
    this.NewArrayButtonSub = this.sortingVisualizerService.switchNewArrayEmmiter.subscribe(
      () => {
        this.switchNewArrayButton();
      }
    );
  }

  ngOnDestroy() {
    this.buttonSwitchSub.unsubscribe();
    this.NewArrayButtonSub.unsubscribe();
  }

  switchButtons() {
    this.disableButtons = !this.disableButtons;
  }

  switchNewArrayButton() {
    this.disableNewArray = !this.disableNewArray;
  }

  onClick(string: string) {
    this.sortingVisualizerService.onAlgorithmEmit(string);
  }
}
