import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeojsonDataService {
  // location of geojson file in the server
  private _url: string = 'assets/sample.json';

  constructor(private _http: Http) { }

  getGeoJsonData() {
    return this._http.get(this._url).pipe(map( (response: Response) => response.json()));
  }
}
