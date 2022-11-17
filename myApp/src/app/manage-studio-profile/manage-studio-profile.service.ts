import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, Country, State } from './manage-studio-profile.model';
import { Observable } from 'rxjs';

@Injectable()
export class ManageStudioProfileService {
  private countryUrl: string = 'http://localhost:3000/country';
  private stateUrl: string = 'http://localhost:3000/state';
  private cityUrl: string = 'http://localhost:3000/cities';

  constructor(private http:HttpClient) { }
  
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }
  getStatesByCountry(): Observable<State[]> {
    return this.http.get<State[]>(this.stateUrl);
  }

  getCityByState(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }
}
