import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
 
  public weekdays=["Monday","Tuseday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  selected = "----";
  selectedDay: string = '';

  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder, public managestudioprofileservice: ManageStudioProfileService, public http: HttpClient) {
    this.managestudioprofile = [];
    this.studioProfileForm = this.fb.group(
      {
        studioName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z0-9 _@$!&]*$')]],
        studioAddress: ['', [Validators.required, Validators.maxLength(250), Validators.pattern('^[A-Za-z0-9 ,-.()&]*$')]],
        studioDesc: ['', [Validators.required, Validators.maxLength(250)]],
        studioEquipment: ['', [Validators.required, Validators.maxLength(1000), Validators.pattern('^[A-Za-z0-9 ,-.()&]*$')]],
        country: ['', Validators.required],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]]
      }
    )
  }
  tags = [
    { id: 1, name: 'Laravel' },
    { id: 2, name: 'Codeigniter' },
    { id: 3, name: 'React' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Vue' },
    { id: 7, name: 'JQuery' },
    { id: 8, name: 'Javascript' },
  ];
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

  update(e: any) {
    this.selected=e.target.value;
  }
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(this.selectedDay); 
  }
}

