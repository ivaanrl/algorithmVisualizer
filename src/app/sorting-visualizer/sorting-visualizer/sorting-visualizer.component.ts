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
  disableButtons = true;
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
            await this.quickSort();

            break;
          }
          case 'mergeSort': {
            await this.mergeSort();

            break;
          }
          case 'heapSort': {
            await this.heapSort();

            break;
          }
          case 'bubbleSort': {
            await this.bubbleSort();

            break;
          }
          case 'insertionSort': {
            await this.insertionSort();

            break;
          }
          case 'selectionSort': {
            await this.selectionSort();
            break;
          }
          case 'newArray': {
            this.newArray();
            break;
          }
        }
      }
    );
    this.disableButtons = false;
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
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.quickSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
  }

  async heapSort() {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.heapSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
  }

  async bubbleSort() {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.bubbleSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
  }

  async insertionSort() {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.insertionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
  }
  async selectionSort() {
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.selectionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
  }
}
