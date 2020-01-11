import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SortingVisualizerService } from '../sorting-visualizer/sorting-visualizer/sorting-visualizer.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SearchingVisualizerService } from '../searching-visualizer/searching-visualizer.service';
import { DisableButtonsService } from '../shared/disable-buttons.service';

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

  constructor(
    private sortingVisualizerService: SortingVisualizerService,
    private searchingVisualizerServce: SearchingVisualizerService,
    private disableButtonsService: DisableButtonsService,
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
    this.searchingVisualizerServce.onEmitSearch(action, searchValue.value);
  }

  onClick(string: string) {
    this.sortingVisualizerService.onAlgorithmEmit(string);
  }
}
