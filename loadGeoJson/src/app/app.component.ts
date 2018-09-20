import { Component, OnInit } from '@angular/core';
import { GeojsonDataService } from './geojson-data.service';
import { MapsAPILoader, AgmDataLayer } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 41.49;
  lng: number = -81.69;
  zoom: number = 12;
  geoJson: Object ;
  // geoJson: Object= '../assets/sample.json';

  constructor(private _getGeoJsonServive: GeojsonDataService) {}

  getGeoJson() {
    this._getGeoJsonServive.getGeoJsonData()
      .subscribe( (resGeoData)=> {
        this.geoJson= resGeoData;
      });
  }

  ngOnInit(): void {
    this.getGeoJson();    

  //   styleFunc( feature ) {
  //   return ({
  //     clickable
  //   });
  // }
  }
}
