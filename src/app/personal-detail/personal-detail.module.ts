import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './personal-detail/details-form/details-form.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonalDetailComponent,
    DetailsFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    PersonalDetailComponent
  ]
})
export class PersonalDetailModule { }
