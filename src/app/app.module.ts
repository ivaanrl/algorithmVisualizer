import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer/sorting-visualizer.component';
import { HeaderComponent } from './header/header.component';
import { SearchingVisualizerComponent } from './searching-visualizer/searching-visualizer.component';
import { BasicAlgorithmsVisualizerComponent } from './basic-algorithms-visualizer/basic-algorithms-visualizer.component';
import { CaesarsComponent } from './basic-algorithms-visualizer/caesars/caesars.component';
import { FisherYatesComponent } from './basic-algorithms-visualizer/fisher-yates/fisher-yates.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingVisualizerComponent,
    HeaderComponent,
    SearchingVisualizerComponent,
    BasicAlgorithmsVisualizerComponent,
    CaesarsComponent,
    FisherYatesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
