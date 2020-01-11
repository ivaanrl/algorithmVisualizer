import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchingVisualizerService } from './searching-visualizer.service';
import { DisableButtonsService } from '../shared/disable-buttons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-searching-visualizer',
  templateUrl: './searching-visualizer.component.html',
  styleUrls: ['./searching-visualizer.component.scss']
})
export class SearchingVisualizerComponent implements OnInit, OnDestroy {
  array: number[];
  disableButtons = false;
  searchSub: Subscription;
  constructor(
    private searchingVisualizerService: SearchingVisualizerService,
    private disableButtonsService: DisableButtonsService
  ) {}

  async ngOnInit() {
    this.newArray();
    this.searchSub = this.searchingVisualizerService.searchEmitter.subscribe(
      async ([action, searchValue]) => {
        switch (action) {
          case 'linearSearch':
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.linearSearch(+searchValue);
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            this.disableButtons = false;
            break;
          case 'binarySearch':
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.binarySearch(+searchValue);
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            this.disableButtons = false;
            break;
          case 'jumpSearch':
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.jumpSearch(+searchValue);
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            this.disableButtons = false;
            break;
          case 'interpolationSearch':
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.interpolationSearch(+searchValue);
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            this.disableButtons = false;
            break;
          case 'newArray':
            this.newArray();
            break;
        }
      }
    );
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
  }

  newArray() {
    this.array = this.searchingVisualizerService.newArray();
    const arrayItems = [].slice.call(
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    for (let i = 0; i < arrayItems.length; i++) {
      arrayItems[i].style.backgroundColor = 'white';
      arrayItems[i].style.color = '#1976d2';
    }
    if (!this.disableButtons) {
      this.disableButtons = true;
      this.disableButtonsService.buttonSwitchEmitter.emit();
    }
  }

  linearSearch(searchValue: number) {
    this.searchingVisualizerService.linearSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  binarySearch(searchValue: number) {
    this.searchingVisualizerService.binarySearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  jumpSearch(searchValue: number) {
    this.searchingVisualizerService.jumpSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  interpolationSearch(searchValue: number) {
    this.searchingVisualizerService.interpolationSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }
}
