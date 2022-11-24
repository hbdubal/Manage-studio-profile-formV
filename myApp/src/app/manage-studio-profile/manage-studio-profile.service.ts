import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, Country, State } from './manage-studio-profile.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ManageStudioProfileService {
  private countryUrl: string = 'http://localhost:3000/country';
  private stateUrl: string = 'http://localhost:3000/state';
  private cityUrl: string = 'http://localhost:3000/cities';
  private weekdays1Url:string = ' http://localhost:3000/weekdays1';
  private weekdays2Url:string = ' http://localhost:3000/weekdays2';
  public baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl=environment.baseUrl
  }


  
  /**
   * 
   * @returns CountryList
   */
  getCountries(): Observable<Country[]> {
    const url=this.baseUrl+"location/countries"
    return this.http.get<Country[]>(url);
  }

  /**
   * 
   * @returns StateList By Country 
   */
  getStatesByCountry(): Observable<State[]> {
    const url=this.baseUrl+"location/states"
    return this.http.get<State[]>(url);
  }

  /**
   * 
   * @returns CityList By State
   */
  getCityByState(): Observable<City[]> {
    const url=this.baseUrl+"location/cities"
    return this.http.get<City[]>(url);
  }

  getallWeekdays1():Observable<any>{
    return this.http.get<any>(this.weekdays1Url);
  }
  getallWeekdays2():Observable<any>{
    return this.http.get<any>(this.weekdays2Url);
  }
}
