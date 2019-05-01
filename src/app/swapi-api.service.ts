import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiAPIService {
  private apiUrl = "https://swapi.co/api"

  constructor(private http: HttpClient) { }

  fetchPeople() : Observable<any> {
    return this.http.get<any>(this.apiUrl+'/people');
  }

  fetchPlanets() : Observable<any> {
    return this.http.get<any>(this.apiUrl+'/planets');
  }

  fetchStarships() : Observable<any> {
    return this.http.get<any>(this.apiUrl+'/starships');
  }

  fetchSpecies() : Observable<any> {
    return this.http.get<any>(this.apiUrl+'/species');
  }
}
