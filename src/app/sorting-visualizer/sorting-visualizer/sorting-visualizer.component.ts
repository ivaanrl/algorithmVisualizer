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
  Modal: {
    title: string;
    text: string;
    list: string[];
    nextButtonText: string;
    prevButtonText: string;
    page: number;
    progressBar: number;
  } = {
    title: 'Merge Sort',
    text:
      'Merge sort is an efficient, divide and conquer, comparison-based sorting algorithm. Most implementations produce a stable sort. How it works:',
    list: [
      'Divide the unsorted array into array, until each subarray contains only one element',
      'Since an array of one element is inherently sorted, continue by repeteadly merging the array.',
      'Compare the values of every array to sort while merging.',
      'The result is the sorted array.'
    ],
    nextButtonText: 'Next page',
    prevButtonText: 'Previous page',
    page: 1,
    progressBar: 16.6
  };

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
    this.disableButtonsService.buttonSwitchEmitter.emit();
    this.disableButtonsService.switchNewArrayEmmiter.emit();
    await this.sortingVisualizerService.mergeSort(
      this.array,
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    this.disableButtons = false;
    this.disableButtonsService.switchNewArrayEmmiter.emit();
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

  restartModal() {
    this.Modal = {
      ...this.Modal,
      title: 'Merge Sort',
      text:
        'Merge sort is an efficient, divide and conquer, comparison-based sorting algorithm. Most implementations produce a stable sort. How it works:',
      list: [
        'Divide the unsorted array into array, until each subarray contains only one element',
        'Since an array of one element is inherently sorted, continue by repeteadly merging the array.',
        'Compare the values of every array to sort while merging.',
        'The result is the sorted array.'
      ],
      page: 1,
      progressBar: 16.6
    };
  }

  getProgressWidth() {
    return `${this.Modal.progressBar}%`;
  }

  onModalButtonClick(action: string) {
    if (action === 'nextPage') {
      this.Modal.page += 1;
    } else {
      this.Modal.page -= 1;
    }
    if (this.Modal.page === 1) {
      this.Modal = {
        ...this.Modal,
        title: 'Merge Sort',
        text:
          'Merge sort is an efficient, divide and conquer, comparison-based sorting algorithm. Most implementations produce a stable sort. How it works:',
        list: [
          'Divide the unsorted array into array, until each subarray contains only one element',
          'Since an array of one element is inherently sorted, continue by repeteadly merging the array.',
          'Compare the values of every array to sort while merging.',
          'The result is the sorted array.'
        ],
        progressBar: 16.6
      };
    } else if (this.Modal.page === 2) {
      this.Modal = {
        ...this.Modal,
        title: 'Quick Sort',
        text:
          'Quick sort is an efficient comparison-based sorting algorithm. When implemented well, it can be about two or three times faster than his main competitors, Merge sort and Heap sort. How it works:',
        list: [
          "Pick an element from the array, that's your pivot",
          'Partitioning: Reorded the array so that all elements with values less than the pivot come before the pivot, while every element with values greater than the pivot come after it.',
          'After partitioning, the pivot is in its final position ',
          'Recursevely apply all the above steps to the two sub-arrays created in the last step.'
        ],
        progressBar: 33.33
      };
    } else if (this.Modal.page === 3) {
      this.Modal = {
        ...this.Modal,
        title: 'Heap Sort',
        text:
          'Heap sort is a comparison-based sorting algorithm. It can be thought as an improve version of Selection sort. How it works:',
        list: [
          'Build a max heap from the input data. This is done in O(n) operations',
          ' At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of tree.',
          'Recursevely apply all the above steps while the size of heap is greater than 1'
        ],
        progressBar: 50
      };
    } else if (this.Modal.page === 4) {
      this.Modal = {
        ...this.Modal,
        title: 'Bubble Sort',
        text:
          'Bubble sort is a simple sorting algorithm that repeteadly steps through the list. Worst case complexity: O(n*n). How it works:',
        list: [
          "Starting by the first element, it iterates through the whole array comparing adjacent elements and swapping them if they're in the wrong order",
          'At the end of each iteration, the largest element is in the last spot.',
          'Repeat all the above steps until the array is sorted.'
        ],
        progressBar: 66.66
      };
    } else if (this.Modal.page === 5) {
      this.Modal = {
        ...this.Modal,
        title: 'Insertion Sort',
        text:
          'Insertion sort is a simple sorting that builds the final sorted array one item at a time.It is much less efficient on large lists than other algorithms like Quick sort, Merge sort, or Heap sort. However, its implementation is simpler, and it can be efficient for small data sets. Worst time complexity: O(n*n). How it works:',
        list: [
          'Define a function designed to insert a value into a sorted sequence at the beginning of an array.',
          'Start by the leftmost not sorted element.',
          'It operates by beginning at the end of the array and switching each element want place to the right until the element is in the correct position',
          'Repeat all the above steps until the array is sorted.'
        ],
        progressBar: 83.33
      };
    } else if (this.Modal.page === 6) {
      this.Modal = {
        ...this.Modal,
        title: 'Selection Sort',
        text:
          "Selection sort is an in-place comparison sort algorithm. It's not efficient on larger lists and generally performs worse than the similar Insertion sort. Worst case time complexity: O(n*n) How it works:",
        list: [
          'Find the minimum element in the array.',
          'Place it at the beggining, that item is in place and would not be moved again.',
          'Repeat all the above steps until the array is sorted.'
        ],
        progressBar: 100
      };
    }
  }
}
