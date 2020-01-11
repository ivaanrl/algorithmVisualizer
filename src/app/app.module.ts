import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingVisualizerComponent } from './sorting-visualizer/sorting-visualizer/sorting-visualizer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, SortingVisualizerComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
