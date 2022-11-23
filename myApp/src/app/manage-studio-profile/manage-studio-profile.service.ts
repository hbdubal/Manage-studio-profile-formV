import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, Country, State } from './manage-studio-profile.model';
import { Observable } from 'rxjs';

@Injectable()
export class ManageStudioProfileService {
  private countryUrl: string = 'http://localhost:3000/country';
  private stateUrl: string = 'http://localhost:3000/state';
  private cityUrl: string = 'http://localhost:3000/cities';
  private weekdays1Url:string = ' http://localhost:3000/weekdays1';
  private weekdays2Url:string = ' http://localhost:3000/weekdays2';


  constructor(private http:HttpClient) { }
  
  /**
   * 
   * @returns CountryList
   */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  /**
   * 
   * @returns StateList By Country 
   */
  getStatesByCountry(): Observable<State[]> {
    return this.http.get<State[]>(this.stateUrl);
  }

  /**
   * 
   * @returns CityList By State
   */
  getCityByState(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }

  getallWeekdays1():Observable<any>{
    return this.http.get<any>(this.weekdays1Url);
  }
  getallWeekdays2():Observable<any>{
    return this.http.get<any>(this.weekdays2Url);
  }
}
