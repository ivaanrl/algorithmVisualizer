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
    this.array = this.sortingVisualizerService.newArray();
    console.log(this.array);
  }
}
