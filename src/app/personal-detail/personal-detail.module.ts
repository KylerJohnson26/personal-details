import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsFormComponent } from './personal-detail/details-form/details-form.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsGraphicComponent } from './details-graphic/details-graphic.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonalDetailComponent,
    DetailsFormComponent,
    DetailsGraphicComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PersonalDetailComponent
  ]
})
export class PersonalDetailModule { }
