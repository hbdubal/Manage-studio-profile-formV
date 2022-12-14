import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageStudioProfileComponent } from './manage-studio-profile/manage-studio-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageStudioProfileService } from './manage-studio-profile/manage-studio-profile.service';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
   AppComponent,
    ManageStudioProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [ManageStudioProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
