import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailComponent } from './personal-detail.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsGraphicComponent } from './details-graphic/details-graphic.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailComponent;
  let fixture: ComponentFixture<PersonalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PersonalDetailComponent,
        DetailsFormComponent,
        DetailsGraphicComponent
      ],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
