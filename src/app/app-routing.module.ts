import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer/sorting-visualizer.component';

const routes: Routes = [
  { path: '', redirectTo: '/sortingVisualizer', pathMatch: 'full' },
  { path: 'sortingVisualizer', component: SortingVisualizerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
