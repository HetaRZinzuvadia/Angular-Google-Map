import { GeojsonDataService } from './geojson-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'Your_api_key'
    }),
    HttpModule
  ],
  providers: [GeojsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
