import { Component, OnInit, OnDestroy } from '@angular/core';
import { SortingVisualizerService } from './sorting-visualizer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.scss']
})
export class SortingVisualizerComponent implements OnInit, OnDestroy {
  array: number[];
  disableButtons = false;
  disableNewArray = false;
  sub: Subscription;
  constructor(private sortingVisualizerService: SortingVisualizerService) {}

  async ngOnInit() {
    this.newArray();
    this.sub = this.sortingVisualizerService.algorithmEmitter.subscribe(
      async (event: string) => {
        switch (event) {
          case 'quickSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.quickSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'mergeSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.mergeSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'heapSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.heapSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'bubbleSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.bubbleSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'insertionSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.insertionSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            break;
          }
          case 'selectionSort': {
            this.sortingVisualizerService.buttonSwitchEmitter.emit();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
            await this.selectionSort();
            this.sortingVisualizerService.switchNewArrayEmmiter.emit();
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

    this.sortingVisualizerService.buttonSwitchEmitter.emit();
  }

  async mergeSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.mergeSort(
      this.array.slice(),
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async quickSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.quickSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async heapSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.heapSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async bubbleSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.bubbleSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }

  async insertionSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.insertionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }
  async selectionSort() {
    this.disableButtons = true;
    this.disableNewArray = true;
    await this.sortingVisualizerService.selectionSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
  }
}
