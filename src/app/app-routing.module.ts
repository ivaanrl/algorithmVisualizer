import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer/sorting-visualizer.component';
import { SearchingVisualizerComponent } from './searching-visualizer/searching-visualizer.component';
import { BasicAlgorithmsVisualizerComponent } from './basic-algorithms-visualizer/basic-algorithms-visualizer.component';
import { CaesarsComponent } from './basic-algorithms-visualizer/caesars/caesars.component';

const routes: Routes = [
  { path: '', redirectTo: '/sortingVisualizer', pathMatch: 'full' },
  { path: 'sortingVisualizer', component: SortingVisualizerComponent },
  { path: 'searchingVisualizer', component: SearchingVisualizerComponent },
  {
    path: 'basicAlgorithmVisualizer',
    component: BasicAlgorithmsVisualizerComponent,
    children: [{ path: 'caesars', component: CaesarsComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
