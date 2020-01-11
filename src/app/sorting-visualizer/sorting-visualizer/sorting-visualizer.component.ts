import { Component, OnInit } from '@angular/core';
import { SortingVisualizerService } from './sorting-visualizer.service';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.scss']
})
export class SortingVisualizerComponent implements OnInit {
  array: number[];
  constructor(private sortingVisualizerService: SortingVisualizerService) {}

  ngOnInit() {
    this.newArray();
  }

  getArrayBarHeight(height) {
    return `${height}px`;
  }

  newArray() {
    this.array = this.sortingVisualizerService.newArray();
  }

  mergeSort() {
    this.sortingVisualizerService.mergeSort(
      this.array.slice(),
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  quickSort() {
    this.sortingVisualizerService.quickSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  heapSort() {
    this.sortingVisualizerService.heapSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }

  bubbleSort() {
    this.sortingVisualizerService.bubbleSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
  }
}
