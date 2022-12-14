import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, Country, ManageStudioProfile, State } from './manage-studio-profile.model';
import { ManageStudioProfileService } from './manage-studio-profile.service';

@Component({
  selector: 'app-manage-studio-profile',
  templateUrl: './manage-studio-profile.component.html',
  styleUrls: ['./manage-studio-profile.component.scss']
})
export class ManageStudioProfileComponent implements OnInit {

  public studioProfileForm: FormGroup;
  public managestudioprofile!: ManageStudioProfile[];
  public isSubmitted: boolean = false;

  public countries!: Country[];
  public allState!: State[];
  public allCity!: City[];
  public weekdays1: any = [];
  public weekdays2: any = [];
  public weekdays1Id: any;
  public weekdays2Id: any;
  public disabled = "false";
  public i: number = 1;
  public hours: number[];
  public hoursValue!: number;

  
  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder, public managestudioprofileservice: ManageStudioProfileService) {
    this.managestudioprofile = [];
    this.hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    this.studioProfileForm = this.fb.group(
      {
        studioName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z0-9 _@$!&]*$')]],
        studioAddress: ['', [Validators.required, Validators.maxLength(250), Validators.pattern('^[A-Za-z0-9 ,-.()&]*$')]],
        studioDesc: ['', [Validators.required, Validators.maxLength(250)]],
        studioEquipment: ['', [Validators.required, Validators.maxLength(1000), Validators.pattern('^[A-Za-z0-9 ,-.()&]*$')]],
        country: ['', Validators.required],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        weekdays1: ['', [Validators.required]],
        weekdays2: ['', [Validators.required]],
        hours1: ['', [Validators.required]],
        hours2: ['', [Validators.required]]
      }
    )
  }

  /**
   * OnClick Submit(SubmitData)
   */
  submit() {
    this.isSubmitted = true;
    console.log(this.studioProfileForm);
  }

  /**
   * Reset Form
   */
  reset() {
    this.studioProfileForm.reset();
  }

  ngOnInit(): void {
    this.getCountryData();
    this.getalldays1();
    this.getalldays2();
  }

  /**
   * Get Country Data
   */
  getCountryData() {
    this.managestudioprofileservice.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  /**
   * 
   * @param event 
   * Get State data by Country
   */
  getStatebyCountry(event: any) {
    const countryId = event.target.value
    this.managestudioprofileservice.getStatesByCountry().subscribe((res: any) => {
      this.allState = res.filter((data: any) => data.countryId == countryId);
    })
  }

  /**
   * 
   * @param event 
   * Get City Data By State
   */
  getCityByStateId(event: any) {
    const stateId = event.target.value
    this.managestudioprofileservice.getCityByState().subscribe((res: any) => {
      this.allCity = res.filter((data: any) => data.stateId == stateId);
    })
  }

  /**
   * Validation FormControl
   */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.studioProfileForm.controls;
  }

  /**
   * Get Days to Days Data
   */
  getalldays1() {
    this.managestudioprofileservice.getallWeekdays1().subscribe((data) => {
      this.weekdays1 = data;
    })
  }
  getalldays2() {
    this.managestudioprofileservice.getallWeekdays2().subscribe((data) => {
      this.weekdays2 = data;
    })
  }
  onweekDays1(weekday1Id: number) {
    this.weekdays1Id = weekday1Id;
  }

  /**
   * 
   * @param hours 
   * Get Time to Time Data
   */
  onhours1(hours: any) {
    this.hoursValue = hours;
  }
}