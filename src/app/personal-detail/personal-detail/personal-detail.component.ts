import { Component } from '@angular/core';
import { PersonalDetails } from './personal-details.model';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class PersonalDetailComponent {

  constructor(
    private snackbar: MatSnackBar
  ) {}

  onDetailsAdded(personalDetails: PersonalDetails) {
    this.snackbar.open('Details added!', '', {
      duration: 3000
    });
    console.log(personalDetails);
  }

}
