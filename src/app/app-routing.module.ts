import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailComponent } from './personal-detail/personal-detail/personal-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personal-details' },
  { path: 'personal-details', component: PersonalDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
