import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ManageStudioProfile } from './manage-studio-profile.model';

@Injectable()
export class ManageStudioProfileService {

  private countryUrl: string = 'http://localhost:3000/country';
  private stateUrl: string = 'http://localhost:3000/state';
  private cityUrl: string = 'http://localhost:3000/cities';

  constructor(public http: HttpClient) {
  }
  /**
   * 
   * @returns countryList
   */
  getCountriesList(): Observable<ManageStudioProfile[]> {
    return this.http.get<ManageStudioProfile[]>(this.countryUrl);
  }

  getStatesByCountry(): Observable<ManageStudioProfile[]> {
    return this.http.get<ManageStudioProfile[]>(this.stateUrl);
  }

  getCityByState(): Observable<ManageStudioProfile[]> {
    return this.http.get<ManageStudioProfile[]>(this.cityUrl);
  }
}