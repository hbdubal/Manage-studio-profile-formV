import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageStudioProfile } from './manage-studio-profile.model';

@Component({
  selector: 'app-manage-studio-profile',
  templateUrl: './manage-studio-profile.component.html',
  styleUrls: ['./manage-studio-profile.component.scss']
})
export class ManageStudioProfileComponent implements OnInit {

  public studioProfileForm: FormGroup;
  public managestudioprofile!: ManageStudioProfile[];
  public isSubmitted: boolean = false;


  /**
   * 
   * @param fb 
   */
  constructor(private fb: FormBuilder) {
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
  }

  /**
   * Validation FormControl
   */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.studioProfileForm.controls;
  }
}
