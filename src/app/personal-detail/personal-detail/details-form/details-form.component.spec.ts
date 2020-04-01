import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFormComponent } from './details-form.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsGraphicComponent } from '../details-graphic/details-graphic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DetailsFormComponent', () => {
  let component: DetailsFormComponent;
  let fixture: ComponentFixture<DetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsFormComponent,
        DetailsGraphicComponent
      ],
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
