import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-algorithms-visualizer',
  templateUrl: './basic-algorithms-visualizer.component.html',
  styleUrls: ['./basic-algorithms-visualizer.component.scss']
})
export class BasicAlgorithmsVisualizerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
