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
  Modal: {
    title: string;
    text: string;
    list: string[];
    nextButtonText: string;
    prevButtonText: string;
    page: number;
    progressBar: number;
  } = {
    title: 'Linear Search',
    text:
      'Linear search is a search method that sequentially checks each element of the array to find the desired value. Worst case time complexity: O(n). How it works:',
    list: [
      'Start from the first element in the array and iterate over every single item.',
      'If the item is found, it returns its position.',
      'If the item is not in the array, it returns -1.'
    ],
    nextButtonText: 'Next page',
    prevButtonText: 'Previous page',
    page: 1,
    progressBar: 16.6
  };
  constructor(
    private searchingVisualizerService: SearchingVisualizerService,
    private disableButtonsService: DisableButtonsService
  ) {}

  async ngOnInit() {
    this.newArray();
    this.searchSub = this.searchingVisualizerService.searchEmitter.subscribe(
      async ([action, searchValue]) => {
        if (searchValue != '') {
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

  restartModal() {
    this.Modal = {
      ...this.Modal,
      title: 'Linear Search',
      text:
        'Linear search is a search method that sequentially checks each element of the array to find the desired value. Worst case time complexity: O(n). How it works:',
      list: [
        'Start from the first element in the array and iterate over every single item.',
        'If the item is found, it returns its position.',
        'If the item is not in the array, it returns -1.'
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
        title: 'Linear Search',
        text:
          'Linear search is a search method that sequentially checks each element of the array to find the desired value. Worst case time complexity: O(n). How it works:',
        list: [
          'Start from the first element in the array and iterate over every single item.',
          'If the item is found, it returns its position.',
          'If the item is not in the array, it returns -1.'
        ],
        progressBar: 16.6
      };
    } else if (this.Modal.page === 2) {
      this.Modal = {
        ...this.Modal,
        title: 'Binary Search',
        text:
          'Binary search is a search algorithm that compares the target value to the middle element of the array, making the search field smaller at every iteration.Worst case time complexity: O(log(n)). Requires the array to be ordered. How it works:',
        list: [
          'Compare the target value with the middle element of the array.',
          'If the target and the middle element matches, the search is over.',
          'If the target is greater than the middle element, call the function recursevely in the top half of the array.',
          'If the target is smaller than the middle element, call the function recursevely in the bottom half of the array.',
          'Repeat all above steps until the search is completed.',
          "Returns the element index if found, or -1 if the element wasn't in the array."
        ],
        progressBar: 33.33
      };
    } else if (this.Modal.page === 3) {
      this.Modal = {
        ...this.Modal,
        title: 'Jump Search',
        text:
          'Jump search is a search algorithm that uses a block to jump, and then applies Linear search to fin the element in a reduced search field. Worst case time complexity: O(sqrt(n)). Requires the array to be ordered. How it works:',
        list: [
          "Defines optimal size of jump. It's been proven that it's sqrt(n), with n being the amount of elements in the array.",
          'Starts the search performing a jump of the defined size.',
          'Compares the target value to the element in the array at the current jump. If it matches, the search is over.',
          'If the target value is greater than the element in the array at the current jump. Perfom another jump.',
          'If the target value is smaller than the element in the array at the current jump. Go back to the previos jump and perform a linear search to find your target value.',
          "Returns the element index if found, or -1 if the element wasn't in the array."
        ],
        progressBar: 50
      };
    } else if (this.Modal.page === 4) {
      this.Modal = {
        ...this.Modal,
        title: 'Interpolation Search',
        text:
          'Interpolation search is an improvevement over Binary search for instances, where the values in a sorted array are uniformly distributed. If elements are uniformly distributed, the time complecity is O(log(log(n)). Worst case time complexit: O(n). Requires the array to be ordered. How it works:',
        list: [
          'Calculates the position to be searched using a known formula. The idea is that it should be a higher value if the element you want to find is high, and a lower value if the target element is low.',
          'If the target element matches the element in the array at the calculated position, the search is over',
          'If the target element is less than the element in the array at the calculated position, calculate the position again, this time using only values from the left of the current calculated position ',
          'If the target element is greater than the element in the array at the calculated position, repeat step above but with values from the right of the curren position.',
          'Repeat all the above steps until the search is over.',
          "Returns the element index if found, or -1 if the element wasn't in the array."
        ],
        progressBar: 66.66
      };
    } else if (this.Modal.page === 5) {
      this.Modal = {
        ...this.Modal,
        title: 'Exponential Search',
        text:
          'Exponential search is a search algorithm that uses sub-arrays of increasing sizes to find the target element. Worst case time complexit: O(log(n)). Requires the array to be ordered. How it works:',
        list: [
          'Start with a sub-array of size 1, compare its last element with the target value.',
          'If the last element of the sub-array is the target value, the search is over.',
          'If the last element of the sub-array is smaller than the target value, continue doing the sabe, but each time double the size of the sub-array (1,2,4,8...).',
          'If the last element of the sub-array is greater than the target value, perform a binary search between i/2 and i, where i is the current size of the sub-array.',
          "Returns the element index if found, or -1 if the element wasn't in the array."
        ],
        progressBar: 83.33
      };
    } else if (this.Modal.page === 6) {
      this.Modal = {
        ...this.Modal,
        title: 'Fibonacci Search',
        text:
          'Fibonacci search is a search algorithm that divides the array in part with sizes of consecutive Fibonacci numbers. Worst case time complexit: O(log(n)). Requires the array to be ordered. How it works:',
        list: [
          'Find the smallest Fibonacci number greater than or equal to the size of the array. Define that Fibonacci number as FibM',
          'Define fib1 and fib2 as the two preceding Fibonacci numbers to fibM in the Fiboacci sequence.',
          'While the array has elements to be inspected do: ',
          'Compare the target value with the las element of the range covered by fib2',
          'If it matched the value, the search is over.',
          'If the target is smaller than the element, move the three Fibonacci variables two values down in the Fibonacci sequence.',
          'If the target is greater than the element, move the three Fibonacci variables one value down in the Fibonacci sequence, and start an offset in the array at the current position.',
          'If there is a single element remaining for comparison becaause fibM = 1, compare the target value with that remaining element.',
          "Returns the element index if found, or -1 if the element wasn't in the array."
        ],
        progressBar: 100
      };
    }
  }
}
