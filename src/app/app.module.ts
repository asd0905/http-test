import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    HttpClientModule,
    HttpClient
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';

@NgModule({
  declarations: [
    SimpleHttpComponent,
    AppComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    HttpClientModule
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
