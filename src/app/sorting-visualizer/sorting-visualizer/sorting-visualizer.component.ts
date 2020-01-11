import { Component, OnInit } from '@angular/core';
import { SortingVisualizerService } from './sorting-visualizer.service';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.scss']
})
export class SortingVisualizerComponent implements OnInit {
  array: number[];
  disableButtons = false;
  disableNewArray = false;

  constructor(private sortingVisualizerService: SortingVisualizerService) {}

  ngOnInit() {
    this.newArray();
  }

  getArrayBarHeight(height) {
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
      arrayBars[i].style.backgroundColor = 'purple';
    }
    this.disableButtons = false;
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
    this.disableNewArray = false;
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
    this.disableNewArray = false;
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
    this.disableNewArray = false;
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
    this.disableNewArray = false;
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
    this.disableNewArray = false;
  }
}
