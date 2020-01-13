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
  disableButtons = true;
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
            await this.linearSearch(+searchValue);
            this.disableButtons = false;
            break;
          case 'binarySearch':
            await this.binarySearch(+searchValue);
            this.disableButtons = false;
            break;
          case 'jumpSearch':
            await this.jumpSearch(+searchValue);
            this.disableButtons = false;
            break;
          case 'interpolationSearch':
            await this.interpolationSearch(+searchValue);
            this.disableButtons = false;
            break;
          case 'exponentialSearch':
            await this.exponentialSearch(+searchValue);
            1;
            this.disableButtons = false;
            break;
          case 'fibonacciSearch':
            await this.fibonacciSearch(+searchValue);

            this.disableButtons = false;
            break;
          case 'newArray':
            this.newArray();
            break;
        }
      }
    );
    this.disableButtons = false;
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

  async linearSearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.linearSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }

  async binarySearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.binarySearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }

  async jumpSearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.jumpSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }

  async interpolationSearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.interpolationSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }

  async exponentialSearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.exponentialSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }

  async fibonacciSearch(searchValue: number) {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.searchingVisualizerService.fibonacciSearch(
      this.array,
      searchValue,
      document.getElementsByClassName('array-item') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    this.disableButtons = false;
  }
}
