import { Component, OnInit } from '@angular/core';
import { GeojsonDataService } from './geojson-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 41.49;
  lng: number = -81.69;
  zoom: number = 10;
  geoJson: Object;

  constructor(private _getGeoJsonServive: GeojsonDataService) {}

  getGeoJson() {
    this._getGeoJsonServive.getGeoJsonData()
      .subscribe( (resGeoData)=> {
        this.geoJson= resGeoData;
      });
  }

  ngOnInit(): void {
    this.getGeoJson();
  }
}
