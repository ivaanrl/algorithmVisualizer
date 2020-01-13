import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer/sorting-visualizer.component';
import { SearchingVisualizerComponent } from './searching-visualizer/searching-visualizer.component';
import { BasicAlgorithmsVisualizerComponent } from './basic-algorithms-visualizer/basic-algorithms-visualizer.component';
import { CaesarsComponent } from './basic-algorithms-visualizer/caesars/caesars.component';
import { FisherYatesComponent } from './basic-algorithms-visualizer/fisher-yates/fisher-yates.component';
import { GameOfLifeComponent } from './basic-algorithms-visualizer/game-of-life/game-of-life.component';

const routes: Routes = [
  { path: '', redirectTo: '/sortingVisualizer', pathMatch: 'full' },
  { path: 'sortingVisualizer', component: SortingVisualizerComponent },
  { path: 'searchingVisualizer', component: SearchingVisualizerComponent },
  {
    path: 'basicAlgorithmVisualizer',
    component: BasicAlgorithmsVisualizerComponent,
    children: [
      { path: 'caesars', component: CaesarsComponent },
      { path: 'FisherYates', component: FisherYatesComponent },
      { path: 'gameOfLife', component: GameOfLifeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
