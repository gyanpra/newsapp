import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8b8191e53d1346a38afe97b18b5af48d";
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8b8191e53d1346a38afe97b18b5af48d";
  sportsNewsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8b8191e53d1346a38afe97b18b5af48d";
  //Science()
  science():Observable<any>{
    return this._http.get(this.scienceApiUrl);
  }
  //sports()
  sports():Observable<any>{
    return this._http.get(this.sportsNewsUrl);
  }

  //trending()
  trending():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  getCarousel():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

}
