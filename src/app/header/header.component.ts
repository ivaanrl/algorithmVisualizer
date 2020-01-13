import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SortingVisualizerService } from '../sorting-visualizer/sorting-visualizer/sorting-visualizer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SearchingVisualizerService } from '../searching-visualizer/searching-visualizer.service';
import { DisableButtonsService } from '../shared/disable-buttons.service';
import { BasicAlgorithmService } from '../basic-algorithms-visualizer/basic-algorithm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  disableButtons = false;
  disableNewArray = false;
  buttonSwitchSub: Subscription;
  NewArrayButtonSub: Subscription;
  textValue: string = '';
  shiftValue: number;

  constructor(
    private sortingVisualizerService: SortingVisualizerService,
    private searchingVisualizerServce: SearchingVisualizerService,
    private disableButtonsService: DisableButtonsService,
    private basicAlgorithmService: BasicAlgorithmService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buttonSwitchSub = this.disableButtonsService.buttonSwitchEmitter.subscribe(
      () => {
        this.switchButtons();
      }
    );
    this.NewArrayButtonSub = this.disableButtonsService.switchNewArrayEmmiter.subscribe(
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

  onSearch(action: string, searchValue: any) {
    //What type is searchValue?!
    this.searchingVisualizerServce.onEmitSearch(action, searchValue.value);
  }

  onClick(string: string) {
    this.sortingVisualizerService.onAlgorithmEmit(string);
  }

  onInputChange() {
    this.basicAlgorithmService.onInputChangeEmit(
      this.textValue,
      this.shiftValue
    );
  }

  onBasicStart() {
    let action: string;
    switch (this.router.url) {
      case '/basicAlgorithmVisualizer/caesars':
        action = 'caesars';
        break;
      case '/basicAlgorithmVisualizer/FisherYates':
        action = 'fisherYates';
        break;
      case '/basicAlgorithmVisualizer/gameOfLife':
        action = 'gameOfLife';
        break;
    }
    this.basicAlgorithmService.onBasicAlgorithmEmit(action);
  }
}
