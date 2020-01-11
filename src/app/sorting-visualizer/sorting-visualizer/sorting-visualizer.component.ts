import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortingVisualizerService } from './sorting-visualizer.service';
import { Subscription } from 'rxjs';
import { DisableButtonsService } from 'src/app/shared/disable-buttons.service';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.scss']
})
export class SortingVisualizerComponent implements OnInit, OnDestroy {
  array: number[];
  disableButtons = false;
  sub: Subscription;
  constructor(
    private sortingVisualizerService: SortingVisualizerService,
    private disableButtonsService: DisableButtonsService
  ) {}

  async ngOnInit() {
    this.newArray();
    this.sub = this.sortingVisualizerService.algorithmEmitter.subscribe(
      async (event: string) => {
        switch (event) {
          case 'quickSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.quickSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'mergeSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.mergeSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'heapSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.heapSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'bubbleSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.bubbleSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'insertionSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.insertionSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'selectionSort': {
            this.disableButtonsService.buttonSwitchEmitter.emit();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            await this.selectionSort();
            this.disableButtonsService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'newArray': {
            this.newArray();
            break;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getArrayBarHeight(height: number) {
    return `${height}px`;
  }

  newArray() {
    this.array = this.sortingVisualizerService.newArray();
    const arrayBars = [].slice.call(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = '#1976D2';
    }
    if (!this.disableButtons) {
      this.disableButtons = true;
      this.disableButtonsService.buttonSwitchEmitter.emit();
    }
  }

  async mergeSort() {
    await this.sortingVisualizerService.mergeSort(
      this.array.slice(),
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async quickSort() {
    await this.sortingVisualizerService.quickSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async heapSort() {
    await this.sortingVisualizerService.heapSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async bubbleSort() {
    await this.sortingVisualizerService.bubbleSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async insertionSort() {
    await this.sortingVisualizerService.insertionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }
  async selectionSort() {
    await this.sortingVisualizerService.selectionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }
}
