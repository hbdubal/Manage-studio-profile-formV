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

  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder,public managestudioprofileservice:ManageStudioProfileService) {
    this.managestudioprofile = [];
    this.studioProfileForm = this.fb.group(
      {
        studioName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z0-9 _@$!&]*$')]],
        studioAddress: ['', [Validators.required, Validators.maxLength(250), Validators.pattern('^[A-Za-z0-9 ()&]*$')]],
        studioDesc: ['', [Validators.required, Validators.maxLength(250)]],
        studioEquipment: ['', [Validators.required, Validators.maxLength(1000), Validators.pattern('^[a-zA-Z0-9]*$')]],
        state:['',[Validators.required]],
        city:['', [Validators.required]]
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
    // this.getCountryData();
  }

  /**
   * Validation FormControl
   */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.studioProfileForm.controls;
  }
  // getCountryData() {
  //   this.managestudioprofileservice.getCountriesList().subscribe((data) => {
  //     this.countries = data;
  //     console.log(this.countries);
  //   });
  // }


  getStatebyCountry(event: any) {
    const countryId = event.target.value
    console.log(countryId);
    this.managestudioprofileservice.getStatesByCountry().subscribe((res: any) => {
      console.log(res);
      this.allState = res.filter((data: any) => data.countryId == countryId);
      console.log(this.allState);
    })
  }

  getCityByStateId(event: any) {
    const stateId = event.target.value
    console.log(stateId);
    this.managestudioprofileservice.getCityByState().subscribe((res: any) => {
      console.log(res);
      this.allCity = res.filter((data: any) => data.stateId == stateId);
      console.log(this.allCity);
    })
  }
}

