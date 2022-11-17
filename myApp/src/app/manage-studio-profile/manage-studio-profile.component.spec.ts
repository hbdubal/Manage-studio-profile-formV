import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStudioProfileComponent } from './manage-studio-profile.component';

describe('ManageStudioProfileComponent', () => {
  let component: ManageStudioProfileComponent;
  let fixture: ComponentFixture<ManageStudioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageStudioProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageStudioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
