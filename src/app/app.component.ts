import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonalDetails } from './personal-details/personal-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-details';

  constructor(
    private snackbar: MatSnackBar
  ) {}

  onDetailAdded(personalDetails: PersonalDetails) {
    this.snackbar.open('Details added!', '', {
      duration: 3000
    });
    console.log(personalDetails);
  }
}
